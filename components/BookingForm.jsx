import React from "react";

export default function BookingForm() {
  return (
    <form>
      <div className="form-field">
        <label htmlFor="name">Full Name</label>
        <input type="text" name="" placeholder="Enter full Name" />
      </div>
      <div className="form-field">
        <label htmlFor="numberOfAdults">Number of Adults</label>
        <input
          type="number"
          name="adults"
          placeholder="Enter number of adults"
        />
      </div>
      <div className="form-field">
        <label htmlFor="numberOfChildren">Number of Children</label>
        <input
          type="number"
          name="children"
          placeholder="Enter number of children"
        />
      </div>
      <div className="form-field">
        <label htmlFor="dateOfVisit">Date of Visit</label>
        <input type="date" name="dov" />
      </div>
      <button type="submit">Book Now</button>
    </form>
  );
}
