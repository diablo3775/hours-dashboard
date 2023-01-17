import React, { useEffect } from 'react'
import './TeamMood.css'
import teamdata from '../jsondata/teamdata'
import EmojiSlider from './EmojiSlider/EmojiSlider'

const TeamMood = () => {
  return (
    <div className='team__container'>
        <div className='team'>
            <p>Team mood</p>
            {
                teamdata.map((team) => (
                    <div  key={team.id}>
                    <div className='team__card'>
                        <div><img className='team__profile__pic' src={team.image} /></div>
                        <div className='team__name'>
                        <div>{team.name}</div>
                        <div className='team__role'>{team.role}</div>
                        </div>
                    </div>
                        <div><EmojiSlider /></div>
                        <hr className='team__line'></hr>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default TeamMood