import { FaUser } from "react-icons/fa";

export default function Login() {
    return (
        <div className="flex items-center justify-center h-screen">
            <form className="border border-gray-950 border-solid p-5 rounded-md">
                <div className="flex items-center justify-center mb-3">
                    <FaUser className="text-6xl" />
                </div>
                <div className="flex flex-col items-center mt-8">
                    <label className="form-label">Email address</label>
                    <input type="email" className="outline-none border border-white border-b-black py-0.5 px-1" />
                </div>
                <div className="flex flex-col items-center mt-8">
                    <label>Password</label>
                    <input type="password" className="outline-none border border-white border-b-black py-0.5 px-1" />
                </div>
                <div className="flex items-center justify-center mt-10">
                    <button type="submit" className="bg-[#8B0000] text-[#FFFF00] py-2 px-10 rounded-md">Submit</button>
                </div>
            </form>
        </div>
    );
}