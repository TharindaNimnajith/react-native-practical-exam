import * as React from 'react';
import renderer from 'react-test-renderer';

import {MonoText} from '../StyledText';

// noinspection JSCheckFunctionSignatures
it(`renders correctly`, () => {
  const tree = renderer.create(<MonoText>Snapshot test!</MonoText>).toJSON();

  // noinspection JSCheckFunctionSignatures,JSUnresolvedFunction
  expect(tree).toMatchSnapshot();
});
