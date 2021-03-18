import React, { PropsWithChildren } from 'react';
import { RouteComponentProps } from 'react-router';

import Header from '../../../components/Header';
import { Wrapper } from './styles';

type Props = {
  children: React.ReactNode;
};
const DefaultLayout: React.FC<Props & RouteComponentProps> = ({
  children,
}: React.PropsWithChildren<Props> & RouteComponentProps) => {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
};

export default DefaultLayout;
