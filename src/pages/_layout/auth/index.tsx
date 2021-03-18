import React, { PropsWithChildren } from 'react';
import { RouteComponentProps } from 'react-router';

import { Wrapper, Content } from './styles';

type Props = {
  children: React.ReactNode;
};

const AuthLayout: React.FC<Props & RouteComponentProps> = ({
  children,
}: React.PropsWithChildren<Props> & RouteComponentProps) => {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default AuthLayout;
