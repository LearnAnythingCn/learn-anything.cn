import React from "react"
import { StaticImage } from "gatsby-plugin-image"
// import miniProgram from '../images/mini-program.webp'

const AdsMiniProgram = () => {

    return (
        // <a href="https://mobile.yangkeduo.com/goods.html?goods_id=107086751934" target="_blank" rel="noreferrer">
            <StaticImage src="../images/mini-program.webp" alt="微信小程序" imgStyle={{border: 'solid 1px #ddd', borderRadius: 10}}/>
            // <img src={miniProgram} alt="微信小程序" style={{border: 'solid 1px #ddd', borderRadius: 10}}/>
        // </a>
    )
}

export default AdsMiniProgram