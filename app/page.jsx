'use client'
import '../styles/global.css'
import Card from './components/Card'
import cards from './cards'
import React, { useReducer } from 'react'

export const CountContext = React.createContext()

const initialState = 8
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    default:
      return state
  }
}

export default function HomePage () {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
        <h1>
          Motos disponibles:<span>&nbsp;{count}</span>
        </h1>
        <div className='container'>
          {
            cards.map(card => (
              <Card time={card.time} key={card.id} />
            )
            )
          }
        </div>
      </CountContext.Provider>
    </>
  )
}
