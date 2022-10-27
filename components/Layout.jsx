import { createContext, useContext, useEffect, useState } from "react";
import { Navbar } from "./Navbar";

import { TbClick } from "react-icons/tb";
import { BiText } from "react-icons/bi";
import { createContext, useContext, useState } from "react";
import { Navbar } from "./Navbar";

import { CgHashtag } from "react-icons/cg";
import { BsInputCursorText } from "react-icons/bs";

const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
  const [components, setComponents] = useState([]);
  const [selectedComponentIndex, setSelectedComponentIndex] =
    useState(undefined);

  //   useEffect(() => {
  //     console.log(components, selectedComponentIndex);
  //   }, [components, selectedComponentIndex]);

  return (
    <LayoutContext.Provider
      value={{
        components,
        setComponents,
        selectedComponentIndex,
        setSelectedComponentIndex,
      }}
    >
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
  const { components, setComponents, setSelectedComponentIndex } = useLayout();
  return (
    <div className="w-64 h-full border-r border-neutral-200">
      <div className="p-3 border-b h-2/5 border-neutral-200">
        <h2 className="font-bold text-neutral-600">Bibliothèque</h2>
        <div className="flex flex-col mt-4 overflow-y-auto h-full max-h-[85%] gap-y-2">
          <button
            onClick={() => {
              const old = components;
              const component = {
                type: "button",
                props: {},
                key: `button-${old.length}`,
                name: `Bouton ${old.length + 1}`,
              };
              setComponents([...old, component]);
              setSelectedComponentIndex(old.length);
            }}
            className="inline-flex items-center p-2 text-sm duration-150 border rounded-md hover:bg-neutral-100 active:bg-neutral-200 active:border-neutral-300 border-neutral-200 bg-neutral-50"
          >
            <TbClick className="w-4 h-4 mr-2 text-neutral-400" />
            Bouton
          </button>
          <button
            onClick={() => {
              const old = components;
              const component = {
                type: "text",
                props: {},
                key: `text-${old.length}`,
                name: `Texte ${old.length + 1}`,
              };
              setComponents([...old, component]);

              setSelectedComponentIndex(old.length);
            }}
            className="inline-flex items-center p-2 text-sm duration-150 border rounded-md hover:bg-neutral-100 active:bg-neutral-200 active:border-neutral-300 border-neutral-200 bg-neutral-50"
          >
            <BiText className="w-4 h-4 mr-2 text-neutral-400" />
            Texte
          </button>
          <button
            onClick={() => {
              const old = components;
              const component = {
                type: "textinput",
                props: {},
                key: `textinput-${old.length}`,
                name: `Champ texte ${old.length + 1}`,
              };
              setComponents([...old, component]);

              setSelectedComponentIndex(old.length);
            }}
            className="inline-flex items-center p-2 text-sm duration-150 border rounded-md hover:bg-neutral-100 active:bg-neutral-200 active:border-neutral-300 border-neutral-200 bg-neutral-50"
          >
            <BsInputCursorText className="w-4 h-4 mr-1 text-neutral-400" />
            Champ texte
          </button>
        </div>
      </div>
      <div className="p-3 h-3/5 border-neutral-200">
        <h2 className="font-bold text-neutral-600">Composants</h2>
        <div className="flex flex-col mt-4 overflow-y-auto h-full max-h-[85%] gap-y-2">
          {components.map((component, i) => (
            <button
              key={component?.key}
              onClick={() => setSelectedComponentIndex(i)}
              className="inline-flex items-center p-2 text-sm duration-150 border-b last:border-0 hover:bg-neutral-100 active:bg-neutral-200 active:border-neutral-300 border-neutral-200 "
            >
              {component?.type === "button" && (
                <TbClick className="w-4 h-4 mr-2 text-neutral-400" />
              )}
              {component?.type === "text" && (
                <BiText className="w-4 h-4 mr-2 text-neutral-400" />
              )}{component?.type === "textinput" && (
                <BsInputCursorText className="w-4 h-4 mr-2 text-neutral-400" />
              )}
              {component?.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * Figma-style sidebar for properties
 */
const RightSidebar = () => {
  const {
    selectedComponentIndex,
    setSelectedComponentIndex,
    setComponents,
    components,
  } = useLayout();
  const component = components[selectedComponentIndex];
  const [text, setText] = useState(component?.props?.text || "");

  useEffect(() => {
    if (component) {
      setText(component?.props?.text || "");
    }
  }, [selectedComponentIndex]);

  useEffect(() => {
    if (selectedComponentIndex !== undefined) {
      const old = components;
      old[selectedComponentIndex].props.text = text;
      setComponents([...old]);
    }
  }, [text]);

  return component ? (
    <div className="flex flex-col h-full p-4 border-l border-neutral-200 w-72 gap-y-4">
      <h2 className="font-bold text-neutral-600">Design de {component.name}</h2>
      <div className="flex flex-col gap-y-2">
        <label className="flex flex-col">
          <span className="text-sm text-neutral-600">Texte</span>
          <input
            type="text"
            className="p-2 border rounded-md border-neutral-200 focus:border-primary-500 focus:ring-primary-500 focus:ring-2"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </label>
      </div>
    </div>
  ) : null;
};
