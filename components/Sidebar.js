import Link from 'next/link';

export default () => (
  <div>
    <nav id="menu-desktop" className="menu">
      <ul>
        <li><span className="close close-white"></span></li>
        <li className="active">
          <Link href="/">
           
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About Us</a>
          </Link>
        </li>
        <li>
        <Link href="/team"> 
          <a>Team &amp; Community</a>
        </Link>
        </li>
        <li>
          <a href="http://blog.charisol.io" target="no_blank">Blog</a>
        </li>
        <li>
          <Link href="/pricing"><a>Pricing</a></Link>
        </li>
      <li>
          <Link href="/contact"><a>Contact</a></Link>
       </li>
        <li>
        <Link href="/faq"><a>FAQ</a></Link>
        </li>
        <li>
        <Link href="/start"><a className="btn-trans-white" href="./start.html">Start a project</a></Link>
        </li>
        <li className="m-t-lg">
          <p>© Charisol 2018</p>
        </li>
      </ul>
    </nav>
  </div>
)