import { ReactNode } from "react";
import Header from "./header";

interface LayoutProps {
  children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <section className="w-full h-screen bg-[#0e1118] text-[#fff]  flex flex-col justify-between items-center ">
        <main className="w-full  lg:w-[1100px] xl:w-[1300px] py-4">
          <Header />
          {children}
        </main>
      </section>
    </>
  );
};

export default Layout;
