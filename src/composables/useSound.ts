import { useSound } from '@vueuse/sound' // Переименовываем
import clock from '../assets/sounds/countdown-clock.mp3'



export function useClockSound() {
  const { play } = useSound(clock, {
    volume: 0.5,
    interrupt: true,
    sprite: {
      tick: [0, 100],
    },
  })

  function startTicking() {
    play({id: 'tick' })
  }


  return {
    startTicking,
  }
}
