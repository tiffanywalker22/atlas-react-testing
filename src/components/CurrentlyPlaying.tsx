import { useEffect, useState } from 'react';
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
    songs: Song[] | null;
};

export const CurrentlyPlaying: React.FC<CurrentlyPlayingProps> = ({ songs }) => {
    const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
    const [isShuffle, setIsShuffle] = useState<boolean>(false);
    const [volume, setVolume] = useState<number>(50);

    useEffect(() => {
        if (songs && songs.length > 0) {
            setCurrentSongIndex(prevIndex => {
                if (prevIndex >= songs.length) {
                    return songs.length - 1;
                }
                return prevIndex;
            });
        }
    }, [songs]);

    if (!songs || songs.length === 0) return null;

    const currentSong = songs[currentSongIndex];

    const isFirstSong = currentSongIndex === 0;
    const isLastSong = currentSongIndex === songs.length - 1;

    const handlePrevious = () => {
        if (!isFirstSong) {
            setCurrentSongIndex(prev => prev - 1);
        }
    };

    const handleNext = () => {
        if (songs && songs.length > 0) {
            if (isShuffle) {
                const shuffledIndex = Math.floor(Math.random() * songs.length);
                setCurrentSongIndex(shuffledIndex);
            } else if (!isLastSong) {
                setCurrentSongIndex(prev => Math.min(prev + 1, songs.length - 1));
            }
        }
    };

    const toggleShuffle = () => {
        setIsShuffle(prevState => !prevState);
        if (!isShuffle) {
            const randomIndex = Math.floor(Math.random() * songs.length);
            setCurrentSongIndex(randomIndex);
        }
        console.log('shuffle time:', !isShuffle);
    };


    return (
        <div className="flex flex-col w-full h-full items-center p-4 rounded-lg">
            <CoverArt cover={currentSong.cover} />
            <SongTitle title={currentSong.title} artist={currentSong.artist} />
            <PlayControls onPrevious={handlePrevious} onNext={handleNext} isFirstSong={isFirstSong} isLastSong={isLastSong} isShuffle={isShuffle} toggleShuffle={toggleShuffle} />
            <VolumeControl volume={volume} setVolume={setVolume} />
        </div>
    );
};
