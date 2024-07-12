import React from 'react'

const VideoTitle = ({title,discription}) => {
    return (
        <div className='pt-[174px] pl-[125px] absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
            <h1 className='font-bold text-5xl'>{title}</h1>
            <p className='w-1/3 pt-2'>{discription}</p>
            <div>
                <button className="bg-white text-black p-2 rounded-lg w-20 bg-opacity-30">Play</button>
                <button className="bg-white text-black p-2 rounded-lg w-40 ml-2 bg-opacity-30">More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle
