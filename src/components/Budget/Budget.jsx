import React from 'react'
import budgetdata from '../Dashboard/jsondata/budgetdata'
import ProgressBar from '../Dashboard/ProgressBar/ProgressBar'
import './Budget.css'
import AddIcon from '@mui/icons-material/Add';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import TuneSharpIcon from '@mui/icons-material/TuneSharp';

const Budget = () => {
  return (
    <div className='budget__container'>
      {/* Budget Status */}
      <div>
        <div className="budget">
          <h1 className='budget__status'>Budget Status</h1>
          <div className='budget__button'><AddIcon style={{ fontSize: ' 18px', marginRight: '0.5rem' }} /> Add New Project</div>
          <div className='budget__button__download'><SystemUpdateAltIcon style={{ fontSize: ' 18px', marginRight: '0.5rem' }} />Download report</div>
          <div className='budget__button__download'><CalendarTodayIcon style={{ fontSize: ' 18px', marginRight: '0.5rem' }} />dd/mm/yyyy - dd/mm/yyyy</div>
          <div className='budget__button__download'><TuneSharpIcon style={{ fontSize: ' 18px', marginRight: '0.5rem' }} />Filter</div>
        </div>

        <div>
          <div className="budget__cards">
            {budgetdata.map((budget) => (
              <div className="budget__card" key={budget.id}>
                <div>
                  <div className='budget__flex'>
                    <div>
                      <div className="website">{budget.website}</div>
                      <div className="name">{budget.name}</div>
                    </div>
                    <div><img className="image" src={budget.image} /></div>
                  </div>
                  <div className="budgett">Total Budget <span className='budget__opacity'>{budget.budget}</span></div>
                  <div className="profit">Profitability <span className='budget__opacity' style={{ color: budget.color }}>{budget.profit}</span></div>
                  <ProgressBar bgcolor={budget.bgcolor} completed={budget.completed} ltcolor={budget.ltcolor} />
                  <div className='hours__container'>
                    <div className="actualhours">
                      Actual hours:{budget.actualhours}
                    </div>
                    <div className="hours" style={{ color: budget.color }}>{budget.hours}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Budget