'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaRegTrashCan } from "react-icons/fa6";
import { MdOutlineEdit } from "react-icons/md";

export interface BtnProps {
    id?: number
}
export default function ActionBtn({ id }: BtnProps) {

    const url: string = 'https://admin-server-production-1330.up.railway.app/delete/'
    // const url: string = 'http://localhost:5000/delete/'
    const router = useRouter()

    async function handleDelete(id: number | undefined) {
        await fetch(url + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => {
            if (res.status === 200) {
                router.refresh()
            }
        })
    }
    return (<>
        <button className="bg-red-500 p-2 mr-1 rounded-md text-gray-100 cursor-pointer"
            onClick={() => handleDelete(id)}>
            <FaRegTrashCan />
        </button>
        <button className="bg-emerald-500 p-2 ml-1 rounded-md text-gray-100 cursor-pointer">
            <Link href={`/edit/${id}`}>
                <MdOutlineEdit />
            </Link>
        </button>
    </>
    );
}