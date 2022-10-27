import Clist from "../components/clist.js";

export default function Home() {
    const data = [
        {
            "value":"value 1",
            "label":"valeur 1"
        },
        {
            "value":"value 2",
            "label":"valeur 2"
        },
        {
            "value":"value 3",
            "label":"valeur 3"
        },
        {
            "value":"value 4",
            "label":"valeur 4"
        }
    ]
    return (
        <div>
            <h1>Coucou les loulous</h1>
            <Clist choices={data} maxChoicesNumber={2}/>
        </div>
    )
}
