import React from 'react'
import cx from 'classnames'

import bs from '../Bootstrap.module.scss'
import mission from './mission.module.scss'

const Mission = () => (
    <section className={cx(mission.section, bs.py5)}>
        <div className={bs.container}>
            <h2 className={cx(bs.textCenter, bs.h1, bs.mb4, mission.title)}>Who we are</h2>

            <div className={cx(bs.row, bs.textWhite)}>
                <div className={cx(bs.col12, bs.colMd4, mission.aside1, bs.p5, bs.my3)}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo pariatur dolor eos non eligendi maxime quam vel, ut consectetur nulla recusandae? Nisi, doloribus consequatur? Nihil molestiae veritatis ad amet eos.
                </div>
                <div className={cx(bs.col12, bs.colMd4, mission.aside2, bs.p5, bs.my3)}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo pariatur dolor eos non eligendi maxime quam vel, ut consectetur nulla recusandae? Nisi, doloribus consequatur? Nihil molestiae veritatis ad amet eos.
                </div>
                <div className={cx(bs.col12, bs.colMd4, mission.aside3, bs.p5, bs.my5)}>
                <p className={cx(bs.dBlock, bs.h2, bs.fontWeightBold, bs.fontItalic, bs.textCenter)}>''</p>                    
                    <span className={cx(bs.h3)}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo pariatur dolor eos non eligendi maxime quam vel</span>
                
                </div>
            </div>
        </div>
    </section>
)

export default Mission