import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col sm:flex-row w-full justify-center sm:justify-evenly pt-10">
      <div className="stat place-items-center mx-auto">
        <div className="stat-title">Downloads</div>
        <div className="stat-value">31K</div>
        <div className="stat-desc">From January 1st to February 1st</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title">Users</div>
        <div className="stat-value text-secondary">4,200</div>
        <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title">New Registers</div>
        <div className="stat-value">1,200</div>
        <div className="stat-desc">↘︎ 90 (14%)</div>
      </div>
    </div>
  );
}
