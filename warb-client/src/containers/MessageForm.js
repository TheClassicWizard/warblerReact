import React, {Component} from "react"
import {connect} from "react-redux"
import {postNewMessages} from "../store/actions/messages"

class MessageForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            message: ""
        }
    }
    handleNewMessage = event => {
        event.preventDefault();
        this.props.postNewMessages(this.state.message)
        this.setState({message: ""});
        this.props.history.push("/");
    }
    render(){
        return (
            <form onSubmit={this.handleNewMessage}>
                {this.props.errors.message && (
                    <div className="alert alert-danger">
                        {this.props.errors.message}
                    </div>
                )}
                <input type="text" 
                    className="form-control" 
                    value={this.state.message}
                    onChange ={e =>{this.setState({message: e.target.value})}}
                ></input>
                <button className="btn btn-success pull-right" type="submit">
                    Add message!
                </button>
            </form>
        )
    }
}

function mapStateToProps(state){
    return {
        errors: state.errors
    }
}

export default connect(mapStateToProps, {postNewMessages})(MessageForm)