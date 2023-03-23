const days = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
];
const calendar = document.getElementById("calendar");

//Función para graficar los turnos y dias del calendario
function weeklyCalendarDraw(calendarCol, calendarTable) {
  for (let i = 0; i < calendarCol; i++) {
    let calendarRow = document.createElement("tr");
    calendarRow.classList.add("calRow");
    calendarTable.appendChild(calendarRow);

    for (let j = 0; j < 7; j++) {
      let calendarCell = document.createElement("td");
      calendarCell.classList.add("calCell");
      calendarRow.appendChild(calendarCell);
      if (i === 0) {
        calendarCell.textContent = days[j];
      } else {
        calendarCell.classList.add("turn");
      }
    }
  }
}
//Función para grafucar los horarios y el medico seleccionado
function weeklyCalendarHourDraw(calendarCol, calendarTable) {
  for (let i = 0; i < calendarCol; i++) {
    let calendarRow = document.createElement("tr");
    calendarRow.classList.add("calRow");
    calendarTable.appendChild(calendarRow);

    let calendarCell = document.createElement("td");
    calendarCell.classList.add("hourCell");
    calendarRow.appendChild(calendarCell);
  }
}

export function weeklyCalendar(initialHour, lastHour, durationTurns) {
  let calendarColumns = (lastHour - initialHour) * durationTurns + 1;
  let calendarTable = document.createElement("table");
  let hourTable = document.createElement("table");
  calendarTable.id = "calTable";
  hourTable.id = "hourTable";
  calendar.appendChild(hourTable);
  calendar.appendChild(calendarTable);

  weeklyCalendarHourDraw(calendarColumns, hourTable);
  weeklyCalendarDraw(calendarColumns, calendarTable);
}

//module.exports = weeklyCalendar;
