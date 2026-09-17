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
            {/* 1. 文字 Logo - Top on mobile, Absolute Left on desktop */}
            <div className="flex items-center select-none mb-4 sm:mb-0 sm:absolute sm:left-0 sm:top-1/2 sm:-translate-y-1/2">
                <Link
                    href="/home"
                    aria-label="回到首页"
                    className="hover:opacity-80 transition-all active:scale-95 cursor-pointer"
                >
                    <span className="block whitespace-nowrap bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB049] bg-clip-text text-[21px] font-bold leading-none tracking-tight text-transparent">
                        {siteConfig.nameZh} {siteConfig.nameEn}
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
                                    className={`block w-full text-center rounded-full px-0.5 py-2 font-semibold transition-colors duration-200 truncate text-xs sm:text-sm
                                        ${isActive ? "text-gray-900 dark:text-white" : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"}`}
                                >
                                    {label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            {/* 3. Right side placeholder for future content - Absolute Right on desktop */}
            <div className="hidden sm:flex items-center sm:absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2">
                {/* Future content goes here */}
            </div>
        </div>
    );
}
