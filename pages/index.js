import Link from 'next/link';
import Layout from '../components/Layout';

const Index = (props) => (

  
  <Layout title="A software development agency for remote companies | Charisol" content="Charisol connects remote friendly companies with a community of talented developers and designers.
  Let’s figure out your software engineering and design needs.">  
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.theme.min.css" />
    <section className="index" id="panel" data-slideout-ignore>
      <div className="top-wrapper">
        <div className="intro">
            <div className="row intro-content-wrapper">
              <div className="six columns left-pane">
                <nav className="nav-index">
                  <div className="nav-desktop-left">
                    <a className="logo" href="/">
                      <img src={require('../assets/img/charisol_logo.svg')}  alt="Charisol Logo" />
                    </a>
                  </div>
                  <div className="hamburger">
                    <span className="first-child"></span>
                    <span className="mid-child"></span>
                    <span className="last-child"></span>
                  </div>
                </nav>
                <div className="text-content">
                  <span className="heading-wrapper">
                      <h1 className="heading no-reveal">
                          Changing the game of Software Development, One Code at a time.
                      </h1>
                  </span>
                  <span className="sub-text-wrapper">
                    <p className="sub-text no-reveal" >
                        Charisol is a software development agency that connects remote friendly companies with a community of talented software developers.
                    </p>
                  </span>
                   <a href="/start" className="btn-curve-purple m-t-md">
                    Start a project
                    <img src={require('../assets/img/icon_right_white.svg')}  alt="right" />
                    </a>
                </div>
              </div>
              <div className="six columns right-pane">
                <div className="top-img-wrapper no-reveal">
                    <div className="top-img"></div>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className="scale" style={{margin: '80px 0px'}}>
        <div className="section-2-wrapper row">
          <div className="six columns image-wrapper-container no-reveal">
              <div className="clear-div-container">
                <div className="clear-div">
                    <div className="image-wrapper"
                        alt="Scaling software Development teams"
                        style={{backgroundImage:"url(http://res.cloudinary.com/sportbay-co/image/upload/v1525427315/macbook_scj1zc.jpg)"}}>
                    </div>
                  </div>
              </div>
          </div>
          <div className="six columns text-wrapper">
            <div className="text-content">
              <span className="heading-wrapper">
                  <h1 className="heading no-reveal">
                    The Future is Remote Work.
                  </h1>
              </span>
              <span className="sub-text-wrapper">
                <p className="sub-text no-reveal">
                  We live in a global world where talent is largely decentralized. This is why we strongly believe in the future of remote work.
                </p>
              </span>
              <span className="sub-text-wrapper">
                  <p className="m-b-md sub-text no-reveal">
                    Our experience in this field (successes and failures) has opened our minds and taught us how to work only with best practices. Thanks to apps like Trello, Skype, Zoom, Toptal, Google Apps, Github and others, our software developers are reachable round the clock.
                  </p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="simple">
        <div className="row">
          <div className="seven columns">
            <div className="text-content">
              <span className="heading-wrapper">
                <h1 className="heading no-reveal m-b-md">
                  Our Services
                </h1>
              </span>
              <p className="sub-title">Web Application</p>
              <span className="sub-text-wrapper">
                <p className="sub-text no-reveal m-b-lg">
                  Our web application development team works with NodeJs, AngularJs, Golang, Ruby on Rails, PHP, Java (and a long list of many other languages) to ensure highly scalable and optimally engineered solutions are delivered based on your project requirements.  
                </p>
              </span>
              <p className="sub-title">Mobile App Development </p>
              <span className="sub-text-wrapper">
                <p className="sub-text no-reveal m-b-lg">
                  There are billions of users worldwide using mobile phones - it’s a no brainer why you need to build an Android or iOS app. Charisol’s mobile app development team has the right expertise and experience in not just building but also scaling your app.
                </p>
              </span>
                <Link href="/start">
                 <a className="btn-curve-white m-t-md">
                
                Start a project
                <img src={require('../assets/img/icon_right_purple.svg')} alt="right" />
              </a>
              </Link>
            </div>
          </div>
          <div className="five columns">
            <img src={require('../assets/img/iphone_x.png')}  alt="Scaling software development teams." />
          </div>
        </div>
        <div className="purple-bg"></div>
      </div>
      <div className="benefits">
        <span className="heading-wrapper">
          <h2 className="heading no-reveal text-center m-b-xl">Hire Dedicated Professionals</h2>
        </span>
        <div className="content m-t-lg">
          <div className="m-t-lg row">
            <div className="six columns">
              <div className="row">
                <div className="three columns">
                  <img src={require('../assets/img/icon_chart.svg')} alt="Charisol | A software agency for remote friendly companies" />
                </div>
                <div className="nine columns">
                  <h5>Tested and Proven</h5>
                  <span className="sub-text-wrapper">
                      <p className="sub-text no-reveal">
                        Our expertise ranges from developing offline web-based systems to highly scalable enterprise SAAS products. We have a proven record of delivering high quality deliverables to our clients.
                      </p>
                  </span>
                </div>
              </div>
            </div>
            <div className="six columns">
              <div className="row">
                <div className="three columns">
                  <img src={require('../assets/img/icon_gears.svg')}  alt="Charisol | A software agency for remote friendly companies" />
                </div>
                <div className="nine columns">
                  <h5>Dedicated Professionals</h5>
                  <span className="sub-text-wrapper">
                      <p className="sub-text  no-reveal">
                        Our dedicated professionals have expert experience and high performance and are ready to bring your ideas to life and achieve exceptional results in the shortest possible time.
                      </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="m-t-xl row">
            <div className="six columns">
              <div className="row">
                <div className="three columns">
                  <img src={require('../assets/img/icon_search.svg')} alt="Charisol | A software agency for remote friendly companies" />
                </div>
                <div className="nine columns">
                  <h5>Unparalleled Support </h5>
                  <span className="sub-text-wrapper ">
                      <p className="sub-text no-reveal">
                        We are available round the clock to get all your questions answered. Just call us or send us an email and we will get back to you as soon as we can. We are just one click away!
                      </p>
                  </span>
                </div>
              </div>
            </div>
            <div className="six columns">
              <div className="row">
                <div className="three columns">
                  <img  src={require('../assets/img/icon_money.svg')}  alt="Charisol | A software agency for remote friendly companies" />
                </div>
                <div className="nine columns">
                  <h5>Budget friendly</h5>
                  <span className="sub-text-wrapper ">
                      <p className="sub-text no-reveal">
                        Get proactive with your growth strategy with our development plan that suits your budget. All our plans have been cherry picked to make sure our clients get maximum return on investment.
                      </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
  </div> 

  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.js"></script>
  <script  dangerouslySetInnerHTML={{ __html: 
    `$(document).ready(function(){
      $("#testimonial-slider").owlCarousel({
          items:1,
          itemsDesktop:[1000,2],
          itemsDesktopSmall:[990,2],
          itemsTablet:[768,1],
          pagination:true,
          navigation:false,
          navigationText:["",""],
          slideSpeed:1000,
          autoPlay:true
      });
  });`
  }}/>


      
      <div className="bottom-banner-wrapper">
        <div className="img-wrapper">
          <h2 className="banner-text">
            Tap into a world of skilled software developers who are not only passionate about coding but also abide by the best professional practices.
          </h2>
          <Link href="/start">
          <a className="btn-curve-white start-project-btn m-t-md" >
            Start a project!
            <img src={require('../assets/img/icon_right_black.svg')}  alt="right" />
          </a>
          </Link>
        </div>  
      </div>
    </section>
  </Layout>
)


  
  
  export default Index