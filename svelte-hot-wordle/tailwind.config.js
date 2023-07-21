/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'outsmart-purple': '#333399'
			},
			gridTemplateColumns: {
				21: 'repeat(21, minmax(0, 1fr))'
			}
		}
	},
	plugins: []
};
