import { Logo } from "../../logo";

export default function PreCaseHeader() {
    return <header>
        <figure className='grid justify-center mx-auto mt-10'>
            <Logo></Logo>
        </figure>
        <h1 className="text-5xl font-extralight text-center mt-10"> Itau Unibanco | Pre-Case </h1>
        <img id="turma" src="../turma.png" alt="" srcset="" className="" />
    </header>
}