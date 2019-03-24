import React, { Component } from "react";
import axios from "axios";
import Nav from "./Nav";
import {Link, HashRouter} from "react-router-dom";


// const Nav = () => {
//     return (
//         <HashRouter>
//         <ul>
//             <li><Link to="/">First</Link></li>
//             <li><Link to={`/${this.state.pageNum - 1}`}>Prev</Link></li>
//             <li><Link to="/">Next</Link></li>
//             <li><Link to="/161">Last</Link></li>
//         </ul>
//         </HashRouter>
//     );
// };

class Main extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      pageNum: 0
    };
  }

  componentDidMount() {
    axios
      .get("https://acme-users-api.herokuapp.com/api/users/0")
      .then(users => this.setState({ users: users.data.users }))
      .then(() => console.log(this.state));
  }

  onPrevious = () => {
      this.setState({ pageNum: this.state.pageNum - 1 });
  }

  onNext = () => {
    this.setState({ pageNum: this.state.pageNum + 1 });
}

onFirst = () => {
    this.setState({ pageNum: 0 });
}

onLast = () => {
    this.setState({ pageNum: 161 });
}
  render() {
    const { users } = this.state;
    return (
      <div>
        <HashRouter>
        <ul>
            <li onClick={this.onFirst}><Link to="/">First</Link></li>
            <li onClick={this.onPrevious}><Link to={`/${this.state.pageNum - 1}`}>Prev</Link></li>
            <li onClick={this.onNext}><Link to={`/${this.state.pageNum + 1}`}>Next</Link></li>
            <li onClick={this.onLast}><Link to="/161">Last</Link></li>
        </ul>
        </HashRouter>
        <table className="table">
          <thead>
            <tr>
              <th>First</th>
              <th>Middle</th>
              <th>Last</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.firstName}</td>
                <td>{user.middleName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Main;
