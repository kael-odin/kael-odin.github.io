"use client";

import { useCallback, useRef } from "react";

/**
 * 「光随鼠标」配套 hook：把光标在卡片内的像素坐标写入 --mx / --my，
 * 供 globals.css 的 .card-lit 光斑与边缘辉光使用。
 */
export function useCardLight() {
	const ref = useRef<HTMLDivElement>(null);
	const rafRef = useRef(0);

	const onPointerMove = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
		const el = ref.current;
		if (!el || event.pointerType !== "mouse") return;

		const rect = el.getBoundingClientRect();
		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;

		cancelAnimationFrame(rafRef.current);
		rafRef.current = requestAnimationFrame(() => {
			el.style.setProperty("--mx", `${x.toFixed(1)}px`);
			el.style.setProperty("--my", `${y.toFixed(1)}px`);
		});
	}, []);

	return { ref, onPointerMove };
}
