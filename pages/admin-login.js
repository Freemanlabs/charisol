
import fetch from 'isomorphic-unfetch'
import React, { Component } from 'react'
import Layout from '../components/admin/Layout';
import Router from 'next/router'


const initialState = {
  saving: false,
  save: false,
  user: {
      firstName: '',
      lastName: '',
      email: '',
      image_url: ''
  },
  error: {
      openError: false,
      errMessage: ''
  }
}

class AdminLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
      loignCode: props.url.query.code
    }  
  }

  


  componentDidMount() {
    if (this.state.loignCode !== undefined) {
        this.setState({saving: true})
        fetch(`https://slack.com/api/oauth.access?client_id=128855814131.364624341426&client_secret=fcffdec17a2d48361b4467356339bc71&code=${this.state.loignCode}`)
        .then((res) => res.json())
        .then((data) => {
            if (data.ok) {
             this.saveUserData(data)
            } else {
                this.setState({error: {openError: true, errMessage: data}})
            } 
         }
        )
    }
  }

  saveUserData(userReponse) {
      const {user} = userReponse;
      this.setState({user: { 
          firstName: user.name.split(' ')[0], 
          lastName: user.name.split(' ')[1],
          image_url: user.image_192,
          email: user.email
      }})
    fetch(`/api/update-create/${user.email}`, {
        method: 'post',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state.user)
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        this.setState({saving: false, save: true})
        localStorage.setItem('access_token', userReponse.access_token);
        Router.push({ pathname:'/admin-home', query: { _id: data.user._id }});
    })
  } 
 

  render() {
      const state = this.state;
    return (
    <div>
       <a style={{left: '45%', position: 'absolute', top: '45%'}} href="https://slack.com/oauth/authorize?scope=identity.basic,identity.email,identity.team,identity.avatar&client_id=128855814131.364624341426"><img alt="Sign in with Slack" height="40" width="172" src="https://platform.slack-edge.com/img/sign_in_with_slack.png" srcset="https://platform.slack-edge.com/img/sign_in_with_slack.png 1x, https://platform.slack-edge.com/img/sign_in_with_slack@2x.png 2x" /></a>
    </div>
    )
  }
}


export default AdminLogin