import React from "react";
import EventForm from "../Forms";

function CreateEvent() {
  return (
    <main
      style={{
        height: "100vh",
      }}
    >
      <div className="create-container">
        <div className="create-form-image"></div>
        <div className="create-event-page-container">
          <h1
            style={{
              color: "#A675A1",
              letterSpacing: "4px",
              fontFamily: "Eina-bold",
              fontSize: "77px",
            }}
          >
            Create Event
          </h1>
          <EventForm />
        </div>
      </div>
    </main>
  );
}

export default CreateEvent;
