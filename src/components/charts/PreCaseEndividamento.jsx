import { defaultTitle, itauTheme } from './settings'
import ApexCharts from 'react-apexcharts'

export default function PreCaseEndividamento() {

  const data = {
    'correntistas_ativos': 26500000,
    'possuem_credito': 9000000,
    'share_faturamento_credito': 5484100,
    'imparcial': 5487874
  }

  const Charts = ApexCharts
  
  const options = {
    chart: {
      type: 'donut',

    },
    colors: itauTheme,
    title: {
      text: 'Correntistas do Itau', // O texto do título do gráfico
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
    series: [data.correntistas_ativos, data.possuem_credito, data.share_faturamento_credito, data.imparcial],
    labels: ['Correntistas Ativos', 'Possuem Credito', 'Faturamento', 'Imparcial']
  }


  return <Charts className="border rounded-xl p-10 border-slate-700" options={options} series={options.series} type="pie" width={500} height={350} />
}