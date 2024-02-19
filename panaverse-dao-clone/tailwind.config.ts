import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      transitionDuration:{
        '3000':'3000ms',
        '2000': '2000ms',
        '9999': '9999ms',
      },
      maxWidth:{
        'screen-2.5-xl':'1400px',
        'screen-xsm': '3px',
        'xlg': '700px',
        'custome': '800px',
      },
      colors:{
        "#00616c":"#00616c",
      },
      padding: {
        '28px': '28px',
        '13px': '13px',
        cpadding: "9px",
        '17': "68px"
      },
      fontSize: {
        '16': '20px',
        '170': '170px',
        p: "12.8px",
        buttons: "16px",
        p2: "11.8px",
        '17':"21px",
        '15':"15px",
        '18': '18px',
        '20': '46px',
        '19': '17.2px',
        '20p': '14.8px',
        '21': '13.5px',
        'text-space': '42px'
      },
      lineHeight:{
        '75': '55px',
        '85': '75px',
      },
      width: {
        w: "360px",
        'sm-w':"100px",
        '33': "140px",
        '47': "180px",
        'space': "200px",
        '95': "95%"
      },
      height:{
        '21': "84px",
      },
      minHeight: {
        '300px': '300px',
      },
      opacity: {
        '0.06': '0.06'
      },
      flexBasis:{
        target: '941.1px',
        target2: "600px",
      },
      spacing: {
        '0/12': '80.44%',
        'custome': '40%',
      }
    },
  },
  plugins: [],
}
export default config
