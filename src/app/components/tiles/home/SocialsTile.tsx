"use client";

import { useEffect, useState } from "react";
import { FaQq, FaWeixin } from "react-icons/fa6";
import { qqChatUrl, siteConfig } from "@/site-config";
import { copyText } from "@/lib/copy-text";

type SocialSlide = {
	id: "qq" | "wechat";
	name: string;
	hint: string;
	/** 渐变背景 + 氛围光颜色 */
	bgClass: string;
	glowClass: string;
	/** 有 href 的点击跳转，没有的点击复制 */
	href?: string;
};

const SLIDES: SocialSlide[] = [
	{
		id: "qq",
		name: "QQ",
		hint: "点击发起会话",
		bgClass: "bg-gradient-to-br from-[#38bdf8] to-[#2563eb]",
		glowClass: "bg-white/25",
		href: qqChatUrl,
	},
	{
		id: "wechat",
		name: "微信",
		hint: "点击复制微信号",
		bgClass: "bg-gradient-to-br from-[#34d399] to-[#059669]",
		glowClass: "bg-white/20",
		href: undefined,
	},
];

const CIRCLE_CLASS =
	"w-24 h-24 rounded-full bg-white/15 backdrop-blur-[2px] border border-white/25 flex items-center justify-center shadow-[0_16px_40px_rgba(2,8,23,0.25)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105 hover:bg-white/25 hover:shadow-[0_20px_50px_rgba(2,8,23,0.35)] cursor-pointer";

export default function SocialTile() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [copyState, setCopyState] = useState<"idle" | "done" | "failed">("idle");

	useEffect(() => {
		const interval = window.setInterval(() => {
			setActiveIndex((prev) => (prev + 1) % SLIDES.length);
		}, 4200);

		return () => window.clearInterval(interval);
	}, []);

	const handleCopy = async (value: string) => {
		const ok = await copyText(value);
		setCopyState(ok ? "done" : "failed");
		window.setTimeout(() => setCopyState("idle"), 1800);
	};

	return (
		<div className="w-full h-full relative overflow-hidden rounded-4xl ring-2 ring-transparent dark:ring-gray-700 transition-all duration-300">
			{SLIDES.map((slide, index) => {
				const isActive = activeIndex === index;
				const Icon = slide.id === "qq" ? FaQq : FaWeixin;

				const body = (
					<>
						{/* 氛围光斑 */}
						<div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full ${slide.glowClass} blur-2xl`} aria-hidden />
						<div className="absolute -bottom-14 -left-8 w-36 h-36 rounded-full bg-black/10 blur-2xl" aria-hidden />

						{/* 大图标，不显示号码 */}
						<a
							href={slide.href}
							target="_blank"
							rel="noopener noreferrer"
							onClick={slide.href ? undefined : (event) => { event.preventDefault(); handleCopy(siteConfig[slide.id === "qq" ? "qq" : "wechat"]); }}
							aria-label={`${slide.name}：${slide.hint}`}
							className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-4"
						>
							<span className={CIRCLE_CLASS}>
								<Icon className="w-12 h-12 text-white drop-shadow-[0_6px_16px_rgba(2,8,23,0.35)]" aria-hidden />
							</span>
							<span className="flex flex-col items-center gap-1.5">
								<span className="text-white font-semibold text-base tracking-wide drop-shadow-[0_2px_8px_rgba(2,8,23,0.3)]">
									{slide.name}
								</span>
								<span className="inline-flex items-center gap-1.5 rounded-full bg-black/15 backdrop-blur-[2px] px-3 py-1 text-[11px] font-medium text-white/90">
									{slide.hint}
									<svg width="10" height="10" viewBox="0 0 18.256 18.256" aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
										<g transform="translate(5.363 5.325)">
											<path d="M14.581,7.05,7.05,14.581" transform="translate(-7.05 -7.012)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
											<path d="M10,7l5.287.037.038,5.287" transform="translate(-7.756 -7)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
										</g>
									</svg>
								</span>
							</span>
						</a>
					</>
				);

				return (
					<div
						key={slide.id}
						className={`absolute inset-0 flex flex-col items-center justify-center transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${slide.bgClass} ${isActive ? "opacity-100 scale-100 z-10" : "opacity-0 scale-[0.98] pointer-events-none z-0"}`}
						aria-hidden={!isActive}
					>
						{body}
					</div>
				);
			})}

			{copyState !== "idle" && (
				<div className="absolute top-4 left-1/2 z-30 -translate-x-1/2 rounded-full bg-black/70 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
					{copyState === "done" ? "已复制，去粘贴吧" : "复制失败，请手动输入"}
				</div>
			)}

			<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
				{SLIDES.map((slide, index) => (
					<span
						key={`${slide.id}-dot`}
						className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === index ? "w-6 bg-white/90" : "w-2 bg-white/50"}`}
					/>
				))}
			</div>
		</div>
	);
}
