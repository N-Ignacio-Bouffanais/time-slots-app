import { CountContext } from '../page'
import { useContext } from 'react'

export default function Card (props) {
  const num = 0
  const num2 = 8
  const countContext = useContext(CountContext)
  console.log(countContext.countState)
  return (
    <div className='card-container'>
      <div className='left-content'>
        <p>{props.time}</p>
      </div>
      <div className='right-content'>
        <button
          className='Iniciar button' onClick={() => {
            if (countContext.countState !== num) {
              countContext.countDispatch('decrement')
            }
            if (countContext.countState <= 0) {
              console.log('no hay motos disponibles')
            }
          }}
        >Iniciar
        </button>
        <button
          className='Terminar button' onClick={() => {
            if (countContext.countState !== num2) {
              countContext.countDispatch('increment')
            }
          }}
        >Terminar
        </button>
      </div>
    </div>
  )
}
