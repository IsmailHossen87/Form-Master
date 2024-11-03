export default function SimpleFrom() {
    const handleSubmit = e => {
        e.preventDefault()
        console.log(e.target.name.value)
        console.log(e.target.phone.value)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name"/><br />
        <input type="phone" name="phone" />
        <input type="submit" value='submit' />
      </form>
    </div>
  )
}
