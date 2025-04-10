import { FaSearch } from "react-icons/fa";

export default function SearchBtn() {
    return (
        <div className="py-6 px-4 mb-6 flex justify-between items-center">
            <h1 className="text-2xl">Todos os alunos</h1>
            <form className="flex items-center">
                <input type="text" placeholder="Search" className="bg-[#EBEAEA] w-[70%] py-1 px-3 rounded-4xl outline-none" />
                <button className="ml-1 bg-[#49E953] p-2 rounded-[80%]">
                    <FaSearch />
                </button>
            </form>
        </div>
    );
}