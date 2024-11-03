import { useState } from "react"

const useInputState = (defaultValue = null) =>{
    // const [name,setName] = useState('Ismail Hossen') Same same but different
    const [value,setValue] = useState(defaultValue)

    // const handleChange = val =>{
    //     setValue(val.target.value)
    // }
    const onChange = val =>{
        setValue(val.target.value)
    }
    return {value,onChange }
} 
export default useInputState;