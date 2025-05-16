import { atom } from "jotai"
import { atomWithStorage } from "jotai/utils"

export interface TinyUrl {
    id: string,
    url: string,
}

const MAX_ENTRIES = 5

export const urlListAtom = atomWithStorage<TinyUrl[]>('urls', [])
export const addUrlAction = atom(
    null,
    (get, set, value: TinyUrl) => {
        const current = get(urlListAtom)
        const updated = [value, ...current.filter((item) => item.id !== value.id)]
            .slice(-MAX_ENTRIES);

        set(urlListAtom, updated)
    }
)

export const removeUrlAction = atom(
    null,
    (get, set, value: TinyUrl) => {
        const current = get(urlListAtom)
        const updated = current.filter((item) => item.id !== value.id)

        set(urlListAtom, updated)
    }
)

