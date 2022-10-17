/**
 * 控制page的全屏状态
 */
import { ref } from 'vue'

export function useFullScreen () {
  const isFullScreen = ref(false)
  const fullScreen = function () {
    isFullScreen.value ? document.exitFullscreen() : document.documentElement.requestFullscreen()
    isFullScreen.value = !isFullScreen.value
  }
  document.addEventListener('fullscreenchange', function () {
    isFullScreen.value = document.fullscreenElement !== null
  })
  return {
    isFullScreen,
    fullScreen
  }
}
