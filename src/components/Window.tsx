import { useEffect, useState, type PropsWithChildren } from 'react'

type WindowProps = PropsWithChildren<{
  title: string
  defaultCollapsed?: boolean
  width?: number
  onClose?: () => void
}>

/**
 * XP.css 視窗元件
 * - 使用 XP.css 的 className：window、title-bar、title-bar-text、title-bar-controls、window-body
 * - 提供收合（最小化）功能
 * - 追加 Close 行為（可選）：透過 onClose 關閉視窗（由父層管理掛載）
 */
export default function Window({
  title,
  defaultCollapsed = false,
  width = 1000,
  onClose,
  children,
}: WindowProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)')
    const handler = () => setIsMobile(mq.matches)
    handler()
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return (
    <div className="window" style={{ width: isMobile ? '100%' : `${width}px` }}>
      <div
        className="title-bar"
        onMouseDown={(e) => {
          // 避免在拖曳時意外選中文本
          e.stopPropagation()
        }}
      >
        <div className="title-bar-text">{title}</div>
        <div className="title-bar-controls">
          {/* 模擬最小化：收合內容區塊 */}
          <button
            aria-label="Minimize"
            onClick={(e) => {
              e.stopPropagation()
            }}
          />
          {/* 保留外觀以符合 XP.css（不實作最大化） */}
          <button aria-label="Maximize" />
          {/* 關閉交由父層控制（卸載/隱藏視窗） */}
          <button
            aria-label="Close"
            onClick={(e) => {
              e.stopPropagation()
              if (onClose) onClose()
            }}
          />
        </div>
      </div>
      <div className="window-body" style={{ padding: 0 }}>
        {!collapsed && children}
      </div>
    </div>
  )
}
