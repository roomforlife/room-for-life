import React from 'react'
import cx from 'classnames'

import scrollDown from './ScrollDown.module.scss'

class ScrollDown extends React.Component {

    scrollDown() {
        window.scroll({
            top: window.innerHeight - 60,
            behavior: 'smooth'
        })   
    }

    render() {
        return(
            <div className={cx(this.props.mixClass, scrollDown.scrollDown)}
                onClick={() => this.scrollDown()}
            >
                <div className={scrollDown.arrow}></div>
                <span className={scrollDown.text}>JA TAK!</span>
            </div>
        )
    }
}

export default ScrollDown