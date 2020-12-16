import React, { Component } from 'react';
import axios from 'axios';
import {withAuth} from '../../context/auth-context';



class CampaignSetup extends Component {
  
  state = {
    firstname: '',
    lastname: '',
    companyname: '',
    campaignname: '',
    startingdate: '',
    endingdate: '',
    budget: '',
    image: '',
    age: '',
    gender: '',
    country: '',
    interests: '', 
    operatingsystem: '', 
    education: '', 
    jobfunction: ''
  }
  

  handleChange = (event) =>{
    const {name, value} = event.target;
    this.setState( { [name]: value} );
  }


  handleFormSubmit = (event) => {
    event.preventDefault();

    const {firstname, lastname, companyname, campaignname, startingdate, endingdate, budget, image, age, gender, country, interests, operatingsystem, education, jobfunction } = this.state;

    axios.post(
      `${process.env.REACT_APP_API_URL}/api/campaign/${this.props.user._id}`, 
      { firstname, lastname, companyname, campaignname, startingdate, endingdate, budget, image, age, gender, country, interests, operatingsystem, education, jobfunction })

    .then( () => {
      this.setState(
      { firstname: '', lastname: '', companyname: '', campaignname: '', startingdate: '', endingdate: '', budget: '', image: '', age: '', gender: '', country: '', interests: '', operatingsystem: '', education: '', jobfunction: '' } 
      );
    })
    .catch( (err) => console.log(err) )
    .then(()=> {
      this.props.history.push('/campaign/advertiser')
    })
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

        <label> Startingdate:</label>
        <input type= "text" name="startingdate" onChange={this.handleChange} value= {this.state.startingdate} />

        <label> Endingdate:</label>
        <input type= "text" name="endingdate" onChange={this.handleChange} value= {this.state.endingdate} />

        <label> Budget:</label>
        <input type= "text" name="budget" onChange={this.handleChange} value= {this.state.budget} />

        <label> Image:</label>
        <input type= "text" name="image" onChange={this.handleChange} value= {this.state.image} />

        <label> Age:</label>
        <input type= "text" name="age" onChange={this.handleChange} value= {this.state.age} />

        <label> Gender:</label>
        <input type= "text" name="gender" onChange={this.handleChange} value= {this.state.gender} />

        <label> Country:</label>
        <input type= "text" name="country" onChange={this.handleChange} value= {this.state.country} />

        <label> Interests:</label>
        <input type= "text" name="interests" onChange={this.handleChange} value= {this.state.interests} />

        <label> Operatingsystem:</label>
        <input type= "text" name="operatingsystem" onChange={this.handleChange} value= {this.state.operatingsystem} />

        <label> Education:</label>
        <input type= "text" name="education" onChange={this.handleChange} value= {this.state.education} />

        <label> Jobfunction:</label>
        <input type= "text" name="jobfunction" onChange={this.handleChange} value= {this.state.jobfunction} />



        <button type="submit">Create Campaign</button>
        
        
        </form>
      </div>
    )
  }
}


export default withAuth(CampaignSetup);