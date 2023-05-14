import { skillFront } from "../data";

const SkillFront = () => {
  return (
    <>
        {skillFront.map(({title, level}, index)=>{
            return (
                <li className="skill-item" key={index}>
                    <span className="skill-title">{title}<br/></span>
                    <span className="skill-level">{level}</span>
                </li>
            )
        })}
    </>
  )
}

export default SkillFront