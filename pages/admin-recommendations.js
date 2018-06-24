import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FileUpload from "@material-ui/icons/FileUpload";
import IconButton from "@material-ui/core/IconButton";
import green from "@material-ui/core/colors/green";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Save from "@material-ui/icons/Save";
import Dashboard from "../components/admin/Dashboard";
import Grid from "@material-ui/core/Grid";
import Snackbar from "@material-ui/core/Snackbar";
import Icon from "@material-ui/core/Icon";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Link from "next/link";


const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "95%",
    margin: "30px auto"
  },

  button: {
    margin: theme.spacing.unit
  },

  group: {
    margin: `${theme.spacing.unit}px 0`
  }
});



class AdminRecommendee extends React.Component {
  state = {
    imageUrl: "",
    name: "",
    praise: "",
    recommender: "",
    company: "",
    recommendations: [],
    submitting: false,
    submitting: false,
    submitted: false,
    open: false,
    vertical: null,
    horizontal: null,
    currentUser: {},
    selectedUserId: "",
    users: [],
    openDeleteDialog: false
  };

  getRecommendations() {
    fetch("/api/get-recommendations")
      .then(res => res.json())
      .then(data => {
        this.setState({ recommendations: data });
      });
  }

  componentDidMount() {
    this.getRecommendations();
  }

  handleimageUrl = event => {
    this.setState({ imageUrl: event.target.value });
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handlePraiseChange = event => {
    this.setState({ praise: event.target.value });
  };

  handleRecommenderChange = event => {
    this.setState({ recommender: event.target.value });
  };

  handleCompanyChange = event => {
    this.setState({ company: event.target.value });
  };

  resetForm = () => {
    document.getElementById("form").reset();
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch("/api/recommendations", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    }).then(response => {
      response.json();
      console.log("done");
      this.resetForm();
    });
    this.getRecommendations();
  };

  handleSubmitClick = event => {
    this.handleSubmit(event);
  };

  openDeleteDialogHandler(id) {
    this.setState({ openDeleteDialog: true, selectedUserId: id });
  }

  handleDeleteUser(event) {
    this.setState({ openDeleteDialog: false, submitted: true });

    fetch(`/api/recommendations/${this.state.selectedUserId}`, {
      method: "delete",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    }).then(response => {
      response.json().then(res => {
        if (res.status === 201 && res.success === true) {
          this.getRecommendations();
          this.setState({
            submitting: false,
            vertical: "top",
            horizontal: "center",
            open: true
          });
        } else {
          this.setState({
            submitting: false,
            vertical: "top",
            horizontal: "center",
            open: true
          });
        }
      });
    });
  }

  handleDontDelete() {
    this.setState({ openDeleteDialog: false });
  }

  render() {
    const { classes } = this.props;

    const { recommendations } = this.state;

    const theme = createMuiTheme({
      palette: {
        primary: green
      }
    });

    return (
      <Dashboard>



        <Grid item xs={8} sm={6} justify="center">
          <form
            className={classes.container}
            noValidate
            autoComplete="off"
            id="form"
            onSubmit={this.handleSubmit}
          >
            <TextField
              id="photo"
              label="Developer's Avatar"
              className={classes.textField}
              defaultValue={this.state.imageUrl}
              onChange={this.handleimageUrl}
              margin="normal"
              fullWidth
            />

            <TextField
              id="Name"
              label="Developer's Name"
              className={classes.textField}
              defaultvalue={this.state.name}
              onChange={this.handleNameChange}
              margin="normal"
              fullWidth
            />

            <TextField
              id="multiline-flexible"
              label="Praise"
              multiline
              rowsMax="4"
              defaultvalue={this.state.praise}
              onChange={this.handlePraiseChange}
              className={classes.textField}
              margin="normal"
              fullWidth
            />

            <TextField
              id="Name"
              label="Recommender"
              className={classes.textField}
              defaultvalue={this.state.recommender}
              onChange={this.handleRecommenderChange}
              margin="normal"
              fullWidth
            />

            <TextField
              id="Name"
              label="Recommender Company"
              className={classes.textField}
              defaultvalue={this.state.company}
              onChange={this.handleCompanyChange}
              margin="normal"
              fullWidth
            />

            <Button
              variant="contained"
              size="small"
              className={classes.button}
              color="primary"
              onClick={this.handleSubmitClick}
            >
              <Save
                className={classNames(classes.leftIcon, classes.iconSmall)}
              />
              Save
            </Button>
          </form>


        </Grid>


        <div className={classes.root}>

          <Grid container spacing={24} alignItems="center">
            <Grid item xs={8} sm={12}>
              <Paper className={classes.root}>
                {this.state.submitting ? (
                  <LinearProgress color="secondary" />
                ) : (
                    ""
                  )}
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell>S/N</TableCell>
                      <TableCell>Developer's image url</TableCell>
                      <TableCell>Developer's name</TableCell>
                      <TableCell>Praise</TableCell>
                      <TableCell>Recommender</TableCell>
                      <TableCell>Recommender company</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.state.recommendations.map((n, i) => {
                      return (
                        <TableRow key={n._id}>
                          <TableCell>{i + 1}</TableCell>
                          <TableCell>{n.imageUrl}</TableCell>
                          <TableCell>{n.name}</TableCell>
                          <TableCell>{n.praise}</TableCell>
                          <TableCell>{n.recommender}</TableCell>
                          <TableCell>{n.company}</TableCell>
                          <TableCell>
                            <Grid container spacing={24} alignItems="center">
                              <Grid item xs={8} sm={6}>
                                <IconButton
                                  color="secondary"
                                  onClick={e =>
                                    this.openDeleteDialogHandler(n._id)
                                  }
                                  aria-label="delete"
                                >
                                  <Icon>delete</Icon>
                                </IconButton>
                              </Grid>
                              <Grid item xs={8} sm={6}>
                                <Link
                                  as={`/dashboard/profile/${n._id}`}
                                  href={`/admin-profile?_id=${n._id}`}
                                >
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
              <Button onClick={e => this.handleDontDelete(e)} color="primary">
                No
              </Button>
              <Button
                onClick={e => this.handleDeleteUser(e)}
                color="secondary"
                autoFocus
              >
                Yes
              </Button>
            </DialogActions>
          </Dialog>
        </div>


      </Dashboard>
    );
  }
}

AdminRecommendee.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AdminRecommendee);