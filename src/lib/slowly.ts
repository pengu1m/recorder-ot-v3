export const slowly = (text: string, nomad: (text: string) => string, callback: (text: string) => void, delay: number, end_callback: () => void) => {
    const len = text.length
    let index = 0
  
    const int = setInterval(() => {
      const ac = text.substring(0, index)
      const nomad_ac = nomad(ac)
  
      callback(nomad_ac)
  
      index++
  
      if (index === (len+1)) {
        clearInterval(int)
        end_callback()
        return
      }
  
    }, delay)
  }
  