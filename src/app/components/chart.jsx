import dynamic from "next/dynamic";

export default function Chart() {
    const Charts = dynamic(() => import('react-apexcharts'), {
        ssr: false,
      })
      const options = {
        chart: {
          type: 'donut',
          
        },
        series: [14, 33, 54, 18],
        labels: ['a', 'b', 'c']
      }

    return <Charts className="justify-center" options={options} series={options.series} type="donut" width={500} height={350} />
}