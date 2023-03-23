dayjs.extend(window.dayjs_plugin_weekOfYear);

console.log(dayjs().week(12));

import { schedule } from "./schedules.js";

const userSchedule = new schedule(7, 12, 1);

userSchedule.weeklyCalendar();

/*import { weeklyCalendar } from "./testing.js";

let calendar;

// dayjs().format()

weeklyCalendar(7, 12, 2);*/
