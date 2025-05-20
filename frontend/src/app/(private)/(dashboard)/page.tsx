import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import Table from "../components/table";
import SearchBtn from "../components/searchbtn";

export default function Dashboard() {
    return (
        <main>
            <aside className="rounded-b-2xl w-full bg-white">
                <h1 className="text-2xl text-center px-15 py-5">Dashboard</h1>
            </aside>
            <aside className="mx-30">
                <nav className="flex items-center justify-between mb-10 px-10 py-5">
                    <h1 className="text-2xl">Ola administrador</h1>
                    <Link href="/cadastro" className="flex items-center bg-[#49E953] py-2 px-5 rounded-md cursor-pointer">
                        <i className="mr-3"><FaPlus /></i>
                        <p>
                            Adicionar aluno
                        </p>
                    </Link>
                </nav>
                <div className="bg-white rounded-md px-5 py-6">
                    <SearchBtn />
                    <Table />
                </div>
            </aside>
        </main >
    );
}
