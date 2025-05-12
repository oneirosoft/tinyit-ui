import type { TinyUrl } from '../../atoms';
import './styles.scss'
import UrlDetails from './UrlDetails'

export default function UrlList({ items }: { items: TinyUrl[] }) {
  return (
    <ul className="url-list">
      {items.map((url, i) => (
        <UrlDetails key={i} url={url} />
      ))}
    </ul>
  );
}