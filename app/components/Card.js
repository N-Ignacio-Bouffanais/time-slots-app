import { FaMotorcycle } from 'react-icons/fa'
export default function Card (props) {
  return (
    <div className='card-container'>
      <div className='left-content'>
        <p>{props.time}</p>
      </div>
      <div className='right-content'>
        <FaMotorcycle />
        <label className='switch'>
          <input type='checkbox' />
          <span className='slider round' />
        </label>
      </div>
    </div>
  )
}
