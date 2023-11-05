import Dados_extra from "./charts/Dados_extra"
import Dados_Brasil from "./charts/Brasil_credito"

export default function Chart_section() {

    return (
        <section id="main-charts" className="w-50 mx-auto ">
            <a id="chart-card">
                <Dados_Brasil />
            </a>

            <a id="chart-card">
                <Dados_extra /> 
            </a>
        </section>
    )
}