import type { Config } from "tailwindcss";

export default {
	content: ["./app/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-mona-sans)"],
			},
			colors: {
				white: "#fff",
				plum: "#3d214d",
				aubergine: "#4c266c",
				"slate-dark": "#373d5c",
				slate: "#555f8f",
				"slate-light": "#6670a2",
				pink: "#ff5294",
				candy: "#ff8fff",
				mint: "#47ff96",
				aqua: "#b5ffff",
				powder: "#7f07ff",
				cornflower: "#4166f5",
				misty: "#e6eaf9",
				"misty-light": "#f7f9fd",
				orange: "#ff6212",
				seashell: "#fff3ed",
				gray: {
					50: "#f0f1f2",
					75: "#dfdfe0",
					100: "#d0d2d5",
					200: "#b9bcc1",
					300: "#999ea5",
					400: "#858b94",
					500: "#676e79",
					600: "#5e646e",
					700: "#494e56",
					800: "#393d43",
					900: "#2b2e33",
				},
			},
		},
	},
	plugins: [],
} satisfies Config;
