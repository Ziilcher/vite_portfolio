import { education } from '../data'

const EduTimline = () => {
  return (
    <>
    {education.map(({year,school,index})=>{
      return (
        <li className="edu-item" key={index}>
          <span className='year'>{year}<br/></span>
          <span className='place'>{school}</span>
        </li>
      )
    })}
    </>
  )
}

export default EduTimline