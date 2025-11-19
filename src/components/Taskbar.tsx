type TaskbarProps = {
  onJump: (targetId: 'work' | 'learn' | 'self') => void
}

export default function Taskbar({ onJump }: TaskbarProps) {
  return (
    <div className="xp-taskbar" role="navigation" aria-label="Windows XP taskbar">
      <div className="xp-taskbar__inner">
        <button className="xp-start-button" type="button" title="Start" aria-label="Open Start menu">
          <img className="xp-start-button__logo" src="public/images/start_button.png" alt="" aria-hidden />
          <span className="xp-start-button__label">Start</span>
        </button>

        <button className="taskbar-icon" onClick={() => onJump('work')} title="工作內容">
          <span className="taskbar-icon__thumb" aria-hidden>📄</span>
          <span className="taskbar-icon__label">工作內容</span>
        </button>
        <button className="taskbar-icon" onClick={() => onJump('learn')} title="學習">
          <span className="taskbar-icon__thumb" aria-hidden>📘</span>
          <span className="taskbar-icon__label">學習</span>
        </button>
        <button className="taskbar-icon" onClick={() => onJump('self')} title="自我評估及心得感想">
          <span className="taskbar-icon__thumb" aria-hidden>📝</span>
          <span className="taskbar-icon__label">自我評估及心得感想</span>
        </button>
      </div>
    </div>
  )
}
