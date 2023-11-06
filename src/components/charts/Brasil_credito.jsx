import ApexCharts from "react-apexcharts";
import { defaultTitle, itauTheme, size_x, size_y } from "./settings";

//* Grafico Exibindo informaçoes sobre cartao de credito no Brasil
export default function Dados_Brasil() {

    const data = {
        'baixa': 50,
        'media': 33,
        'alta': 17
    }
    const options = {
        chart: {
            type: 'donut',
        },
        colors: itauTheme,
        legend: {
            show: true, // Define se a legenda será exibida (true) ou ocultada (false)
            position: 'bottom', // Posição da legenda ('top', 'bottom', 'left', 'right')
            horizontalAlign: 'center', // Alinhamento horizontal da legenda ('left', 'center', 'right')
            markers: {
                width: 12,
                height: 12,
            },
        },
        series: [data.baixa, data.media, data.alta],
        labels: ['Classe Baixa Renda', 'Classe Média Renda', 'Classe Alta Renda']
    }

    const Chart = ApexCharts

    return <>
        <h1 className="text-3xl font-light mb-8"> Distribuição do Uso do Cartão de Crédito Entre as Classes Sociais </h1>
        <Chart className='' options={options} series={options.series} type="donut" width={size_x} height={size_y} />

        <p className="mt-20">
            O aumento do uso do cartão de crédito nas classes mais baixas no Brasil é uma tendência complexa, com vantagens e desafios. A educação financeira e o acesso a serviços financeiros justos são fundamentais para garantir que as pessoas possam aproveitar os benefícios do crédito de forma responsável e sustentável.

        </p>
    </>
}