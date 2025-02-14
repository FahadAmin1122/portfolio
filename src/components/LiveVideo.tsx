import React from "react";

interface LiveVideoProps {
    videoUrl: string;
    onClose: () => void;
}

const LiveVideo: React.FC<LiveVideoProps> = ({ videoUrl, onClose }) => {
    return (
        
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
            <div className="bg-white p-4 rounded-lg shadow-lg relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
                >
                    ✕
                </button>
                <h1 className="text-xl font-bold mb-2">Live Video</h1>
                <video width="750" height="500" controls autoPlay muted>
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default LiveVideo;
