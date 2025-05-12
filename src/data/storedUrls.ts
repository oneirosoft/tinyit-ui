import type { TinyUrl } from "../atoms";

const STORAGE_KEY = 'urls'
const MAX_ENTRIES = 50

export const persistUrl = (item: TinyUrl): void => {
    const raw = localStorage.getItem(STORAGE_KEY)
    const urls: TinyUrl[] = raw ? JSON.parse(raw) : []

    if (urls.find((storedId) => storedId.id === item.id)) return

    const update = [item, ...urls]

    if (update.length > MAX_ENTRIES)
        update.splice(0, urls.length - MAX_ENTRIES)

    localStorage.setItem('urls', JSON.stringify(update))
}

export const getStoredUrls = (): TinyUrl[] => {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
}

export const deleteUrlFromStorage = (id: string): void => {
    const raw = localStorage.getItem(STORAGE_KEY)
    const urls: TinyUrl[] = raw ? JSON.parse(raw) : []

    const update = urls.filter((storedId) => storedId.id !== id)

    localStorage.setItem(STORAGE_KEY, JSON.stringify(update))
}