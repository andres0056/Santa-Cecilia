$(document).ready(function () {
  $('#calendar').evoCalendar({
    language: 'es',
    todayHighlight: true,
    sidebarDisplayDefault: true,
    eventListToggler: true,
    calendarEvents: [
      {
        id: '1',
        name: 'Ejemplo de evento',
        date: '2026-01-05',
        description: 'Este es un evento de prueba',
        type: 'event'
      }
    ]
  });
});

function addEvent() {
  const name = document.getElementById("eventName").value;
  const date = document.getElementById("eventDate").value;
  const desc = document.getElementById("eventDesc").value;

  if (!name || !date) {
    alert("Nombre y fecha son obligatorios");
    return;
  }

  $('#calendar').evoCalendar('addCalendarEvent', {
    id: Date.now(),
    name: name,
    date: date,
    description: desc,
    type: 'event'
  });

  // limpiar formulario
  document.getElementById("eventName").value = "";
  document.getElementById("eventDate").value = "";
  document.getElementById("eventDesc").value = "";
}

