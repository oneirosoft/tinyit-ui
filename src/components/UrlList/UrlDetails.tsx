import { Copy, ClipboardCheck, ExternalLink, Trash } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { removeUrlAction, type TinyUrl } from '../../atoms'
import { useAtom } from 'jotai'

interface UrlDetailsProps {
  url: TinyUrl
}

const UrlDetails = ({ url }: UrlDetailsProps) => {
  const [copied, setCopied] = useState(false)
  const [entered, setEntered] = useState(false)
  const [, deleteUrl] = useAtom(removeUrlAction)

  useEffect(() => {
    const timeout = setTimeout(() => setEntered(true), 25)
    return () => clearTimeout(timeout)
  })

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url).then(() => {
      console.log('URL copied to clipboard:', url);
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
      }, 5000)
    }).catch(err => {
      console.error('Failed to copy URL:', err);
    });

  }

  const Icon = useCallback(() =>
    copied
      ? <ClipboardCheck className='success' size={20} />
      : <Copy size={20} />
    , [copied])

  const origin = window.location.origin
  const shortenedUrl = origin + '/' + url.id

  return (
    <li className={entered ? 'entering' : ''}>
      <div className='url-text'>
        <span className='short-code' aria-label={`shortened url with id ${url.id}`}>
          {url.id}
        </span>
        <span className='long-url'>
          {url.url}
        </span>
      </div>
      <div className='url-actions'>
        <button
          type='button'
          aria-label='copy to clip board'
          onClick={() => copyToClipboard(shortenedUrl)}>
          <Icon />
        </button>
        <button
          type='button'
          aria-label={`open ${url.url} in new tab`}
          onClick={() => window.open(url.url, '_blank')}>
          <ExternalLink size={20} />
        </button>
        <button
          type='button'
          aria-label={`delete url with ${url.id}`}
          onClick={() => deleteUrl(url)}>
          <Trash size={20} />
        </button>
      </div>
    </li>
  )
}

export default UrlDetails