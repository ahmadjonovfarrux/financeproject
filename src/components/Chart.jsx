import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Link } from "react-router-dom";

function Chart() {
  const [state, setState] = useState({
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        type: "donut",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });
  return (
    <div className="chartWrapper">
      <div className="chartWrapper__content">
        <h2 className="chart__content__title">Budgets</h2>
        <Link to="/budgets" className="content__link">
          <span>See Details</span>
          <img src="../images/icon-caret-right.svg" alt="right icon" />
        </Link>
      </div>
      <div style={{ width: "320px" }}>
        <div id="chart">
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="donut"
          />
        </div>
        <div id="html-dist"></div>
      </div>
    </div>
  );
}

export default Chart;
