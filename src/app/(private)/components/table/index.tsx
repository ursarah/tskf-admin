
import { MdCancel } from "react-icons/md";
import ActionBtn from "../actionsbtn";

interface dataAlunos {
    contagem_aluno?: number,
    id?: number,
    nome?: string,
    telefone?: string,
    email?: string,
    bairro?: string,
}

export default async function Table() {
    // const data = await fetch('http://localhost:5000')
    // const dataAlunos: dataAlunos[] = await data.json()

    const dataAlunos: dataAlunos[] = [
        { 'id': 5, 'contagem_aluno': 1, 'nome': 'dfaddf', 'email': 'skdfja@dfa', 'telefone': 'efrewfw', 'bairro': 'wdkfaw' },
        { 'id': 7, 'contagem_aluno': 2, 'nome': 'dfad', 'email': 'skdfja@dfa', 'telefone': 'efrewfw', 'bairro': 'wdkfaw' },
        { 'id': 2, 'contagem_aluno': 3, 'nome': 'dfad', 'email': 'skdfja@dfa', 'telefone': 'efrewfw', 'bairro': 'wdkfaw' },
        { 'id': 9, 'contagem_aluno': 4, 'nome': 'dfad', 'email': 'skdfja@dfa', 'telefone': 'efrewfw', 'bairro': 'wdkfaw' },
    ]


    return (
        <>{dataAlunos.length === 0 ?
            <div className="px-15">
                <h1 className="font-bold text-6xl">Nenhum aluno cadastrado</h1>
                <MdCancel className="text-6xl text-red-600" />
            </div>

            :

            <div>
                <ul className="grid grid-cols-6 mb-5 font-bold">
                    <li className="px-13">#</li>
                    <li className="px-13">Nome </li>
                    <li className="px-13">Telefone</li>
                    <li className="px-13">Email</li>
                    <li className="px-13">Bairro</li>
                    <li className="px-13">Ações</li>
                </ul>
                {dataAlunos && dataAlunos.map((aluno) => (
                    <ul className="grid grid-cols-6 items-center" key={aluno.id} >
                        <li className="py-5 px-13 font-bold">{aluno.contagem_aluno}</li>
                        <li className="py-5 px-13">{aluno.nome}</li>
                        <li className="py-5 px-13">{aluno.telefone}</li>
                        <li className="py-5 px-13">{aluno.email}</li>
                        <li className="py-5 px-13">{aluno.bairro}</li>
                        <li className="px-13">
                            <ActionBtn id={aluno.id} />
                        </li>
                    </ul>
                ))}
            </div>}
        </>
    );
}