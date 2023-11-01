import { ReactNode } from 'react';

interface layoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: layoutProps) => {
  return <main>{children}</main>;
};
