dayjs.extend(window.dayjs_plugin_weekOfYear);

console.log(dayjs().week(12));

import { weeklyCalendar } from "./testing.js";

let calendar;

// dayjs().format()

weeklyCalendar(7, 12, 2);
