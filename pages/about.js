import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import stylesheet from '../styles/about.scss';
import Link from 'next/link';

 const About = (props) => (
   <Layout  title="About Us | Charisol Technologies"> 
   <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
   
    <div id="panel"  data-slideout-ignore>
      <section className="pricing">
      <Navbar />
        <div className="content">
          <div className="row">
            <div className="pricing-text-wrapperm">
              <div className="text-content">
                <span className="heading-wrapper">
                    <h1 className="heading no-reveal">
                      About Charisol
                    </h1>
                </span>
                <span className="sub-text-wrapper">
                  <p className="sub-text no-reveal">
                      Back in 2012, I was approached to build a simple coupon site application. With great excitement, I jumped at the opportunity to help a friend who had extensive experience working in a coupon company and hoped to own one, achieve a long term goal. 
                      See, at best I was a full stack backend engineer but that would even be stretching the truth. I found a template and wired up the front end to show live data and thought I was done. I discovered the small iterations took me longer than I would have spent wiring up the whole backend. It dawned on me, if I could not build a great looking coupon site from ground up, I cannot solve the numerous ideas I have painstakingly written down over the years. I knew I needed a team to journey alongside me with an open mind to interact with the problems within our sphere of imagination. This thought led me on the journey of putting together a capable, well rounded rockstar team with diverse skills that mesh into a coherent whole, my avengers!
                      Our heartbeats to the melody of solutions that make music in the veins of those whose problems we partner with to solve. The vision of the company and by extension this team is to be a physical extension of a Graceful God. This vision is enshrined in the name of the company (Charisol - Charis Solutions), the logo, and the processes, products and people. Our culture is being crafted to pass through those who pass through us. 
                  </p>
                </span>
                <span className="sub-text-wrapper">
                  <p className="sub-text no-reveal">
                      So what do we do? How do we translate our call? We seek to do this in the following ways:
                      Building a strong network of highly skilled individuals with skillsets that span the full spectrum involved in researching a problem through designing, engineering, marketing and analysing the solution for optimization. Our community consists of young minds we equip and encourage take part of software engineering projects by connecting them to our network. 
                      Providing them opportunities to get hands on experience designing, building and marketing solutions to problems around us.
                      Seeking opportunities to make a difference by focusing on creating impact, by so doing solving problems over monetary gains.
                      Ensuring the long term health of the company is taken care of by providing expertise to help Companies solve problems in their industries.
                  </p>
                </span>
                </div>
               
                <a href="/start" className="btn-curve-purple m-t-md">
                  Start a project
                  <img src={require('../assets/img/icon_right_white.svg')}  alt="right" />
                </a>
             
              </div>
            </div>
            {/*<div className="pricing-wrapper columns">
              <div className="row pricing-wrapper-container">
              </div>
 </div>*/}
          </div>
      </section>
    </div>

    <style jsx>{`
      .sub-text{
        line-height:27px;
      }
    `}</style>
   </Layout> 
  )

  export default About