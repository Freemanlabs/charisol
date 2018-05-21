import Header from '../admin/Header';
import Sidebar from '../admin/Sidebar';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#E0E0E0'
  },
  paper: {
    height: 140,
    width: 100,
  }
});

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
  }
  state = {
    spacing: '16',
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;

    return (
      <Grid container className={classes.root} >
        <Grid container  spacing={0}>
            <Grid item xs={8} sm={2}>
              <Sidebar />
            </Grid>
            <Grid item xs={8} sm={10}>
              <Header />
              {this.props.children}
            </Grid>
        </Grid>
      </Grid>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard)