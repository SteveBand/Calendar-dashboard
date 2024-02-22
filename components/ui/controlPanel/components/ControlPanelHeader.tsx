import { CiCalendar } from "react-icons/ci";

export function ControlPanelHeader() {
  const src =
    "https://lh3.googleusercontent.com/proxy/Gu01_6anu5mxmcp7a-6xs5gtX_MqDDf5MaI50C1rUzuP_8jIR0nQYoLj4OPdKlDLVKS-Kk7aHdxaa7EjlhWow6Okvq-tEsXU0zRX-UaH0JsYGvULB47qwmNMaksD7SDU_wWl5cjYUxE_ZlqdTDZuX3WTSSa2VA";
  return (
    <article className="header">
      <div className="user-details">
        <img src={src} />
        <div className="user-info">
          <h6>Steve Bandarker</h6>
          <p>Software Engineer</p>
        </div>
      </div>
      <button className="notifications-button">
        <CiCalendar className="icon" />
        <p className="notifications-number">6</p>
      </button>
    </article>
  );
}
