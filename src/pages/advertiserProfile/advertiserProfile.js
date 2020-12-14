import React, { Component } from 'react';
import axios from 'axios';
import {withAuth} from '../../context/auth-context';
import {Link} from 'react-router-dom';

 class advertiserProfile extends Component {
    
    state = {
        user: {}
    }    
    componentDidMount (){axios.get(`http://localhost:5000/api/users/${this.props.user._id}`)
    .then( (response) => {
        console.log("ciao", response.data)
    this.setState({ user: response.data})
    })
    .catch( (err) => console.log(err));
}

    render() {
        console.log("our campaigns", this.state.user)
        return (
            <div>
            <h2> Your campaigns: </h2>
                {this.state.user.campaigns.map((campaigns) => {
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
    
}


export default withAuth(advertiserProfile);