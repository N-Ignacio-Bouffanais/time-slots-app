import { FaMotorcycle } from 'react-icons/fa'
export default function Card (props) {
  return (
    <div className='card-container'>
      <p>
        Motociclista <span>1</span>
      </p>
      <div className='content-card'>
        <FaMotorcycle />
        <button>togle</button>
      </div>
    </div>
  )
}
