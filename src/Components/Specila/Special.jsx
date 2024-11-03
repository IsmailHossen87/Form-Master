import { useContext } from "react"
import { AssetContext } from "../GrandPa/GrandPa"

export default function Special() {
    const gift = useContext(AssetContext)
  return (
    <div>
      <h3>Special {gift}</h3>
    </div>
  )
}
