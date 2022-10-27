import { createContext, useContext, useState } from "react";
import { Navbar } from "./Navbar";

const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
  const [components, setComponents] = useState();
  return (
    <LayoutContext.Provider value={{}}>
      <main className="flex flex-col w-screen h-screen overflow-hidden">
        <Navbar />
        <div className="inline-flex w-full h-full grow">
          <LeftSidebar />
          <div className="grow">{children}</div>
          <RightSidebar />
        </div>
      </main>
    </LayoutContext.Provider>
  );
};

export const useLayout = () => useContext(LayoutContext);

const LeftSidebar = () => {
  return <div className="h-full border-r border-[#e5e5e5] w-72">
    
  </div>;
};
const RightSidebar = () => {
  return <div className="h-full border-l border-[#e5e5e5] w-72"></div>;
};
