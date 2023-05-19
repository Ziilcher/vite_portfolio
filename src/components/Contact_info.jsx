import { contactinfo } from '../data'

const Contact_info = () => {
  return (
    <>
    {contactinfo.map(({title, value}, index) => {
        return (
            <div className="contact_info_item" key={index}>
                <h4>{title}</h4>
                <p>{value}</p>
            </div>
        )
    })}
    </>
  )
}

export default Contact_info