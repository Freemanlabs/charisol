import Layout from '../components/Layout';
import Navbar from '../components/Navbar';

const Team = () => (
  <Layout  title="About Us | Charisol">
  <section class="team" id="panel" data-slideout-ignore>
      <div class="content-cover"></div>

      <div class="row core">
        <div class="six columns">
          <div class="text-content">
              <span class="heading-wrapper">
                  <h1 class="heading no-reveal">
                      Core team.
                  </h1>
              </span>
              <span class="sub-text-wrapper">
                <p class="sub-text no-reveal">                
                  We are a team of young and vibrant techies filled with loads of passion for what we do. We are proud workaholics who drink
                  a little too much coffee and believe in power naps.
                </p>
              </span>
              <span class="sub-text-wrapper">
                <p class="sub-text no-reveal">  
                  Our mutual desire to change the world through cutting edge programming techniques is what keeps us together. Occasionally
                  we try to listen to our mothers and know when to pull an all nighter and when to catch 40 winks.
                </p>
            </span>
          </div>
        </div>
        <div class="six columns img-col">
          <div class="image-wrapper-container">
            <div class="image-wrapper no-reveal">
              <div class="image" style={{backgroundImage: "url('assets/img/bg_team_1.png')"}} ></div>
            </div>
          </div>
        </div>
      </div>
      <div class="people-wrapper">
        <div id="people" class="row people">
          <div id="people-wrapper">
            
          </div>
        </div>
      </div>
    </section>
  </div>
  </Layout>
)