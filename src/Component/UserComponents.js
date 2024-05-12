import React from "react";
import UserService from "../services/UserService";

class UserComponent extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }

    componentDidMount(){
        UserService.getUser().then((response) =>{
            this.setState({users: response.data})
        });
    }

    render (){
        return (
            <div>
                <div className='container'>
                    <h2 className='text-center'>List of Users</h2>
                    <table class="table table-striped table-hover">
                        <thead>
                        <tr>
                            <td>User Id</td>
                            <td>User First Name</td>
                            <td>User Last Name</td>
                            <td>User Email</td>
                            
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.users.map(user => (
                                <tr key = {user.user_id}>
                                    <td>{user.user_id}</td>
                                    <td>{user.firstname}</td>
                                    <td>{user.lastname}</td>
                                    <td>{user.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default UserComponent