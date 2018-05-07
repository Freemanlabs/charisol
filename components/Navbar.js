import Link from 'next/link';

export default (props) => (
    <nav class="nav-index nav-top">
        <div class="nav-desktop-left">
        <Link href="/">
          <a class="logo">
            <img src="assets/img/charisol_logo.svg" alt="Charisol" />
          </a>
        </Link>  
        </div>
        <div class="hamburger">
          <span class="first-child"></span>
          <span></span>
          <span class="last-child"></span>
        </div>
      </nav>
)