import React from "react"
import { Layout, Row } from 'antd';
import { useMediaQuery } from 'react-responsive'
import TagPageItem from "./tagPageItem";
const { Content } = Layout;


const TagPage = ({ data, tagName }) => {

    const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 767 })
        return isMobile ? children : null
    }
    const Default = ({ children }) => {
        const isNotMobile = useMediaQuery({ minWidth: 768 })
        return isNotMobile ? children : null
    }

    return (
        <Layout>
            <Content style={{ margin: '10px 10px 0 10px', overflow: 'initial' }}>
                <div style={{ backgroundColor: 'white', border: 'solid 1px #ddd', borderRadius: 10 }}>
                    <div style={{ height: '40px', borderBottom: 'solid 1px #f0f0f0' }}>
                        <h4 style={{ lineHeight: '40px', color: '#666', paddingLeft: 15, fontSize: '12px', fontWeight: 500, letterSpacing: 3 }}>{tagName}</h4>
                    </div>

                    <div style={{ margin: 10 }}>
                        <Row gutter={[8, 8]}>
                            <Mobile >
                                <TagPageItem data={data} mobile={true} />
                            </Mobile>

                            <Default >
                                <TagPageItem data={data} mobile={false} />
                            </Default>
                        </Row>
                    </div>

                </div>
            </Content>
        </Layout>
    );
}

export default TagPage
