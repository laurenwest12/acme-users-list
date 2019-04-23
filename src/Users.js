import React, { Component } from "react";
import axios from "axios";
import Search from './Search'

export default class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: this.props.match.params.index,
            users: [],
            filteredUsers: [],
            search: null,
            searchStatus: false,
        };
        this.onClear = this.onClear.bind(this)
      }

    componentDidMount() {
        this.setLocalState()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.index !== this.props.match.params.index) {
            this.setLocalState();
        }
    }

    setLocalState = () => {
        let index = 1
        if (this.props.match.params.index) {
          index = this.props.match.params.index;
        }
        this.setState({index})
          axios
              .get(`https://acme-users-api.herokuapp.com/api/users/${(index * 1) - 1}`)
              .then(users => this.setState({ users: users.data.users }))
    }

    navigate = (value) => {
        this.props.history.push(`/index${value ? `/${value}` : ''}`)
    }
    
    navigate = (value) => {
        this.props.history.push(`/users${value ? `/${value}` : ''}`)
    }

    //props to be passed to search
    onChange = ({target}) => {
      this.setState(
          {[target.name]: target.value}
      )
    }

    onClear () {
      this.setState({
          search: '',
          searchStatus: false,
      })
    }


    onSubmit = () => {
        axios
            .get(`https://acme-users-api.herokuapp.com/api/users/search/${this.state.search}`)
            .then(users => {
              this.setState({filteredUsers: users.data.users})
              this.setState({searchStatus: true})
            })
    }

    render () {
          const { users, filteredUsers} = this.state
          const index = this.state.index * 1
          
          return (
            <div>
                <div className = 'btn-group'>
                    <button className ='btn btn-info' onClick = {() => {this.navigate(1)}}>First</button>
                    <button className ='btn btn-info' onClick = {() => {this.navigate(index - 1)}}>Prev</button>
                    <button className = 'btn btn-primary'>{this.state.index}</button>
                    <button className ='btn btn-info' onClick = {() => {this.navigate(index + 1)}}>Next</button>
                    <button className ='btn btn-info' onClick = {() => {this.navigate(161)}}>Last</button>

                </div>
          <Search onChange = {this.onChange} onClear = {this.onClear} onSubmit = {this.onSubmit}/>
          <table className="table">
          <thead>
            <tr>
              <th>First</th>
              <th>Middle</th>
              <th>Last</th>
              <th>Email</th>
            </tr>
          </thead>
          {!this.state.searchStatus ?
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.firstName}</td>
                <td>{user.middleName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody> : <tbody>
            {filteredUsers.map(user => (
              <tr key={user.id}>
                <td>{user.firstName}</td>
                <td>{user.middleName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>}
        </table>
        </div>
          )
      }
}