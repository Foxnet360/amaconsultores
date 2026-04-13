/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,jsx}',
		'./components/**/*.{js,jsx}',
		'./app/**/*.{js,jsx}',
		'./src/**/*.{js,jsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			colors: {
				// Colores principales del sitio en producción
				'primary-blue': '#1e3a8a',
				'primary-dark': '#0f172a',
				'blue': '#3b82f6',
				'blue-light': '#60a5fa',
				
				// Colores dorados/acento - ESCALA COMPLETA
				'gold': {
					50: '#fdf8e8',
					100: '#f9efc6',
					200: '#f3e295',
					300: '#ebd05d',
					400: '#e5c158',
					DEFAULT: '#d4af37',
					500: '#d4af37',
					600: '#b8941f',
					700: '#94721a',
					800: '#7a5d1d',
					900: '#664d1b',
				},
				'gold-dark': '#b8941f',
				'amber': '#f59e0b',
				
				// NUEVOS: Fondos intermedios para ritmo visual
				'navy': {
					50: '#f0f4f8',
					100: '#e2eaf2',
					200: '#c9d6e8',
					300: '#a4b8d9',
					400: '#7a95c7',
					500: '#5c77b8',
					600: '#4960a3',
					700: '#3d4e8a',
					800: '#1e3a5f',
					900: '#0f2744',
				},
				'slate-blue': '#f1f5f9',
				'blue-gray': '#f8fafc',
				
				// shadcn/ui colors
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#1e3a8a',
					foreground: '#ffffff',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				lato: ['Lato', 'sans-serif'],
				// Legacy support
				raleway: ['Raleway', 'sans-serif'],
				playfair: ['Playfair Display', 'serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 },
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
			},
			backgroundImage: {
				'hero-gradient': 'linear-gradient(to right, rgba(30, 58, 138, 0.95) 0%, rgba(30, 58, 138, 0.8) 40%, transparent 100%)',
				'blue-gradient': 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
				'gold-gradient': 'linear-gradient(135deg, #d4af37 0%, #f59e0b 100%)',
				'navy-gradient': 'linear-gradient(135deg, #1e3a8a 0%, #1e3a5f 100%)',
				'light-gradient': 'linear-gradient(180deg, #f0f4f8 0%, #e2eaf2 100%)',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};