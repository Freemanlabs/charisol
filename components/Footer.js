import Link from 'next/link';

export default (props) => (
  <div>
      <footer>
        <div className="nav-desktop-left">
          <Link href="/"><a className="logo" href="./index.html"></a></Link>
        </div>
        <div className="links">
          <ul>
            <li>
              <Link href="/about">
               <a>About Us</a>
              </Link>
            </li>
            <li>
             <Link href="/team">
              <a>Team</a>
             </Link>    
            </li>
            <li>
              <a href="http://blog.charisol.io" target="no_blank">Blog</a>
            </li>
            <li>
              <a href="./pricing-page">Pricing</a>
            </li>
            <li>
              <a href="./testimonials.html">Testimonials</a>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>  
            </li>
            <li>
              <a href="./faq-page">FAQ</a>
            </li>
            <li>
              <a target="_blank" href="https://www.instagram.com/charisoltech/">
                <img src={require('../assets/img/icon_instagram.svg')}  alt="Charisol LinkedIn" />
            </a>
          </li>
              <li>
                <a target="_blank" href="http://facebook.com/charisoltech" >
                  <img src={require('../assets/img/icon_facebook.svg')}  alt="Charisol Facebook" />
            </a>
          </li>
                <li>
                  <a target="_blank" href="https://twitter.com/CharisolTech">
                    <img src={require('../assets/img/icon_twitter.svg')}  alt="Charisol Twitter" />
            </a>
          </li>
                  <li>
                    <a target="_blank" href="http://blog.charisol.io">
                      <img src={require('../assets/img/icon_medium.svg')}  alt="Charisol blog" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
)