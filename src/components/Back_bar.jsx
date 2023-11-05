

export default function BackBar() {
    return <header className="w-100 bg-[#2966CC]">
        <button onClick={() => {window.location.href='/'}} className="px-10 py-4 transition hover:bg-[#3f71c7]">
            Voltar
        </button>
    </header>
}