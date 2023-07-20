import Image from "next/image"

import logo from "@/public/assets/logo.png"
import vk from "@/public/assets/vk.png"
import { useState } from "react"

function Header() {
    const [theme, setTheme] = useState('transparent')

    function changeTheme(color) {
        let el = document.getElementById('theme')

        if(color) {
            el.style.opacity = '1'
            setTheme(`linear-gradient(${color}, transparent)`)
        } else {
            el.style.opacity = '0'
        }
    }

    return (
        <>
            <div id="theme" className="absolute w-screen h-[500px] -z-10 transition-opacity duration-300 ease-in opacity-0" style={{ background: theme }}></div>
            <header className="container px-[50px] c1:px-[250px] min-w-[100vw] absolute flex flex-col c3:flex-row gap-3 justify-between py-5 items-center">
                <Image src={logo} sizes="60" width="60" priority alt="Logo" className="unselectable rotate-[10deg]" />
                <div className="flex flex-wrap justify-center gap-5 items-center">
                    <div className="flex flex-col items-center group">
                        <a href="https://t.me/rnmnx" target="_blank" className="hover:mt-1"><i onMouseOver={() => changeTheme('#0088cc')} onMouseOut={() => changeTheme()} className="bi bi-telegram text-white text-[40px]" /></a>
                        <span className="text-white absolute mt-[55px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">Telegram</span>
                    </div>
                    <div className="flex flex-col items-center group">
                        <a href="https://music.apple.com/us/artist/rnmnx/1615425871" target="_blank" className="hover:mt-1"><i onMouseOver={() => changeTheme('#c2cad7')} onMouseOut={() => changeTheme()} className="bi bi-music-note-beamed text-white text-[40px]" /></a>
                        <span className="text-white absolute mt-[55px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">Apple Music</span>
                    </div>
                    <div className="flex flex-col items-center group">
                        <a href="https://www.youtube.com/@rnmnx" target="_blank" className="hover:mt-1"><i onMouseOver={() => changeTheme('#ff0000')} onMouseOut={() => changeTheme()} className="bi bi-youtube text-white text-[40px]" /></a>
                        <span className="text-white absolute mt-[55px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">YouTube</span>
                    </div>
                    <div className="flex flex-col items-center group">
                        <a href="https://open.spotify.com/artist/2LXZCBeH8vxw3x7Va9gba7" target="_blank" className="hover:mt-1"><i onMouseOver={() => changeTheme('#1db954')} onMouseOut={() => changeTheme()} className="bi bi-spotify text-white text-[40px]" /></a>
                        <span className="text-white absolute mt-[55px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">Spotify</span>
                    </div>
                    <div className="flex flex-col items-center group">
                        <a href="https://www.tiktok.com/@rnmnxoff" target="_blank" className="hover:mt-1"><i onMouseOver={() => changeTheme('#ff0050')} onMouseOut={() => changeTheme()} className="bi bi-tiktok text-white text-[40px]" /></a>
                        <span className="text-white absolute mt-[55px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">TikTok</span>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header