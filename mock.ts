import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";

export const handlers = [
    http.get(
        "https://api.example.com/api/v1/data",
        () => {
            return HttpResponse.json([
                { id: 1, title: 'Song 1' },
                { id: 2, title: 'Song 2' },
                { id: 3, title: 'Song 3' }
            ]);
        }
    ),
];

export const server = setupServer(...handlers);