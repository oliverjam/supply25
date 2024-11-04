"use client";

export function Accordion({
	name,
	open = false,
	children,
}: {
	name: string;
	open?: boolean;
	children: React.ReactNode;
}) {
	return (
		<details
			name={name}
			open={open}
			className="rounded-lg border border-misty p-6 open:bg-white open:shadow-md"
		>
			{children}
		</details>
	);
}

export function AccordionTrigger({ children }: { children: React.ReactNode }) {
	return (
		<summary className="list-none text-slate md:text-lg font-medium cursor-pointer">
			{children}
		</summary>
	);
}
