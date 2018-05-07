import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import stylesheet from '../styles/about.scss';

const Team = () => (
  <Layout  title="Team | Charisol">
  <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
  <section className="team" id="panel" data-slideout-ignore>
      <Navbar />
      <div className="content-cover"></div>
      <div className="row core">
        <div className="six columns">
          <div className="text-content">
              <span className="heading-wrapper">
                  <h1 className="heading">
                      Core team.
                  </h1>
              </span>
              <span className="sub-text-wrapper">
                <p className="sub-text">                
                  We are a team of young and vibrant techies filled with loads of passion for what we do. We are proud workaholics who drink
                  a little too much coffee and believe in power naps.
                </p>
              </span>
              <span className="sub-text-wrapper">
                <p className="sub-text">  
                  Our mutual desire to change the world through cutting edge programming techniques is what keeps us together. Occasionally
                  we try to listen to our mothers and know when to pull an all nighter and when to catch 40 winks.
                </p>
            </span>
          </div>
        </div>
        <div className="six columns img-col">
          <div className="image-wrapper-container">
            <div className="image-wrapper">
              <div className="image" style={{backgroundImage: "url('assets/img/bg_team_1.png')"}} ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="people-wrapper">
       
            <div id="people" className="row people">
              <div id="people-wrapper">
                <div className="tile">
                  <div className="avatar-wrapper">
                    <div class="avatar" alt="team member" style={{backgroundImage: "url('../assets/img/dolapo.jpg')"}}></div>
                  </div>
                  <div className="text-wrap">
                    <div className="sub-text-wrapper">
                      <h5 className="bold sub-text">Adedolapo Olisa</h5>
                    </div>
                    <div className="sub-text-wrapper">
                      <p className="light sub-text">Founder</p>
                    </div>
                  </div>
                  <button className="team-profile-btn btn-clear-purple" data-person-id="1">View Profile<img src={require('../assets/img/icon_right_purple.svg')} alt="right" /></button>
                </div>
              </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default Team