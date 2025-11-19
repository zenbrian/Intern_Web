type Section = 'work' | 'learn' | 'self'

export default function SectionContent({ section }: { section: Section }) {
  if (section === 'work') {
    return (
      <div className="section-content">
        <h3>一、工作環境介紹</h3>
        <h4>機構簡介</h4>
        <p>
          資策會數位轉型研究院（數轉院）致力於推動臺灣企業的數位轉型，提供從技術研發到應用落地的全方位支援。
          實習生在此環境中，與專業的研發團隊共同協作，參與實際專案，並在同事的指導下，透過實作中學習，累積職場經驗。
        </p>
        <h4>實習環境特色</h4>
        <p>
          實習期間涵蓋生成式 AI 應用的各個層面，從前期的技術爬蒐與應用分析、原型開發，到後期的系統整合與測試部署，提供了豐富且紮實的實戰機會。
        </p>
        <h4>學習機會</h4>
        <ul>
          <li>參與實際的生成式 AI 專案開發</li>
          <li>與專業研發團隊協作學習</li>
          <li>從技術研究到系統部署的完整流程體驗</li>
          <li>跨部門協作與技術交流機會</li>
        </ul>

        <hr />

        <h3>二、工作詳述</h3>
        <h4>主要工作項目</h4>
        <ul>
          <li>
            協助執行生成式 AI 相關資料與應用的爬蒐：
            參與生成式 AI 的研究與實作，探索應用場景可能性，定期評估最新工具與技術（ChatGPT、Claude、Stable Diffusion 等），
            並記錄使用經驗回饋團隊。
          </li>
          <li>
            協助開發生成式 AI 應用：
            參與文本生成、圖像生成、語音合成等應用的原型設計與功能實作，
            涵蓋 LLM 開發（Llama、DeepSeek）、圖片生成（Stable Diffusion）、TTS/Speech 合成等。
          </li>
          <li>
            進行系統整合與 API 開發：
            將模型包裝為 RESTful API，並使用 DockerHub 進行服務部署，提升穩定性與擴展性。
          </li>
          <li>
            撰寫技術文件與測試案例：
            建立可維運的技術文件與測試設計，確保專案品質。
          </li>
          <li>
            跨部門協作與技術提案：
            進行技術簡報、需求討論，提出適合的生成式 AI 解決方案。
          </li>
        </ul>

        <h4>技術工具掌握</h4>
        <ul>
          <li>
            資料庫技術：
            向量資料庫（Chroma、Pinecone）、圖形資料庫（Neo4j）
          </li>
          <li>
            開發工具：
            Python、Git/GitHub、FastAPI、Docker
          </li>
          <li>
            AI 框架：
            LangChain 整合、LLM 元件開發
          </li>
        </ul>

        <hr />

        <h3>三、實習期間完成之進度</h3>
        <h4>學習歷程</h4>
        <p>
          初期參與 AI 圖像生成相關專案，熟悉 Stable Diffusion；後續在同事指導下轉向 LLM 應用開發，學習 LangChain 並深入其核心元件與應用。
        </p>
        <h4>核心技術掌握</h4>
        <ul>
          <li>Chat Models（多輪對話處理）</li>
          <li>Prompts（提示語設計）</li>
          <li>Chains（鏈式流程建構）</li>
          <li>Memory（對話記憶機制）</li>
          <li>Agents（智能代理開發）</li>
          <li>Retrieval（資訊檢索整合）</li>
        </ul>
        <h4>學習成果展現</h4>
        <p>
          從研究測試進階到實際應用開發，完成從基礎概念學習到專案落地的完整歷程，具備獨立開發 LLM 應用的基礎能力。
        </p>

        <hr />

        <h3>四、工作當中扮演的角色</h3>
        <h4>主要角色職責</h4>
        <ul>
          <li>
            技術協作者：參與技術討論、系統設計、模組開發到測試部署，提供可行建議協助專案推進。
          </li>
          <li>
            資料爬蒐者：追蹤開源專案與新技術，試用並回報實測結果，支援團隊決策。
          </li>
          <li>
            文件與報告整理者：彙整設計流程、研究成果與進度，產出對外報告與簡報資料。
          </li>
        </ul>
        <h4>角色價值貢獻</h4>
        <ul>
          <li>提供新技術評估與實測回饋</li>
          <li>協助專案文件整理與知識管理</li>
          <li>參與跨部門溝通與技術交流</li>
          <li>支援團隊決策制定與方向規劃</li>
        </ul>
      </div>
    )
  }

  if (section === 'learn') {
    return (
      <div className="section-content">
        <p>此區將展示 LangChain、LLM 記帳機器人、LandScape 等學習成果（稍後補齊）。</p>
      </div>
    )
  }

  return (
    <div className="section-content">
      <p>此區將展示實習經歷概述、技術成長、問題解決反思與未來展望（稍後補齊）。</p>
    </div>
  )
}
