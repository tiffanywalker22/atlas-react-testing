import { useState, useEffect } from 'react';
import { CurrentlyPlaying } from './components/CurrentlyPlaying';
import { Playlist } from './components/Playlist';
import { usePlaylistData } from './hooks/usePlaylistData';

export default function MusicPlayer() {
    const { data: createPlaylist, loading, error } = usePlaylistData();
    const [currentTrack, setCurrentTrack] = useState<Song | null>(null);

    useEffect(() => {
        if (createPlaylist.length > 0) {
            setCurrentTrack(createPlaylist[0])
        }
    }, [createPlaylist]);

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
        <div className="flex flex-col md:flex-row max-w-screen-md w-full mx-auto p-6 rounded-lg shadow-lg items-stretch md:items-start">
            <div className=" flex-1 bg-sage text-blue border-pink p-4 rounded-lg flex flex-col h-full">
                <CurrentlyPlaying songs={createPlaylist} currentSong={currentTrack} />
            </div>
            <div className="flex-1 bg-purple text-blue border-l-4 border-pink p-4 rounded-lg flex flex-col h-full">
                <Playlist currentSongId={currentTrack?.id ?? null} onSongSelect={handleSong} playlist={createPlaylist} />
            </div>
        </div>
    );
}
