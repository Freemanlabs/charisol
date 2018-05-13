import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import stylesheet from '../styles/about.scss';
import fetch from 'isomorphic-unfetch'
import React, { Component } from 'react'
import Background from '../assets/img/bg_team_1.png';

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [],
      user: {}
    }
     this.getUserInfo = this.getUserInfo.bind(this);
  }

  componentDidMount() {
    console.log(process)
    fetch(`/api/get-teams`)
    .then((res) => res.json())
    .then((data) => this.setState({teams: data}))
  }


  
  getUserInfo(userInfo) {
    this.setState({user: userInfo})
  }

  render() {
    return (
      <Layout title="Team | Charisol">
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <nav id="profile" className="profile">
          <div className="head">
            <h5 className="light">Profile Details</h5>
            <span className="close close-red"></span>
          </div>
          <div>
            <div className='top-info'>
              <div className='row'>
                <div className='six columns'>
                  <img src={this.state.user.image_url} alt='team member' className='avatar' style={{with: '54%'}} />
                </div>
                <div className='six columns'>
                  <h5 className='bold'>{this.state.user.firstName} {this.state.user.lastName}</h5>
                  <p>{this.state.user.position}</p>
                  <span className='blue-badge'>
                    <span className='circle'></span>Core team</span>
                </div>
              </div>
            </div>
            <div className='m-t-md m-b-md'>
              <p>{this.state.user.description}</p>
            </div>
          </div>
          <a className="btn-curve-purple m-t-md" href="./start.html">
            Start a project
          <img src="../static/img/icon_right_white.svg" alt="right" />
          </a>
        </nav>


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
                  <div className="image team-image" alt="team" style={{ backgroundImage: 'url(' + Background + ')' }}>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="people-wrapper">

            <div id="people" className="row people">
              <div id="people-wrapper" >
                {this.state.teams.map((team, i) => (

                  <div className="tile" key={i}>
                    <div className="avatar-wrapper">
                      <div className="avatar" alt="team member" style={{ backgroundImage: 'url(' + team.image_url + ')' }}></div>
                    </div>
                    <div className="text-wrap">
                      <div className="sub-text-wrapper">
                        <h5 className="bold sub-text">{team.firstName} {team.lastName}</h5>
                      </div>
                      <div className="sub-text-wrapper">
                        <p className="light sub-text">{team.position}</p>
                      </div>
                    </div>
                    <button className="team-profile-btn btn-clear-purple" onClick={(e)=> this.getUserInfo(team)} data-person-id={team._id}>View Profile<img src={require('../assets/img/icon_right_purple.svg')} alt="right" /></button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}


export default Team