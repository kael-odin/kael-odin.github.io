"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
// components/tiles/home/IntroTile.tsx
export default function IntroTile() {
    const [activeBubble, setActiveBubble] = useState(0);
    const [showBubble, setShowBubble] = useState(false);

    const greeting = useMemo(() => {
        const hour = new Date().getHours();

        if (hour < 5) return "夜深了，还没睡 🌙";
        if (hour < 12) return "早上好 ☀️";
        if (hour < 15) return "中午好 🌤️";
        if (hour < 18) return "下午好 🌞";
        if (hour < 22) return "晚上好 🌆";
        return "早些休息 🌃";
    }, []);

    const chatLines = useMemo(
        () => [
            `${greeting}`,
            "欢迎来到我的主页 ✨",
            "我做干净、好用的 Web 应用 💻",
            "有新想法，一起聊聊 🚀",
        ],
        [greeting]
    );

    useEffect(() => {
        let revealTimeout: number | null = null;

        const startDelay = window.setTimeout(() => {
            setShowBubble(true);
        }, 2600);

        const rotateBubbles = window.setInterval(() => {
            setShowBubble(false);

            revealTimeout = window.setTimeout(() => {
                setActiveBubble((current) => (current + 1) % chatLines.length);
                setShowBubble(true);
            }, 2200);
        }, 8500);

        return () => {
            window.clearTimeout(startDelay);
            window.clearInterval(rotateBubbles);
            if (revealTimeout !== null) {
                window.clearTimeout(revealTimeout);
            }
        };
    }, [chatLines.length]);

    return (
        <div className="flex flex-col justify-center h-full px-10 lg:px-16 bg-white dark:bg-[#0d1117] rounded-4xl dark:ring-2 dark:ring-gray-700">
            <div className="flex items-center gap-3 mb-2">
                <div className="relative w-24 h-24 animate-float-y">
                    <Image src="/avatar/avatar-wave.svg" alt="汤勇的卡通头像（挥手打招呼）" width={96} height={96} className="rounded-full" priority />
                </div>
                <div className="-ml-2 -mt-7 min-h-[60px]" aria-live="polite" aria-label="Greeting chat">
                    <div
                        className={`relative w-fit max-w-[230px] rounded-[30px] bg-[#0A84FF] px-5 py-2 text-sm font-semibold leading-snug text-white shadow-[0_10px_22px_rgba(10,132,255,0.45)] ring-1 ring-[#a5dbff]/45 transition-all duration-700
                        ${showBubble ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1 pointer-events-none"}`}
                    >
                        <span className="break-words">{chatLines[activeBubble]}</span>
                        <svg className="pointer-events-none absolute -left-[9px] top-[17px] h-[15px] w-[15px]" viewBox="0 0 15 15" aria-hidden="true">
                            <path d="M14 1C9.3 3.2 5.7 7 3.5 12C6.5 11.1 9.6 11.5 13.8 14L14 1Z" fill="#0A84FF" />
                        </svg>
                    </div>

                    {!showBubble && (
                        <div className="mt-1 flex w-fit items-center gap-1 rounded-[20px] bg-[#2491ff] px-3 py-2 text-white/95 shadow-[0_8px_16px_rgba(29,143,243,0.38)] ring-1 ring-[#9ad9ff]/40">
                            <span className="h-1.5 w-1.5 rounded-full bg-white/95 animate-bounce" style={{ animationDuration: "1s", animationDelay: "0ms" }} />
                            <span className="h-1.5 w-1.5 rounded-full bg-white/95 animate-bounce" style={{ animationDuration: "1s", animationDelay: "150ms" }} />
                            <span className="h-1.5 w-1.5 rounded-full bg-white/95 animate-bounce" style={{ animationDuration: "1s", animationDelay: "300ms" }} />
                        </div>
                    )}
                </div>
            </div>

            <h1 className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">
                我是{" "}
                <span className="relative inline-block whitespace-nowrap z-10 font-bold text-gray-800 dark:text-gray-100">
                    <span className="relative z-20 font-decorative text-[20px]">汤勇 Kael Odin</span>
                    <img
                        src="/line-1.svg"
                        alt=""
                        aria-hidden
                        className="absolute left-0 bottom-[-7px] -z-10 w-full aspect-[977/88] pointer-events-none"
                    />
                </span>
                ，一名来自江苏徐州的软件开发者。
            </h1>
            <p className="mt-1 text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-[500px]">
                喜欢折腾 Web 应用、AI 工具和自动化流水线，把一个个想法做成真正能用得上的东西。目前在持续开源中，欢迎逛逛我的 GitHub。
            </p>
        </div>
    );
}