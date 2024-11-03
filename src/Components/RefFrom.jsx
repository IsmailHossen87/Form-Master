import React, { useEffect, useRef } from 'react'

export default function RefFrom() {
    const nameRef = useRef(null)
    const emaiRef = useRef(null)
    const passwordRef = useRef(null)
    //Name input er focue e cursor rakher Jonno
    useEffect(()=>{
        nameRef.current.focus()
    },[])

    const handleSubmit = e =>{
        e.preventDefault()
        console.log(nameRef.current.value)
    }
  return (
    <div>
       <form onSubmit={handleSubmit}>
       <input ref={nameRef}
       type="text" placeholder="Name" name="name" /> <br />

        <input ref={emaiRef} defaultValue={'ismailhosen8757@gmail.com'}
        type="email" name="email" placeholder="email" id=""/> <br />

        <input  ref={passwordRef}
        type="password" required placeholder="Password" />
        <input type="submit" value='submit' />
      </form>
    </div>
  )
}
