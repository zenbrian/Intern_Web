import { useRef, useState, useEffect, type PropsWithChildren, type CSSProperties } from 'react'

type DraggableWrapperProps = PropsWithChildren<{
  defaultPosition?: { x: number; y: number }
  zIndexBase?: number
  responsiveMobileStack?: boolean
}>

let globalZ = 100

/**
 * 輕量 draggable（無額外依賴）
 * - 只有拖曳標題列（.title-bar）才會移動
 * - 點擊自動置頂（z-index 疊放）
 * - 邊界限制在視窗可視範圍內
 * - RWD：在小螢幕（<=768px）時自動改為「非拖曳、直向堆疊」
 */
export default function DraggableWrapper({
  children,
  defaultPosition = { x: 80, y: 80 },
  zIndexBase = 1,
  responsiveMobileStack = true,
}: DraggableWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState(defaultPosition)
  const [isDragging, setIsDragging] = useState(false)
  const [z, setZ] = useState(zIndexBase)
  const [isMobile, setIsMobile] = useState(false)

  // 偵測小螢幕
  useEffect(() => {
    if (!responsiveMobileStack) return
    const mq = window.matchMedia('(max-width: 768px)')
    const handler = () => setIsMobile(mq.matches)
    handler()
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [responsiveMobileStack])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let startX = 0
    let startY = 0
    let offsetX = 0
    let offsetY = 0

    const onPointerDown = (e: PointerEvent) => {
      if (isMobile) return // 小螢幕停用拖曳
      // 僅允許從 XP 標題列開始拖曳
      if (!(e.target instanceof Element)) return
      const handle = e.target.closest('.title-bar')
      if (!handle) return
      // 若點擊在標題列控制區，略過拖曳（避免與按鈕點擊衝突）
      if (e.target instanceof Element && e.target.closest('.title-bar-controls')) return

      // 置頂
      setZ(++globalZ)

      // 設定拖曳參數
      startX = e.clientX
      startY = e.clientY
      offsetX = startX - pos.x
      offsetY = startY - pos.y
      setIsDragging(true)
      el.setPointerCapture(e.pointerId)
    }

    const onPointerMove = (e: PointerEvent) => {
      if (isMobile) return // 小螢幕停用拖曳
      if (!isDragging) return
      const node = ref.current
      if (!node) return

      const rect = node.getBoundingClientRect()
      const viewportW = window.innerWidth
      const viewportH = window.innerHeight

      let nextX = e.clientX - offsetX
      let nextY = e.clientY - offsetY

      // 邊界限制
      const maxX = Math.max(0, viewportW - rect.width)
      const maxY = Math.max(0, viewportH - rect.height)
      if (nextX < 0) nextX = 0
      if (nextY < 0) nextY = 0
      if (nextX > maxX) nextX = maxX
      if (nextY > maxY) nextY = maxY

      setPos({ x: nextX, y: nextY })
    }

    const onPointerUp = (e: PointerEvent) => {
      if (!isDragging) return
      setIsDragging(false)
      try {
        el.releasePointerCapture(e.pointerId)
      } catch {
        // ignore
      }
    }

    el.addEventListener('pointerdown', onPointerDown)
    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', onPointerUp)
    return () => {
      el.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', onPointerUp)
    }
  }, [isDragging, pos.x, pos.y, isMobile])

  const baseStyle: CSSProperties = isMobile
    ? {
        position: 'relative',
        transform: 'none',
        zIndex: 1,
        cursor: 'default',
        userSelect: 'none',
        touchAction: 'auto',
        width: '100%',
        margin: '8px 12px',
      }
    : {
        position: 'absolute',
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        zIndex: z,
        cursor: isDragging ? 'grabbing' : 'default',
        userSelect: 'none',
        touchAction: 'none',
      }

  return (
    <div
      ref={ref}
      className="xp-draggable"
      style={baseStyle}
      onMouseDown={() => !isMobile && setZ(++globalZ)}
    >
      {children}
    </div>
  )
}
