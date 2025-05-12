import { useAtom } from "jotai"
import { UrlInput, UrlList } from "../../components"
import { urlListAtom } from "../../atoms"

import './styles.scss'

const Home = () => {
    const [urlList,] = useAtom(urlListAtom)

    return (
        <>
            <h1 className='title'>Tiny It</h1>
            <UrlInput />
            <UrlList items={urlList} />
        </>
    )
}

export default Home