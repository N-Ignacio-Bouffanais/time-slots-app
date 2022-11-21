'use client'
import '../styles/global.css'
import Card from './components/Card'

export default function HomePage () {
  return (
    <div className='container'>
      <h1>
        Motos disponibles:<span>&nbsp;</span>
      </h1>
      <Card time='8:00 - 8:30' />
      <Card time='8:30 - 9:00' />
      <Card time='9:00 - 9:30' />
      <Card time='9:30 - 10:00' />
      <Card time='10:00 - 10:30' />
      <Card time='10:30 - 11:00' />
      <Card time='11:00 - 11:30' />
      <Card time='11:30 - 12:00' />
      <Card time='12:00 - 12:30' />
      <Card time='12:30 - 13:00' />
      <Card time='13:00 - 13:30' />
      <Card time='13:30 - 14:00' />
      <Card time='14:00 - 14:30' />
      <Card time='14:30 - 15:00' />
      <Card time='15:00 - 15:30' />
      <Card time='15:30 - 16:00' />
      <Card time='16:00 - 16:30' />
      <Card time='16:30 - 17:00' />
      <Card time='17:00 - 17:30' />
      <Card time='17:30 - 18:00' />
      <Card time='18:00 - 18:30' />
      <Card time='18:30 - 19:00' />
      <Card time='19:00 - 19:30' />
      <Card time='19:30 - 20:00' />
    </div>
  )
}
