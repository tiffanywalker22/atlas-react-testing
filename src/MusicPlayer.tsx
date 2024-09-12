import { useState, useEffect } from 'react';
import { CurrentlyPlaying } from './components/CurrentlyPlaying';
import { Playlist } from './components/Playlist';
import { usePlaylistData } from './hooks/usePlaylistData';

export default function MusicPlayer() {
    const { data: createPlaylist, loading, error } = usePlaylistData();
    const [currentTrack, setCurrentTrack] = useState<Song | null>(null);
    const [isShuffle, setIsShuffle] = useState<boolean>(false);

    useEffect(() => {
        if (createPlaylist.length > 0 && !currentTrack) {
            setCurrentTrack(createPlaylist[0]);
        }
    }, [createPlaylist, currentTrack]);

    const handlePrevious = () => {
        if (currentTrack && !isShuffle) {
            const currentIndex = createPlaylist.findIndex(song => song.id === currentTrack.id);
            const previousIndex = currentIndex > 0 ? currentIndex - 1 : 0;
            setCurrentTrack(createPlaylist[previousIndex]);
        } else if (isShuffle) {
            const randomIndex = Math.floor(Math.random() * createPlaylist.length);
            setCurrentTrack(createPlaylist[randomIndex]);
        }
    };

    const handleNext = () => {
        if (currentTrack && !isShuffle) {
            const currentIndex = createPlaylist.findIndex(song => song.id === currentTrack.id);
            const nextIndex = currentIndex < createPlaylist.length - 1 ? currentIndex + 1 : currentIndex;
            setCurrentTrack(createPlaylist[nextIndex]);
        }
    };

    const toggleShuffle = () => {
        setIsShuffle(prevShuffle => !prevShuffle);
    };

    const isFirstSong = currentTrack ? createPlaylist.findIndex(song => song.id === currentTrack.id) === 0 : true;
    const isLastSong = currentTrack ? createPlaylist.findIndex(song => song.id === currentTrack.id) === createPlaylist.length - 1 : true;

    const handleSong = (id: number) => {
        const selectedTrack = createPlaylist.find(song => song.id === id) || null;
        setCurrentTrack(selectedTrack);
    };

    if (loading) {
        return <div>Loading... </div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="flex flex-col md:flex-row max-w-screen-md w-full mx-auto p-6 rounded-lg shadow-lg h-full">
            <div className=" flex-1 bg-sage text-blue border-pink p-4 rounded-lg flex flex-col h-full">
                <CurrentlyPlaying currentSong={currentTrack} onPrevious={handlePrevious} onNext={handleNext} isFirstSong={isFirstSong} isLastSong={isLastSong} isShuffle={isShuffle} toggleShuffle={toggleShuffle }/>
            </div>
            <div className="flex-1 bg-purple text-blue border-l-4 border-pink p-4 rounded-lg flex flex-col h-full">
                <Playlist currentSongId={currentTrack?.id ?? null} onSongSelect={handleSong} playlist={createPlaylist} />
            </div>
        </div>
    );
}
