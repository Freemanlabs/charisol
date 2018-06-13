import Link from 'next/link';

export default (props) => (
  <div>
      <footer>
        <div className="nav-desktop-left">
          <a href="/" className="logo" ></a>
        </div>
        <div className="links">
          <ul>
            <li>
              <a href="/about">
                About Us
              </a>
            </li>
            <li>
             <a href="/team">Team</a>    
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