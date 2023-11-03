import dynamic from "next/dynamic";

export default function Correntistas_itau() {
    const data = {
      'correntistas_ativos': 26500000,
      'possuem_credito': 9000000,
      'share_faturamento_credito': 5484100,
    }

    const Charts = dynamic(() => import('react-apexcharts'), {
        ssr: false,
      })
      const options = {
        chart: {
          type: 'donut',
          
        },
        series: [data.correntistas_ativos, data.possuem_credito, data.share_faturamento_credito],
        labels: ['Correntistas Ativos', 'Possuem Credito', 'Faturamento']
      }

    return <Charts className="justify-center" options={options} series={options.series} type="pie" width={500} height={350} />
}