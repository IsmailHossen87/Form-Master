import useInputState from "./useinportState"

export default function HookFrom() {
    // const [name,handleNameChange] = useInputState('sokhina')
    const nameState = useInputState('ismail@gmail.com')

    const handleSubmit = e =>
     e.preventDefault()
    // console.log(name)
    console.log(nameState.value)

  return (
    <div>
       <form onSubmit={handleSubmit}> 
       {/* <input value={name} onChange={handleNameChange}
       type="text" placeholder="Name" name="name" /> */}

        <input {...nameState}
        type="email" name="email" placeholder="email" id=""/> <br />

        <input  
        type="password"  placeholder="Password" />
        <input type="submit" value='submit' />
      </form>
    </div>
  )
}
