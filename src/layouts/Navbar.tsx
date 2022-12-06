import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top mb-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          AGORA
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Profile
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Leaderboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Download
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
