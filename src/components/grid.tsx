"use client";

import { clsx } from "clsx";
import { useRef, useState, useEffect, useLayoutEffect } from "react";

export function Grid({ children }: Readonly<{ children: React.ReactNode }>) {
	const ref = useRef<HTMLDivElement>(null);
	const [width, setWidth] = useState(0);
	const [rows, setRows] = useState(0);
	const [cols, setCols] = useState(0);
	const [grid, setGrid] = useState<boolean[][]>();
	const [fill, setFill] = useState(1);

	function calcGrid() {
		setWidth(ref.current?.clientWidth ?? 0);

		const base = Math.ceil((ref.current?.clientWidth ?? 0) / 54);
		const cell = (ref.current?.clientWidth ?? 0) / base;

		setRows(Math.ceil((ref.current?.clientHeight ?? 0) / cell));
		setCols(Math.ceil((ref.current?.clientWidth ?? 0) / cell));
	}

	useLayoutEffect(() => {
		calcGrid();
		window.addEventListener("resize", () => calcGrid());
		return () => window.removeEventListener("resize", () => calcGrid());
	}, []);

	function createGrid(rows: number, cols: number) {
		const gridPrep = [];
		for (let i = 0; i < rows; i++) {
			gridPrep.push(new Array(cols).fill(false));
		}
		setGrid(gridPrep);
	}

	useEffect(() => {
		createGrid(rows, cols);
		const interval = setInterval(() => {
			setFill(Math.round(Math.random() * (rows * cols) + 1));
		}, 500);
		return () => clearInterval(interval);
	}, [rows, cols]);

	return (
		<div
			ref={ref}
			className="relative mb-12 flex h-fit min-h-dvh w-full flex-col items-start justify-center gap-4"
			style={{ "--cell": `${width / cols}px`, "--rows": rows - 1 } as React.CSSProperties}
		>
			<div className="absolute inset-0 -z-1 grid h-full w-full auto-rows-[var(--cell)] justify-center -space-y-px">
				{grid?.map((child, parentIndex) => (
					<div
						key={parentIndex}
						className="grid h-full w-full flex-1 auto-cols-[var(--cell)] grid-flow-col -space-x-px"
					>
						{child?.map((value, childIndex) => {
							const index = parentIndex * cols + childIndex + 1;
							return (
								<div
									key={index}
									className={clsx(
										fill === index ? "bg-violet-100/80 dark:bg-violet-950/40" : "",
										"border-collapse border border-violet-100/80 duration-500 ease-in dark:border-violet-950/40",
									)}
								></div>
							);
						})}
					</div>
				))}
			</div>
			{children}
		</div>
	);
}
