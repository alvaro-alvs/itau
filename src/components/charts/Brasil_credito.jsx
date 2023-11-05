import ApexCharts from "react-apexcharts";
import { defaultTitle, itauTheme } from "./settings";

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
        title: {
            text: 'Distribuiçao',
            style: defaultTitle,
            align: 'center',
        },
        legend: {
            show: true, // Define se a legenda será exibida (true) ou ocultada (false)
            position: 'top', // Posição da legenda ('top', 'bottom', 'left', 'right')
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

    return <Chart className='border rounded-xl p-10 border-slate-700' options={options} series={options.series} type="pie" width={500} height={350} />
}