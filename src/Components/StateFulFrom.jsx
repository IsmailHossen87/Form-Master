import { useState } from "react"

export default function StateFulFrom() {
    const [name,setName] = useState('Ismail Hossen')
    const [email,setEmail] = useState(null)
    const [password,setPass] = useState(null)
    const[error,setError] = useState('')
    // Collect Value 
    const handleChange = e =>{
        setEmail(e.target.value)
    }
    const handlePassword = e =>{
        setPass(e.target.value)
    }
    const handleName = e => {
        setName(e.target.value)
    }
// click Handalare
    const handleSubmit = e =>{
        e.preventDefault()
       {
        if(password.length < 5){
            setError("must be 6 carecter Set")
        }else{
            setError('')
        }
       }
        console.log(name,email,password)
    }
    console.log(error)
  return (
    <div>
      <form onSubmit={handleSubmit}>
       <input 
       onChange={handleName} value={name}
       type="text" placeholder="Name" name="name" />

        <input
        onChange={handleChange}
        type="email" name="email" placeholder="email" id=""/> <br />

        <input  
        onChange={handlePassword}
        type="password" required placeholder="Password" />
        <input type="submit" value='submit' />
      </form>
      <div >
      {
        error && <p className="text-red-400 text-3xl bg-lime-400 px-5 py-1">{error}</p>
      }
      </div>
     
    </div>
  )
}
