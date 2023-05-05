dayjs.extend(window.dayjs_plugin_weekOfYear);
import { getData, postData } from "./fetch/postGet.js";
import { schedule } from "./schedules.js";
import { setMedicDom, getMedic } from "./fetch/medics.js";
import { postConsult, getConsults } from "./fetch/consult.js";

const A = dayjs();

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
setWeeklyDays();
//function setNextWeek() {}

/*
async function getMedic() {
  const API_MEDIC = "http://localhost:3333/admin/list/medics";
  const listMedic = await getData(API_MEDIC);
  console.log(listMedic.list);
  return listMedic.list;
}

async function setMedicDom() {
  const medicSelect = document.getElementById("selectMed");
  const list = await getMedic();

  for (const option of list) {
    const medicOption = document.createElement("option");
    medicSelect.appendChild(medicOption);
    medicOption.textContent = [option.first_name, option.last_name].join(" ");
    medicOption.value = option.id;
  }
}

async function postConsult() {
  const FormAddTurn = document.getElementById("FormAddTurn");
  const CONSTUL_API_URL = "http://localhost:3333/addConsult";
  const doc_id = document.getElementById("selectMed");

  FormAddTurn.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(FormAddTurn);
    formData.append("medic", doc_id.value);
    const data = Object.fromEntries(formData);
    console.log(data);
    postData(CONSTUL_API_URL, data);
  });
}
*/
setMedicDom();
postConsult();

//A parte  y pasar a funcion luego
const doc_id = document.getElementById("selectMed");
doc_id.addEventListener("change", (event) => {
  let selectedValue = event.target.value;
  console.log(selectedValue);
});
/*
async function getConsults(id_medic, date_start) {
  const API_CONSULTS = "http://localhost:3333/getConsultWeek";
  const data = {
    medic: id_medic,
    date_start: date_start,
  };
  //console.log(data);
  const a = await postData(API_CONSULTS, data);
  console.log(a.consults);
}*/

getConsults(5, dayjs().week(calendarDates.week).day(0).format("YYYY/MM/DD"));
