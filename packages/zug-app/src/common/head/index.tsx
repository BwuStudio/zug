import React, { useState } from 'react'
import './index.scss'

const Head: React.FC = ({ children }) => {
    const [type, setType] = useState<'with_search'>('with_search')

    return <div className={`head-cntr ${type}`}>
        <div className="head-target">
            <div className='head-search'>
                <div className="head-search-input">
                    <input type="text" />
                    <a>智能搜索</a>
                </div>

            </div>
        </div>

        {children}
    </div>
}

export default Head