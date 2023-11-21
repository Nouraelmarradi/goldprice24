import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';
import Chart from 'chart.js/auto';

const MetalPriceChart = () => {
  const [chartData, setChartData] = useState(null);
  function getStartAndEndDate() {
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - 6); // 6 days ago
    const endDate = today;
  
    const formatDate = (date) => {
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      return `${year}-${month}-${day}`;
    };
  
    return {
      startDate: formatDate(startDate),
      endDate: formatDate(endDate),
    };
  }
  
  // Usage:
  const { startDate, endDate } = getStartAndEndDate();
  
  

  useEffect(() => {
    const fetchMetalPrices = async () => {
      try {
        
        const apiKey = "901be61da9743931f8ac765fed19499d";

        const response = await fetch(`https://api.metalpriceapi.com/v1/timeframe?api_key=${apiKey}&start_date=${startDate}&end_date=${endDate}&base=EGP&currencies=XAU`);
        const data = await response.json();
        console.log(data)
        const rates = data.rates;
        const dates = Object.keys(rates);
        const xauPrices = dates.map(date => rates[date].XAU);

        const chartData = {
          labels: dates,
          datasets: [
            {
              label: "Gold (XAU)",
              data: xauPrices,
              borderColor: "gold",
              fill: false
            }
          ]
        };

        setChartData(chartData);
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchMetalPrices();
  }, []);

  return (
    <div>
      {chartData ? (
        <Line
          data={chartData}
          options={{
            responsive: true,
            scales: {
              x: {
                type: 'time', // Use "time" scale for X-axis
                time: {
                  unit: 'day', // Set the time unit for the X-axis
                  displayFormats: {
                    day: 'yyyy-MM-dd', // Display format for the X-axis labels
                  },
                },
              },
              y: {
                display: true,
                title: {
                  display: true,
                  text: "Price (EGP)"
                }
              }
            }
          }}
        />
      ) : (
        <p>Loading chart...</p>
      )}
    </div>
  );
};

export default MetalPriceChart;
