import { useState } from "react";
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

export default function PreCaseOneSection() {
    const [open, setOpen] = useState()
    const handleOpen = (value) => {
        setOpen(value === open ? undefined : value)
    }

    return <div className="text-center w-2/3 mx-auto my-10">
        <h1 className="">  </h1>

        <Accordion open={open === 0} icon={<Icon id={0} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(0)}
                className="font-light text-center"
            >
                Educação Financeira
            </AccordionHeader>
            <AccordionBody className="text-white font-light text-2xl">
                Fornecer recursos e ferramentas de educação financeira para ajudar os clientes a tomar decisões informadas sobre suas finanças.
            </AccordionBody>
        </Accordion>

        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(1)}
                className="font-light text-center"
            >
                Taxas e Custos Competitivos
            </AccordionHeader>
            <AccordionBody className="text-white font-light text-2xl">
                Muitas fintechs oferecem cartões de crédito com taxas de juros e anuidades mais baixas em comparação com os bancos tradicionais, o que pode atrair consumidores em busca de economias.
            </AccordionBody>
        </Accordion>

        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(2)}
                className="font-light text-center"
            >
                Inovação Tecnológica
            </AccordionHeader>
            <AccordionBody className="text-white font-light text-2xl">
                Introduzir tecnologias inovadoras, como pagamento por aproximação (NFC), autenticação biométrica e IA para melhorar a experiência do cliente.
            </AccordionBody>
        </Accordion>

        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(3)}
                className="font-light text-center"
            >
                Cobertura de Rede
            </AccordionHeader>
            <AccordionBody className="text-white font-light text-2xl">
                Ter uma ampla rede de agências e caixas eletrônicos para facilitar o acesso físico aos serviços financeiros.
            </AccordionBody>
        </Accordion>
    </div>
}