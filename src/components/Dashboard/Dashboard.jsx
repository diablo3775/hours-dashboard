import React from "react";
import "./Dashboard.css";
import progressdata from "./jsondata/progressdata";
import DoughnutChart from "./Charts/DoughnutChart/DoughnutChart";
import LineChart from './Charts/LineChart/LineChart'
import Switch from '@mui/material/Switch';
import 'emoji-slider';

const Dashboard = () => {
  return (
    <div className="dashboard__container">
      {/* Progress Cards */}
      <div className="progress__cards">
        {progressdata.map((progress) => (
          <div className="progress" key={progress.id}>
            <div className="progress__content">
              <div className="progress__icons" >{progress.icon}</div>
              <div className="progress__number">{progress.number}</div>
              <div className="progress__name">{progress.name}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts*/}
      <div className="charts">
        <div className="line__chart">
        <div className="line__header">
            <div>Total Revenue</div>
            <div className="line__header">
              <div>Month</div>
              <div>
                <Switch />
              </div>
              <div>Week</div>
            </div>
          </div>
          <LineChart />
        </div>
        <div className="doughnut__chart">
          <div className="doughnut__header">
            <div>Budget</div>
            <div className="doughnut__header">
              <div>Profitability</div>
              <div>
                <Switch />
              </div>
              <div>Status</div>
            </div>
          </div>
          <div className="doughnut">
            <DoughnutChart />
          </div>
          <div className="doughnut__budget">
            <div className="flex">
              <div className="red"></div>
              <div>Over Budget</div>
            </div>
            <div className="flex">
              <div className="blue"></div>
              <div>On Budget</div>
            </div>
            <div className="flex">
              <div className="green"></div>
              <div>Under Budget</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
