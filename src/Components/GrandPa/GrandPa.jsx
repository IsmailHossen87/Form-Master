import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './GrandPa.css'
export const AssetContext = createContext('gold');
export const MoneyContext = createContext(1000)
export default function GrandPa() {
    const [money,setMoney] = useState(1000)

  return (
    <div className="grandpa  text-center">
      <h2 className="">GrandFather</h2>
      <p>Total Money = {money}</p>
      <MoneyContext.Provider value={[money,setMoney]}>
      <AssetContext.Provider value='gold'>
      <section className=" flex justify-between">
        <Dad></Dad>
        <Uncle></Uncle>
        <Aunty></Aunty>
      </section>
      </AssetContext.Provider>
      </MoneyContext.Provider>
    </div>
  )
}
