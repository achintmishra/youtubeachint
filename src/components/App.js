import React from "react";
import Searchbar from "./Searchbar";
import youtube from "../apis/youtube";
import Videolist from "./Videolist";
import Videodetail from "./Videodetail";

class App extends React.Component{

    state={videos:[],selectedvideo:null};

    componentDidMount(){
        this.ontermsubmit("buildings");
    }

    ontermsubmit=async term=>{
        const response= await youtube.get("/search",{
            params:{
                q:term
            }
        });
        this.setState({videos:response.data.items,selectedvideo:response.data.items[0]})
    };
    onvideoselect= video=>{
        this.setState({selectedvideo:video});
    }
    render(){
        return(
            <div className="ui container">
                <Searchbar onformsubmit={this.ontermsubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <Videodetail video={this.state.selectedvideo}/>
                        </div>
                        <div className="five wide column">
                            <Videolist onvideoselect={this.onvideoselect} videos={this.state.videos}/>  
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default App;