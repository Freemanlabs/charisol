import Link from 'next/link';

export default (props) => (
    <nav className="nav-index nav-top">
        <div className="nav-desktop-left">
        <Link href="/">
          <a className="logo">
            <img src="assets/img/charisol_logo.svg" alt="Charisol" />
          </a>
        </Link>  
        </div>
        <div className="hamburger">
          <span className="first-child"></span>
          <span></span>
          <span className="last-child"></span>
        </div>
      </nav>
)