import React from "react";
import EventForm from "../Forms";

function CreateEvent() {
  return (
    <main>
      <h1>CreateEvent</h1>
      <EventForm formType={true} />
    </main>
  );
}

export default CreateEvent;
