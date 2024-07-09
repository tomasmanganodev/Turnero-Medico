dayjs.extend(window.dayjs_plugin_weekOfYear);

export  async function setWeeklyDays(week, year) {
 
    let date_week = dayjs().year(year).week(week);
  
    for (let i = 0; i < 7; i++) {
      date_week.day(i);
      let day = document.getElementById("day_" + i.toString() + "_date");
      day.textContent = date_week.day(i).get("date").toString();
    }
  }
  