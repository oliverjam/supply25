"use client";

import { useState } from "react";
import { AlertCircle, CheckCircle, ChevronRight, Loading } from "./icons.tsx";

type Status = "initial" | "pending" | "fulfilled" | "rejected";

export function EmailForm() {
	const [status, setStatus] = useState<Status>("initial");
	const disabled = status === "pending" || status === "fulfilled";
	const { icon, msg } = ui[status];
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				const email = e.currentTarget.email.value as string;
				setStatus("pending");
				fetch("https://marketing-staging.supply25.com/contact", {
					method: "POST",
					headers: { "content-type": "application/json" },
					body: JSON.stringify({ email }),
				})
					.then((res) => {
						if (res.ok) setStatus("fulfilled");
						else setStatus("rejected");
					})
					.catch(() => setStatus("rejected"));
			}}
		>
			<div className="rounded-lg border-2 border-pink grid grid-cols-[1fr_auto] has-[:focus-visible]:ring-2 ring-pink ring-offset-2 has-[:disabled]:border-powder">
				<input
					type="email"
					name="email"
					id="email"
					placeholder="Your email"
					aria-label="Your email"
					className="peer min-w-0 placeholder:text-slate p-2 rounded-l-lg focus:outline-none focus-visible:outline-none disabled:bg-misty-light"
					disabled={disabled}
					aria-describedby="email-error"
				/>
				<button
					aria-label="Submit email"
					disabled={disabled}
					className="bg-pink disabled:bg-powder text-white px-3 grid place-content-center"
				>
					{icon}
				</button>
			</div>
			{msg && (
				<div id="email-error" className="mt-2 pl-2">
					{msg}
				</div>
			)}
		</form>
	);
}

const ui = {
	rejected: {
		icon: <ChevronRight />,
		msg: (
			<span className="text-pink flex gap-1 items-center">
				<AlertCircle size={16} /> Please try again
			</span>
		),
	},
	initial: { icon: <ChevronRight />, msg: "" },
	pending: {
		icon: <Loading className="animate-spin [animation-duration:2s]" />,
		msg: "",
	},
	fulfilled: {
		icon: <CheckCircle />,
		msg: <span className="text-powder">Email submitted</span>,
	},
} as const;
