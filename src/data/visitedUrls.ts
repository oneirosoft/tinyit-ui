import type { TinyUrl } from "../atoms"

type VisitedUrls = [string, string][]

const STORAGE_KEY = 'visited'
const MAX_ENTRIES = 50

export const persistVisited = (item: TinyUrl): void => {
  const raw = localStorage.getItem(STORAGE_KEY)
  let visited: VisitedUrls = raw ? JSON.parse(raw) : []

  if (visited.find(([id]) => id === item.id)) return

  visited.push([item.id, item.url])

  if (visited.length > MAX_ENTRIES)
    visited = visited.slice(visited.length - MAX_ENTRIES)

  localStorage.setItem(STORAGE_KEY, JSON.stringify(visited))
}

export const getVisitedUrl = (id: string): string | undefined => {
  const raw = localStorage.getItem(STORAGE_KEY)
  const visited: VisitedUrls = raw ? JSON.parse(raw) : []

  const entry = visited.find(([storedId]) => storedId === id)
  return entry?.[1]
}