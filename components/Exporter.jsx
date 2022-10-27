import { useLayout } from "./Layout";

const Exporter = ({children, printDocument}) => {
    const {selectedComponentIndex} = useLayout();

    return(
        <>
            <div id='report' className="my-2 mx-2">
                {children}
            </div>
            <div className={selectedComponentIndex != undefined ? 'fixed bottom-4 right-72 mr-2' : 'fixed bottom-4 right-4'}>
                <button onClick={() => printDocument()} className="border-2 px-2 py-1 rounded-md bg-slate-200 text-slate-600">Exporter</button>
            </div>
        </>
    )
}

export default Exporter;