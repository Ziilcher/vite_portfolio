import { experience } from '../data'

const ExpTimeline = () => {
  return (
    <>
    {experience.map(({year, place}, index)=>{
        return(
            <li className="exp-item" key={index}>
                <div className="content">
                    <span className='year'>{year}<br /></span>
                    <span className='place'>{place}</span>
                </div>
            </li>
        )
        })}
    </>
  )
}

export default ExpTimeline