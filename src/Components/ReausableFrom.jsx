export default function ReausableFrom({handleSubmit ,submitBtnText='submit' ,children}) {


    const handleLocalSubmit = e => {
        e.preventDefaule()
        const data = {
            name: e.target.value,
            email:e.target.value,
            password:e.target.value
        }
        handleSubmit(data)
    }
  return (
    <div>
        {children}
       <form onSubmit={handleLocalSubmit}>
        <input type="text" name="name"/><br />
        <input type="phone" name="phone" />
        <input type="submit" value={submitBtnText} />
      </form>
    </div>
  )
}
