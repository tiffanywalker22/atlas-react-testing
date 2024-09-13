import { render, screen } from '@testing-library/react';
import MusicPlayer from '../MusicPlayer';
import '@testing-library/jest-dom';
import { test, expect, beforeEach } from 'vitest';
import { vi } from 'vitest';
import { usePlaylistData } from '../hooks/usePlaylistData';

vi.mock('../hooks/usePlaylistData', () => ({
    usePlaylistData: vi.fn(),
}));

beforeEach(() => {
    (vi.mocked(usePlaylistData) as any).mockReset();
});

test('displays the error message', () => {
    (vi.mocked(usePlaylistData) as any).mockReturnValue({
        data: [],
        loading: false,
        error: 'error fetching the data',
    });

    render(<MusicPlayer />);
    expect(screen.getByText(/error fetching the data/i)).toBeInTheDocument();
});

test('initialize the first track', () => {
    (vi.mocked(usePlaylistData) as any).mockReturnValue({
        data: [
            {
                id: 1,
                title: 'Painted in Blue',
                artist: 'Soul Canvas',
                genre: 'Neo-Soul',
                duration: '5:55',
                cover: 'https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/images/albumn4.webp',
            },
            {
                id: 2,
                title: 'Tidal Drift',
                artist: 'Echoes of the Sea',
                genre: 'Ambient',
                duration: '8:02',
                cover: 'https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/images/albumn6.webp',
            },
        ],
        loading: false,
        error: null,
    });

    render(<MusicPlayer />);
    const titleElements = screen.queryAllByText(/Painted in Blue/i);
    expect(titleElements.length).toBeGreaterThan(0);
});

test('initialize with the last track', () => {
    (vi.mocked(usePlaylistData) as any).mockReturnValue({
        data: [
            {
                id: 9,
                title: 'Golden Haze',
                artist: 'Velvet Waves',
                genre: 'Indie Pop',
                duration: '3:15',
                cover: 'https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/images/albumn7.webp',
            },
            {
                id: 10,
                title: 'Shatter the Silence',
                artist: 'Thunderclap Echo',
                genre: 'Rock',
                duration: '8:22',
                cover: 'https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/images/albumn1.webp',
            },
        ],
        loading: false,
        error: null,
    });

    render(<MusicPlayer />);
    const titleElements = screen.queryAllByText(/Shatter the Silence/i);
    expect(titleElements.length).toBeGreaterThan(0);
});

test('initialize with the previous song', () => {
    (vi.mocked(usePlaylistData) as any).mockReturnValue({
        data: [
            {
                id: 7,
                title: 'Electric Fever',
                artist: 'Neon Jungle',
                genre: 'EDM',
                duration: '8:41',
                cover: 'https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/images/albumn5.webp',
            },
            {
                id: 8,
                title: 'Edge of the Abyss',
                artist: 'Steel Horizon',
                genre: 'Metal',
                duration: '2:27',
                cover: 'https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/images/albumn9.webp',
            },
        ],
        loading: false,
        error: null,
    });

    render(<MusicPlayer />);
    const titleElements = screen.queryAllByText(/Electric Fever/i);
    expect(titleElements.length).toBeGreaterThan(0);
});

test('initialize with the next song', () => {
    (vi.mocked(usePlaylistData) as any).mockReturnValue({
        data: [
            {
                id: 3,
                title: 'Fading Shadows',
                artist: 'The Emberlight',
                genre: 'Alternative Rock',
                duration: '3:01',
                cover: 'https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/images/albumn2.webp',
            },
            {
                id: 4,
                title: 'Cosmic Drift',
                artist: 'Solar Flare',
                genre: 'Psychedelic Rock',
                duration: '5:01',
                cover: 'https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/images/albumn10.webp',
            },
        ],
        loading: false,
        error: null,
    });

    render(<MusicPlayer />);
    const titleElements = screen.queryAllByText(/Cosmic Drift/i);
    expect(titleElements.length).toBeGreaterThan(0);
});
