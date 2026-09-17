"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/site-config";

const NAV_LINKS = [
    { label: "首页", href: "/home" },
    { label: "关于", href: "/about" },
    { label: "工具", href: "/tools" },
    { label: "项目", href: "/projects" },
    { label: "博客", href: "/blog" },
];

/** 与 src/app/icon.svg 同款的 K 徽标（内联以便做悬停动效） */
function LogoBadge() {
    return (
        <span className="relative grid h-8 w-8 shrink-0 place-items-center rounded-[10px] bg-[#0B0F18] shadow-[0_4px_12px_rgba(13,17,23,0.25)] transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-rotate-6 group-hover:scale-110">
            <svg width="18" height="18" viewBox="0 0 64 64" aria-hidden="true">
                <defs>
                    <linearGradient id="logo-grad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="#22D3EE" />
                        <stop offset="0.5" stopColor="#3B82F6" />
                        <stop offset="1" stopColor="#8B5CF6" />
                    </linearGradient>
                </defs>
                <rect x="16" y="13" width="9.5" height="38" rx="4.75" fill="url(#logo-grad)" />
                <path d="M24 33.5L43.5 15" stroke="url(#logo-grad)" strokeWidth="9.5" fill="none" />
                <path d="M24 33L43 49.5" stroke="url(#logo-grad)" strokeWidth="9.5" fill="none" />
                <circle className="transition-all duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" cx="52.5" cy="49" r="3.2" fill="#22D3EE" />
            </svg>
        </span>
    );
}

export default function HomeNav() {
    const pathname = usePathname();

    const findIndex = () => {
        const index = NAV_LINKS.findIndex(({ href }) => {
            return pathname === href || pathname.startsWith(`${href}/`);
        });
        return index === -1 ? 0 : index;
    };

    const activeIndex = findIndex();

    return (
        <div className="relative flex flex-col items-center w-full py-2 sm:py-0 overflow-x-hidden">
            {/* 1. Logo - Top on mobile, Absolute Left on desktop */}
            <div className="flex items-center select-none mb-4 sm:mb-0 sm:absolute sm:left-0 sm:top-1/2 sm:-translate-y-1/2">
                <Link
                    href="/home"
                    aria-label="Kael Odin · 回到首页"
                    className="group flex items-center gap-2.5 transition-transform active:scale-95 cursor-pointer"
                >
                    <LogoBadge />
                    <span className="logo-shine whitespace-nowrap bg-gradient-to-r from-[#22D3EE] via-[#3B82F6] to-[#8B5CF6] bg-clip-text text-[20px] font-extrabold leading-none tracking-tight text-transparent">
                        Kael Odin
                    </span>
                </Link>
            </div>

            {/* 2. Centered Pill Menu */}
            <nav className="w-full flex justify-center items-center sm:h-20 px-2 sm:px-0">
                <ul
                    className="relative grid items-center p-1 bg-[#eeeeee] dark:bg-[#0d1117] rounded-full ring-2 ring-transparent dark:ring-gray-700 w-full transition-all duration-500 overflow-hidden mx-auto"
                    style={{
                        gridTemplateColumns: `repeat(${NAV_LINKS.length}, minmax(0, 1fr))`,
                        maxWidth: "420px",
                    }}
                >
                    {/* Animated active indicator */}
                    <div
                        className="absolute left-1 top-1 h-[calc(100%-0.5rem)] rounded-full bg-white dark:bg-[#1f2732] z-0 transition-transform duration-300 ease-out shadow-sm"
                        style={{
                            width: `calc((100% - 0.5rem)/${NAV_LINKS.length})`,
                            transform: `translateX(${activeIndex * 100}%)`,
                        }}
                    />
                    {NAV_LINKS.map(({ label, href }) => {
                        const isActive = pathname === href || pathname.startsWith(`${href}/`);

                        return (
                            <li key={href} className="relative z-10 w-full">
                                <Link
                                    href={href}
                                    className={`block w-full text-center rounded-full px-0.5 py-2 font-semibold truncate text-xs sm:text-sm
                                        transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
                                        hover:-translate-y-[3px] hover:bg-white/90 hover:shadow-[0_14px_28px_-10px_rgba(2,8,23,0.35)]
                                        dark:hover:bg-white/[0.12] dark:hover:shadow-[0_14px_28px_-10px_rgba(0,0,0,0.9)]
                                        active:translate-y-0 active:scale-[0.97]
                                        ${isActive ? "text-gray-900 dark:text-white" : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"}`}
                                >
                                    {label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            {/* 3. Right side: 名字角标（仅桌面显示） */}
            <div className="hidden sm:flex items-center gap-2 sm:absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2">
                <span className="rounded-full border border-gray-200/80 bg-white/70 px-3 py-1 text-xs font-medium text-gray-500 dark:border-gray-700 dark:bg-[#0d1117]/70 dark:text-gray-400">
                    {siteConfig.nameZh} · 徐州
                </span>
            </div>
        </div>
    );
}
