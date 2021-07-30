import React from "react";

class Searchbar extends React.Component{
    state={term:''};
    oninputchange=(event)=>{
        this.setState({term:event.target.value});
    };
    onformsubmit=(event)=>{
        event.preventDefault()
        this.props.onformsubmit(this.state.term);
    };
    render(){
        return(
            <div className="searchbar ui segment">
                <form onSubmit={this.onformsubmit} className="ui form">
                    <div className="field">
                        <label>Video Search ...</label>
                        <input type="text" value={this.state.term} onChange={this.oninputchange}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Searchbar;