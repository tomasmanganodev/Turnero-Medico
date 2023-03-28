dayjs.extend(window.dayjs_plugin_weekOfYear);
import { schedule } from "./schedules.js";

const A = dayjs();

const calendarDates = {
  day: dayjs().day(),
  date: dayjs().date(),
  week: dayjs().week(),
  month: dayjs().month(),
  year: dayjs().year(),
};

console.log(calendarDates);

const userSchedule = new schedule(7, 12, 4);

userSchedule.weeklyCalendar();

const lastArrow = document.getElementById("buttonLastWeek");
const nextArrow = document.getElementById("buttonNextWeek");
nextArrow.addEventListener("click", () => {
  calendarDates.week++;
  console.log(A.week(calendarDates.week));
  setWeeklyDays();
});

lastArrow.addEventListener("click", () => {
  calendarDates.week--;
  console.log(A.week(calendarDates.week));
  setWeeklyDays();
});

function setWeeklyDays() {
  const getWeek = calendarDates.week;
  let d = dayjs().week(getWeek);
  for (let i = 0; i < 7; i++) {
    d.day(i);
    console.log(d.day(i).get("date"));
    let day = document.getElementById("day_" + i.toString() + "_date");
    day.textContent = d.day(i).get("date").toString();
  }
}

userSchedule.setDays();
setWeeklyDays();
//function setNextWeek() {}
