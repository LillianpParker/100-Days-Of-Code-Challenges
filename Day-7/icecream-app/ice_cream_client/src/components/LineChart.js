import React, { useEffect } from "react";
import Chart from "chart.js";

const LineChart = () => {
    const prepareData = (data) => {
        const chartData = {
            labels: [],
            datasets: [
                {
                    label: 'Pints Sold',
                    data: []
                },
                {
                    label: 'Pints Made',
                    data: []
                },
                {
                    label: 'Profit Per Pint',
                    data: []
                }
            ]
        }
    
        data.pints.forEach(pint => {
            chartData.labels.push(pint.month)
            chartData.datasets[0].data.push(pint.pints_sold)
            chartData.datasets[1].data.push(pint.pints_made);
            chartData.datasets[1].data.push(pint.profit_per_pint);
        })
        return chartData
    }

    const createChart = (data) => {
        const ctx = document.querySelector("#pints");
        const pintsChart = new Chart(ctx, {
          type: "line",
          data: data,
        });
      };
    
  const getData = async () => {
      try {
        const response = await fetch("/ice_creams/1");
        const response_json = await response.json();
        const jData = await prepareData(response_json);
        createChart(jData);
      } catch (err) {
          console.error(err);
      }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Pints</h1>
      <canvas id="pints" width="300" height="100"></canvas>
    </>
  );
};

export default LineChart;