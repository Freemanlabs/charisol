import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CancelIcon from '@material-ui/icons/Cancel';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ClearIcon from '@material-ui/icons/Clear';
import Chip from '@material-ui/core/Chip';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import AdminLayout from '../components/admin/Layout';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import UpdateIcon from '@material-ui/icons/Update';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import LinearProgress from '@material-ui/core/LinearProgress';
import Snackbar from '@material-ui/core/Snackbar';


class Option extends React.Component {
  handleClick = event => {
    this.props.onSelect(this.props.option, event);
  };

  render() {
    const { children, isFocused, isSelected, onFocus } = this.props;

    return (
      <MenuItem
        onFocus={onFocus}
        selected={isFocused}
        onClick={this.handleClick}
        component="div"
        style={{
          fontWeight: isSelected ? 500 : 400,
        }}
      >
        {children}
      </MenuItem>
    );
  }
}

function SelectWrapped(props) {
  const { classes, ...other } = props;

  return (
    <Select
      optionComponent={Option}
      noResultsText={<Typography>{'No results found'}</Typography>}
      arrowRenderer={arrowProps => {
        return arrowProps.isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />;
      }}
      clearRenderer={() => <ClearIcon />}
      valueComponent={valueProps => {
        const { value, children, onRemove } = valueProps;

        const onDelete = event => {
          event.preventDefault();
          event.stopPropagation();
          onRemove(value);
        };

        if (onRemove) {
          return (
            <Chip
              tabIndex={-1}
              label={children}
              className={classes.chip}
              deleteIcon={<CancelIcon onTouchEnd={onDelete} />}
              onDelete={onDelete}
            />
          );
        }

        return <div className="Select-value">{children}</div>;
      }}
      {...other}
    />
  );
}

const ITEM_HEIGHT = 48;
const valueSkillBind = [];

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 250,
    width: '60%',
    margin: '30px auto'

  },
  chip: {
    margin: theme.spacing.unit / 4,
  },

  group: {
    margin: `${theme.spacing.unit}px 0`,
  },

  bigAvatar: {
    width: 100,
    height: 100,
    margin: '10px auto'
  },
  // We had to use a lot of global selectors in order to style react-select.
  // We are waiting on https://github.com/JedWatson/react-select/issues/1679
  // to provide a much better implementation.
  // Also, we had to reset the default style injected by the library.
  '@global': {
    '.Select-control': {
      display: 'flex',
      alignItems: 'center',
      border: 0,
      height: 'auto',
      background: 'transparent',
      '&:hover': {
        boxShadow: 'none',
      },
    },
    '.Select-multi-value-wrapper': {
      flexGrow: 1,
      display: 'flex',
      flexWrap: 'wrap',
    },
    '.Select--multi .Select-input': {
      margin: 0,
    },
    '.Select.has-value.is-clearable.Select--single > .Select-control .Select-value': {
      padding: 0,
    },
    '.Select-noresults': {
      padding: theme.spacing.unit * 2,
    },
    '.Select-input': {
      display: 'inline-flex !important',
      padding: 0,
      height: 'auto',
    },
    '.Select-input input': {
      background: 'transparent',
      border: 0,
      padding: 0,
      cursor: 'default',
      display: 'inline-block',
      fontFamily: 'inherit',
      fontSize: 'inherit',
      margin: 0,
      outline: 0,
    },
    '.Select-placeholder, .Select--single .Select-value': {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(16),
      padding: 0,
    },
    '.Select-placeholder': {
      opacity: 0.42,
      color: theme.palette.common.black,
    },
    '.Select-menu-outer': {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[2],
      position: 'absolute',
      left: 0,
      top: `calc(100% + ${theme.spacing.unit}px)`,
      width: '100%',
      zIndex: 2,
      maxHeight: ITEM_HEIGHT * 4.5,
    },
    '.Select.is-focused:not(.is-open) > .Select-control': {
      boxShadow: 'none',
    },
    '.Select-menu': {
      maxHeight: ITEM_HEIGHT * 4.5,
      overflowY: 'auto',
    },
    '.Select-menu div': {
      boxSizing: 'content-box',
    },
    '.Select-arrow-zone, .Select-clear-zone': {
      color: theme.palette.action.active,
      cursor: 'pointer',
      height: 21,
      width: 21,
      zIndex: 1,
    },
    // Only for screen readers. We can't use display none.
    '.Select-aria-only': {
      position: 'absolute',
      overflow: 'hidden',
      clip: 'rect(0 0 0 0)',
      height: 1,
      width: 1,
      margin: -1,
    },
  },
});

