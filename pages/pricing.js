import Link from 'next/link';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import stylesheet from '../styles/index.scss';

const Pricing = (props) => (
  <Layout title="Pricing | Charisol Technologies">
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <section className="pricing" id="panel" data-slideout-ignore>
      <Navbar />
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
                We offer value based pricing because no two Softwares are the same neither are the value added. 
                We prioritize value over gouging our clients. Request a free quote!
                                </p>
              </span>
            </div>

          </div>
        </div>
        
      </div>
    </section>

      

  </Layout>
)

export default Pricing