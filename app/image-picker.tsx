"use client";
import { useState } from "react";
import { Img } from "./page.tsx";
import overview from "./images/strategic-overview.png";

export function ImagePicker() {
	const [selected, setSelected] = useState(0);
	return (
		<form className="grid grid-cols-2 gap-4 group">
			<div className="grid gap-4">
				<label
					className="rounded-lg border border-misty p-6 data-[selected=true]:bg-white data-[selected=true]:shadow-md cursor-pointer"
					data-selected={selected === 0}
				>
					<input
						type="radio"
						name="section-1"
						value={0}
						className="sr-only"
						checked={selected === 0}
						onChange={(e) => setSelected(+e.target.value)}
					/>
					<span className="text-slate text-lg font-medium">
						Strategic overview of all your procurements
					</span>
					{selected === 0 && (
						<p>
							Supply25 is a Software as a Service designed to standardise
							procurement in Scotland to be more safe, efficient and intelligent
							by sharing the experience.
						</p>
					)}
				</label>
				<label
					className="rounded-lg border border-misty p-6 data-[selected=true]:bg-white data-[selected=true]:shadow-md cursor-pointer"
					data-selected={selected === 1}
				>
					<input
						type="radio"
						name="section-1"
						value={1}
						className="sr-only"
						checked={selected === 1}
						onChange={(e) => setSelected(+e.target.value)}
					/>
					<span className="text-slate text-lg font-medium">
						Collaboration across teams of your organisation
					</span>
					{selected === 1 && (
						<p>
							Supply25 is a Software as a Service designed to standardise
							procurement in Scotland to be more safe, efficient and intelligent
							by sharing the experience.
						</p>
					)}
				</label>
				<label
					className="rounded-lg border border-misty p-6 data-[selected=true]:bg-white data-[selected=true]:shadow-md cursor-pointer"
					data-selected={selected === 2}
				>
					<input
						type="radio"
						name="section-1"
						value={2}
						className="sr-only"
						checked={selected === 2}
						onChange={(e) => setSelected(+e.target.value)}
					/>
					<span className="text-slate text-lg font-medium">
						Create your custom assessments
					</span>
					{selected === 2 && (
						<p>
							Supply25 is a Software as a Service designed to standardise
							procurement in Scotland to be more safe, efficient and intelligent
							by sharing the experience.
						</p>
					)}
				</label>
			</div>
			<div className="group-[:nth-child(odd)]:order-first rounded-lg pl-12 pt-12 bg-candy *:h-full *:object-cover">
				{selected === 0 && <Img file={overview} id="section-1-1-img" />}
				{selected === 1 && <Img file={overview} id="section-1-2-img" />}
				{selected === 2 && <Img file={overview} id="section-1-3-img" />}
			</div>
		</form>
	);
}
