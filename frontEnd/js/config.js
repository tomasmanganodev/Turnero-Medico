document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    locale: 'es', 
    initialView: 'timeGridWeek',
    headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    
    },
    slotMinTime: '6:00:00',  // Hora inicial
  slotMaxTime: '12:00:00',  // Hora final
  contentHeight: 'auto',
  slotDuration: '00:10:00',  // Intervalos de 30 minutos
  slotLabelInterval: '01:00', // Mostrar etiquetas cada 30 minutos
  dayHeaderFormat: { weekday: 'short', day: 'numeric' },
  
    allDaySlot: false,
  });
  calendar.render();
});