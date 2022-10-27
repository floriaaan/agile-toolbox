import { createContext, useContext, useEffect, useState } from "react";
import { TbClick } from "react-icons/tb";
import { BiText } from "react-icons/bi";

import { HiViewBoards, HiVideoCamera, HiPhotograph } from "react-icons/hi";

import { BsInputCursorText } from "react-icons/bs";
import { BsSliders } from "react-icons/bs";

import { Navbar } from "./Navbar";

const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
  const [components, setComponents] = useState([]);
  const [selectedComponentIndex, setSelectedComponentIndex] =
    useState(undefined);

  // useEffect(() => {
  //   console.log(components, selectedComponentIndex);
  // }, [components, selectedComponentIndex]);

  useEffect(() => {
    // auto load localstorage saved components if exists on first render
    const savedComponents = localStorage.getItem("components");
    if (savedComponents) {
      setComponents(JSON.parse(savedComponents));
    }
  }, []);

  useEffect(() => {
    // save components to localstorage on change
    if (components.length > 0) {
      localStorage.setItem("components", JSON.stringify(components));
      localStorage.setItem("lastSavedAt", new Date().toISOString());
    }
  }, [components]);

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
    const {components, setComponents, setSelectedComponentIndex} = useLayout();
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
                        <TbClick className="w-4 h-4 mr-2 text-neutral-400"/>
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
                        <BiText className="w-4 h-4 mr-2 text-neutral-400"/>
                        Texte
                    </button>
                    <button
                        onClick={() => {
                            const old = components;
                            const component = {
                                type: "cursor",
                                props: {},
                                key: `cursor-${old.length}`,
                                name: `Curseur ${old.length + 1}`,
                            };
                            setComponents([...old, component]);

                            setSelectedComponentIndex(old.length);
                        }}
                        className="inline-flex items-center p-2 text-sm duration-150 border rounded-md hover:bg-neutral-100 active:bg-neutral-200 active:border-neutral-300 border-neutral-200 bg-neutral-50"
                    >
                        <BsSliders className="w-4 h-4 mr-1 text-neutral-400"/>
                        Curseur
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
                        <BsInputCursorText className="w-4 h-4 mr-1 text-neutral-400"/>
                        Champ texte
                    </button>
                    <button
                        onClick={() => {
                            const old = components;
                            const component = {
                                type: "carousel",
                                props: {},
                                key: `carousel-${old.length}`,
                                name: `Caroussel ${old.length + 1}`,
                            };
                            setComponents([...old, component]);

                            setSelectedComponentIndex(old.length);
                        }}
                        className="inline-flex items-center p-2 text-sm duration-150 border rounded-md hover:bg-neutral-100 active:bg-neutral-200 active:border-neutral-300 border-neutral-200 bg-neutral-50"
                    >
                        <HiViewBoards className="w-4 h-4 mr-2 text-neutral-400"/>
                        Caroussel
                    </button>
                    <button
                        onClick={() => {
                            const old = components;
                            const component = {
                                type: "image",
                                props: {},
                                key: `image-${old.length}`,
                                name: `Image ${old.length + 1}`,
                            };
                            setComponents([...old, component]);

                            setSelectedComponentIndex(old.length);
                        }}
                        className="inline-flex items-center p-2 text-sm duration-150 border rounded-md hover:bg-neutral-100 active:bg-neutral-200 active:border-neutral-300 border-neutral-200 bg-neutral-50"
                    >
                        <HiPhotograph className="w-4 h-4 mr-2 text-neutral-400"/>
                        Image
                    </button>
                    <button
                        onClick={() => {
                            const old = components;
                            const component = {
                                type: "video",
                                props: {},
                                key: `video-${old.length}`,
                                name: `Vidéo ${old.length + 1}`,
                            };
                            setComponents([...old, component]);

                            setSelectedComponentIndex(old.length);
                        }}
                        className="inline-flex items-center p-2 text-sm duration-150 border rounded-md hover:bg-neutral-100 active:bg-neutral-200 active:border-neutral-300 border-neutral-200 bg-neutral-50"
                    >
                        <HiVideoCamera className="w-4 h-4 mr-2 text-neutral-400"/>
                        Image
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
                                <TbClick className="w-4 h-4 mr-2 text-neutral-400"/>
                            )}
                            {component?.type === "cursor" && (
                                <BsSliders className="w-4 h-4 mr-2 text-neutral-400"/>
                            )}
                            {component?.type === "text" && (
                                <BiText className="w-4 h-4 mr-2 text-neutral-400"/>
                            )}
                            {component?.type === "textinput" && (
                                <BsInputCursorText className="w-4 h-4 mr-2 text-neutral-400"/>
                            )}
                            {component?.type === "carousel" && (
                                <HiViewBoards className="w-4 h-4 mr-2 text-neutral-400"/>
                            )}
                            {component?.type === "image" && (
                                <HiPhotograph className="w-4 h-4 mr-2 text-neutral-400"/>
                            )}
                            {component?.type === "video" && (
                                <HiVideoCamera className="w-4 h-4 mr-2 text-neutral-400"/>
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
  const { selectedComponentIndex, setComponents, components } = useLayout();
  const component = components[selectedComponentIndex];
  const [text, setText] = useState(component?.props?.text || "");
  const [bgColor, setBgColor] = useState(
    component?.props?.bgColor || "bg-transparent"
  );
  const [textColor, setTextColor] = useState(component?.props?.textColor || "");
  const [borderColor, setBorderColor] = useState(
    component?.props?.borderColor || ""
  );

  useEffect(() => {
    if (component) {
      setText(component?.props?.text || "");
      setBgColor(component?.props?.bgColor || "bg-transparent");
      setTextColor(component?.props?.textColor || "");
      setBorderColor(component?.props?.borderColor || "");
    }
  }, [selectedComponentIndex]);

  useEffect(() => {
    if (selectedComponentIndex !== undefined) {
      const old = components;
      old[selectedComponentIndex].props.text = text;
      old[selectedComponentIndex].props.bgColor = bgColor;
      old[selectedComponentIndex].props.textColor = textColor;
      old[selectedComponentIndex].props.borderColor = borderColor;
      setComponents([...old]);
    }
  }, [text, bgColor, textColor, borderColor]);

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
        <label className="flex flex-col">
          <span className="text-sm text-neutral-600">Couleur du fond</span>
          <select
            className="p-2 border rounded-md border-neutral-200 focus:border-primary-500 focus:ring-primary-500 focus:ring-2"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
          >
            <option value="bg-transparent">Aucune</option>
            <option value="bg-blue-100">Bleu</option>
            <option value="bg-red-100">Rouge</option>
            <option value="bg-green-100">Vert</option>
          </select>
        </label>
        <label className="flex flex-col">
          <span className="text-sm text-neutral-600">Couleur du texte</span>
          <select
            className="p-2 border rounded-md border-neutral-200 focus:border-primary-500 focus:ring-primary-500 focus:ring-2"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
          >
            <option value="">Aucune</option>
            <option value="text-blue-600">Bleu</option>
            <option value="text-red-600">Rouge</option>
            <option value="text-green-600">Vert</option>
          </select>
        </label>
        <label className="flex flex-col">
          <span className="text-sm text-neutral-600">Couleur de la bordure</span>
          <select
            className="p-2 border rounded-md border-neutral-200 focus:border-primary-500 focus:ring-primary-500 focus:ring-2"
            value={borderColor}
            onChange={(e) => setBorderColor(e.target.value)}
          >
            <option value="">Aucune</option>
            <option value="border-blue-300">Bleu</option>
            <option value="border-red-300">Rouge</option>
            <option value="border-green-300">Vert</option>
          </select>
        </label>
      </div>
    </div>
  ) : null;
};
