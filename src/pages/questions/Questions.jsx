import axios from 'axios'
import { useState } from 'react'

export default function Questions() {
    const [data, setData] = useState([])

    const url = 'https://itau-api.vercel.app/charts/'

    const handleQuest = () => {
        // Faça o request com o axios.
        axios.get(url)
            .then((response) => {
                setData(response.data);
                console.log(data);
            })
            .catch((error) => {
                // Tratar erros.
            });
    };

    return (
        <div className='w-1/3 mx-auto mt-28'>
            <h1 className='text-4xl text-center font-light'> Questões Levantadas </h1>
            <br />
            {data.map((obj) => (
                <div id='' className='bg-[#1d3aa7] p-10 rounded-lg mb-10'>
                    <header className='w-100'>
                        <h1>Questão: { obj.problem } </h1>
                        <h2>Soluçao: { obj.solution } </h2>
                    </header>
                </div>
            ))}
            {handleQuest()}
        </div>
    )
}