import fetch from 'isomorphic-unfetch'
import React, { Component } from 'react'
import Layout from '../components/admin/Layout';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

function handleClick() {
  alert('onClick triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
  },
  div:{
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
    width: '100%',
    justifyContent: 'space-around'
  },
  paperLeft:{
    flex: 1,
    height: '100%',
    margin: 10,
    textAlign: 'center',
    padding: 10
  },
  paperRight:{
    height: 600,
    flex: 4,
    margin: 10,
    textAlign: 'center',
  },
  dropDown: {
    marginBottom: 200
  }
};



const initialState = {
  submitting: false,
  submitted: false,
  input: {
    firstName: "",
    lastName: "",
    image_url: "",
    description: "",
    position: "",
    gender: "",
    email: "",
    skill: []
  },
  currentUser: {},
  skills: []
}

class AdminHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    }
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
    console.log(event)
    // const { input } = this.state;
    // this.setState({ submitting: true })
    // fetch('/api/skills', {
    //   method: 'post',
    //   headers: {
    //     'Accept': 'application/json, text/plain, */*',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(input)
    // }).then((response) => {
    //   response.json().then((res) => {
    //     if (res.status === 201 && res.success === true) {
    //       this.setState({ submitted: true })
    //       this.setState(initialState)
    //       alert('Message sent!');
    //     } else {
    //       this.setState({ submitting: false });
    //       alert('Internal server error');
    //     }
    //   })
    // })
  }

  componentDidMount() {
    this.getSkills();
    this.getUser();
  }

  getSkills() {
    fetch(`/api/get-skills`)
    .then((res) => res.json())
    .then((data) => this.setState({teams: data}))
  }

  getUserLocally() {
    return JSON.parse(localStorage.getItem('user'))
  }
  
  setUserLocally(user) {
    localStorage.setItem('user', JSON.stringify(user))
    return user
  }

  getUser() {
    const user = this.getUserLocally();
    fetch(`/api/team/${user._id}`)
      .then((res) => res.json())
      .then((user) => {
        this.setState({ currentUser: user})
        this.setUserLocally(user);
      })
  }
 
  getUserInfo(userInfo) {
    this.setState({user: userInfo})
  }

  render() {
    const { currentUser } = this.state;
    return (
    <Layout title="Dashboard">
    <form onSubmit={this.submitForm}>
      <div style={styles.div}>
        <TextField hintText="Enter Fullname" defaultValue="errer" onChange={e => this.handleInputChange({ firstName: e.target.value })} fullWidth={true} />
        <TextField hintText="Enter lastName" value={currentUser.lastName} onChange={e => this.handleInputChange({ lastName: e.target.value })} fullWidth={true} />
      </div>
      <div style={styles.div}>
        <SelectField   floatingLabelText="Gender" state={styles.dropDown} value={currentUser.gender} onChange={this.handleChange} fullWidth={true} >
            <MenuItem value='Male' primaryText="Male" />
            <MenuItem value='Female' primaryText="Female" />
        </SelectField>
        <SelectField floatingLabelText="Position" state={styles.dropDown} value={currentUser.position} onChange={this.handleChange} fullWidth={true} >
            <MenuItem value='Founder' primaryText="Founder" />
            <MenuItem value='Developer' primaryText="Developer" />
            <MenuItem value='Project Manager' primaryText="Project Manager" />
        </SelectField>
      </div>
      <div style={styles.div}>
        <TextField hintText="Enter Email" value={currentUser.email} fullWidth={true} onChange={this.handleChange} />
        <TextField hintText="Enter image_url" value={currentUser.image_url} fullWidth={true} onChange={this.handleChange} />
        <TextField hintText="Enter skills"  fullWidth={true} />
      </div>
      <div style={styles.div}>
        <TextField hintText="Enter description" value={currentUser.description} multiLine={true} onChange={this.handleChange}  fullWidth={true} />
      </div>
      <RaisedButton  label="Submit" type="button" primary={true} fullWidth={true} />
    </form>
    </Layout>
    )
  }
}


export default AdminHome