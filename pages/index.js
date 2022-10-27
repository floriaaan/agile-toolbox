import Button from "../components/Button";

import {MediaCarouselView} from "@components/Media";

export default function Home() {
    return (
        <>
            <h1>Coucou les loulous</h1>
            <MediaCarouselView medias={[
                {
                    name: "sylvain",
                    type: "image",
                    size: 200,
                    url: "https://risibank.fr/cache/medias/0/21/2114/211440/full.png",
                }, {
                    name: "string",
                    type: "image",
                    size: 200,
                    url: "https://risibank.fr/cache/medias/0/21/2114/211440/full.png",
                }
            ]}/>
        </>
    )
}
