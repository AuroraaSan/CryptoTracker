import React, { useEffect, useState } from 'react';
import Chart from 'react-google-charts';

const LineChart = ({ historicalData }) => {
  const [data, setData] = useState([["Date", "Prices"]]);

  useEffect(() => {
    let dataCopy = [["Date", "Prices"]];
    if (historicalData.prices) {
      historicalData.prices.forEach((item) => {
        dataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(0, -5)}`, item[1]]);
      });
      setData(dataCopy);
    }
  }, [historicalData]);

  const options = {
    backgroundColor: 'transparent',
    legend: { position: 'bottom', textStyle: { color: 'white' } },
    hAxis: {
      title: 'Date',
      textStyle: { color: 'white' },
      titleTextStyle: { color: 'white' }, 
      gridlines: { color: 'white' },
    },
    vAxis: {
      title: 'Prices',
      textStyle: { color: 'white' },
      titleTextStyle: { color: 'white' }, 
      gridlines: { color: 'white' },
    },
    series: {
      0: { color: '#b4a333' }, 
    },
    tooltip: {
      textStyle: { color: '#00000' },
    },

  };

  return (
    <Chart
      chartType='LineChart'
      data={data}
      options={options}
      height="100%"
      legendToggle
    />
  );
};

export default LineChart;
