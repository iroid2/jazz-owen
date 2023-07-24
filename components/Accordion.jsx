"use client";
import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { BsCheck2 } from "react-icons/bs";
export default function Accordion({ data }) {
  const [contentHidden, setContentHidden] = useState(true);
  function changeContent() {
    setContentHidden(!contentHidden);
  }
  return (
    <div className="accordion">
      <div className="accordion-header">
        <button onClick={changeContent}>
          <h2 className="capitalise">{data.title.toLowerCase()}</h2>
          {contentHidden ? (
            <BsChevronDown className="icon" />
          ) : (
            <BsChevronUp className="icon" />
          )}
        </button>
      </div>
      {contentHidden ? (
        ""
      ) : (
        <div className="accordion-body">
          <h4>Day Overview</h4>
          <p>{data.description}</p>
          <h4>Accommodation</h4>
          <hr />
          <h5>
            Up Market:
            {data.accommodation.upMarket.map((item, i) => {
              return (
                <div className="flex">
                  <BsCheck2 className="small-icon" />
                  <p key={i}>{item}</p>
                </div>
              );
            })}{" "}
          </h5>
          <h5>
            Moderate:
            {data.accommodation.moderate.map((item, i) => {
              return (
                <div className="flex">
                  <BsCheck2 className="small-icon" />
                  <p key={i}>{item}</p>
                </div>
              );
            })}{" "}
          </h5>
          <h5>
            Low Budget:
            {data.accommodation.lowBudget.map((item, i) => {
              return (
                <div className="flex">
                  <BsCheck2 className="small-icon" />
                  <p key={i}>{item}</p>
                </div>
              );
            })}{" "}
          </h5>
        </div>
      )}
    </div>
  );
}
