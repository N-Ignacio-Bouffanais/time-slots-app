import { CountContext } from '../page'
import { useContext } from 'react'

export default function Card (props) {
  const countContext = useContext(CountContext)
  return (
    <div className='card-container'>
      <div className='left-content'>
        <p>{props.time}</p>
      </div>
      <div className='right-content'>
        <button className='Iniciar button' onClick={() => countContext.countDispatch('increment')}>Iniciar</button>
        <button className='Terminar button' onClick={() => countContext.countDispatch('decrement')}>Terminar</button>
      </div>
    </div>
  )
}
