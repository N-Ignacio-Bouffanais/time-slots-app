import '../styles/global.css'
import Card from './components/Card'

export default function HomePage () {
  return (
    <div className='container'>
      <h1>
        Motos disponibles:<span>1</span>
      </h1>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}
