import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import stylesheet from '../styles/about.scss';
import fetch from 'isomorphic-unfetch'
import React, { Component } from 'react'

const initialState = {
  submitting: false,
  submitted: false,
  startForm: {
    name: "",
    email: "",
    tel: "",
    startDate: "",
    billing: "",
    budget: "",
    description: "",
    personalNeeded: ""
  }
} 

class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    }
    this.handleChange = this.handleInputChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(event) {
    event.preventDefault();
    const { startForm } = this.state;
    this.setState({ submitting: true })
    fetch('/api/projects', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(startForm)
    }).then((response) => {
      response.json().then((res) => {
        if (res.status === 201 && res.success === true) {
          this.setState({ submitted: true })
          this.setState(initialState)
          alert('Project request has sent!');
        } else {
          this.setState({ submitting: false });
          alert('Internal server error');
        }
      })
    })
  }

  handleInputChange(newPartialInput) {
    this.setState(state => ({
      ...state,
      startForm: {
        ...state.startForm,
        ...newPartialInput
      }
    }))
    console.log(this.state.startForm)
  }

  render() {
    const { startForm } = this.state;
    return (
    <Layout title="Start a Project | Charisol Technologies" ontent="At Charisol, we approach every project with deep commitment and passion, applying meticulous detail + craftsmanship at every stage of product development">
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <div id="panel" data-slideout-ignore>
        <section className="start">
          <Navbar />
            <div className="container">
              <div className="content">
                <div className="text-content">
                  <span className="heading-wrapper">
                      <h1 className="heading no-reveal">
                        Start a Project
                      </h1>
                  </span>
                  
                  <div>
                    <form id="start-form" onSubmit={this.submitForm}>
                      <div className="row">
                        <div className="six columns">
                          <div className="div">
                            <label htmlFor="name">Name</label>
                            <input className="u-full-width" value={startForm.name} onChange={e => this.handleInputChange({ name: e.target.value })} type="text" id="name" name="name" required />
                            <p className="light"><em>Tip: Could be your fullname or company name.</em></p>
                          </div>
                        </div>
                        <div className="six columns">
                          <div className="div">
                            <label htmlFor="email">Email</label>
                            <input className="u-full-width" value={startForm.email} onChange={e => this.handleInputChange({ email: e.target.value })} type="email" id="email" name="email" required />
                            <p className="light"><em>Tip: Could be your personal email address or company email address.</em></p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="six columns">
                          <div className="div">
                            <label htmlFor="tel">Tel</label>
                            <input className="u-full-width" value={startForm.tel} onChange={e => this.handleInputChange({ tel: e.target.value })} type="number" id="tel" name="tel" required />
                            <p className="light"><em>Tip: Could be your personal telephone number or company  telephone number.</em></p>
                          </div>
                        </div>
                        <div className="six columns">
                          <div className="div">
                            <label htmlFor="date">Start Date</label>
                            <input className="u-full-width date" value={startForm.startDate} onChange={e => this.handleInputChange({ startDate: e.target.value })} type="date" id="date" name="start_date" required />
                            <p className="light"><em>Tip: This is the proposed start date of the project.</em></p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="six columns">
                          <div className="div">
                            <label htmlFor="billing">Billing</label>
                            <select className="u-full-width" id="billing" value={startForm.billing} onChange={e => this.handleInputChange({ billing: e.target.value })}  name="billing" required>
                              <option value="hourly">Hourly - $35</option>
                              <option value="weekly">Weekly - $1,300</option>
                              <option value="monthly">Monthly - $4,800</option>
                              <option value="onDemand">On demand - Varies</option>
                            </select>
                            <p className="light"><em>Tip: Your billing preference</em></p>
                          </div>
                        </div>
                        <div className="six columns">
                          <div className="div">
                            <label htmlFor="budget">Budget</label>
                            <input className="u-full-width" type="number" value={startForm.budget} onChange={e => this.handleInputChange({ budget: e.target.value })} id="budget" name="budget" required />
                            <p className="light"><em>Tip: This amount is in USD ($).</em></p>
                          </div>
                        </div>
                      </div>
                      <div className="div">
                        <label htmlFor="project_description">Project Description (If your website had a job, what would it be?)</label>
                        <textarea className="u-full-width"  value={startForm.description} onChange={e => this.handleInputChange({ description: e.target.value })} id="message" rows="8" name="project_description" required></textarea>
                        <p className="light"><em>Tip: This helps you identify what type of website you are creating. Is it for lead gen? Is it informational? Is it a straight sales vehicle (SaaS, product sales, etc)? What *exactly* is the website supposed to do?</em></p>
                      </div>
                      <div>
                        <label htmlFor="personal">Personnel Needed</label>
                        <textarea className="u-full-width" value={startForm.personalNeeded.budget} onChange={e => this.handleInputChange({ personalNeeded: e.target.value })} id="personal" rows="8" name="personal" required></textarea>
                        <p className="light"><em>Tip: This could be a mix of frontend / backend engineers, UI/UX designers, project managers, etc.</em></p>
                      </div>
                      <button className="m-t-lg btn-curve-purple full" type="submit" value="Submit">Submit</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
     </Layout>
    )
  }
}

export default Start