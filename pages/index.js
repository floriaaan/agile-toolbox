import { useLayout } from "../components/Layout";

import Button from "../components/Button";
import InputText from "../components/InputText";

export default function Home() {
  const { components, setComponents } = useLayout();
  return (
    <div className="relative w-full h-full m-4 grow">
      {components.map((component, index) => (
        <div
          key={index}
          className="absolute z-10 w-fit h-fit active:cursor-move"
          style={{
            top: component.position?.y || 0 + index * 40,
            left: component.position?.x || 0,
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
          {component.type === "button" && (
            <Button
              content={component.props?.text}
              bgColor={component.props?.bgColor}
              textColor={component.props?.textColor}
              borderColor={component.props?.borderColor}
            />
          )}

          {component.type === "textinput" && (
            <InputText
              textPlaceHolder={component.props?.text}
              bgColor={component.props?.bgColor}
              textColor={component.props?.textColor}
              borderColor={component.props?.borderColor}
            />
          )}
        </div>
      ))}
    </div>
  );
}
