// import { scrape } from '../../utils'

import type { Metadata } from '../../api'
import './styles.scss'

const UrlPreviewModal = ({
  metadata,
  onClose,
  onContinue,
}: {
  metadata: Metadata
  onClose: () => void
  onContinue: () => void
}) => {
  return (
    <div className="preview-modal-backdrop" onClick={onClose}>
      <div className="preview-modal" onClick={e => e.stopPropagation()}>
        <h3>{metadata.title}</h3>
        <p>{metadata.description}</p>
        <img src={metadata.image} alt={metadata.title} />
        <div className="modal-actions">
          <button onClick={onClose}>Cancel</button>
          <button onClick={onContinue}>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default UrlPreviewModal