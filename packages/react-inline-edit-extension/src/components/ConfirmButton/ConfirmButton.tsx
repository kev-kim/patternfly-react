import * as React from 'react';
import CheckIcon from '@patternfly/react-icons/dist/esm/icons/check-icon';
import { Button, ButtonProps } from '@patternfly/react-core';

export const ConfirmButton: React.FunctionComponent<ButtonProps> = ({ variant = 'primary', ...props }: ButtonProps) => (
  <Button variant={variant} {...props}>
    <CheckIcon />
  </Button>
);
ConfirmButton.displayName = 'ConfirmButton';
