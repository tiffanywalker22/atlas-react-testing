import React from 'react';

type PlayListItemProps = {
    title: string;
    artist: string;
    duration: string;
    isPlaying: boolean;
    onClick: () => void;
}

export const PlayListItem: React.FC<PlayListItemProps> = ({ title, artist, duration, isPlaying, onClick }) => {
    return (
        <div className={`flex justify-between items-center rounded-lg cursor-pointer ${isPlaying ? 'bg-pink text-white' : 'bg-purple text-blue'}`}
            onClick={onClick}>
            <div className='flex flex-col'>
                <h3 className="text-sm font-semibold">{title}</h3>
                <p className="text-xs text-gray-500">{artist}</p>
            </div>
            <div className="text-gray-400 text-sm">
                <p>{duration}</p>
            </div>
        </div>
    );
};
