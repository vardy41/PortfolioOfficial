/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"accent-blue": "#4f46e5", // ← usunięto średnik
			},
		},
	},
	plugins: [],
};
