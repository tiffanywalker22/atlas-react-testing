import React from 'react';
import { PlayListItem } from './PlayListItem';

type Song = {
    id: number;
    title: string;
    artist: string;
    duration: string;
    cover: string;
}

type PlayListProps = {
    playlist: Song[];
    currentSongId: number | null;
    onSongSelect: (id: number) => void;
}



export const Playlist: React.FC<PlayListProps> = ({ playlist, currentSongId, onSongSelect }) => {

    return (
        <div className='flex flex-col w-full h-full bg-purple text-blue border-1-4 border-pink rounded-lg'>
            <h1 className='text-xl font-bold mb-4'>Playlist</h1>
            <ul className='flex flex-col space-y-2 overflow-y-auto h-full'>
                {playlist.map((song) => (
                    <PlayListItem key={song.id} title={song.title} artist={song.artist} duration={song.duration} isPlaying={song.id === currentSongId} onClick={() => onSongSelect(song.id)} />
                ))}
            </ul>
        </div>
    );
};
