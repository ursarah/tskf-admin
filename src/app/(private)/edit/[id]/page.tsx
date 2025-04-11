'use client'

interface dados {
    nome: FormDataEntryValue | null,
    telefone: FormDataEntryValue | null,
    email: FormDataEntryValue | null,
    bairro: FormDataEntryValue | null,
}
import { redirect } from "next/navigation";
import { BtnProps } from "../../components/actionsbtn";
import { useState } from "react";

export default function Edit({ params }: { params: Promise<{ id: BtnProps }> }) {

    const url: string = 'https://admin-server-production-1330.up.railway.app/edit/'
    const [status, setStatus] = useState('')

    async function fetchEdit(formData: FormData) {
        const { id } = await params
        const dados: dados = {
            nome: formData.get('nome'),
            telefone: formData.get('telefone'),
            email: formData.get('email'),
            bairro: formData.get('bairro'),
        };
        const res = await fetch(url + id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dados)
        });

        if (res.status === 200) {
            setStatus('')
            redirect('/')
        }
        if (res.status === 400) {
            setStatus('Nenhum campo foi mudado')
        }
    }

    return (
        <aside>
            <nav className="px-15 py-5">
                <h1 className="text-2xl">Edição de Alunos</h1>
            </nav>
            <form action={fetchEdit} className="ml-10 mt-15 px-10 py-15 grid grid-rows-4 grid-cols-2 gap-5 gap-y-15 gap-x-10 items-center">
                <div className="flex flex-col col-span-2">
                    <label className="mb-1">Nome</label>
                    <input type="text" name="nome" className="w-[50%] bg-white px-3 py-1 rounded-md outline-none" />
                </div>
                <div className="flex flex-col">
                    <label className="mb-1">Telefone</label>
                    <input type="tel" name="telefone" className="bg-white px-3 py-1 rounded-md outline-none" />
                </div>
                <div className="flex flex-col">
                    <label className="mb-1">Email</label>
                    <input type="email" name="email" className="bg-white px-3 py-1 rounded-md outline-none" />
                </div>
                <div className="flex flex-col">
                    <label className="mb-1">Bairro</label>
                    <input type="text" name="bairro" className="bg-white px-3 py-1 rounded-md outline-none" />
                </div>
                <div className="flex justify-center col-span-2 mt-5">
                    <button type="submit" className="mr-10 bg-green-400 px-7 py-3 rounded-4xl">Salvar</button>
                    <button type="submit" className="ml-10 bg-[#EF6B6B] px-7 py-3 rounded-4xl">Cancelar</button>
                </div>
                <p>{status}</p>
            </form>
        </aside>
    );
}