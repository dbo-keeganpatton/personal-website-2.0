/** @type {import('tailwindcss').Config} */
module.exports = {
  
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
  
    theme: {
        extend: {
            keyframes: {
                'dust-reveal': {
                    
                    '0%': {
                        opacity: '0',
                        filter: 'blur(10px)',
                        transform: 'translateY(20px)',
                        letterSpacing: '0.5em',
                    },
          
                    '100%': {
                        opacity: '1',
                        filter: 'blur(0px)',
                        transform: 'translateY(0)',
                        letterSpacing: 'normal',
                    },
                },
            },
      
            animation: {'dust-reveal': 'dust-reveal 2s ease-out forwards',},
        },
    },
    plugins: [],
};
