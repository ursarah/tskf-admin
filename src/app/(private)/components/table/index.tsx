
import { MdCancel } from "react-icons/md";
import ActionBtn from "../actionsbtn";

interface dataAlunos {
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
        { 'id': 1, 'nome': 'dfad', 'email': 'skdfja@dfa', 'telefone': 'efrewfw', 'bairro': 'wdkfaw' },
        { 'id': 2, 'nome': 'dfad', 'email': 'skdfja@dfa', 'telefone': 'efrewfw', 'bairro': 'wdkfaw' },
        { 'id': 3, 'nome': 'dfad', 'email': 'skdfja@dfa', 'telefone': 'efrewfw', 'bairro': 'wdkfaw' },
        { 'id': 4, 'nome': 'dfad', 'email': 'skdfja@dfa', 'telefone': 'efrewfw', 'bairro': 'wdkfaw' },
    ]


    return (
        <>{dataAlunos.length === 0 ?
            <div className="px-15">
                <h1 className="font-bold text-6xl">Nenhum aluno cadastrado</h1>
                <MdCancel className="text-6xl text-red-600" />
            </div>

            :

            <table>
                <thead>
                    <tr>
                        <th className="px-13">#</th>
                        <th className="px-13">Nome aluno</th>
                        <th className="px-13">Telefone</th>
                        <th className="px-13">Email</th>
                        <th className="px-13">Bairro</th>
                        <th className="px-13">Ações</th>
                    </tr>
                    <tr className="mt-3 bg-gray-400 absolute after:content-[''] after:opacity-70 after:block w-[100%] h-[1px]"></tr>
                </thead>
                <tbody className="pt-5">
                    {!dataAlunos && <tr><td>Loading...</td></tr>}
                    {dataAlunos && dataAlunos.map((aluno) => (
                        <tr key={aluno.id}>
                            <th className="py-5 px-13">{aluno.id}</th>
                            <td className="py-5 px-13">{aluno.nome}</td>
                            <td className="py-5 px-13">{aluno.telefone}</td>
                            <td className="py-5 px-13">{aluno.email}</td>
                            <td className="py-5 px-13">{aluno.bairro}</td>
                            <td className="px-13">
                                <ActionBtn id={aluno.id} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>}
        </>
    );
}