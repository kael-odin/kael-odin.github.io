import Link from "next/link";
import { FiGithub, FiZap } from "react-icons/fi";

/** 竖版展示卡：CSS 手机实景 + 悬浮玻璃徽章，展示「手机里的作品集」 */
export default function ProjectDetailsTile() {
	return (
		<div className="group w-full h-full relative overflow-hidden rounded-4xl bg-gradient-to-b from-white to-[#eef7f4] dark:from-[#0d1117] dark:to-[#0d1117] dark:ring-2 dark:ring-gray-700">
			{/* 氛围色场 */}
			<div className="absolute -top-16 -right-20 w-64 h-64 rounded-full bg-[#2dd4bf] opacity-25 blur-3xl dark:opacity-15" aria-hidden />
			<div className="absolute -bottom-20 -left-16 w-60 h-60 rounded-full bg-[#a78bfa] opacity-25 blur-3xl dark:opacity-15" aria-hidden />

			{/* 手机主体：对标原模板的大角度斜置，出血裁切 */}
			<div className="absolute left-[58%] top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-[30deg] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-[54%] group-hover:-rotate-[26deg]">
				<div className="w-[196px] h-[420px] rounded-[2.6rem] bg-white dark:bg-[#161d2b] p-[7px] shadow-[0_36px_70px_-18px_rgba(2,8,23,0.4)] ring-1 ring-black/10 dark:ring-white/10">
					<div className="relative w-full h-full rounded-[2.15rem] overflow-hidden bg-gradient-to-b from-slate-50 via-indigo-50/60 to-teal-50 dark:from-[#0b1220] dark:via-[#0d1526] dark:to-[#0b1a1e]">
						{/* 灵动岛 */}
						<div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-[16px] rounded-full bg-[#0b0f18] dark:bg-black z-10" />

						{/* 屏内：迷你作品集 */}
						<div className="pt-8 px-3.5">
							<div className="flex items-center gap-1.5 mb-3">
								<span className="w-5 h-5 rounded-md bg-[#0b0f18] dark:bg-white grid place-items-center text-[9px] font-black text-white dark:text-[#0b0f18]">K</span>
								<span className="text-[9px] font-bold text-slate-700 dark:text-slate-200">Kael Odin</span>
								<span className="ml-auto flex gap-1">
									<i className="w-1.5 h-1.5 rounded-full bg-sky-400" />
									<i className="w-1.5 h-1.5 rounded-full bg-violet-400" />
								</span>
							</div>

							<div className="rounded-xl bg-white/85 dark:bg-white/[0.06] ring-1 ring-black/[0.06] dark:ring-white/10 shadow-[0_8px_20px_-8px_rgba(2,8,23,0.25)] p-2.5 mb-2">
								<p className="text-[8px] leading-relaxed text-slate-500 dark:text-slate-400">
									你好，我是<span className="font-bold text-slate-800 dark:text-slate-100">汤勇</span>
								</p>
								<p className="text-[8px] text-slate-400 dark:text-slate-500">Web · AI 工具 · 开源</p>
								<div className="mt-2 flex gap-1">
									<i className="h-4 w-9 rounded-full bg-gradient-to-r from-sky-400 to-violet-500" />
									<i className="h-4 w-6 rounded-full bg-slate-200 dark:bg-white/10" />
								</div>
							</div>

							<div className="grid grid-cols-2 gap-2 mb-2">
								<div className="rounded-xl bg-white/85 dark:bg-white/[0.06] ring-1 ring-black/[0.06] dark:ring-white/10 p-2">
									<p className="text-[7px] text-slate-400 dark:text-slate-500">项目</p>
									<p className="text-[13px] font-black text-slate-800 dark:text-slate-100">8+</p>
								</div>
								<div className="rounded-xl bg-white/85 dark:bg-white/[0.06] ring-1 ring-black/[0.06] dark:ring-white/10 p-2">
									<p className="text-[7px] text-slate-400 dark:text-slate-500">开源</p>
									<p className="text-[13px] font-black text-slate-800 dark:text-slate-100">100%</p>
								</div>
							</div>

							<div className="rounded-xl bg-[#0b0f18] p-2.5 shadow-[0_10px_24px_-8px_rgba(2,8,23,0.5)]">
								<p className="font-mono text-[8px] text-emerald-400">$ whoami</p>
								<p className="font-mono text-[8px] text-slate-200">kael-odin</p>
								<span className="mt-1 inline-block w-[5px] h-[9px] bg-sky-400 animate-pulse" />
							</div>
						</div>

						{/* 屏内底部光 */}
						<div className="absolute bottom-0 inset-x-0 h-14 bg-gradient-to-t from-teal-200/50 dark:from-teal-500/10 to-transparent" />
					</div>
				</div>
			</div>

			{/* 悬浮玻璃徽章 */}
			<div className="absolute top-7 left-5 z-20 flex items-center gap-1.5 rounded-full bg-white/75 dark:bg-white/10 backdrop-blur-md px-3 py-1.5 text-[11px] font-semibold text-slate-700 dark:text-slate-200 ring-1 ring-black/5 dark:ring-white/15 shadow-[0_10px_24px_-8px_rgba(2,8,23,0.3)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1.5">
				<FiZap className="h-3.5 w-3.5 text-violet-500 dark:text-violet-300" aria-hidden />
				Bento UI
			</div>
			<div className="absolute bottom-20 right-4 z-20 flex items-center gap-1.5 rounded-full bg-white/75 dark:bg-white/10 backdrop-blur-md px-3 py-1.5 text-[11px] font-semibold text-slate-700 dark:text-slate-200 ring-1 ring-black/5 dark:ring-white/15 shadow-[0_10px_24px_-8px_rgba(2,8,23,0.3)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1 delay-75">
				<FiGithub className="h-3.5 w-3.5 text-slate-600 dark:text-slate-300" aria-hidden />
				开源
			</div>

			<Link
				href="/projects"
				aria-label="前往项目页"
				className="absolute bottom-0 left-0 m-4 z-40"
			>
				<div className="bg-white dark:bg-[#0d1117] text-[#0d1117] dark:text-white w-10 h-10 rounded-full flex justify-center items-center ring-2 ring-gray-200 dark:ring-gray-700 hover:ring-4 hover:ring-gray-300 dark:hover:ring-gray-500 transition duration-300 ease-in-out shadow-[0_8px_18px_rgba(0,0,0,0.12)]">
					<svg id="Arrow.7" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18.256 18.256">
						<g id="Group_7" data-name="Group 7" transform="translate(5.363 5.325)">
							<path
								id="Path_10"
								data-name="Path 10"
								d="M14.581,7.05,7.05,14.581"
								transform="translate(-7.05 -7.012)"
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="1.5"
							/>
							<path
								id="Path_11"
								data-name="Path 11"
								d="M10,7l5.287.037.038,5.287"
								transform="translate(-7.756 -7)"
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="1.5"
							/>
						</g>
						<path id="Path_12" data-name="Path 12" d="M0,0H18.256V18.256H0Z" fill="none" />
					</svg>
				</div>
			</Link>
		</div>
	);
}
