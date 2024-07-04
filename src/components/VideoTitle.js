import React from 'react'

const VideoTitle = ({title,discription}) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{discription}</p>
            <div>
                <button className="bg-white text-black p-2 rounded-lg">Play</button>
                <button className="bg-white text-black p-2 rounded-lg">More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle
