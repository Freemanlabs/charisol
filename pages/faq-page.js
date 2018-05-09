import Link from 'next/link';
import Layout from '../components/Layout';
import stylesheet from '../styles/index.scss';

const Index = (props) => (
    <Layout title="A software development agency for remote companies | Charisol">  
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <section className="index" id="panel" data-slideout-ignore>
        <div className="faq">
            <nav className="nav-index nav-top">
                <div className="nav-desktop-left">
                    <a className="logo" href="./index.html">
                        <img src={require('../assets/img/charisol_logo.svg')}  alt="Charisol Logo" />
                    </a>
                </div>
                <div className="harmburger">
                    <span className="first-child">
                    </span>
                    <span></span>
                    <span className="last-child">
                    </span>
                </div>
        </nav>
        <div className="Container">
            <div className="content">
                <div className="text-content">
                    <h1> Frequently Asked Questions (FAQ) </h1>
                </div>
                <div className="m-b-lg">
                    <h5>Q: How do I hire a developer on Charisol?</h5>
                    <p>
                        1. Send us a brief about your project
                        Let us know what type of developers you are looking for. The more you share, the faster we can help you find suitable candidates. 
                    </p>
                    <p>
                        2. Interview developers 
                        We will arrange interviews between you and the shortlisted developers. You will get to learn more about their technical qualifications and soft skills before making a hiring decision.
                    </p>
                    <p>
                        3. Hire effortlessly 
                        Once the hiring decision is made, you can start working with the developer directly. We will assign you an engagement manager to take care of all the paperwork and payment processing.
                    </p>
                </div>
                <div className="m-b-lg">
                    <h5>Q: How long does it take to receive a shortlist of candidates? </h5>
                    <p>
                        It typically takes only 24 - 72 hours for our clients to receive a shortlist of top candidates. However, if the request is complex or for niche technologies, it might take slightly longer.
                    </p>
                </div>
                <div className="m-b-lg">
                    <h5>Q: Can I hire Charisol developers as full-time employees?  </h5>
                    <p>
                        Definitely! A fair contract-to-hire fee will apply. To learn more please send us a message with further details.
                    </p>
                </div>
                <div className="m-b-lg">
                    <h5>Q: Where are your freelance developers based?  </h5>
                    <p>
                        Charisol developers are based all across the globe, with most of them located in Africa. You can find web and mobile app developers based in Nigeria as well as other cities around the world.
                    </p>
                </div>
                <div className="m-b-lg">
                    <h5>Q: Do I get to work with the developer directly?  </h5>
                    <p>
                        Absolutely! You will work with the developer directly once the engagement starts.
                    </p>
                </div>
            <div className="m-b-lg">
              <h5>Q: What is your developer vetting process?  </h5>
              <p>
                Charisol has a very strict vetting process. Freelance developers are tested on their technical skills, communication skills, and project management skills. This vetting process is designed to make sure that the developers we offer are truly the best in their domains.
              </p>
            </div>
            <div className="m-b-lg">
              <h5>Q: What if I am not satisfied with a Charisol developer?  </h5>
              <p>
                If you are not satisfied with a Charisol developer, please let us know immediately, and we will try our best to resolve the issue. 
              </p>
            </div>
            <div className="m-b-lg">
              <h5>Q: Is my engagement’s confidentiality protected? </h5>
              <p>
                Yes, we provide an NDA to protect the confidentiality of your request. All Charisol developers are also covered under the agreement.
              </p>
            </div>
            <div className="m-b-lg">
              <h5>Q: Who will own the intellectual property? </h5>
              <p>
                As a client, you will own the intellectual property of all paid-for work.
              </p>
            </div>
            </div>
        </div>
      </div>
      </section>
      </Layout>
)

export default Index