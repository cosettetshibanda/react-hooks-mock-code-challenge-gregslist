import React from "react";
import Search from "./Search";

function Header({setSearchObj}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search setSearchObj={setSearchObj} />
    </header>
  );
}

export default Header;
