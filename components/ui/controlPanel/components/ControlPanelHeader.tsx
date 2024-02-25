import { CiCalendar } from "react-icons/ci";

export function ControlPanelHeader() {
  return (
    <article className="header">
      <div className="user-details">
        <img src={"profile-pic.jpg"} />
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
