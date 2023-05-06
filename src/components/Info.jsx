import React from 'react'
import { personalInfo } from '../data'
import parser from 'html-react-parser'

const Info = () => {
  return (
    <>
    {personalInfo.map(({title, description}, index) =>{
        return (
            <li className="info-item" key={index}>
                <span className="info-title">{parser(title)}</span>
                <span className="info-description">{parser(description)}</span>
            </li>
        )
    })}
    </>
  )
}

export default Info