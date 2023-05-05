export class schedule {
  #initialHour;
  #lastHour;
  #durationTurns;
  #arrayHour = [];
  #days = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];

  constructor(initialHour, lastHour, durationTurns) {
    this.#initialHour = initialHour;
    this.#lastHour = lastHour;
    this.#durationTurns = durationTurns;
  }
  setDuration() {
    const scheduleHours = this.#lastHour - this.#initialHour;

    switch (this.#durationTurns) {
      case 1:
        for (let i = 0; i <= scheduleHours; i++) {
          let hour = (this.#initialHour + i).toString();
          this.#arrayHour.push(hour);
        }
        return this.#arrayHour;
      case 2:
        for (let i = 0; i <= scheduleHours; i++) {
          let hour2 = (this.#initialHour + i).toString();
          if (i + 1 < this.#lastHour) {
            this.#arrayHour.push(hour2);
            this.#arrayHour.push(hour2 + ":30");
          } else {
            this.#arrayHour.push(hour2);
          }
        }
        return this.#arrayHour;
      case 4:
        for (let i = 0; i <= scheduleHours; i++) {
          let hour3 = (this.#initialHour + i).toString();
          if (i + 1 < this.#lastHour) {
            this.#arrayHour.push(hour3);
            this.#arrayHour.push(hour3 + ":15");
            this.#arrayHour.push(hour3 + ":30");
            this.#arrayHour.push(hour3 + ":45");
          } else {
            this.#arrayHour.push(hour3);
          }
        }
        return this.#arrayHour;
      default:
        break;
    }
  }
  weeklyCalendar() {
    let calendarColumns =
      (this.#lastHour - this.#initialHour) * this.#durationTurns + 2;
    let calendarTable = document.createElement("table");
    let hourTable = document.createElement("table");
    calendarTable.id = "calTable";
    hourTable.id = "hourTable";
    calendar.appendChild(hourTable);
    calendar.appendChild(calendarTable);

    this.setDuration();
    this.scheduleHourDraw(calendarColumns, hourTable);
    this.weeklyCalendarDraw(calendarColumns, calendarTable);
  }

  weeklyCalendarDraw(calendarCol, calendarTable) {
    for (let i = 0; i < calendarCol; i++) {
      let calendarRow = document.createElement("tr");
      calendarRow.classList.add("calRow");
      calendarTable.appendChild(calendarRow);

      for (let j = 0; j < 7; j++) {
        let calendarCell = document.createElement("td");
        calendarCell.classList.add("calCell");
        calendarRow.appendChild(calendarCell);
        if (i === 0) {
          calendarCell.setAttribute("id", "day_" + j.toString());
        } else {
          calendarCell.classList.add(
            "turn",
            "day_" + j.toString(),
            this.#arrayHour[i - 1].toString()
          );
        }
      }
    }
  }
  scheduleHourDraw(calendarCol, calendarTable) {
    for (let i = 0; i < calendarCol; i++) {
      let calendarRow = document.createElement("tr");
      calendarRow.classList.add("calRow");
      calendarTable.appendChild(calendarRow);
      let calendarCell = document.createElement("td");
      calendarCell.classList.add("hourCell");
      calendarRow.appendChild(calendarCell);
      if (i != 0) {
        calendarCell.textContent = this.#arrayHour[i - 1];
      } else {
        calendarCell.classList.add("selectMedCell");
        const selMed = document.createElement("select");
        selMed.setAttribute("id", "selectMed");
        selMed.name = "selectMed";
        calendarCell.appendChild(selMed);
      }
    }
  }

  setDays() {
    for (let i = 0; i < 7; i++) {
      const dayName = document.createElement("div");
      const dayDate = document.createElement("div");
      const dayId = "day_" + i.toString();
      dayName.setAttribute("id", dayId + "_name");
      dayDate.setAttribute("id", dayId + "_date");
      dayName.textContent = this.#days[i];
      const calendarCell = document.getElementById(dayId);
      calendarCell.appendChild(dayName);
      calendarCell.appendChild(dayDate);
    }
  }
}
