/* eslint-disable react/prop-types */
import { Header } from '../components';

export const Layout = ({ children }) => {
  return (
    <div className="w-full max-w-[1440px] mx-auto flex flex-col flex-1 h-screen font-poppins">
      <Header />
      <main className="flex-1 flex-col flex h-full">{children}</main>
    </div>
  );
};
