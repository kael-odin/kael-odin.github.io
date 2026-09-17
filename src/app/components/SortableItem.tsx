"use client";

import React, { useRef } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

/** 3D 倾斜跟随的最大角度（度） */
const MAX_TILT = 4;

export function SortableItem({
    id,
    className = "",
    children,
    disabled = false,
    enterIndex,
}: {
    id: string;
    className?: string;
    children: React.ReactNode;
    disabled?: boolean;
    /** 入场级联的序号：数字越小越先出现 */
    enterIndex?: number;
}) {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id, disabled });
    const tiltRef = useRef<HTMLDivElement>(null);
    const rafRef = useRef<number>(0);

    const style = {
        transform: transform && !isDragging ? `translate3d(0px, ${transform.y}px, 0)` : undefined,
        transition: isDragging ? undefined : transition,
        zIndex: isDragging ? 0 : 1,
        ...(enterIndex !== undefined ? ({ "--enter-delay": `${Math.min(enterIndex, 12) * 70}ms` } as React.CSSProperties) : {}),
    };

    /** 鼠标跟随的轻微 3D 倾斜（拖拽中与触屏不生效） */
    const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
        if (disabled || isDragging || event.pointerType !== "mouse") return;
        const el = tiltRef.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width - 0.5;
        const py = (event.clientY - rect.top) / rect.height - 0.5;

        cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => {
            el.style.transform = `perspective(900px) rotateX(${(-py * MAX_TILT).toFixed(2)}deg) rotateY(${(px * MAX_TILT).toFixed(2)}deg) translateY(-2px)`;
        });
    };

    const resetTilt = () => {
        cancelAnimationFrame(rafRef.current);
        const el = tiltRef.current;
        if (el) el.style.transform = "";
    };

    if (isDragging) {
        return (
            <div
                ref={setNodeRef}
                style={style}
                className={`relative rounded-4xl bg-white/40 dark:bg-zinc-800/50 border-2 border-dashed border-white/60 dark:border-zinc-700/50 ${className}`}
            >
                <div className="opacity-0 pointer-events-none w-full h-full">
                    {children}
                </div>
            </div>
        );
    }

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...(!disabled ? attributes : {})}
            {...(!disabled ? listeners : {})}
            onPointerMove={handlePointerMove}
            onPointerLeave={resetTilt}
            className={`
                ${!disabled ? "touch-none cursor-grab active:cursor-grabbing" : ""}
                ${enterIndex !== undefined ? "tile-enter" : ""}
                relative outline-none rounded-4xl transition-colors
                ${className}
            `}
        >
            <div
                ref={tiltRef}
                className={`w-full h-full rounded-4xl pointer-events-auto will-change-transform tile-sheen`}
                style={{ transitionProperty: "box-shadow, transform", transitionDuration: "220ms", transitionTimingFunction: "ease-out" }}
            >
                {children}
            </div>
        </div>
    );
}
