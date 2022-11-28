import { CountContext } from '../page'
import { useContext, useState } from 'react'

export default function Card (props) {
  const [isActive, setIsActive] = useState(false)
  const num = 0
  const num2 = 8
  const countContext = useContext(CountContext)
  return (
    <div className='card-container'>
      <div className='left-content'>
        <p>{props.time}</p>
      </div>
      <div className='right-content'>
        <button
          style={{
            display: isActive ? 'none' : 'block'
          }}
          className='Iniciar button' id='inicio' onClick={(e) => {
            if (countContext.countState !== num) {
              countContext.countDispatch('decrement')
              setIsActive(current => !current)
            }
            if (countContext.countState === 0) {
              alert('no hay motociclistas disponibles')
            }
          }}
        >Iniciar
        </button>
        <button
          style={{
            display: isActive ? 'block' : 'none'
          }}
          className='Terminar button' onClick={() => {
            if (countContext.countState !== num2) {
              countContext.countDispatch('increment')
              setIsActive(current => !current)
            }
          }}
        >Terminar
        </button>
      </div>
    </div>
  )
}
