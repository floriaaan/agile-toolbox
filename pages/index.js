import {useLayout} from "@components/Layout";
import Button from "@components/Button";
import InputText from "@components/InputText";
import {MediaView} from "@components/View";

export default function Home() {
    const {components, setComponents} = useLayout();
    return (
        <div className="relative w-full h-full m-4 grow overflow-y-auto">
            <video
                autoPlay={false}
                muted
                className="z-[6] h-full xl:h-auto xl:w-full object-cover overflow-hidden absolute"
            >
                <source src={"file:///home/anatole/T%C3%A9l%C3%A9chargements/React%20in%20100%20Seconds.mp4"}
                        type={"video/mp4"}/>
                Your browser does not support the audio element.
            </video>
            {components.map((component, index) => (
                <div
                    key={index}
                    className="my-2 z-10 w-fit h-fit active:cursor-move"
                    style={{
                        top: component.position?.y || 0 + index * 40,
                        left: component.position?.x || 0,
                    }}
                    onDragStart={(e) => {
                        const {x, y} = e.target.getBoundingClientRect();
                        console.log(e);
                        // setComponents((components) => {
                        //   const newComponents = [...components];
                        //   newComponents[index].position = { x, y };
                        //   return newComponents;
                        // });
                    }}
                >
                    <MediaView type={component.type} name={component?.name} url={component?.url}/>
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
                    {component.type === "image" && (
                        <MediaView type={component.type} name={component?.name} url={component?.url}/>
                    )}
                </div>
            ))}
        </div>
    );
}
