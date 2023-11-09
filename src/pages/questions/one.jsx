import { useState } from "react";
import BackBar from "../../components/Back_bar"
import PreCaseHeader from "../../components/questions/PreCaseHeader";
import PreCaseOneSection from "../../components/questions/PreCaseOneSection";
import NextOrPrev from "../../components/ui/NextOrPrev";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

export default function PreCaseOne() {
    const [open, setOpen] = useState()
    const handleOpen = (value) => {
        setOpen(value === open ? undefined : value)
    }

    return (
        <>
            <BackBar />
            <PreCaseHeader />
            <div className="xl:w-2/3 mx-auto">
                <h1 id="pre-case-question-title" className="text-center text-4xl font-light mt-28 shadow-white capitalize">
                    Com uma concorrência de cartão de crédito tão alta entre os bancos e
                    fintechs, qual são os principais diferenciais dos players de mercado?
                </h1>

                <p className="text-2xl text-center font-light mt-28">

                    <h2 className="text-2xl w-2/3 mx-auto">
                        No cenário de cartões de crédito e fintechs, a concorrência é alta e os clientes estão buscando melhores opções e benefícios. Para diferenciar-se no mercado, os players devem oferecer:
                    </h2>

                    <PreCaseOneSection />

                    <div id="divider"></div>

                    <h4 className="underline decoration-1 underline-offset-8 mt-20">
                        Os Beneficios oferecidos também são um grande diferencial:
                    </h4>

                    <section className="my-20">
                        <h1 className="text-4xl mb-8"> Beneficios no Itau: </h1>

                        <article className="w-2/3 mx-auto">

                            <Accordion open={open === 0} icon={<Icon id={0} open={open} />}>
                                <AccordionHeader onClick={() => handleOpen(0)}
                                    className="font-light text-center"
                                >
                                    Parcerias e Descontos
                                </AccordionHeader>
                                <AccordionBody className="text-white font-light text-2xl">
                                    O Itaú Unibanco estabelece parcerias com diversas empresas e estabelecimentos, oferecendo descontos exclusivos e benefícios para os titulares de cartões em áreas como viagens, entretenimento, restaurantes e compras.
                                </AccordionBody>
                            </Accordion>
                            <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                                <AccordionHeader onClick={() => handleOpen(1)}
                                    className="font-light text-center"
                                >
                                    Parcerias Estratégicas
                                </AccordionHeader>
                                <AccordionBody className="text-white font-light text-2xl">
                                    O Itaú estabelece parcerias estratégicas com empresas de diversos setores para oferecer benefícios exclusivos aos seus clientes, como descontos em estabelecimentos parceiros.
                                </AccordionBody>
                            </Accordion>
                            <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                                <AccordionHeader onClick={() => handleOpen(2)}
                                    className="font-light text-center"
                                >
                                    Programa de Recompensa
                                </AccordionHeader>
                                <AccordionBody className="text-white font-light text-2xl">
                                    O Itaú Unibanco oferece um programa de recompensas chamado "Programa Sempre Presente" que permite aos clientes acumularem pontos em suas transações com o cartão e trocá-los por diversos benefícios, como passagens aéreas, produtos, descontos em parceiros e outros prêmios.
                                </AccordionBody>
                            </Accordion>
                            <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                                <AccordionHeader onClick={() => handleOpen(3)}
                                    className="font-light text-center"
                                >
                                    IPhone Para Sempre
                                </AccordionHeader>
                                <AccordionBody className="text-white font-light text-2xl">
                                    O "iPhone para Sempre" é um programa do Itaú Unibanco que oferece a oportunidade de os clientes adquirirem um iPhone novo a cada ano, mediante um contrato de locação financeira (leasing). Isso permite que os clientes tenham acesso aos modelos mais recentes da Apple sem a necessidade de comprar o aparelho integralmente. O programa envolve o pagamento de parcelas mensais durante um período determinado, e ao final desse período, o cliente pode trocar seu iPhone por um novo modelo ou optar por adquiri-lo definitivamente, mediante pagamento de uma parcela de compra.
                                </AccordionBody>
                            </Accordion>
                            <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                                <AccordionHeader onClick={() => handleOpen(4)}
                                    className="font-light text-center"
                                >
                                    Itaucard Infinity
                                </AccordionHeader>
                                <AccordionBody className="text-white font-light text-2xl">
                                    O "Itaucard Infinity" é um cartão de crédito premium oferecido pelo Itaú Unibanco, direcionado a clientes de alta renda. Ele oferece benefícios exclusivos, como acesso a salas VIP em aeroportos, serviços de concierge, seguros especiais e programas de recompensas diferenciados. O cartão é projetado para atender às necessidades de clientes que buscam conveniência e experiências exclusivas.
                                </AccordionBody>
                            </Accordion>
                        </article>
                    </section>
                </p>
            </div>

            <div id="divider"></div>
            <div className="flex justify-center my-10">
                <NextOrPrev goto={'two'}/>
            </div>
        </>
    )
}