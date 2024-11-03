
import { useContext } from 'react'
import Cousin from '../Cousin/Cousin'
import { MoneyContext } from '../GrandPa/GrandPa'

export default function Aunty() {
  const [money,setMoney]= useContext(MoneyContext)
  return (
    <div>
      <h2>Aunty</h2>
      <section className="flex">
        <Cousin name={'tonu'}></Cousin>
        <Cousin name={'Monu'}></Cousin>
      </section>
      <p>Money{money}</p>
      <button className='bg-yellow-200 p-3 rounded-lg' onClick={()=> setMoney(money+100)}>Add Taka</button>
    
    </div>
  )
}
