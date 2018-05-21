import Link from 'next/link';
import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DraftsIcon from '@material-ui/icons/Drafts';
import Icon from '@material-ui/core/Icon';
import Collapse from '@material-ui/core/Collapse';

const drawerWidth = '100%';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
});

class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = { open: true };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  render() {
    const { classes } = this.props;
    return (
      <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }} anchor="left" >
        <Divider />
        <List component="nav">
          <ListItem button button onClick={this.handleToggle}>
            <ListItemIcon>
              <Icon>account_box</Icon>
            </ListItemIcon>
            <ListItemText primary="Manage Users" />
          </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemText inset primary="All Users" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button>
            <ListItemIcon>
              <Icon>message</Icon>
            </ListItemIcon>
            <ListItemText primary="Manage Messages" />
          </ListItem>
        </List>
      </Drawer>
    )
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sidebar);