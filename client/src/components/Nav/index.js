import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Google Books List
      </a>
      <div className="mr-auto">
        <a className="navbar-brand" href="/">
          Search
        </a>
        <a className="navbar-brand" href="/saved">
          Saved
        </a>
      </div>
    </nav>
  );
}

export default Nav;
