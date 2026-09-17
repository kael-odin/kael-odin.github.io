import Link from "next/link";
import { FiGithub } from "react-icons/fi";

/** 宽版展示卡：CSS 浏览器窗口实景 + 迷你仪表盘，展示「线上主页」 */
export default function BusinessPreviewTile() {
	return (
		<div className="group w-full h-full relative overflow-hidden rounded-4xl bg-gradient-to-br from-white via-[#fdf8ee] to-[#fbf3ea] dark:from-[#0d1117] dark:via-[#0d1117] dark:to-[#111018] dark:ring-2 dark:ring-gray-700">
			{/* 氛围色场 */}
			<div className="absolute -top-20 -right-14 w-72 h-72 rounded-full bg-[#fbbf24] opacity-25 blur-3xl dark:opacity-10" aria-hidden />
			<div className="absolute -bottom-24 left-[6%] w-64 h-64 rounded-full bg-[#fb7185] opacity-20 blur-3xl dark:opacity-10" aria-hidden />

			{/* 浏览器窗口 */}
			<div className="absolute right-[7%] top-1/2 -translate-y-1/2 w-[380px] max-w-[62%] rotate-1 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-[54%] group-hover:rotate-0">
				<div className="rounded-2xl bg-white dark:bg-[#161d2b] ring-1 ring-black/10 dark:ring-white/10 shadow-[0_32px_64px_-18px_rgba(2,8,23,0.35)] overflow-hidden">
					{/* 标题栏 */}
					<div className="flex items-center gap-2 px-3.5 py-2.5 bg-slate-50 dark:bg-white/[0.04] border-b border-black/5 dark:border-white/10">
						<i className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
						<i className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
						<i className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
						<span className="ml-2 flex-1 rounded-md bg-white dark:bg-white/10 ring-1 ring-black/5 dark:ring-white/10 px-2.5 py-0.5 text-[10px] text-slate-500 dark:text-slate-400 truncate">
							kael-odin.github.io
						</span>
					</div>

					{/* 迷你主页内容 */}
					<div className="flex gap-3 p-3.5 bg-gradient-to-br from-white to-orange-50/60 dark:from-[#0d1526] dark:to-[#11131f]">
						{/* 个人卡 */}
						<div className="flex-1 rounded-xl bg-white/90 dark:bg-white/[0.06] ring-1 ring-black/[0.06] dark:ring-white/10 shadow-[0_10px_24px_-10px_rgba(2,8,23,0.25)] p-3">
							<div className="flex items-center gap-2">
								<span className="w-7 h-7 rounded-lg bg-[#0b0f18] dark:bg-white grid place-items-center text-[11px] font-black text-white dark:text-[#0b0f18]">K</span>
								<div>
									<p className="text-[10px] font-bold text-slate-800 dark:text-slate-100 leading-tight">汤勇 Kael Odin</p>
									<p className="text-[8px] text-slate-400 dark:text-slate-500">徐州 · 中国</p>
								</div>
							</div>
							<div className="mt-2.5 flex flex-wrap gap-1">
								<i className="h-4 w-10 rounded-full bg-gradient-to-r from-sky-400 to-violet-500" />
								<i className="h-4 w-8 rounded-full bg-emerald-200 dark:bg-emerald-500/20" />
								<i className="h-4 w-7 rounded-full bg-amber-200 dark:bg-amber-500/20" />
							</div>
						</div>

						{/* 迷你柱状图 */}
						<div className="w-[92px] rounded-xl bg-[#0b0f18] p-2.5 flex items-end gap-1.5 shadow-[0_10px_24px_-8px_rgba(2,8,23,0.5)]">
							{[10, 16, 12, 22, 18, 28].map((h, i) => (
								<i
									key={i}
									className="flex-1 rounded-sm bg-gradient-to-t from-sky-500 to-violet-400 origin-bottom transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-110"
									style={{ height: `${h * 2.2}px`, transitionDelay: `${i * 45}ms` }}
								/>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* 悬浮玻璃徽章 */}
			<div className="absolute top-5 left-5 z-20 flex items-center gap-1.5 rounded-full bg-white/75 dark:bg-white/10 backdrop-blur-md px-3 py-1.5 text-[11px] font-semibold text-slate-700 dark:text-slate-200 ring-1 ring-black/5 dark:ring-white/15 shadow-[0_10px_24px_-8px_rgba(2,8,23,0.3)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1.5">
				<FiGithub className="h-3.5 w-3.5 text-slate-600 dark:text-slate-300" aria-hidden />
				开源 · 持续输出
			</div>

			<Link
				href="/projects"
				aria-label="前往项目页"
				className="absolute bottom-0 left-0 m-4 z-30"
				onPointerDown={(event) => event.stopPropagation()}
				onMouseDown={(event) => event.stopPropagation()}
				onTouchStart={(event) => event.stopPropagation()}
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
