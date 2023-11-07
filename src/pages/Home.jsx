import Chart_section from "../components/Chart_section";
import Diagram from "../components/Diagram";
import Questions from "./questions/Questions";
import Pre_case_quests from "../components/Pre_case_questions";
import PreCaseHeader from "../components/questions/PreCaseHeader";

export default function Home() {
    return (
        <>
            <PreCaseHeader />
            <section className="font-light text-center mt-10">
                <h1 className="mt-48 mb-10 text-4xl "> Temas Relevantes Sobre Saúde Financeira </h1>
                <Chart_section />
            </section>
            <Pre_case_quests />
        </>
    )
}