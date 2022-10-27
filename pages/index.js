import { useLayout } from "../components/Layout";

import Button from "../components/Button";
import InputText from "../components/InputText";
import Cursor from "../components/Cursor";

export default function Home() {
  const { components, setComponents } = useLayout();
  return (
    <div className="relative w-full h-full m-4 grow">
      {components.map((component, index) => {
        if (component.type === "button") {
          return (
            <div
              className="absolute z-10 w-fit h-fit active:cursor-move"
              style={{
                top: component.position?.y || 0 + index * 40,
                left: component.position?.x || 0 ,
              }}
              onDragStart={(e) => {
                const { x, y } = e.target.getBoundingClientRect();
                console.log(e);
                // setComponents((components) => {
                //   const newComponents = [...components];
                //   newComponents[index].position = { x, y };
                //   return newComponents;
                // });
              }}
            >
              <Button
                content={component.props?.text}
                bgColor={component.props?.bgColor}
                textColor={component.props?.textColor}
                borderColor={component.props?.borderColor}
              />
            </div>
          );
        }
        if (component.type === "textinput") {
          return (
            <div
              className="absolute w-fit h-fit"
              style={{
                top: component.position?.y || 0 + index * 40,
                left: component.position?.x || 0 ,
              }}
            >
              <InputText
                textPlaceHolder={component.props?.text}
                bgColor={component.props?.bgColor}
                textColor={component.props?.textColor}
                borderColor={component.props?.borderColor}
              />
            </div>
          );
        }
        if (component.type === "cursor") {
          return (
            <div
              className="absolute w-fit h-fit"
              style={{
                top: component.position?.y || 0 + index * 40,
                left: component.position?.x || 0 ,
              }}
            >
              <Cursor
                min={component.props?.min}
                max={component.props?.max}
                value={component.props?.value}
                step={component.props?.step}
              />
            </div>
          );
        }
      })}
    </div>
  );
}
