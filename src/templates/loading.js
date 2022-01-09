import React from "react"
import { Spin } from 'antd';


const Loading = () => {

    return (
        <div style={{textAlign:'center', height:100, padding:'30px 0 26px 0'}}>
            <Spin tip="Loading..." />
        </div>
    )
}

export default Loading;