import { FaMotorcycle } from 'react-icons/fa'
export default function Card (props) {
  return (
    <div className='card-container'>
      <div className='content-card'>
        <FaMotorcycle />
        <label class='switch'>
          <input type='checkbox' />
          <span class='slider round' />
        </label>
      </div>
    </div>
  )
}
