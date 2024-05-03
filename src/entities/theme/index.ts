import { ref } from 'vue'
import { useDark, useToggle } from '@vueuse/core'

const theme = useDark({
  selector: 'div#app',
  attribute: 'class',
  valueDark: 'dark',
  valueLight: 'light'
})

const isDark = ref(useDark())

const toggleTheme = useToggle(theme)

export { isDark, toggleTheme }
