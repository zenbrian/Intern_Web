import { useState } from 'react'

type DesktopIconProps = {
  label: string
  onOpen: () => void
}

/**
 * Windows XP 風格桌面圖標（簡化版）
 * - 單擊選取、雙擊開啟
 * - 鍵盤 Enter 開啟
 */
export default function DesktopIcon({ label, onOpen }: DesktopIconProps) {
  const [selected, setSelected] = useState(false)

  return (
    <div
      className={`desktop-icon${selected ? ' selected' : ''}`}
      role="button"
      tabIndex={0}
      title={label}
      onClick={() => setSelected(true)}
      onDoubleClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === 'Enter') onOpen()
      }}
    >
      <div className="desktop-icon__thumb" aria-hidden>📄</div>
      <div className="desktop-icon__label">{label}</div>
    </div>
  )
}
