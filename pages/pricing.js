import Link from 'next/link';
import Layout from '../components/Layout';
import stylesheet from '../styles/index.scss';

const Pricing = (props) => (
    <Layout title="A software development agency for remote companies | Charisol">  
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <section className="pricing" id="panel" data-slideout-ignore>
            <nav className="nav-index nav-top">
                <div className="nav-desktop-left">
                    <a className="logo" href="./index.html">
                        <img src={require('../assets/img/charisol_logo.svg')}  alt="Charisol" />
                    </a>
                </div>
                <div className="hamburger">
                    <span className="first-child"></span>
                    <span></span>
                    <span className="last-child"></span>
                </div>
            </nav>
            <div className="content">
                <div className="row">
                    <div className="pricing-text-wrapper">
                        <div className="text-content">
                            <span className="heading-wrapper">
                                <h1 className="heading no-reveal">
                                    Pricing
                                </h1>
                            </span>
                            <span className="sub-text-wrapper">
                                <p className="sub-text no-reveal">
                                We understand the intricacies of building 
                                aesthetically appealing products with high end functionality 
                                and are dedicated 24/7 to meeting the needs and demands of all our clients. 
                                </p>
                            </span>
                            <span className="sub-text-wrapper">
                                <p className="sub-text no-reveal">
                                To get started, select the required skill sets and the bulk hour payment plan that 
                                suits your project timeline and we will provide all the technical support needed to 
                                make your project a success.
                                </p>
                            </span>
                        </div>
                        <Link href="/start"> 
                            <a className="btn-curve-purple m-t-md">
                                Start a project
                                <img src={require('../assets/img/icon_right_white.svg')}  alt="right" />
                            </a>
                        </Link>
                     </div>
                </div>
                <div className="pricing-wrapper columns">
                    <div className="row pricing-wrapper-container">
                        <div className="columns">
                            <div className="text-center tile pricing-tile">
                            <div className="icon-container" style={{backgroundImage: 'url('+require('../assets/img/icon_hour.svg')+')'}}></div>
                            <div className="text-wrapper">
                                <h5>Hourly Pricing</h5>
                                <h2 class="bold">$35</h2>
                                <div className="m-t-md">
                                    <p>
                                    Best suited for simple projects with short timelines and flexible deliverables.
                                    </p>
                                </div>
                            </div>
                            <div className="btn-container">
                            <Link href="/start"> 
                                    <a className="btn-curve-purple m-t-md" >
                                    Start a project
                                    <img src={require('../assets/img/icon_right_white.svg')}  alt="right" />
                                    </a>
                               </Link>
                            </div>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="text-center tile pricing-tile">
                            <div className="icon-container" style={{backgroundImage: 'url('+require('../assets/img/icon_week.svg')+')'}}></div>
                            <div className="text-wrapper">
                                <h5>Weekly Pricing</h5>
                                <h2 className="bold">$1,300</h2>
                                <span class="pricing-title-span">40 total hours of requested resources</span>
                                <div className="m-t-md">
                                    <p>
                                    Ideal for intensive projects with moderate timelines and deliverables
                                    </p>
                                </div>
                            </div>
                            <div className="btn-container">
                                <Link href="/start"> 
                                    <a className="btn-curve-purple m-t-md" >
                                    Start a project
                                    <img src={require('../assets/img/icon_right_white.svg')}  alt="right" />
                                    </a>
                               </Link>
                            </div>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="text-center tile pricing-tile active">
                            <div className="icon-container" style={{backgroundImage: 'url('+require('../assets/img/icon_month.svg')+')'}}></div>
                            <div className="text-wrapper">
                                <h5>Monthly Pricing</h5>
                                <h2 className="bold">$4,800</h2>
                                <span className="pricing-title-span">160 total hours of requested resources</span>
                                <div className="m-t-md">
                                    <p>
                                    Best suited for complex projects with lengthy timelines and fixed deliverables
                                    </p>
                                    </div>
                            </div>
                            <div className="btn-container">
                                <Link href="/start"> 
                                    <a className="btn-curve-purple m-t-md" >
                                    Start a project
                                    <img src={require('../assets/img/icon_right_white.svg')}  alt="right" />
                                    </a>
                               </Link>
                            </div>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="text-center tile pricing-tile">
                            <div className="icon-container" style={{backgroundImage: 'url('+require('../assets/img/icon_demand.svg')+')'}}></div>
                            <div className="text-wrapper">
                                <h5>On Demand</h5>
                                <h2 className="bold">Varies</h2>
                                <div className="m-t-md">
                                    <p>
                                        Chat with us to create a custom plan for your project. We are just a click away! 
                                    </p>
                                </div>                  
                            </div>
                            <div className="btn-container">
                               <Link href="/start"> 
                                <a className="btn-curve-purple m-t-md" >
                                Start a project
                                <img src={require('../assets/img/icon_right_white.svg')}  alt="right" />
                                </a>
                               </Link>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </section>
      </Layout>
)

export default Pricing