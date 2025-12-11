import { setActivePinia, createPinia } from 'pinia'
import { useMainStore } from '@/stores/store.ts'
import { beforeEach, it, expect, describe, afterEach, vi } from 'vitest'



type MainStore = ReturnType<typeof useMainStore>

describe('Store', () => {
  let store: MainStore;

  beforeEach(() => {
    // создаем новый экземпляр pinia и делаем его активным,
    // чтобы он автоматически подхватывается любым вызовом useStore()
    // без необходимости его передачи: `useStore(pinia)`
    setActivePinia(createPinia());
    store = useMainStore();
    vi.useFakeTimers();

    // ЯВНО мокает глобальный setTimeout как spy
    vi.spyOn(globalThis, 'setTimeout').mockImplementation((fn: any) => {
      return 123;
    });
    vi.spyOn(globalThis, 'clearTimeout');

  })

  afterEach(() => {
    vi.clearAllMocks();
    vi.resetAllMocks();
    vi.useRealTimers();
  })



  it('display should format single-digit pomodoro with leading zero', () => {
    store.numPomodoro = 5;
    expect(store.display).toBe(`00:0${store.numPomodoro}`);
  })

  it('display should format double-digit pomodoro without leading zero', () => {
    store.numPomodoro = 11;
    expect(store.display).toBe(`00:${store.numPomodoro}`);
  })

  it('startTimer should decrement numPomodoro and set timeout', () => {
    const store = useMainStore()

    store.numPomodoro = 10

    store.startTimer()

    expect(store.numPomodoro).toBe(9)

    // Теперь это точно spy
    expect(globalThis.setTimeout).toHaveBeenCalledOnce()
    expect(globalThis.setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000)
  })

  it('stopTimer', () => {
    store.stopTimer()
    expect(globalThis.clearTimeout).toHaveBeenCalledTimes(1)
  })

  it('resetTimer', () => {
    store.numPomodoro = 10
    store.resetTimer();

    store.resetTimer()

    // 1) numPomodoro должен сброситься на 10
    expect(store.numPomodoro).toBe(10)

    // 2) stopTimer должен вызвать clearTimeout
    expect(globalThis.clearTimeout).toHaveBeenCalled()
    expect(globalThis.clearTimeout).toHaveBeenCalledWith(0)
  })

})
