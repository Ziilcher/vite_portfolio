import { experience } from '../data'

const ExpTimeline = () => {
  return (
    <>
    {experience.map(({year, place}, index)=>{
        return(
            <li className="exp-item" key={index}>
                <div className="content">
                    <span className='place'>{place}<br /></span>
                    <span className='year'>{year}</span>
                </div>
            </li>
        )
        })}
    </>
  )
}

export default ExpTimeline