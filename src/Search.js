import React, { useState } from "react"
import "./Search.css"
function Search() {
  const [search, setSearch] = useState("");
        function handleInput(event) {
          setSearch(event.target.value)
        }
  return(
    <div className ="container">
      <form>
        <input type="text"
        value={search}
        onChange={handleInput}
         />
        <button className="class-btn">Submit</button>
      </form>
    </div>
  )
}


export default Search;