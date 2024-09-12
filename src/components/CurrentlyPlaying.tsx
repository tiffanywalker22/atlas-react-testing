import { useState } from 'react';
import { CoverArt } from './CoverArt';
import { PlayControls } from './PlayControls';
import { SongTitle } from './SongTitle';
import { VolumeControl } from './VolumeControl';

type Song = {
    id: number;
    title: string;
    artist: string;
    cover: string;
    duration: string;
};

type CurrentlyPlayingProps = {
    currentSong: Song | null;
    onPrevious: () => void;
    onNext: () => void;
    isFirstSong: boolean;
    isLastSong: boolean;
    isShuffle: boolean;
    toggleShuffle: () => void;
};

export const CurrentlyPlaying: React.FC<CurrentlyPlayingProps> = ({ currentSong, onPrevious, onNext, isFirstSong, isLastSong, isShuffle, toggleShuffle }) => {
    const [volume, setVolume] = useState<number>(50);

    if (!currentSong) {
        return <div>No song selected!</div>;
    }

    return (
        <div className="flex flex-col w-full h-full items-center p-4 rounded-lg">
            <CoverArt cover={currentSong.cover} />
            <SongTitle title={currentSong.title} artist={currentSong.artist} />
            <PlayControls onPrevious={onPrevious} onNext={onNext} isFirstSong={isFirstSong} isLastSong={isLastSong} isShuffle={isShuffle} toggleShuffle={toggleShuffle} />
            <VolumeControl volume={volume} setVolume={setVolume} />
        </div>
    );
};
