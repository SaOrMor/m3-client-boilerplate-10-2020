import axios from 'axios';
import React, { Component } from 'react';
import {withAuth} from '../../context/auth-context';
import {Link} from 'react-router-dom';

class Statistics extends Component {
    state = {
        campaigns: []
    }

    componentDidMount (){
        console.log("user id from props", this.props.user._id )
        const campaignId = this.props.match.params.id;
        console.log(campaignId);
        axios
        .get(
        `${process.env.REACT_APP_API_URL}/api/campaign/statistics/${campaignId}`)
        .then( (response) => {
        console.log("response data from axios request", response.data)
    this.setState({ campaigns: response.data})
    
    })
    .catch( (err) => console.log(err));
    }

    deleteCampaign = () => {const { id } = this.props.match.params;

    axios.delete(
        `${process.env.REACT_APP_API_URL}/api/campaign/deletecampaign/${id}` )
    .then(() => this.props.history.push('/campaign/advertiser'))
    .catch((err) => console.log(err));
}
    
    render() {

        return (
            <div>
            <h1> Campaign Statistic</h1>

                <h2> {this.state.campaigns.campaignname}</h2>

                <p> Total clicks: 0</p>
                <p> CTR: No data yet</p>
                <p> Times on page: 0</p>
                <p> Pages visited after: </p>
                <p> Banner views: 0</p>
                <p> video views: 0</p>
                
<button on click={this.props.logout}> Logout</button>

<Link to={'/campaign/advertiser'}>
    <button> Your campaigns</button>
</Link>

<Link to={'/editCampaigns'}>
    <button> Edit your campaign</button>
</Link>

<button onClick = {this.deleteCampaign}>
    Delete Campaign
</button>
            </div>
        )
    }
}


export default withAuth(Statistics);