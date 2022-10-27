import { createContext, useContext, useState } from "react";
import { Navbar } from "./Navbar";

import { CgHashtag } from "react-icons/cg";

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
  return (
    <div className="w-64 h-full border-r border-neutral-200">
      <div className="p-3 border-b h-2/5 border-neutral-200">
        <h2 className="font-bold text-neutral-600">Bibliothèque</h2>
        <div className="flex flex-col mt-4 overflow-y-scroll gap-y-2">
          <button className="inline-flex items-center p-2 duration-150 border rounded-md hover:bg-neutral-100 active:bg-neutral-200 active:border-neutral-300 border-neutral-200 bg-neutral-50">
            <CgHashtag className="w-4 h-4 mr-1 text-neutral-400" />
            Bouton
          </button>
        </div>
      </div>
      <div className="p-3 h-3/5 border-neutral-200">
        <h2 className="font-bold text-neutral-600">Composants</h2>
      </div>
    </div>
  );
};
const RightSidebar = () => {
  return <div className="h-full border-l border-neutral-200 w-72"></div>;
};
