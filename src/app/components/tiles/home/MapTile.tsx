"use client";

import Image from "next/image";
import MapComponent from "./MapComponent";
import { amapUrl, siteConfig } from "@/site-config";

export default function MapTile() {
    return (
        <div className="group w-full h-full relative overflow-hidden rounded-4xl border border-gray-100 shadow-sm bg-[#e0f2f1] dark:bg-[#0d1117] dark:border-transparent dark:ring-2 dark:ring-gray-700 cursor-grab active:cursor-grabbing">
            <MapComponent />

            <div className="absolute inset-0 z-10 pointer-events-none dark:bg-[#0d1117]/35" />

            {/* 定位角标：中国 · 徐州 · 泉山区矿大科技园 */}
            <div className="absolute top-3 left-3 z-30">
                <a
                    href={amapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`在高德地图打开：${siteConfig.location.full}`}
                    className="pointer-events-auto inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-semibold text-gray-800 shadow-[0_6px_16px_rgba(0,0,0,0.12)] ring-1 ring-black/5 backdrop-blur-sm transition-colors hover:bg-white"
                >
                    <span aria-hidden>📍</span>
                    <span>徐州 · 泉山区矿大科技园</span>
                </a>
            </div>

            {/* 头像挂到右下角，避免挡住地图中心的地标 */}
            <div className="absolute bottom-4 right-4 z-30 pointer-events-none">
                <div className="pointer-events-auto relative w-[84px] h-[84px] rounded-full bg-cyan-400/50 border border-cyan-300/70 shadow-[0_10px_30px_rgba(14,165,233,0.35)] flex items-center justify-center transition-transform duration-300 ease-out group-hover:rotate-[-10deg] group-hover:scale-105">
                    <Image
                        src="/avatar/avatar-pin.svg"
                        alt="汤勇 Kael Odin 的卡通头像（站在定位点）"
                        width={64}
                        height={64}
                        className="w-[64px] h-[64px] object-contain drop-shadow-md transition-transform duration-300 ease-out group-hover:rotate-[10deg] group-hover:translate-y-[-4px]"
                        priority
                    />
                </div>
            </div>

        </div>
    );
}
