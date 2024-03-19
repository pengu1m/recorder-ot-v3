export enum EventType {
    WaitForTime,
    WaitForSpace,
}

export type InteractiveCallback = () => void

export type InteractiveEvent = {
    type: EventType.WaitForSpace,
    callback: InteractiveCallback
} | {
    type: EventType.WaitForTime,
    ms: number,
    callback: InteractiveCallback
}

const SPACE_KEY = " "
const BODY = document.body

export class InteractiveManager {
    private list = new Array<InteractiveEvent>

    space(callback: InteractiveCallback) {
        this.list.push({
            type: EventType.WaitForSpace,
            callback: callback
        })
    }

    time(ms: number, callback: InteractiveCallback) {
        throw new Error("Timer feature is error now")
        
        this.list.push({
            type: EventType.WaitForTime,
            ms: ms,
            callback: callback
        })
    }

    private index = 0
    run() {
        if (this.list.length === 0) throw new Error("Fail to use InteraciveManager (no event pushed)")

        this.index = 0
        this.inrun(this.list[this.index])
    }

    private timeouts = new Array<number>
    private inrun(event: InteractiveEvent) {
        const do_next = () => {
            this.index++
            if (this.index !== this.list.length) this.inrun(this.list[this.index])
        }

        if (event.type === EventType.WaitForTime) {
            this.timeouts.push(setTimeout(() => {
                this.timeouts.forEach(item => clearTimeout(item))

                event.callback()
                
                do_next()
            }, event.ms))
        }
        
        // event.type === EventType.WaitForSpace
        const listener = (e: KeyboardEvent) => {
            if (e.key !== SPACE_KEY) return
            
            e.preventDefault()
            BODY.removeEventListener("keydown", listener)
            
            event.callback()

            do_next()
        }

        BODY.addEventListener("keydown", listener)
    }
}
