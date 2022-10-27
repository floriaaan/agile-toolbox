import Button from "../components/Button";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Exporter = ({children}) => {

    const printDocument = () => {
        const report = new jsPDF({orientation:'portrait',unit:'pt',format:'a4',precision:100});
        report.setLineWidth(15)
        // console.log(report.getFontList())
        report.html(document.querySelector('#report')).then(() => {
            report.save('export.pdf');
        });
    }

    return(
        <>
            <div className="mb-5">
                <button onClick={() => printDocument()}>Exporter</button>
            </div>
            <div id='report' className="my-2 mx-2">
                {children}
            </div>
        </>
    )
}

export default Exporter;