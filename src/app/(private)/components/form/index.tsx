'use client'

import { redirect } from 'next/navigation'
import { useState } from "react";
interface dados {
    nome: FormDataEntryValue | null,
    telefone: FormDataEntryValue | null,
    email: FormDataEntryValue | null,
    bairro: FormDataEntryValue | null,
}


export default function CadastroForm() {
    const [status, setStatus] = useState<boolean | null>(null)

    async function fetchCadastro(formData: FormData) {
        const dados: dados = {
            nome: formData.get('nome'),
            telefone: formData.get('telefone'),
            email: formData.get('email'),
            bairro: formData.get('bairro'),
        };

        const res = await fetch('http://localhost:5000', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dados),
        });

        if (res.status === 200) {
            setStatus(true)
            redirect('/')
        } else {
            setStatus(false)
        }
    }

    return (
        <aside>
            <nav className="px-15 py-5">
                <h1 className="text-2xl">Cadastro de Alunos</h1>
            </nav>
            <form action={fetchCadastro} className="h-fit ml-10 mt-15 px-10 py-15 grid grid-rows-4 grid-cols-2 gap-5 gap-y-15 gap-x-10">
                <div className="flex items-center col-span-2">
                    <label>Nome</label>
                    <input type="text" name="nome" className="w-full ml-3 bg-white px-3 py-1 rounded-md outline-none" />
                </div>
                <div>
                    <label>Telefone</label>
                    <input type="tel" name="telefone" className="ml-3 bg-white px-3 py-1 rounded-md outline-none" />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" className="ml-3 bg-white px-3 py-1 rounded-md outline-none" />
                </div>
                <div>
                    <label>Bairro</label>
                    <input type="text" name="bairro" className="ml-3 bg-white px-3 py-1 rounded-md outline-none" />
                </div>
                <div className="flex justify-center col-span-2 mt-5">
                    <button type="submit" className="mr-10 bg-green-400 px-7 py-3 rounded-4xl">Salvar</button>
                    <button type="submit" className="ml-10 bg-[#EF6B6B] px-7 py-3 rounded-4xl">Cancelar</button>
                    {status === false && <p>Falta campo</p>}
                </div>
            </form>
        </aside>
    );
}