/* eslint-disable react/prop-types */
import { Header } from '../components';

export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">{children}</main>
    </div>
  );
};
