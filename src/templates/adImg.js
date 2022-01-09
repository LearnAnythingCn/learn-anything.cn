import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const AdsImg = () => {

    return (
        <a href="https://mobile.yangkeduo.com/goods.html?goods_id=107086751934" target="_blank" rel="noreferrer">
            {/* <StaticImage src={bainian} alt="百念牙膏" imgStyle={{border: 'solid 1px #ddd', borderRadius: 10}}/> */}
            <StaticImage src="../images/bainian.webp" alt="百念牙膏" imgStyle={{border: 'solid 1px #ddd', borderRadius: 10}}/>
        </a>
    )
}

export default AdsImg