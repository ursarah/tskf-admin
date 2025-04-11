'use client'
import { MdCancel } from "react-icons/md";
import ActionBtn from "../actionsbtn";
import { useEffect, useState } from "react";

interface dataAlunos {
    contagem_aluno: number,
    id: number,
    nome?: string,
    telefone?: string,
    email?: string,
    bairro?: string,
}

export default function Table() {
    const url: string = 'https://admin-server-production-1330.up.railway.app/'
    const [dataAlunos, setDataAlunos] = useState<dataAlunos[]>([])

    useEffect(() => {
        async function fetchData() {
            const data = await fetch(url)
            const response = await data.json()
            setDataAlunos(response)
        }
        fetchData()
    }, [])



    // const dataAlunos: dataAlunos[] = [
    //     { 'id': 5, 'contagem_aluno': 1, 'nome': 'dfaddf', 'email': 'skdfja@dfa', 'telefone': 'efrewfw', 'bairro': 'wdkfaw' },
    //     { 'id': 7, 'contagem_aluno': 2, 'nome': 'dfad', 'email': 'skdfja@dfa', 'telefone': 'efrewfw', 'bairro': 'wdkfaw' },
    //     { 'id': 2, 'contagem_aluno': 3, 'nome': 'dfad', 'email': 'skdfja@dfa', 'telefone': 'efrewfw', 'bairro': 'wdkfaw' },
    //     { 'id': 9, 'contagem_aluno': 4, 'nome': 'dfad', 'email': 'skdfja@dfa', 'telefone': 'efrewfw', 'bairro': 'wdkfaw' },
    // ]

    return (
        <>{dataAlunos.length === 0 ?
            <div className="px-15">
                <h1 className="font-bold text-6xl">Nenhum aluno cadastrado</h1>
                <MdCancel className="text-6xl text-red-600" />
            </div>

            :

            <div className="pl-10">
                <ul className="grid grid-cols-6 mb-5 font-bold">
                    <li >#</li>
                    <li >Nome </li>
                    <li >Telefone</li>
                    <li >Email</li>
                    <li >Bairro</li>
                    <li >Ações</li>
                </ul>
                {dataAlunos && dataAlunos.map((aluno) => (
                    <ul className="grid grid-cols-6 items-center" key={aluno.id} >
                        <li className="py-5  font-bold">{aluno.contagem_aluno}</li>
                        <li className="py-5 ">{aluno.nome}</li>
                        <li className="py-5 ">{aluno.telefone}</li>
                        <li className="py-5 ">{aluno.email}</li>
                        <li className="py-5 ">{aluno.bairro}</li>
                        <li >
                            <ActionBtn id={aluno.id} />
                        </li>
                    </ul>))}
                <div className="text-center mt-5">
                    <button className="bg-gray-200 px-2 py-1 mx-2 rounded-md">1</button>
                    <button className="bg-gray-200 px-2 py-1 mx-2 rounded-md">2</button>
                    <button className="bg-gray-200 px-2 py-1 mx-2 rounded-md">3</button>
                </div>
            </div>}
        </>
    );
}