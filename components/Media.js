import {HiChevronLeft, HiChevronRight} from "react-icons/hi";
import {useCarousel} from "@hooks/UseCarousel";
import {useState} from "react";
import {MediaModal} from "./Modal";
import {MediaView} from "./View";

const INTERVAL = 10000;
export const MediaCarouselView = ({medias}) => {
    const {active, previous, next, wrapperStyle, IndicatorsComponent} =
        useCarousel(medias, INTERVAL);

    const [modalContent, setModalContent] = useState(
        undefined
    );

    return (
        medias.length > 0 && (
            <>
                <div className="relative min-h-[12rem] h-full group">
                    <IndicatorsComponent/>
                    <div
                        className="bg-opacity-25 bg-gradient-to-b from-black to-black via-transparent min-h-[12rem] z-[6]"
                        style={wrapperStyle}
                        onClick={() => setModalContent(active)}
                    >
                        <MediaView {...(active)} />
                    </div>
                    <div
                        className="absolute w-full h-1/3 z-[7] bg-gradient-to-b from-gray-800 to-transparent top-0 left-0"></div>
                    <div
                        className="transition-all duration-200 absolute w-full h-1/3 z-[9] bg-gradient-to-t from-gray-800 to-transparent bottom-0 left-0 group-hover:opacity-100 opacity-0 flex flex-col justify-end pb-3 px-3">
                        <p className="text-xl font-extrabold text-white font-marianne">
                            {(active).name}
                        </p>
                    </div>

                    <div
                        className="absolute left-0 top-[calc(50%-4rem)] z-[8] p-12 cursor-pointer text-white opacity-60 duration-200 hover:opacity-100"
                        onClick={previous}
                    >
                        <HiChevronLeft className="w-12 h-12"/>
                    </div>
                    <div
                        className="absolute right-0 top-[calc(50%-4rem)] z-[8] p-12 cursor-pointer text-white opacity-60 duration-200 hover:opacity-100"
                        onClick={next}
                    >
                        <HiChevronRight className="w-12 h-12"/>
                    </div>
                </div>
                {modalContent && (
                    <MediaModal
                        media={modalContent}
                        onClose={() => {
                            setModalContent(undefined);
                        }}
                    />
                )}
            </>
        )
    );
};
