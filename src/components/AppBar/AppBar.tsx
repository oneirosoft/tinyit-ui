import { SiGithub } from 'react-icons/si'

import './styles.scss'

const AppBar = () => {

    return (
        <div className="app-bar">
            <a href='https://github.com/oneirosoft/tinyit-ui'
                target='_blank'
                rel='noopener noreferrer'
                className="app-bar__link"
                title='GitHub Repository'
            >
                <SiGithub size={30} />
            </a>
        </div>
    )
}

export default AppBar;