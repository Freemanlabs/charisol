import Link from 'next/link';
import React, { Component } from 'react'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';


export default class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: true};
  }

  handleToggle = () => this.setState({open: !this.state.open});

render () {
    return (
    <div style={{margin: "0px", padding: "0px", height: '0px'}}>
          <Drawer open={this.state.open}>
            <MenuItem>construction</MenuItem>
            <MenuItem>construction</MenuItem>
          </Drawer>
    </div>
  )
 }
}