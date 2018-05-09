const Sidebar = () => (
  <div>
    <nav id="menu-desktop" class="menu">
      <ul>
        <li><span class="close close-white"></span></li>
        <li class="active">
          <img src="assets/img/icon_active.svg" alt="active" />
          <a href="./index.html">Home</a>
        </li>
        <li>
          <a href="./about.html">About Us</a>
        </li>
        <li>
          <a href="./team.html">Team &amp; Community</a>
        </li>
        <li>
          <a href="http://blog.charisol.io" target="no_blank">Blog</a>
        </li>
        <li>
          <a href="./pricing-page">Pricing</a>
        </li>
        <li>
          <a href="./testimonials.html">Testimonials</a>
        </li> -->
      <li>
          <a href="./contact.html">Contact</a>
        </li>
        <li>
          <a href="./faq-page">FAQ</a>
        </li>
        <li>
          <a class="btn-trans-white" href="./start.html">Start a project</a>
        </li>
        <li class="m-t-lg">
          <p>© Charisol 2018</p>
        </li>
      </ul>
    </nav>
  </div>
)

export default Sidebar