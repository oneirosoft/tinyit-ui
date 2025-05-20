import type { TinyUrl } from "../atoms"

const apiUrl = import.meta.env.VITE_API_URL

export const shorten = (url: string): Promise<TinyUrl> => {
    const shortenUrl = apiUrl + '/shorten'
    return fetch(shortenUrl, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ url }),
    })
    .then(resp => resp.json())
}

type FetchResponse = ['ok', URL] | ['err']

export const getShortened = (id: string): Promise<FetchResponse> =>
    fetch(`${apiUrl}/${id}`, {
        method: 'GET',
        credentials: 'include',
        redirect: 'manual',
    })
    .then((resp) => resp.json())
    .then(({ url }: { url: string}) =>
        ['ok', new URL(url)] as FetchResponse)
    .catch(() => ['err'])

export interface Metadata {
    title: string
    description: string
    image: string
    url: string
}

export const getMetadata = (url: string): Promise<Metadata | null> =>
    fetch(`${apiUrl}/metadata?url=${encodeURIComponent(url)}`)
        .then(resp => resp.json())
        .catch(null)


export default {
    shorten,
    getShortened,
    getMetadata,
}