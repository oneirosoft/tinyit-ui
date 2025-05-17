import { 
    useRef,
    type KeyboardEvent
} from 'react'
import { 
    SendHorizontal as Send
} from 'lucide-react'
import './styles.scss'
import { useSetAtom } from 'jotai'
import { addUrlAtom } from '../../atoms'
import { shorten } from '../../api'
import { isNullOrEmpty } from '../../utils'

const UrlInput = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    const addUrl = useSetAtom(addUrlAtom)

    const handleClick = async () => {
        if (!isNullOrEmpty(inputRef.current?.value)) {
            const response = await shorten(inputRef.current.value)
            addUrl(response)
            inputRef.current.value = ''
        }

        inputRef.current?.focus()
    }

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            handleClick()
        }
    }

    return (
        <div className="input-wrapper">
            <input
                onKeyDown={handleKeyDown}
                ref={inputRef}
                type="text"
                placeholder="Enter a URL to shorten"
            />
            <button 
                type="button"
                onClick={handleClick}
                aria-label="Send">
                <Send />
            </button>
        </div>
    )
}

export default UrlInput