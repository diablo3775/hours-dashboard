import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [],
  datasets: [
    {
      data: [19,48,33],
      backgroundColor: [
        '#dc2626',
        '#0d9488',
        '#a5b4fc',
      ],
    },
    {
      elements: {
        arc: {
          borderWidth: 0
        },
      }
    },
  ],
};

const plugins = [{
  beforeDraw: function(chart) {
   var width = chart.width,
       height = chart.height,
       ctx = chart.ctx;
       ctx.restore();
       var fontSize = (height / 160).toFixed(2);
       ctx.font = fontSize + "em sans-serif";
       ctx.textBaseline = "top";
       var text = "5",
       textX = Math.round((width - ctx.measureText(text).width) / 2),
       textY = height / 3;
       ctx.fillText(text, textX, textY);
       var text2 = "Total Projects",
       textX2 = Math.round((width - ctx.measureText(text2).width) / 2),
       textY2 = (height / 3)*1.5;
       ctx.fillText(text2, textX2, textY2);
       ctx.save();
  } 
}]

export default function DoughnutChart() {
  return <Doughnut data={data} plugins={plugins} />;
}

