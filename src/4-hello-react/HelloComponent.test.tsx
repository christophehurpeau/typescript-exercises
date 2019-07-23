/*
 * @jest-environment jsdom
 */

import React from 'react';
import renderer, { act } from 'react-test-renderer';
import HelloComponent from './HelloComponent';

describe('HelloComponent', () => {
  it('should match snapshot', () => {
    const component = renderer.create(<HelloComponent />);

    expect(component.toJSON()).toMatchSnapshot();

    const componentInstance = component.root;

    const input = componentInstance.findByType('input');

    act(() => {
      input.props.onChange({ target: { value: 'John' } });
    });

    expect(component.toJSON()).toMatchSnapshot();
  });
});
