import Link from 'next/link';

export default () => (
  <div>
    <nav id="menu-desktop" className="menu">
      <ul>
        <li><span className="close close-white"></span></li>
        <li className="active">
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About Us</a>
        </li>
        <li>
        <a href="/team">Team &amp; Community</a>
        </li>
        <li>
          <a href="http://blog.charisol.io" target="no_blank">Blog</a>
        </li>
        <li>
          <a href="/pricing">Pricing</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/faq">FAQ</a>
        </li>
        <li>
          <a className="btn-trans-white" href="/start">Start a project</a>
        </li>
        <li className="m-t-lg">
          <p>© Charisol 2018</p>
        </li>
      </ul>
    </nav>
  </div>
)