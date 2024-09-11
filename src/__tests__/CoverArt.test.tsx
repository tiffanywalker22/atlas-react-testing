import { render } from '@testing-library/react';
import { CoverArt } from '../components/CoverArt';
import { test, expect } from 'vitest';

test('CoverArt matches snap shot with default placeholder', () => {
    const { asFragment } = render(
        <CoverArt cover="" />
    );
    expect(asFragment()).toMatchSnapshot();
});
