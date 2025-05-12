import { useCallback, useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router'
import Api from '../../api'
import { isNullOrEmpty } from '../../utils'
import NotFound from '../NotFound'
import './styles.scss'
import { persistVisited, getVisitedUrl } from '../../data'

const RedirectPage = () => {
    const { id } = useParams<{ id: string }>()
    const [status, setStatus] = useState<'loading' | 'notfound'>('loading')

    useLayoutEffect(() => {
        if (isNullOrEmpty(id))
            return

        const visited = getVisitedUrl(id)

        if (visited) {
            window.location.replace(visited)
            return
        }

        Api.get(id)
            .then(([status, result]) => {
                if (status === 'ok') {
                    persistVisited({ id, url: result.href })
                    window.location.replace(result.href)
                }
                else setStatus('notfound')
            })
    }, [id])

    const Page = useCallback(() => {
        const redirect =
            <div className='redirect-page'>
                <h1>Redirecting...</h1>
                <p>If you are not redirected automatically, please click the link below:</p>
                <a href={window.location.href}>{window.location.href}</a>
            </div>
        return status === 'loading' ? redirect : <NotFound />
    }, [status])

    return <Page />
}

export default RedirectPage