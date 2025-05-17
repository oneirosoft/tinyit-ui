import { atom } from "jotai"
import { atomWithStorage } from "jotai/utils"

export interface TinyUrl {
    id: string,
    url: string,
}

const MAX_ENTRIES = 5

export const urlListAtom = atomWithStorage<TinyUrl[]>('urls', [])

export const addUrlAtom = atom(
    null,
    (get, set, url: TinyUrl) => {
        const current = get(urlListAtom)
        const updated = [url, ...current.filter((item) => item.id !== url.id)]
            .slice(-MAX_ENTRIES)

        set(urlListAtom, updated)
    }
)

export const removeUrlAtom = atom(
    null,
    (get, set, url: TinyUrl) => {
        const current = get(urlListAtom)
        const updated = current.filter((item) => item.id !== url.id)

        set(urlListAtom, updated)
    }
)