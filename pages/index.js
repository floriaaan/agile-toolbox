import { useLayout } from "../components/Layout";

import Button from "../components/Button";
import InputText from "../components/InputText";

export default function Home() {
  const { components } = useLayout();
  return (
    <div className="relative w-full h-full grow">
      {components.map((component, index) => {
        if (component.type === "button") {
          return (
            <div
              className="absolute w-fit h-fit"
              style={{
                top: component.position?.y || 0 + index * 40,
                left: component.position?.x || 0 ,
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
      })}
    </div>
  );
}
