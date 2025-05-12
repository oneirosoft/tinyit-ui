import { atom } from "jotai";
import { deleteUrlFromStorage, getStoredUrls, persistUrl } from "../data";

export interface TinyUrl {
    id: string,
    url: string,
}

const MAX_ENTRIES = 5

const getInitialUrlList = (): TinyUrl[] =>
    getStoredUrls()

export const urlListAtom = atom<TinyUrl[]>(getInitialUrlList())
export const addUrlAction = atom(
    null,
    (get, set, value: TinyUrl) => {
        persistUrl(value)
        const current = get(urlListAtom)
        const updated = [value, ...current.filter((item) => item.id !== value.id)]
            .slice(-MAX_ENTRIES);

        set(urlListAtom, updated)
    }
)

export const removeUrlAction = atom(
    null,
    (get, set, value: TinyUrl) => {
        deleteUrlFromStorage(value.id)
        const current = get(urlListAtom)
        const updated = current.filter((item) => item.id !== value.id)

        set(urlListAtom, updated)
    }
)

