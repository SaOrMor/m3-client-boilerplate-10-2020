import React, { Component } from 'react';
import axios from 'axios';
import {withAuth} from '../../context/auth-context';
import {Link} from 'react-router-dom';
import campaign from

 class advertiserProfile extends Component {
    
    state = {
        userCampaigns: []
    }    
    
    render() {
        return (
            <div>
            <h2> {`Advertiser ${campaign.companyname} `}</h2>
                {this.state.userCampaigns.map((campaigns) => {
                    return(
                        <div key={campaigns._id}>
                            <Link to={'/statistics/' + campaigns._id}>
                                <h2>{campaigns.campaignname}</h2>
                            </Link>
                        </div>
                    )
                })
                }

            </div>
        )
    }
    componentDidMount (){axios.get('http://localhost:5000/api/campaign/advertiser ')
    .then( (response) => {
        this.setState({ userCampaigns: response.data})
    })
    .catch( (err) => console.log(err));
}
}


export default withAuth(advertiserProfile);