"use client";
import ReactApexChart from "react-apexcharts";
import { useState } from "react";




const Home = (prop) => {
  const [state, setState] = useState({
    series: [
      {
        name: "series1",
        data: prop.data,
      },
    ],

    options: {
    
        colors: [`${prop.color}`],
      
      chart: {
        type: "area",
        zoom: {
          enabled: false,
        },

        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: false,
      },
      yaxis: {
        show: false,
      },

      xaxis: {
        labels: {
          show: false,
        },
      },
    },
  });
  return (
    <>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="area"
          height={"80px"}
          width={"100px"}
        />
      </div>
    </>
  );
};
export default Home;
