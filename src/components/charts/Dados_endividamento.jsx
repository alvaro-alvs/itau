import { useEffect, useRef, useState } from 'react'
import { defaultTitle, itauTheme, size_x, size_y } from './settings'
import ApexCharts from 'react-apexcharts'

export default function Fatores_endividamento() {
    const [index, setIndex] = useState(0)

    const index_color = [
        "#2966CC",
        "#ED7332",
        "#E0BF12",
        "#15D378",
        "#EF2E2E"
    ]

    const insight_title = {
        0: 'Imprevistos',
        1: 'Diminuição da Renda',
        2: 'Desemprego',
        3: 'Alta dos Preços',
        4: 'Descontrole Financeiro'
    }

    const solutions = {
        0: [
            '• Construa uma reserva de emergência para cobrir despesas inesperadas.',
            '• Utilize o seguro de cartão de crédito, se disponível, para cobrir eventos imprevistos.'
        ],
        1: [
            '• Reduza gastos não essenciais e ajuste seu estilo de vida de acordo com a nova realidade financeira.',
            '• Considere encontrar fontes alternativas de renda, como trabalhos temporários.'
        ],
        2: [
            '• Use sua reserva de emergência para cobrir despesas enquanto procura um novo emprego.',
            '• Entre em contato com o emissor do cartão para discutir opções de pagamento flexíveis temporárias.'
        ],
        3: [
            '• Faça um orçamento detalhado e reduza despesas não essenciais.',
            '• Compre de forma mais consciente, procurando ofertas e comparando preços.'
        ],
        4: [
            '• Crie um plano de orçamento para acompanhar e controlar seus gastos.',
            '• Evite usar o cartão de crédito para compras não essenciais e concentre-se em pagar dívidas existentes.'
        ]

    }

    const ListSolution = ({ solutions }) => {

        return (
            <>
                {solutions.map((item, index) => (
                    <p> { item } <br/> </p>
                ))}
            </>
        )
    }


    const data = {
        'imprevistos': 17,
        'menos_renda': 18,
        'desemprego': 14,
        'alta_dos_precos': 13,
        'descontrole_financeiro': 12,
        'outros': 26
    }

    const Charts = ApexCharts

    const options = {
        chart: {
            type: 'donut',
            events: {
                dataPointMouseEnter: function (event, chartContext, config) {
                    // console.log("Event: ", event, "Context: ", chartContext, "Config: ", config)
                    console.log(config.dataPointIndex)
                    setIndex(config.dataPointIndex)
                }
            }
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
        series: [data.imprevistos, data.menos_renda, data.desemprego, data.alta_dos_precos, data.descontrole_financeiro],
        labels: ['Imprevistos', 'Diminuição da Renda', 'Desemprego', 'Alta dos Preços', 'Descontrole Financeiro']
    }

    return <>
        <h1 className="text-3xl font-light mb-8"> Quais São Fatores que Causam Endividamento? </h1>
        <Charts className="" options={options} series={options.series} type="donut" width={size_x} height={size_y} />

        <div className="w-fit mx-auto">
            <div id="insight-divider" className="w-100" style={{
                height: '3px',
                backgroundColor: index_color[index],
                boxShadow: '0px 0px 2rem ' + index_color[index],
            }}></div>

            <h2 className="text-3xl font-extralight mb-8"> {insight_title[index]} </h2>

            <p className="text-center mx-auto whitespace-normal">
                <ListSolution solutions={solutions[index]} />
            </p>
        </div>
    </>
}