import Dados_Brasil from "./charts/Brasil_credito"
import Fatores_endividamento from "./charts/Dados_endividamento"

export default function Chart_section() {
    

    return (
        <section id="main-charts" className="w-50 mx-auto ">
            <a id="chart-card">
                <Dados_Brasil />
            </a>

            <a href='/questions/two' id="chart-card">
                <Fatores_endividamento />
            </a>
        </section>
    )
}