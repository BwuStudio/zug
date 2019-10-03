import React, { useState } from 'react';
import './index.scss'
import bgImg from './bg.jpg'

export default () => {
    const [isShow, setIsShow] = useState(false)

    document.body.onclick = () => setIsShow(!isShow)

    return <div
        className={isShow ? "login" : "login hide"}
        style={{
            backgroundImage: `url(${bgImg})`,
            backgroundColor: "#fff",
            backgroundSize: '100% 100%'
        }}>

        <div className="login-input-panel"></div>

    </div>
}