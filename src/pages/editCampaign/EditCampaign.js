import React, { Component } from "react";
import { withAuth } from "../../context/auth-context";
import axios from "axios";

class EditCampaign extends Component {
  state = {
    campaignname: "",
    endingdate: "",
    budjet: "",
    image: "",
    age: "",
    gender: "",
    country: "",
    interests: "",
    operatingsystem: "",
    education: "",
    jobfunction: "",
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    const {
      campaignname,
      endingdate,
      budjet,
      image,
      age,
      gender,
      country,
      interests,
      operatingsystem,
      education,
      jobfunction,
    } = this.state;


    const { id } = this.props.match.params;
console.log(id,campaignname,
  endingdate,
  budjet,
  image,
  age,
  gender,
  country,
  interests,
  operatingsystem,
  education,
  jobfunction)
    axios.post(`${process.env.REACT_APP_API_URL}/api/campaign/edit/${id}`, {
        campaignname,
        endingdate,
        budjet,
        image,
        age,
        gender,
        country,
        interests,
        operatingsystem,
        education,
        jobfunction,
      })
      .then((response) => {
        console.log(response);
        this.props.history.push("/campaign/advertiser");
      })
      .catch((err) => console.log(err));
  };


  deleteCampaign = () => {const { id } = this.props.match.params;

    axios.delete(
        `${process.env.REACT_APP_API_URL}/api/campaign/deletecampaign/${id}` )
    .then(() => this.props.history.push('/campaign/advertiser'))
    .catch((err) => console.log(err));
}

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>campaignname:</label>
          <input
            type="text"
            name="campaignname"
            value={this.state.campaignname}
            onChange={this.handleChange}
          />

          <label>endingdate:</label>
          <input
            type="string"
            name="endingdate"
            value={this.state.endingdate}
            onChange={this.handleChange}
          />

          <label>budjet:</label>
          <input
            type="text"
            name="budjet"
            value={this.state.budjet}
            onChange={this.handleChange}
          />

          <label>image:</label>
          <input
            type="text"
            name="image"
            value={this.state.image}
            onChange={this.handleChange}
          />

          <label>age:</label>
          <input
            type="age"
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
          />

          <label>gender:</label>
          <input
            type="text"
            name="gender"
            value={this.state.gender}
            onChange={this.handleChange}
          />

          <label>country:</label>
          <input
            type="text"
            name="country"
            value={this.state.country}
            onChange={this.handleChange}
          />

          <label>interests:</label>
          <input
            type="text"
            name="interests"
            value={this.state.interests}
            onChange={this.handleChange}
          />

          <label>operatingsystem:</label>
          <input
            type="text"
            name="operatingsystem"
            value={this.state.operatingsystem}
            onChange={this.handleChange}
          />

          <label>education:</label>
          <input
            type="text"
            name="education"
            value={this.state.education}
            onChange={this.handleChange}
          />

          <label>jobfunction:</label>
          <input
            type="text"
            name="jobfunction"
            value={this.state.jobfunction}
            onChange={this.handleChange}
          />

          <button type="submit">Edit Campaign</button>

          <button onClick = {this.deleteCampaign}>
            Delete Campaign
          </button>
        </form>
      </div>
    );
  }
}

export default withAuth(EditCampaign);
