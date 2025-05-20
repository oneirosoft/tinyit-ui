import { useState } from 'react';
import type { TinyUrl } from '../../atoms';
import './styles.scss'
import UrlDetails from './UrlDetails'
import UrlPreviewModal from '../UrlPreviewModal';
import { getMetadata, type Metadata } from '../../api';

export default function UrlList({ items }: { items: TinyUrl[] }) {
  const [metadata, setMetadata] = useState<Metadata | null>(null)

  const handlePreview = (url: string) => {
    getMetadata(url).then(setMetadata)
  }

  return (
    <>
      <ul className="url-list">
        {items.map((url, i) => (
          <UrlDetails 
            key={i}
            url={url}
            onPreview={tUrl => handlePreview(tUrl.url)} />
        ))}
      </ul>
      {metadata && (
        <UrlPreviewModal
          metadata={metadata}
          onClose={() => setMetadata(null)}
          onContinue={() => {
            window.location.href = metadata.url
          }}
        />
      )}
    </>
  );
}