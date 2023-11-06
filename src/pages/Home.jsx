import Chart_section from "../components/Chart_section";
import Diagram from "../components/Diagram";
import { Logo } from "../logo";
import Questions from "./questions/Questions";
import Pre_case_quests from "../components/Pre_case_questions";


export default function Home() {
    return (
        <>
            <header>
                <figure className='grid justify-center mx-auto mt-10'>
                    <Logo></Logo>
                </figure>
                <h1 className="text-5xl font-extralight text-center mt-10"> Itau Unibanco | Pre-Case </h1>
                <img id="turma" src="turma.png" alt="" srcset="" className="" />
            </header>
            <section className="font-light text-center mt-10">
                <h1 className="mt-48 mb-10 text-4xl "> Temas Relevantes Sobre Saúde Financeira </h1>
                <Chart_section />
            </section>
            <Pre_case_quests />
        </>
    )
}