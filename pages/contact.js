import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import stylesheet from '../styles/about.scss';
import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'

const initialState = {
  submitting: false,
  submitted: false,
  input: {
    email: "",
    name: "",
    message: ""
  }
}
class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    };
    this.handleChange = this.handleInputChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleInputChange(newPartialInput) {
    this.setState(state => ({
      ...state,
      input: {
        ...state.input,
        ...newPartialInput
      }
    }))
  }

  submitForm(event) {
    event.preventDefault();
    const { input } = this.state;
    this.setState({ submitting: true })
    fetch('/api/team/:id', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(input)
    }).then((response) => {
      response.json().then((res) => {
        if (res.status === 201 && res.success === true) {
          this.setState({ submitted: true })
          this.setState(initialState)
          alert('Message sent!');
        } else {
          this.setState({ submitting: false });
          alert('Internal server error');
        }
      })
    })
  }

  render() {
    const { input } = this.state;
    return (
      <Layout title="Contact Us | Charisol Technologies" content="Let us help you bring your projects to life and deliver your design/developments needs the right way.">
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <div id="panel" data-slideout-ignore>
          <section className="pricing">
            <Navbar />
            <div className="content">
              <div className="row">
                <div className="six columns">
                  <img src={require('../assets/img/bg_contact.png')} alt="Scaling software development teams." />
                </div>
                <div className="six columns">
                  <div className="text-content">
                    <span className="heading-wrapper">
                      <h1 className="heading no-reveal">
                        Get in Touch.
                   </h1>
                    </span>
                    <span className="sub-text-wrapper">
                      <p className="sub-text no-reveal">
                        Let’s help you figure out your software engineering and design needs.
                        We are super excited to get to chat with you and eager to work with you to bring your next project to life. Drop us a line or two and we will get in touch with you.
                      </p>
                    </span>
                    <div className="m-b-md">
                      <h6>Email: <a href="mailto:info@charisol.io?subject=From Charisol Website">info@charisol.io</a></h6>
                    </div>
                    <form id="start-form" onSubmit={this.submitForm}>
                      <div className="row">
                        <div className="six columns">
                          <div className="div">
                            <label htmlFor="name">Name</label>
                            <input value={input.name} onChange={e => this.handleInputChange({ name: e.target.value })} className="u-full-width" type="text" id="name" name="name" required />
                            <p className="light"><em>Tip: Could be your fullname or company name.</em></p>
                          </div>
                        </div>
                        <div className="six columns">
                          <div className="div">
                            <label htmlFor="email">Email</label>
                            <input value={input.email} onChange={e => this.handleInputChange({ email: e.target.value })} className="u-full-width" type="email" id="email" name="email" required />
                            <p className="light"><em>Tip: Could be your personal email address or company email address.</em></p>
                          </div>
                        </div>
                      </div>
                      <div className="div">
                        <label htmlFor="project_description">Message</label>
                        <textarea value={input.message} onChange={e => this.handleInputChange({ message: e.target.value })} className="u-full-width" id="message" rows="8" name="project_description" required></textarea>
                        <p className="light"><em>Tip: Could be a project brief, a partnership enquiry or asking about vacancies</em></p>
                      </div>
                      <button className={this.state.submitting ? 'full m-t-lg m-t-lg btn-curve-gray' : 'm-t-lg btn-curve-purple full'} type="submit" value="Submit">{this.state.submitting ? 'Submitting...' : 'Submit'}</button>
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


export default Contact