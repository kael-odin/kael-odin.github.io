"use client";

import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useCardLight } from "@/lib/use-card-light";

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
    const { ref: lightRef, onPointerMove } = useCardLight();

    const style = {
        transform: transform && !isDragging ? `translate3d(0px, ${transform.y}px, 0)` : undefined,
        transition: isDragging ? undefined : transition,
        zIndex: isDragging ? 0 : 1,
        ...(enterIndex !== undefined ? ({ "--enter-delay": `${Math.min(enterIndex, 12) * 70}ms` } as React.CSSProperties) : {}),
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
            onPointerMove={disabled || isDragging ? undefined : onPointerMove}
            className={`
                ${!disabled ? "touch-none cursor-grab active:cursor-grabbing" : ""}
                ${enterIndex !== undefined ? "tile-enter" : ""}
                relative outline-none rounded-4xl transition-colors
                ${className}
            `}
        >
            <div
                ref={lightRef}
                onPointerMove={disabled || isDragging ? undefined : onPointerMove}
                className="card-lit w-full h-full rounded-4xl pointer-events-auto transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_24px_48px_-16px_rgba(2,8,23,0.22)] dark:hover:shadow-[0_24px_48px_-16px_rgba(0,0,0,0.65)]"
            >
                {children}
            </div>
        </div>
    );
}
