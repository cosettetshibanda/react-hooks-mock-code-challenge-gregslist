import React, {useState} from "react";

function Search({setSearchObj}) {
const [text, setText] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    setSearchObj(text)
  }

  function handleText(e){
    setText(e.target.value)
  }
  

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={ text }
        onChange={handleText}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
