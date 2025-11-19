import { useEffect } from 'react'
import './App.css'
import Window from './components/Window'
import SectionContent from './components/SectionContent'
import Taskbar from './components/Taskbar'

export default function App() {
  // AOS 初始化（使用 index.html 載入的全域腳本）
  useEffect(() => {
    const aos = (window as any).AOS
    if (aos?.init) {
      aos.init({
        once: true,
        duration: 600,
        easing: 'ease-out-cubic',
        offset: 40,
      })
      // 確保圖片資源載入後也會 refresh
      const t = setTimeout(() => aos.refreshHard?.(), 300)
      return () => clearTimeout(t)
    }
  }, [])

  const handleJump = (targetId: 'work' | 'learn' | 'self') => {
    const map: Record<typeof targetId, string> = {
      work: 'section-work',
      learn: 'section-learn',
      self: 'section-self',
    }
    const el = document.getElementById(map[targetId])
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="xp-desktop">
      {/* Full-screen sections with scroll snapping */}
      <div className="xp-sections">
        {/* 工作內容 */}
        <section id="section-work" className="xp-section" data-aos="fade-up">
          <div className="xp-section-inner">
            <Window title="工作內容" width={1000}>
              <div className="window-content-scroll">
                <SectionContent section="work" />
              </div>
            </Window>
          </div>
        </section>

        {/* 學習 */}
        <section id="section-learn" className="xp-section" data-aos="fade-up">
          <div className="xp-section-inner">
            <Window title="學習" width={1000} >
              <div className="window-content-scroll">
                <SectionContent section="learn" />
              </div>
            </Window>
          </div>
        </section>

        {/* 自我評估與心得感想 */}
        <section id="section-self" className="xp-section" data-aos="fade-up">
          <div className="xp-section-inner">
            <Window title="自我評估及心得感想" width={1000}>
              <div className="window-content-scroll">
                <SectionContent section="self" />
              </div>
            </Window>
          </div>
        </section>
      </div>

      {/* XP 風格工具列（固定底部，含三個 icon 可跳轉至對應主題） */}
      <Taskbar onJump={handleJump} />
    </div>
  )
}
