import { useDark, useToggle } from '@vueuse/core'
import { ref } from 'vue'

const isDark = ref(useDark())
const toggleDark = useToggle(isDark)

export default () => ({ isDark, toggleDark })
