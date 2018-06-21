import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import 'react-select/dist/react-select.css';
import Dashboard from '../components/admin/Dashboard';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import LinearProgress from '@material-ui/core/LinearProgress';
import Snackbar from '@material-ui/core/Snackbar';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';





const initialState = {
  submitting: false,
  submitted: false,
  input: {
    name: "",
    description: ""
  },
  currentUser: {},
  allSkills: []
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '90%',
    margin: '30px auto'

  },
 

  group: {
    margin: `${theme.spacing.unit}px 0`,
  }
});


class AdminProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    }
    this.submitForm = this.submitForm.bind(this);
    // this.handleClose = this.handleClose.bind(this);
  }

  getSkills() {
    fetch(`/api/get-skills`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ allSkills: data })
      }
      )
  }

  componentDidMount() {
    this.getSkills();
  }

  getUserLocally() {
    return JSON.parse(localStorage.getItem('user'))
  }

  setUserLocally(user) {
    localStorage.setItem('user', JSON.stringify(user))
    return user
  }

  getUserInfo(userInfo) {
    this.setState({ user: userInfo })
  }


  handleInputChange = newPartialInput => {
    this.setState(state => ({
      ...state,
      input: {
        ...state.input,
        ...newPartialInput
      }
    }))
  }



  submitForm(event) {
    this.setState({ submitted: true })
    event.preventDefault();
    const { input } = this.state;
    this.setState({ submitting: true })
    fetch(`/api/skill`, {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(input)
    }).then((response) => {
      response.json().then((res) => {
        if (res.status === 201 && res.success === true) {
          this.setState({ submitting: false, vertical: 'top', horizontal: 'center', open: true });
          this.getSkills();
        } else {
          this.setState({ submitting: false, vertical: 'top', horizontal: 'center', open: true });
        }
      })
    })
  }

  render() {
    const { classes } = this.props;
    const { input, open, vertical, horizontal, valueSkillBind } = this.state;


    return (
      <Dashboard  pageName="Manage Skills">
        <div className={classes.root}>
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            onClose={this.handleClose}
            autoHideDuration={6000}
            ContentProps={{
              'aria-describedby': 'message-id',
            }}
            action={[
              <Icon onClick={this.handleClose}>close</Icon>
            ]}
            message={<span id="message-id">Updated</span>}
          />
          <Grid container spacing={24} alignItems="center">
            <Grid item xs={8} sm={6}>
              <Paper className={classes.root}>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Description</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.state.allSkills.map(n => {
                      return (
                        <TableRow key={n._id}>
                          <TableCell >{n.name}</TableCell>
                          <TableCell >{n.description}</TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </Paper>
            </Grid>
            <Grid item xs={8} sm={6}>
            
              <form onSubmit={this.submitForm}>
              <Typography variant="title" gutterBottom>Create Skillset</Typography>
                <Card className={classes.card}>
                
                  <CardContent>
                    
                    <Grid container spacing={24} alignItems="center">
                      <Grid item xs={8} sm={6}>
                        <FormControl className={classes.margin} fullWidth={true}>
                          <InputLabel htmlFor="input-with-icon-adornment">Enter Name</InputLabel>
                          <Input value={input.name} onChange={(e) => this.handleInputChange({ name: e.target.value })} fullWidth={true} id="input-with-icon-adornment"
                            startAdornment={
                              <InputAdornment position="start">

                              </InputAdornment>
                            }
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={8} sm={6}>
                        <FormControl className={classes.margin} fullWidth={true}>
                          <InputLabel htmlFor="input-with-icon-adornment">Enter  description</InputLabel>
                          <Input value={input.description} onChange={(e) => this.handleInputChange({ description: e.target.value })} fullWidth={true}
                            id="input-with-icon-adornment"
                            startAdornment={
                              <InputAdornment position="start">

                              </InputAdornment>
                            }
                          />
                        </FormControl>
                      </Grid>
                    </Grid>

                    <FormControl style={{ marginTop: 20 }} fullWidth={true} >
                      {this.state.submitting ? (<LinearProgress color="secondary" />) : ('')}
                      <Button variant="raised" type="submit" size="large" color="primary" className={classes.button}>Create</Button>
                    </FormControl>
                  </CardContent>
                </Card>
              </form>
            </Grid>
          </Grid>

        </div>
      </Dashboard>
    );
  }
}

AdminProfile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdminProfile);