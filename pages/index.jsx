import Head from "next/head"
import Image from "next/image"

import { FaCopy } from "react-icons/fa"
import { BsDiscord } from "react-icons/bs"

import Header from "@/components/Header"

import avatar from "@/public/assets/avatar.jpg"
import note from "@/public/assets/note.png"

function Home() {
	function copyDiscord() {
		if(navigator) navigator.clipboard.writeText('RNMNX#2528')
	}

	return (
		<>
			<Head>
				<title>RNMNX</title>
			</Head>
			<Header />
			<div className="flex justify-center">
				<div className="flex flex-col c1:flex-row gap-16 mt-28 items-center">
					<div className="flex">
						<Image src={avatar} sizes="300" width="300" height="300" className="rounded-full max-w-[300px] max-h-[300px] unselectable" alt="Avatar" />
						<Image src={note} sizes="60" width="60" height="50" alt="Note" className="max-w-[60px] max-h-[60px] unselectable absolute mt-[220px] ml-[220px] border-[#41110f] rounded-full border-[5px]" />
					</div>
					<div className="flex flex-col items-center c1:items-start">
						<div className="flex items-center">
							<BsDiscord className="text-[30px] c3:text-[60px] text-white mr-2 c3:mr-5" />
							<span className="font-unbounded text-white text-[25px] c2:text-[60px] c3:text-[40px] mr-3">RNMNX#2528</span>
							<FaCopy onClick={copyDiscord} className="text-[25px] text-white transition-opacity duration-500 opacity-80 hover:opacity-100 self-start c3:mt-3 cursor-pointer" />
						</div>
						<span className="text-white text-[20px] c3:text-[30px]">Артист <span className="px-2 text-[25px] font-normal">&bull;</span> Phonk продюсер</span>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home