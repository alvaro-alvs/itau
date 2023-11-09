

export default function NextOrPrev({ goto }) {
    let label = ''
    if (goto === 'two') {
        label = 'Proxima Questao'
    } else {
        label = 'Questao Anterior'
    }

    const handleClick = (target) => {
        window.location.href = '/questions/' + target
    }

    return <>
        <button id="nextorprev" onClick={() => {handleClick(goto)}}> {label} </button>
    </>
}