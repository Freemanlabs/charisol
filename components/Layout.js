import React from 'react'
import { initGA, logPageView } from '../utils/analytics'

import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

export default class Layout extends React.Component {
  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

const Layout = (props) => (
  <div>
    <Sidebar />
     <Header title={props.title} content={props.content}/>
     <div style={{backgroundColor: '#E0E0E0'}}>{props.children}</div>
    <Footer />
  </div>
)

export default Layout