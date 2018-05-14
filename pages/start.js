import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import stylesheet from '../styles/about.scss';
import fetch from 'isomorphic-unfetch'
import React, { Component } from 'react'

class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [],
      user: {}
    }
  }

  render() {
    return (
    <Layout title="Start a Project | Charisol Technologies">
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <div id="panel" data-slideout-ignore>
        <section class="start">
          <Navbar />
            <div class="container">
              <div class="content">
                <div class="text-content">
                  <span class="heading-wrapper">
                      <h1 class="heading no-reveal">
                        Start a Project
                      </h1>
                  </span>
                  
                  <div>
                    <form id="start-form">
                      <div class="row">
                        <div class="six columns">
                          <div class="div">
                            <label for="name">Name</label>
                            <input class="u-full-width" type="text" id="name" name="name" required />
                            <p class="light"><em>Tip: Could be your fullname or company name.</em></p>
                          </div>
                        </div>
                        <div class="six columns">
                          <div class="div">
                            <label for="email">Email</label>
                            <input class="u-full-width" type="email" id="email" name="email" required />
                            <p class="light"><em>Tip: Could be your personal email address or company email address.</em></p>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="six columns">
                          <div class="div">
                            <label for="tel">Tel</label>
                            <input class="u-full-width" type="number" id="tel" name="tel" required />
                            <p class="light"><em>Tip: Could be your personal telephone number or company  telephone number.</em></p>
                          </div>
                        </div>
                        <div class="six columns">
                          <div class="div">
                            <label for="date">Start Date</label>
                            <input class="u-full-width date" type="date" id="date" name="start_date" required />
                            <p class="light"><em>Tip: This is the proposed start date of the project.</em></p>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="six columns">
                          <div class="div">
                            <label for="billing">Billing</label>
                            <select class="u-full-width" id="billing"  name="billing" required>
                              <option value="hourly">Hourly - $35</option>
                              <option value="weekly">Weekly - $1,300</option>
                              <option value="monthly">Monthly - $4,800</option>
                              <option value="onDemand">On demand - Varies</option>
                            </select>
                            <p class="light"><em>Tip: Your billing preference</em></p>
                          </div>
                        </div>
                        <div class="six columns">
                          <div class="div">
                            <label for="budget">Budget</label>
                            <input class="u-full-width" type="number" id="budget" name="budget" required />
                            <p class="light"><em>Tip: This amount is in USD ($).</em></p>
                          </div>
                        </div>
                      </div>
                      <div class="div">
                        <label for="project_description">Project Description (If your website had a job, what would it be?)</label>
                        <textarea class="u-full-width" id="message" rows="8" name="project_description" required></textarea>
                        <p class="light"><em>Tip: This helps you identify what type of website you are creating. Is it for lead gen? Is it informational? Is it a straight sales vehicle (SaaS, product sales, etc)? What *exactly* is the website supposed to do?</em></p>
                      </div>
                      <div>
                        <label for="personal">Personnel Needed</label>
                        <textarea class="u-full-width" id="personal" rows="8" name="personal" required></textarea>
                        <p class="light"><em>Tip: This could be a mix of frontend / backend engineers, UI/UX designers, project managers, etc.</em></p>
                      </div>
                      <button class="m-t-lg btn-curve-purple full" type="submit" value="Submit">Submit</button>
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