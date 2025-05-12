import './styles.scss'

const UrlPreviewModal = ({
  url,
  onClose,
  onContinue,
}: {
  url: string
  onClose: () => void
  onContinue: () => void
}) => {
  return (
    <div className="preview-modal-backdrop" onClick={onClose}>
      <div className="preview-modal" onClick={e => e.stopPropagation()}>
        <h3>Preview</h3>
        <iframe src={url} title="Preview" />
        <div className="modal-actions">
          <button onClick={onClose}>Cancel</button>
          <button onClick={onContinue}>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default UrlPreviewModal