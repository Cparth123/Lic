'use client'
import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const Circal = () => {
  const [state, setState] = useState({
    series: [25, 15],
    options: {
      chart: {
        type: "pie",
      },
      labels: [
        "Policy complited",
        "Policy Running..",
       
      ],
      theme: {
        monochrome: {
          enabled: true,
        },
      },
      plotOptions: {
        pie: {
          dataLabels: {
            offset: 0
          },
        },
      },
     
      dataLabels: {
        formatter(val, opts) {
          const name = opts.w.globals.labels[opts.seriesIndex];
          return [name, val.toFixed(1) + "%"];
        },
      },
      legend: {
        show: false,
      },
    },
  });
  return (
    <>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="pie"
          width={'100%'}
        />
      </div>
    </>
  );
};
export default Circal;
