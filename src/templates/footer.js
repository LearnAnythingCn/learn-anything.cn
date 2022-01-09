import React from "react"
import { Layout } from 'antd';
// import { StaticImage } from "gatsby-plugin-image";
import beian from "../images/beian.webp"
const { Footer } = Layout;

const FooterTemplate = ({ data }) => {

    return (
        <Footer style={{ textAlign: 'center', color: 'gray' }}>
            <div> {data.description} © {new Date().getFullYear()}</div>
            <div>
                {/* <StaticImage src='../images/beian.webp' alt="备案" style={{ height: 16, width: 16, marginBottom: 0, marginRight: 5 }} /> */}
                <img src={beian} alt="备案" style={{ height: 16, width: 16, marginBottom: 0, marginRight: 5 }} />
                <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank" rel="noreferrer" >
                    沪ICP备18036491号-1
                </a>
            </div>
        </Footer>
    )
}

export default FooterTemplate