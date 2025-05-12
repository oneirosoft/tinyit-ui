import './styles.scss'

const NotFound = () => {
    return (
        <div className="not-found">
            <h1 className='title'>404 – Link Not Found</h1>
            <p>The short link you requested doesn’t exist or has expired.</p>
            <a href="/">Go back home</a>
        </div>
    )
}

export default NotFound;