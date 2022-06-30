/*
|-------------------------------------------------------------------------------
| Tailwind – The Utility-First CSS Framework
|-------------------------------------------------------------------------------
|
| Documentation at https://tailwindcss.com
|
*/

/**
 * Global Styles Plugin
 *
 * This plugin modifies Tailwind’s base styles using values from the
 * https://tailwindcss.com/docs/adding-base-styles#using-a-plugin
 */
 const globalStyles = ({ addBase, theme }) => {
  addBase({
    body: {
      'font-family': '"Source Sans Pro", sans-serif',
      color: '#333333',
      fontSize: theme('fontSize.base'),
      '@media (min-width: 768px)': {
        fontSize: theme('fontSize.base'),
      }
    },
    a: {
      textDecoration: 'none',
      borderBottom: '1px solid transparent',
      transition: '0.2s ease',
    },
    p: {
      marginBottom: theme('margin.3'),
      lineHeight: theme('lineHeight.normal'),
      '.entry-intro > &': {
        '@media (min-width: 768px)': {
          lineHeight: theme('lineHeight.9'),
        }
      }
    },
    'h1, h2, h3, h4, h5': {
      fontWeight: 'bold',
      color: theme('colors.primary.DEFAULT'),
      marginBottom: theme('margin.2'),
      lineHeight: theme('lineHeight.tight'),
    },
    h1: { fontSize: theme('fontSize.5xl') },
    h2: { fontSize: '2rem', marginTop: theme('margin.4'), },
    h3: {
      fontSize: theme('fontSize.2xl'),
      marginTop: theme('margin.4'),
      marginBottom: theme('margin.1'),
    },
    h4: {
      fontSize: theme('fontSize.xl'),
      marginTop: theme('margin.4'),
      marginBottom: theme('margin.1'),
    },
    h5: {
      fontSize: theme('fontSize.lg'),
      marginTop: theme('margin.4'),
      marginBottom: theme('margin.1') ,
    },
    'ol, ul': { paddingLeft: theme('padding.6') },
    ol: { listStyleType: 'decimal' },
    ul: { listStyleType: 'disc' },
    '.nav-bullet': {
      'height': '5px',
      'width': '5px',
      'border-radius': '1px',
    },
    blockquote: {
      'font-family': '"lora", sans-serif',
    },
    '.stretched-link': {
      '&::after': {
        'position': 'absolute',
        'top': '0',
        'right': '0',
        'bottom': '0',
        'left': '0',
        'z-index': '1',
        'content': '""',
      }
    }
  });
}

/**
 * Configuration
 */
module.exports = {
  theme: {
    colors: {
      primary: {
        DEFAULT: '#00376D',
        dark: '#003160',
        1100:'#879FBB',
        1000:'#01477F',
        900: '#13406d',
        800: '#27517b',
        700: '#4c7398',
        600: '#6687a7',
        500: '#7f9bb6',
        400: '#99afc4',
        300: '#b2c3d3',
        200: '#ccd7e1',
        100: '#e5ebf0',
        50: '#edf4fb',
        light: '#f7f9fa',
      },
      leaf: {
        DEFAULT: '#6eaf46',
        light: '#fafcf9',
      },
      forest: {
        DEFAULT: '#0f8750',
        light: '#f7fbf9',
      },
      sea: {
        DEFAULT: '#236ebe',
        light: '#f8fafc',
      },
      sky: {
        DEFAULT: '#00A0E1',
        light: '#f7fcfe',
      },
      teal: {
        DEFAULT: '#004b64',
        light: '#f7f9fa',
      },
      mint: {
        DEFAULT: '#50abbf',
        light: '#f9fcfc',
        dark: '#eeedfb',
      },
      blue: {
        bg: '#f5f9fd',
        light: '#dbecff',
        gray: '#86a0bf',
        lightgray:'#00A0E119',
      },
      green: {
        DEFAULT: '#458d68',
        cyan: '#cce3de',
        dark: '#275C62',
        cyandark: '#73A9B0',
        cyanlight: '#CCE3DE',
        cyannoramal: '#364F68',
        bor:'#DBECFF',
        darklight:'#005F64',
      },
      black: {
        'DEFAULT': '#000',
        900: '#333333',
      },
      white: '#fff',
      gray: {
        50: '#f9fafb',
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c',
      },
      red: {
        'DEFAULT': '#ce0309',
        'light': '#EDEDFB',
        'gray':'#E9DFF6',
        'light-gray':'#000'
      },
      transparent: 'transparent',
    },
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
         sm: "100%",
         md: "100%",
         lg: "100%",
         xl: "1390px",
         '2xl': "1536px",
      }
    },
    extend: {
      spacing: {
       '18': '4.5rem',
      },
      margin: {
         '1/2': '-50%',
         '1/3': '33.333%',
         '2/3': '66.666%',
         '1/4': '25%',
         '2/4': '50%',
         '3/4': '75%',
         '1/6': '16.666667%',
         '2/6': '33.333333%',
         '3/6': '50%',
         '1/12': '8.333333%',
         '-1/12': '-8.333333%',
         '2/12': '16.66666%',
         '-2/12': '-16.66666%',
      },
      maxWidth: {
       '8xl': '83.75rem',
       'vw-full': '100vw',
       'small': '1090px',
      },
      minWidth: {
        '80': '5rem',
      },
      fontSize: {
        xs: ['0.87rem'],
        sm: ['1rem'],
        base: ['1.13rem'],
        '1xl': ['1.38rem'],
        '2.5xl': ['1.75rem'],
      },
      scale: {
        '105': '1.05',
      },
      lineHeight: {
       '9': '2.25rem',
      }
    }
  },
  variants: {
    // Define variants
    extend: {
      opacity: ['hover'],
      cursor: ['hover', 'focus'],
      scale: ['group-hover'],
      backgroundOpacity: ['group-hover'],
      screens: {
        '2xl': '1536px',
      }
    }
  },
  plugins: [
    globalStyles,
    require('@tailwindcss/aspect-ratio'),
  ],
}
