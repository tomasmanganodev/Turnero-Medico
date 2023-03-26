dayjs.extend(window.dayjs_plugin_weekOfYear);
import { schedule } from "./schedules.js";

let d = dayjs("1990").get("year");
console.log(d);

const userSchedule = new schedule(7, 12, 4);

userSchedule.weeklyCalendar();

for (let i = 0; i < 7; i++) {
  //const N = "day_" + i.toString();
  let day = document.getElementById("day_" + i.toString());

  let d = dayjs().day(i);
  day.textContent += " " + d.get("date").toString();
  console.log(d.get("date"));
  //console.log(w.set("day", i));
}
