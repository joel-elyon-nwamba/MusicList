import React, { useState } from "react"

function Search() {
  const [search, setSearch] = useState("");
        function handleInput(event) {
          setSearch(event.target.value)
        }
  return(
    <div>
      <form>
        <input type="text"
        value={search}
        onChange={handleInput}
         />
        <button>Submit</button>
      </form>
    </div>
  )
}


export default Search;