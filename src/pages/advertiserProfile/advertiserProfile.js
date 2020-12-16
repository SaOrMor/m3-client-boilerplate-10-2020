import React, { Component } from 'react';
import axios from 'axios';
import {withAuth} from '../../context/auth-context';
import {Link} from 'react-router-dom';

 class AdvertiserProfile extends Component {
    
    state = {
        user: {}
    }    
    componentDidMount (){
        console.log("this.props.user._id", this.props.user._id )
        axios.get(
            `${process.env.REACT_APP_API_URL}/api/users/${this.props.user._id}`)
    .then( (response) => {
        console.log("response data axios get advertiser", response.data)
    this.setState({ user: response.data})
    
    })
    .catch( (err) => console.log(err));
}

    render() {
        console.log("our campaigns", this.state.user)
        return (
            <div>
            <h2> Your campaigns: </h2>
                {this.state.user.campaigns && this.state.user.campaigns.map((campaigns) => {
                    return(
                        
                        <div key={campaigns._id}>
                            <Link to={'/campaign/statistics/' + campaigns._id}>
                                <h2>{campaigns.campaignname}</h2>
                            </Link>
                            <Link to={'/campaign/edit/' + campaigns._id}> Edit campaign</Link>
                        </div>
                        
                    )
                })
                }
                <Link to={'/campaignSetup'}>
                            Create new Campaign
                        </Link>
            </div>
        )
    }
    
}


export default withAuth(AdvertiserProfile);