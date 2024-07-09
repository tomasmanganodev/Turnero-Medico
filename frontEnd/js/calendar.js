dayjs.extend(window.dayjs_plugin_weekOfYear);
import { getData, postData } from "./fetch/postGet.js";
import { schedule } from "./schedules.js";
import { setMedicDom, getMedic } from "./fetch/medics.js";
import { postConsult, getConsults } from "./fetch/consult.js";
import { setWeeklyDays } from "./setweekdays.js";



const A = dayjs();
const medic ={
  id: 1,
};

const calendarDates = {
  day: dayjs().day(),
  date: dayjs().date(),
  week: dayjs().week(),
  month: dayjs().month(),
  year: dayjs().year(),
};

const userSchedule = new schedule(7, 12, 4);
userSchedule.weeklyCalendar();

const lastArrow = document.getElementById("buttonLastWeek");
const nextArrow = document.getElementById("buttonNextWeek");
const changeDate = document.getElementById("buttonchangeDate");
nextArrow.addEventListener("click", async () => {
  calendarDates.week++;
  const constweer = await getConsults(medic.id, dayjs().year(calendarDates.year).week(calendarDates.week).day(0).format("YYYY-MM-DD"), 
  dayjs().year(calendarDates.year).week(calendarDates.week).day(6).format("YYYY-MM-DD"));
  setWeeklyDays(calendarDates.week, calendarDates.year);
  console.log (constweer);
  userSchedule.drawTurns(constweer);
});

lastArrow.addEventListener("click", async() => {
  
  calendarDates.week--;
  const constweer = await getConsults(medic.id, dayjs().year(calendarDates.year).week(calendarDates.week).day(0).format("YYYY-MM-DD"), 
  dayjs().year(calendarDates.year).week(calendarDates.week).day(6).format("YYYY-MM-DD"));
  setWeeklyDays(calendarDates.week, calendarDates.year);
  userSchedule.drawTurns(constweer);
});
changeDate.addEventListener("click",async () =>{
  let fechaSel = document.getElementById('buttonWeek').value;
  calendarDates.week = dayjs(fechaSel).week();
  calendarDates.year = dayjs(fechaSel).year();
  const constweer = await getConsults(medic.id, dayjs().year(calendarDates.year).week(calendarDates.week).day(0).format("YYYY-MM-DD"), 
  dayjs().year(calendarDates.year).week(calendarDates.week).day(6).format("YYYY-MM-DD"));
  setWeeklyDays(calendarDates.week, calendarDates.year);
  userSchedule.drawTurns(constweer);
})






// JavaScript for Accordion
const accordionItems = document.querySelectorAll(".accordionItem");

// Add click event listener to each accordion header

accordionItems.forEach((item) => {
  item.querySelector(".buttonMenu").addEventListener("click", () => {
    // Toggle the active class on the clicked accordion item
    item.classList.toggle("active");

    // Toggle the display of accordion content
    const accordionContent = item.querySelector(".accordionContent");
    accordionContent.style.display =
      accordionContent.style.display === "block" ? "none" : "block";
  });
});

userSchedule.setDays();
setWeeklyDays(calendarDates.week, calendarDates.year);
setMedicDom();
postConsult();

//A parte  y pasar a funcion luego
const doc_id = document.getElementById("selectMed");
doc_id.addEventListener("change", (event) => {
  let selectedValue = event.target.value;
  console.log(selectedValue);
});


const listTurn = await getConsults(medic.id, dayjs().year(calendarDates.year).week(calendarDates.week).day(0).format("YYYY-MM-DD"), 
dayjs().year(calendarDates.year).week(calendarDates.week).day(6).format("YYYY-MM-DD"));
userSchedule.drawTurns(listTurn);

var Calendar = tui.Calendar;

    var calendar = new Calendar('#calendar', {
      defaultView: 'week',
      taskView: true,
      scheduleView: ['time'],
      template: {
        weekDayname: function(dayname) {
          return `<span class="calendar-week-dayname-name">${dayname.label}</span>`;
        }
      }
    });