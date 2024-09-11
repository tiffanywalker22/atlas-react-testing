import { render } from '@testing-library/react';
import { VolumeControl } from '../components/VolumeControl';
import { test, expect } from 'vitest';

test('VolumeControl matches the snap shot with no volume', () => {
    const { asFragment } = render(
        <VolumeControl volume={0} setVolume={() => { }} />
    );
    expect(asFragment()).toMatchSnapshot();
});

test('VolumeControl matches the snap shot with 100%', () => {
    const { asFragment } = render(
        <VolumeControl volume={100} setVolume={() => { }} />
    );
    expect(asFragment()).toMatchSnapshot();
});
