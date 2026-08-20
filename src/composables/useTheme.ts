import { ref } from 'vue'

const isDark = ref(false)

function applyTheme() {
  document.documentElement.classList.toggle('dark', isDark.value)
}

const stored = localStorage.getItem('sp-theme')
isDark.value = stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
applyTheme()

export function useTheme() {
  return {
    isDark,
    toggleTheme() {
      isDark.value = !isDark.value
      localStorage.setItem('sp-theme', isDark.value ? 'dark' : 'light')
      applyTheme()
    },
  }
}
