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
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
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
import IconButton from '@material-ui/core/IconButton';
import Link from 'next/link';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';




const initialState = {
  submitting: false,
  submitted: false,
  open: false,
  vertical: null,
  horizontal: null,
  currentUser: {},
  selectedUserId: "",
  users: [],
  openDeleteDialog: false
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '95%',
    margin: '30px auto'
  },

  button: {
    margin: theme.spacing.unit,
  },


  group: {
    margin: `${theme.spacing.unit}px 0`,
  }
});


class AdminUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    }
    //this.submitForm = this.submitForm.bind(this);
    this.openDeleteDialogHandler = this.openDeleteDialogHandler.bind(this);
    this.handleDeleteUser = this.handleDeleteUser.bind(this);
    this.handleDontDelete = this.handleDontDelete.bind(this);
  }

  getUsers() {
    fetch(`/api/get-teams`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ users: data })
      }
      )
  }



  componentDidMount() {
    this.getUsers();
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

  openDeleteDialogHandler(id) {
    this.setState({ openDeleteDialog: true, selectedUserId: id });
  };

  handleDeleteUser(event) {
    this.setState({ openDeleteDialog: false, submitted: true });

    fetch(`/api/team/${this.state.selectedUserId}`, {
      method: 'delete',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      response.json().then((res) => {
        if (res.status === 201 && res.success === true) {
          this.getUsers()
          this.setState({ submitting: false, vertical: 'top', horizontal: 'center', open: true });
        } else {
          this.setState({ submitting: false, vertical: 'top', horizontal: 'center', open: true });
        }
      })
    })

  }

  handleDontDelete() {
    this.setState({ openDeleteDialog: false });
  }








  render() {
    const { classes } = this.props;
    const { input, open, vertical, horizontal, valueSkillBind } = this.state;


    return (
      <Dashboard pageName="Charisol Staffs">
        <div className={classes.root}>
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            onClose={this.handleCloseSnackbar}
            autoHideDuration={6000}
            ContentProps={{
              'aria-describedby': 'message-id',
            }}
            action={[
              <Icon onClick={this.handleCloseSnackbar}>close</Icon>
            ]}
            message={<span id="message-id">User has been deleted</span>}
          />
          <Grid container spacing={24} alignItems="center">
            <Grid item xs={8} sm={12}>
              <Paper className={classes.root}>
                {this.state.submitting ? (<LinearProgress color="secondary" />) : ('')}
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell>suffle</TableCell>
                      <TableCell>S/N</TableCell>
                      <TableCell>First Name</TableCell>
                      <TableCell>Last Name</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Phone Number</TableCell>
                      <TableCell>Position</TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.state.users.map((n, i) => {
                      return (
                        <TableRow key={n._id}>
                          <TableCell >
                            <IconButton className={classes.button} aria-label="delete">
                              <Icon>drag_handle</Icon>
                            </IconButton>
                          </TableCell>
                          <TableCell >{i + 1}</TableCell>
                          <TableCell >{n.firstName}</TableCell>
                          <TableCell >{n.lastName}</TableCell>
                          <TableCell >{n.email}</TableCell>
                          <TableCell >{n.phoneNumber}</TableCell>
                          <TableCell >{n.position}</TableCell>
                          <TableCell>
                            <Grid container spacing={24} alignItems="center">
                              <Grid item xs={8} sm={6}>
                                <IconButton color="secondary" onClick={(e) => this.openDeleteDialogHandler(n._id)} aria-label="delete">
                                  <Icon>delete</Icon>
                                </IconButton>
                              </Grid>
                              <Grid item xs={8} sm={6}>
                                <Link as={`/dashboard/profile/${n._id}`} href={`/admin-profile?_id=${n._id}`}>
                                  <IconButton aria-label="delete">
                                    <Icon>create</Icon>
                                  </IconButton>
                                </Link>
                              </Grid>
                            </Grid>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </Paper>
            </Grid>
          </Grid>

          <Dialog
            open={this.state.openDeleteDialog}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Are you sure?"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Are you sure you want to permanetly delete this user?
            </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={(e) => this.handleDontDelete(e)} color="primary">
                No
            </Button>
              <Button onClick={(e) => this.handleDeleteUser(e)} color="secondary" autoFocus>
                Yes
            </Button>
            </DialogActions>
          </Dialog>
        </div>
      </Dashboard>
    );
  }
}

AdminUser.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdminUser);