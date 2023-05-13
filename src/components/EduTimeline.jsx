import { education } from '../data'

const EduTimeline = () => {
  return (
    <>
    {education.map(({year,school}, index)=>{
      return (
        <li className="edu-item" key={index}>
          <div className="content">
            <span className='year'>{year}<br/></span>
            <span className='place'>{school}</span>
          </div>
        </li>
      )
    })}
    </>
  )
}

export default EduTimeline