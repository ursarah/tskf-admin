import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import CadastroForm from "../components/form";

export default function Cadastro() {
    return (
        <main className="bg-[#f1f1f1] flex">
            <aside className="h-[700px] w-[300px] rounded-b-2xl bg-white ">
                <Link href="/" className="w-fit flex items-center bg-[#D9D9D9] py-2 px-5 rounded-4xl cursor-pointer mt-3">
                    <i className="mr-3"><FaArrowLeft /></i>
                    <p>
                        Dashboard
                    </p>
                </Link>
            </aside>
            <CadastroForm />
        </main>
    );
}