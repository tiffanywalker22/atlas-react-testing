import { render } from '@testing-library/react';
import { SongTitle } from '../components/SongTitle';
import { test, expect } from 'vitest';

test('SongTitle matches snap shot with the title and artist', () => {
    const { asFragment } = render(<SongTitle title="Song Title" artist="Artist" />
    );
    expect(asFragment()).toMatchSnapshot();
});

test('matches the snap shot with the default title and artist', () => {
    const { asFragment } = render(<SongTitle title="" artist="" />

    );
    expect(asFragment()).toMatchSnapshot();
});
