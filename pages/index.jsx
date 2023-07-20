import Head from "next/head"
import Image from "next/image"

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
				<meta property="og:title" content="RNMNX | Phonk продюсер" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://rnmnx.vercel.app" />
				<meta property="og:description" content="Московский фантазёр, запоминающийся загадочностью, строя события о любви, вдохновляясь музой. &quot;18.03 - и беды позади&quot;" />
				<meta name="theme-color" content="#C5231E" />
			</Head>
			<Header />
			<div className="flex justify-center">
				<div className="flex flex-col c1:flex-row gap-16 mt-[200px] c3:mt-[100px] items-center">
					<div className="flex">
						<Image src={avatar} sizes="300" width="300" height="300" priority className="rounded-full max-w-[300px] max-h-[300px] unselectable" alt="Avatar" />
						<Image src={note} sizes="60" width="60" height="60" alt="Note" priority className="max-w-[60px] max-h-[60px] unselectable absolute mt-[220px] ml-[220px] border-[#41110f] rounded-full border-[5px]" />
					</div>
					<div className="flex flex-col items-center c1:items-start">
						<div className="flex items-center">
							<i className="bi bi-discord mt-1 text-[30px] c3:text-[60px] text-white mr-2 c3:mr-5" />
							<span className="font-unbounded text-white text-[25px] c2:text-[60px] c3:text-[40px] mr-3">RNMNX#2528</span>
							<i onClick={copyDiscord} className="bi bi-clipboard-fill text-[25px] text-white transition-opacity duration-500 opacity-50 hover:opacity-100 self-start c3:mt-3 cursor-pointer" />
						</div>
						<span className="text-white font-semibold text-[20px] c3:text-[30px]">Артист <span className="px-2 text-[25px] font-normal">&bull;</span> Phonk продюсер</span>
					</div>
				</div>
			</div>
			<div className="flex justify-center mt-5">
				<div className="p-5 bg-[#41110f] c2:rounded-xl w-screen c2:w-auto flex flex-col gap-3 items-center">
					<span className="text-white font-extrabold text-[25px] flex items-center gap-3"><i className="bi bi-youtube text-[30px]" /> ПОСЛЕДНИЙ РЕЛИЗ</span>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/dTRNN77efaA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
				</div>
			</div>
			<span className="fixed bottom-0 left-0 mb-5 ml-5 text-[20px] font-bold text-white opacity-40 unselectable">
				18/03
			</span>
		</>
	)
}

export default Home