import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const Calendar = () => {
  return (
    <>
      <div className="w-[90vw] h-[90vh] overflow-auto m-[auto]  dark:bg-neutral-700">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView={"dayGridMonth"}
          headerToolbar={{
            left: "today prev,next",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          events={[
            { title: "event 1", start: "2023-09-01T12:00:00", end: "2023-09-01T13:00:00" },
            { title: "event 2", date: "2023-09-02" },
          ]}
        />
      </div>
    </>
  );
};

export default Calendar;
