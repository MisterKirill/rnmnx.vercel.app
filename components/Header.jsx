import Image from "next/image"

import { FaTelegramPlane, FaSpotify } from "react-icons/fa"
import { AiFillYoutube } from "react-icons/ai"

import logo from "@/public/assets/logo.png"

function Header() {
    return (
        <header className="container px-[50px] c1:px-[250px] min-w-[100vw] absolute flex justify-between py-5 items-center">
            <Image src={logo} sizes="60" width="60" alt="Logo" className="unselectable" />
            <div className="flex gap-5">
                <FaTelegramPlane className="text-white text-[40px]" />
                <AiFillYoutube className="text-white text-[40px]" />
                <FaSpotify className="text-white text-[40px]" />
            </div>
        </header>
    )
}

export default Header