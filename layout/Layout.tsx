import { ReactNode } from "react";

interface layoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: layoutProps) => {
  return (
    <main>
      <h2>layout</h2>
      {children}
    </main>
  );
};
