import BackBar from "../../components/Back_bar"
import PreCaseTwoSection from "../../components/questions/PreCaseTwoSection"
import PreCaseHeader from "../../components/questions/PreCaseHeader"

export default function PreCaseTwo() {
    return (
        <>
            <BackBar />
            <PreCaseHeader />
            <div className="block w-2/3 mx-auto my-52">
                <h1 id="pre-case-question-title" className="text-center text-4xl font-light mt-28 shadow-white capitalize">
                    Pensando em saúde financeira, busque vantagens e riscos no uso do cartão
                    de crédito.
                </h1>

                <PreCaseTwoSection />

                <div id="divider"></div>

                <section className="w-100">
                    <h2 className="mt-48 font-light text-center mb-10 text-4xl">
                        Dados Sobre o Endividamento no Brasil
                    </h2>
                    <div className="grid items-center grid-cols-2 gap-10 gap-y-20 grid-item text-center">
                        <p id="1" className=''>
                            <header className="text-3xl mb-3 underline underline-offset-8 decoration-1">
                                Por que as famílias estão endividadas?
                            </header>
                            A pesquisa Perfil e Comportamento do Endividamento Brasileiro 2022 indicou que no ano passado o principal tipo de dívida do brasileiro era o cartão de crédito (53%). Mais da metade desses gastos com cartão (65%) correspondiam a compras em supermercado. As famílias precisam do crédito para comprar alimentos, mas a renda mensal não dá conta de manter esse gasto essencial.

                            Depois dos mantimentos, o segundo maior gasto com cartão (48%) corresponde a compras de produtos, como roupas, calçados e eletrodomésticos.
                        </p>
                        <p id="" className=''>
                            <header className="text-3xl mb-3 underline underline-offset-8 decoration-1">
                                Todas as famílias endividadas estão inadimplentes?
                            </header>
                            Não, e é importante diferenciar esses conceitos. Uma família endividada é aquela que assumiu um pagamento e está com parte da renda total do mês comprometida – pode ser um financiamento, crediário, fatura de cartão. Ainda que o pagamento seja feito em dia, o endividamento alto é sempre um alerta, porque compromete a capacidade de pagamento das pessoas e pode levar à inadimplência.

                            A inadimplência ocorre quando as dívidas estão em atraso. De acordo com a mesma pesquisa da CNC, em abril de 2023 quase um terço das famílias no Brasil estavam inadimplentes.
                        </p>
                        <p className=''>
                            <header className="text-3xl mb-3 underline underline-offset-8 decoration-1">
                                Dívidas: a família toda pode ajudar
                            </header>
                            Para reverter e evitar essa situação de dívidas – tanto nas compras do mercado quando em itens no comércio, por exemplo – é importante a colaboração de toda a família. A psicóloga Valéria Meirelles avalia que existe um duplo papel da família quando o assunto é dívida: ao mesmo tempo que ela representa um porto seguro para muitas pessoas, estar negativado gera também muita vergonha diante dos familiares.
                            <br /> <br />
                            Valéria afirma que “é importante a inclusão de toda a família como protagonista no uso do dinheiro e dos recursos, pois essa atitude incentiva a responsabilidade coletiva”. Ela acredita que a melhor alternativa seja ser sempre transparente perante os familiares.
                            <br /> <br />
                            A pesquisa também revela que 58% dos entrevistados nunca mentiram ou esconderam a situação financeira dos familiares, mas 63% sentiram impacto no relacionamento com a família por causa das dívidas.
                        </p>
                        <p className=''>
                            <header className="text-3xl mb-3 underline underline-offset-8 decoration-1">
                                Como evitar o endividamento em família
                            </header>
                            Veja dicas de como fazer toda a família colaborar para a redução de gastos:
                            <br /> <br />
                            ●      Faça uma planilha
                            Não dá para escapar desse passo: é preciso colocar no papel todos os gastos da família e confrontar com o dinheiro que entra. Depois dessa organização, pode ficar evidente o que deve ser cortado dos custos para que não faltem recursos todo mês.
                            <br /> <br />
                            ●      Planeje as refeições
                            Considerando que um dos maiores gastos é com supermercado, seja racional ao fazer as compras de alimentos. O ideal é sempre ter uma lista, já com as refeições da semana planejadas. Isso evita compras desnecessárias e comida desperdiçada na geladeira.
                            <br /> <br />
                            ●      Procure promoções e descontos
                            Economizar nas compras de mercado exige tempo e pesquisa, mas vale a pena. Mapeie os dias de promoção de carne e hortifrúti, por exemplo, e avalie quais produtos podem ser comprados em maior quantidade, em supermercados de “atacarejo”.
                            <br /> <br />
                            ●      Economize em casa
                            Com a colaboração de todos, é possível reduzir as faturas das contas de água, energia elétrica e gás. Além disso, a família também pode estabelecer um limite mensal para refeições de delivery, por exemplo.
                            <br /> <br />
                            ●      Estabeleça uma mesada
                            Se a família tiver crianças ou adolescentes, é importante determinar uma mesada mensal e não ultrapassar esse valor. Além de contribuir para o planejamento do mês, é uma forma de ensinar os filhos a usar o dinheiro com consciência.
                        </p>
                    </div>
                    <footer className="grid-cols-2 text-slate-500 h-10 mt-10 font-extralight text-center">
                        fonte: Serasa 2023 <br />
                        <a href="https://www.serasa.com.br/limpa-nome-online/blog/endividamento-no-brasil/">https://www.serasa.com.br/limpa-nome-online/blog/endividamento-no-brasil/</a>
                    </footer>
                </section>
            </div>
        </>
    )
}