export const themeEffect = function () {
  const pref = localStorage.getItem('theme')

  if (pref === null) {
    document.documentElement.classList.add('theme-system')
  } else {
    document.documentElement.classList.remove('theme-system')
  }

  const isDark =
    pref === 'dark' ||
    (!pref && window.matchMedia('(prefers-color-scheme: dark)').matches)

  document.documentElement.classList.add('pause-transitions')

  if (isDark) {
    document.documentElement.classList.add('dark')
    document.documentElement.classList.remove('light')
    document.head
      .querySelector('meta[name=theme-color]')
      ?.setAttribute('content', '#1c1c1c')
  } else {
    document.documentElement.classList.add('light')
    document.documentElement.classList.remove('dark')
    document.head
      .querySelector('meta[name=theme-color]')
      ?.setAttribute('content', '#fcfcfc')
  }

  requestAnimationFrame(() => {
    document.documentElement.classList.remove('pause-transitions')
  })

  return isDark ? 'dark' : 'light'
}