const initialState = {
  submitting: false,
  submitted: false,
  input: {
    firstName: "",
    lastName: "",
    image_url: "",
    phoneNumber: "",
    description: "",
    position: "",
    gender: "",
    email: "",
    address: "",
    biography: "",
    githubUsername: "",
    skills: []
  },
  currentUser: {},
  allSkills: []
}


class AdminHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
      currentUserId: props.url.query._id,
      single: null,
      multi: null,
      multiLabel: null,
      open: false,
      vertical: null,
      horizontal: null,
      valueSkillBind: []
    }
    this.submitForm = this.submitForm.bind(this);
    this.handleClose = this.handleClose.bind(this);
    
  }

  handleChange = name => value => {
    const params = value.map(el => {
      return el['value']
    })
   const newPartialInput = {[name]: params}
    this.setState(state => ({
      ...state,
      input: {
        ...state.input,
        ...newPartialInput
      }
    }))
  };

  getSkills() {
    fetch(`/api/get-skills`)
      .then((res) => res.json())
      .then((data) => {
        let suggestion =  data.map(suggestion => ({
          value: suggestion._id,
          label: suggestion.name,
        }));
        this.setState({allSkills: suggestion})
      }
    )
  }


  componentDidMount() {
    this.getSkills();
    this.getUser();
  }

 

  getUserLocally() {
    return JSON.parse(localStorage.getItem('user'))
  }
  
  setUserLocally(user) {
    localStorage.setItem('user', JSON.stringify(user))
    return user
  }



  getUser() {
     let userId = this.state.currentUserId;
    fetch(`/api/team/${userId}`)
      .then((res) => res.json())
      .then((user) => {
        this.setState({ input: user})
        this.setState( {valueSkillBind: user.skills.map(suggestion => ({
          value: suggestion._id,
          label: suggestion.name,
        }))});
        console.log(this.state.valueSkillBind);
        this.setUserLocally(user);
      })
  }
 
  getUserInfo(userInfo) {
    this.setState({user: userInfo})
  }


  handleInputChange = newPartialInput  => {
    this.setState(state => ({
      ...state,
      input: {
        ...state.input,
        ...newPartialInput
      }
    }))
  }

  handleClose = (event) => {
    this.setState({ open: false });
  };




  submitForm(event) {
    this.setState({ submitted: true })
    event.preventDefault();
    const { input } = this.state;
    this.setState({ submitting: true })
    fetch(`/api/team/${this.state.currentUserId}`, {
      method: 'put',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(input)
    }).then((response) => {
      response.json().then((res) => {
        if (res.status === 201 && res.success === true) {
          this.setState({ submitting: false, vertical: 'top', horizontal: 'center', open: true });
        } else {
          this.setState({ submitting: false, vertical: 'top', horizontal: 'center', open: true });
        }
      })
    })
  }

  render() {
    const { classes } = this.props;
    const  {input, open, vertical, horizontal, valueSkillBind}  = this.state;
    console.log(valueSkillBind);
 
    return (
      <AdminLayout>
        <div className={classes.root}>
          <Avatar
            alt="Adelle Charles"
            src={input.image_url}
            className={classes.bigAvatar}
          />
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

          <form onSubmit={this.submitForm}>
            <Card className={classes.card}>
              <CardContent>
              
                <Grid container spacing={24} alignItems="center">
                  <Grid item xs={8} sm={6}>
                    <FormControl className={classes.margin} fullWidth={true}>
                      <InputLabel  htmlFor="input-with-icon-adornment">Enter First Name</InputLabel>
                      <Input value={input.firstName} onChange={(e) => this.handleInputChange({ firstName: e.target.value })} fullWidth={true} id="input-with-icon-adornment"
                        startAdornment={
                          <InputAdornment position="start">
                            <AccountCircle />
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={8} sm={6}>
                    <FormControl className={classes.margin} fullWidth={true}>
                      <InputLabel  htmlFor="input-with-icon-adornment">Enter Last Name</InputLabel>
                      <Input value={input.lastName} onChange={(e) => this.handleInputChange({ lastName: e.target.value })} fullWidth={true}
                        id="input-with-icon-adornment"
                        startAdornment={
                          <InputAdornment position="start">
                            <AccountCircle />
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container spacing={24} alignItems="center">
                  <Grid item xs={8} sm={6}>
                    <FormControl  className={classes.margin} fullWidth={true} >
                      <InputLabel htmlFor="input-with-icon-adornment">Enter Email</InputLabel>
                      <Input value={input.email} onChange={(e) => this.handleInputChange({ email: e.target.value })} fullWidth={true} id="input-with-icon-adornment"
                        startAdornment={
                          <InputAdornment position="start">
                            <Icon>email </Icon>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={8} sm={6}>
                    <FormControl className={classes.margin} fullWidth={true} >
                      <InputLabel  htmlFor="input-with-icon-adornment">Enter Phone Number</InputLabel>
                      <Input value={input.phoneNumber} onChange={(e) => this.handleInputChange({ phoneNumber: e.target.value })} fullWidth={true} id="input-with-icon-adornment"
                        startAdornment={
                          <InputAdornment position="start">
                            <Icon>phone</Icon>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </Grid>
                </Grid>

                <Grid container spacing={24} alignItems="center">
                  <Grid item xs={8} sm={6}>
                    <FormControl className={classes.margin} fullWidth={true} >
                      <InputLabel htmlFor="input-with-icon-adornment">Enter Github username</InputLabel>
                      <Input value={input.githubUsername} value={input.githubUsername} onChange={(e) => this.handleInputChange({ githubUsername: e.target.value })} fullWidth={true} id="input-with-icon-adornment"
                        startAdornment={
                          <InputAdornment position="start">
                            <Icon>code</Icon>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={8} sm={6}>
                    <FormControl className={classes.margin} fullWidth={true} >
                      <InputLabel htmlFor="input-with-icon-adornment">Enter Slogan</InputLabel>
                      <Input value={input.slogan} onChange={(e) => this.handleInputChange({ slogan: e.target.value })} fullWidth={true} id="input-with-icon-adornment"
                        startAdornment={
                          <InputAdornment position="start">
                            <Icon>format_quote</Icon>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </Grid>
                </Grid>


                <Grid container spacing={24} alignItems="center">
                  <Grid item xs={8} sm={6}>
                    <FormControl className={classes.margin} fullWidth={true} >
                      <InputLabel htmlFor="input-with-icon-adornment" placeholder="As written on your contract">Position</InputLabel>
                      <Input value={input.position} onChange={(e) => this.handleInputChange({ position: e.target.value })} fullWidth={true} id="input-with-icon-adornment"
                        startAdornment={
                          <InputAdornment position="start">
                            <Icon>filter_1</Icon>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </Grid>


                  <Grid item xs={8} sm={6}>
                 
                    <TextField  fullWidth={true} value={input.skills} onChange={this.handleChange('skills')}
                      label="Select Skills"
                      InputLabelProps={{
                        shrink: true,
                      }}

                      InputProps={{
                        inputComponent: SelectWrapped,
                        inputProps: {
                          classes,
                          multi: true,
                          instanceId: 'react-select-chip-label',
                          id: 'react-select-chip-label',
                          options: this.state.allSkills,
                        },
                      }}
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={24} alignItems="center">
                  <Grid item xs={8} sm={12}>
                    <FormControl className={classes.margin} fullWidth={true} >
                      <InputLabel htmlFor="input-with-icon-adornment" placeholder="As written on your contract">Biography</InputLabel>
                      <Input value={input.biography} onChange={(e) => this.handleInputChange({ biography: e.target.value })} fullWidth={true} id="input-with-icon-adornment"
                        multiline
                        rowsMax="10"
                        rows="10"
                        startAdornment={
                          <InputAdornment position="start">
                            <Icon>book</Icon>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </Grid>

                  <Grid item xs={8} sm={12}>
                    <FormControl className={classes.margin} fullWidth={true} >
                      <InputLabel htmlFor="input-with-icon-adornment" >Current Address</InputLabel>
                      <Input value={input.address} onChange={(e) => this.handleInputChange({ address: e.target.value })} fullWidth={true} id="input-with-icon-adornment"
                        multiline
                        rowsMax="10"
                        rows="5"
                        startAdornment={
                          <InputAdornment position="start">
                            <Icon>add_location</Icon>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </Grid>
                </Grid>
                <FormControl style={{ marginTop: 20 }} fullWidth={true} >
                {this.state.submitting ? (<LinearProgress color="secondary" />) : ('')}
                <Button variant="raised" type="submit"  size="large" color="primary" className={classes.button}> Update</Button>
                </FormControl>
              </CardContent>
            </Card>
          </form>
        </div>
      </AdminLayout>
    );
  }
}

AdminHome.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdminHome);