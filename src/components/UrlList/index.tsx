import { useState } from 'react';
import type { TinyUrl } from '../../atoms';
import './styles.scss'
import UrlDetails from './UrlDetails'
import UrlPreviewModal from '../UrlPreviewModal';

export default function UrlList({ items }: { items: TinyUrl[] }) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  return (
    <>
      <ul className="url-list">
        {items.map((url, i) => (
          <UrlDetails 
            key={i}
            url={url}
            onClick={tUrl => setPreviewUrl(tUrl.url)} />
        ))}
      </ul>
      {previewUrl && (
        <UrlPreviewModal
          url={previewUrl}
          onClose={() => setPreviewUrl(null)}
          onContinue={() => {
            window.location.href = previewUrl
          }}
        />
      )}
    </>
  );
}