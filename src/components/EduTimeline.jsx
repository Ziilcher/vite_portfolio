import { education } from '../data'

const EduTimeline = () => {
  return (
    <>
    {education.map(({year,school}, index)=>{
      return (
        <li className="edu-item" key={index}>
          <div className="content">
            <span className='place'>{school}<br/></span>
            <span className='year'>{year}</span>
          </div>
        </li>
      )
    })}
    </>
  )
}

export default EduTimeline