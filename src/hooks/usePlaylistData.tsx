import { useState, useEffect } from 'react';

type Song = {
    id: number;
    title: string;
    artist: string;
    duration: string;
    cover: string;
};

export const usePlaylistData = () => {
    const [data, setData] = useState<Song[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPlaylist = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/playlist');
                const result: Song[] = await response.json();
                await new Promise(resolve => setTimeout(resolve, 2000));
                setData(result);
                setLoading(false);
            } catch (error) {
                setError('error loading playlist');
                setLoading(false);
            }
        };

        fetchPlaylist();
    }, []);
    return { data, loading, error };
}
