import { render } from '@testing-library/react';
import { PlayListItem } from '../components/PlayListItem';
import { test, expect } from 'vitest';

test('matches snap shot when not playing', () => {
    const { asFragment } = render(
        <PlayListItem title="Song Title" artist="Artist" duration="8:02" isPlaying={false} onClick={() => { }} />
    );
    expect(asFragment()).toMatchSnapshot();
});

test('matches snap shot when playing', () => {
    const { asFragment } = render(
        <PlayListItem title="Song Title" artist="Artist" duration="3:45" isPlaying={true} onClick={() => { }} />
    );
    expect(asFragment()).toMatchSnapshot();
});
