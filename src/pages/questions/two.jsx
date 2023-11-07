import BackBar from "../../components/Back_bar"
import PreCaseTwoSection from "../../components/questions/PreCaseTwoSection"
import PreCaseHeader from "../../components/questions/PreCaseHeader"

export default function PreCaseTwo() {
    return (
        <>
            <BackBar />
            <PreCaseHeader />
            <div className="h-screen w-2/3 mx-auto">
                <h1 id="pre-case-question-title" className="text-center text-4xl font-light mt-28 shadow-white capitalize">
                    Pensando em saúde financeira, busque vantagens e riscos no uso do cartão
                    de crédito.
                </h1>

                <PreCaseTwoSection />
            </div>
        </>
    )
}