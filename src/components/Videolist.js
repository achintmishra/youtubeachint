import React from "react";
import Videoitem from "./Videoitem";

const Videolist=({videos,onvideoselect})=>{
    const renderedlist=videos.map((video)=>{
        return <Videoitem key={video.id.videoId} onvideoselect={onvideoselect} video={video}/>
    })
    return(
        <div className="ui relaxed divided list">
            {renderedlist}
        </div>
    )
}

export default Videolist;