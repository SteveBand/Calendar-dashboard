import moment from "moment";
import { tasks } from "./utils";
import { start } from "repl";
export function MainviewHours() {
  function getHours() {
    const hoursInDay = [];
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    for (let i = 6; i < 24; i++) {
      const hour = new Date(startOfDay);
      hour.setHours(i);
      hoursInDay.push(hour);
    }
    return hoursInDay;
  }

  const hours = getHours();
  return (
    <section className="mainview-hours-wrapper">
      <section className="scheduale-grid">
        {hours.map((hour, index) => {
          return (
            <article
              className="row"
              date-time={`${hour.getHours()}`}
              key={hour.getTime()}
            >
              <div className="time-label">{moment(hour).format("h a")}</div>
            </article>
          );
        })}
        {tasks.map((el, index) => {
          const startDate = new Date(el.startDate);
          const endDate = new Date(el.endDate);
          const height = endDate.getHours() - startDate.getHours();
          const top = startDate.getHours() - 6;
          console.log(top);
          return (
            <div
              className="task-container"
              style={{
                backgroundColor: el.color,
                height: `${height * 100}px`,
                top: `${top * 100}px`,
                left: "50px",
              }}
              key={index}
            >
              {el.content}
            </div>
          );
        })}
      </section>
    </section>
  );
}
