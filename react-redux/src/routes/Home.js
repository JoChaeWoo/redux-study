import { useState } from "react";

function Home() {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setText("")
  }
  
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleChange} />
        <button>Add</button>
      </form>
    </>
  )
}

export default Home
