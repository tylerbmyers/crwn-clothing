import React from 'react';
import { SignUpContainer } from '../sign-up/sign-up.styles';

import { SpinnerContainer, SpinnerOverlay } from './spinner.styles';

const Spinner = () => (
  <SpinnerOverlay>
    <SignUpContainer />
  </SpinnerOverlay>
);

export default Spinner;
