/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/prefer-ts-expect-error */

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './utils/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './ui/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        canela: ['Canela', 'sans-serif']
      },
      keyframes: {
        slideDownAndFade: {
          from: { opacity: '0.1', transform: 'translateY(-10px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        slideLeftAndFade: {
          from: { opacity: '0.1', transform: 'translateX(0px)' },
          to: { opacity: '1', transform: 'translateX(0)' }
        },
        slideUpAndFade: {
          from: { opacity: '0.1', transform: 'translateY(-10px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        slideRightAndFade: {
          from: { opacity: '0.1', transform: 'translateX(-10px)' },
          to: { opacity: '1', transform: 'translateX(0)' }
        },
        overlayShow: {
          from: { opacity: '0' },
          to: { opacity: '1' }
        },
        contentShow: {
          from: {
            opacity: '0',
            transform: 'translate(-50%, -48%) scale(0.96)'
          },
          to: { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' }
        },
        contentOpacityShow: {
          from: { opacity: '0' },
          to: { opacity: '1' }
        },
        hide: {
          from: { opacity: '1' },
          to: { opacity: '0' }
        },
        slideIn: {
          from: {
            transform: 'translateY(100%)'
          },
          to: { transform: 'translateY(0px)' }
        },
        slideOut: {
          from: { transform: 'translateY(0px)' },
          to: { transform: 'translateY(100%)' }
        },
        swipeOut: {
          from: { transform: 'translateY(var(--radix-toast-swipe-end-y))' },
          to: { transform: 'translateY(100%)' }
        }
      },
      animation: {
        slideDownAndFade: 'slideDownAndFade 100ms',
        slideLeftAndFade: 'slideLeftAndFade 100ms',
        slideUpAndFade: 'slideUpAndFade 100ms',
        slideRightAndFade: 'slideRightAndFade 100ms',
        overlayShow: 'overlayShow 200ms',
        contentShow: 'contentShow 200ms',
        contentOpacityShow: 'contentOpacityShow 200ms',
        hide: 'hide 200ms ease-in',
        slideIn: 'slideIn 200ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideOut: 'slideOut 200ms cubic-bezier(0.16, 1, 0.3, 1)',
        swipeOut: 'swipeOut 200ms ease-out'
      }
    }
  },
  darkMode: 'class'
}
export default config
