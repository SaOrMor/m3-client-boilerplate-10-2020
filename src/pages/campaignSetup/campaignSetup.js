import React, { Component } from 'react';
import axios from 'axios';
import {withAuth} from '../../context/auth-context';



class CampaignSetup extends Component {
  
  state = {
    firstname: '',
    lastname: '',
    companyname: '',
    campaignname: ''
  }
  

  handleChange = (event) =>{
    const {name, value} = event.target;
    this.setState( { [name]: value} );
  }


  handleFormSubmit = (event) => {
    event.preventDefault();

    const {firstname, lastname, companyname, campaignname } = this.state;

    axios.post("http://localhost:5000/api/campaign", { firstname, lastname, companyname, campaignname })

    .then( () => {
      this.setState({ firstname: '', lastname: '', companyname: '', campaignname: '' });
    })
    .catch( (err) => console.log(err) )
  }
  
  
  
  render() {
    
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>

        <label> First name:</label>
        <input type= "text" name="firstname" onChange={this.handleChange} value= {this.state.firstname} />

        <label> Last name:</label>
        <input type= "text" name="lastname" onChange={this.handleChange} value= {this.state.lastname} />

        <label> Company name:</label>
        <input type= "text" name="companyname" onChange={this.handleChange} value= {this.state.companyname}/>

        <label> Campaign name:</label>
        <input type= "text" name="campaignname" onChange={this.handleChange} value= {this.state.campaignname} />

        <button type="submit">Create Campaign</button>
        
        
        </form>
      </div>
    )
  }
}


export default withAuth(CampaignSetup);