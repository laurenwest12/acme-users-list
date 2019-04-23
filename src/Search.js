import React, {Component} from 'react';

export default class Search extends Component {
    constructor(props) {
        super(props) 
        this.state = {
        }
    }



    render () {
        return (
            <div className = 'input-group'>
            <input onChange = {this.props.onChange} placeholder = 'Search' className = 'form-control' name = 'search' value = {this.state.search}/>
            <div className = 'input-group-append'>
                <button onClick = {this.props.onSubmit} className ='btn btn-primary'>Go</button>
                <button onClick = {this.props.onClear} className = 'btn btn-info'>Clear</button>
            </div>
            </div>
        )
    }
}
