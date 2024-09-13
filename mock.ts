import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";

export const handlers = [
    http.get(
        "https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/playlist",
        () => {
            return HttpResponse.json([
                {
                    "id": 1,
                    "title": "Painted in Blue",
                    "artist": "Soul Canvas",
                    "genre": "Neo-Soul",
                    "duration": "5:55",
                    "cover": "https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/images/albumn4.webp"
                },
                {
                    "id": 2,
                    "title": "Tidal Drift",
                    "artist": "Echoes of the Sea",
                    "genre": "Ambient",
                    "duration": "8:02",
                    "cover": "https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/images/albumn6.webp"
                },
                {
                    "id": 3,
                    "title": "Fading Shadows",
                    "artist": "The Emberlight",
                    "genre": "Alternative Rock",
                    "duration": "3:01",
                    "cover": "https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/images/albumn2.webp"
                },
                {
                    "id": 4,
                    "title": "Cosmic Drift",
                    "artist": "Solar Flare",
                    "genre": "Psychedelic Rock",
                    "duration": "5:01",
                    "cover": "https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/images/albumn10.webp"
                },
                {
                    "id": 5,
                    "title": "Urban Serenade",
                    "artist": "Midnight Groove",
                    "genre": "Jazz",
                    "duration": "4:54",
                    "cover": "https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/images/albumn8.webp"
                },
                {
                    "id": 6,
                    "title": "Whispers in the Wind",
                    "artist": "Rust & Ruin",
                    "genre": "Folk",
                    "duration": "6:13",
                    "cover": "https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/images/albumn3.webp"
                },
                {
                    "id": 7,
                    "title": "Electric Fever",
                    "artist": "Neon Jungle",
                    "genre": "EDM",
                    "duration": "8:41",
                    "cover": "https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/images/albumn5.webp"
                },
                {
                    "id": 8,
                    "title": "Edge of the Abyss",
                    "artist": "Steel Horizon",
                    "genre": "Metal",
                    "duration": "2:27",
                    "cover": "https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/images/albumn9.webp"
                },
                {
                    "id": 9,
                    "title": "Golden Haze",
                    "artist": "Velvet Waves",
                    "genre": "Indie Pop",
                    "duration": "3:15",
                    "cover": "https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/images/albumn7.webp"
                },
                {
                    "id": 10,
                    "title": "Shatter the Silence",
                    "artist": "Thunderclap Echo",
                    "genre": "Rock",
                    "duration": "8:22",
                    "cover": "https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/images/albumn1.webp"
                }
            ]);
        }
    ),
];

export const server = setupServer(...handlers);
