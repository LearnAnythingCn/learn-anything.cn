import React from "react"
import { Row } from 'antd';
import { useMediaQuery } from 'react-responsive'
import IndexTagRowItem from "./indexTagRowItem";

const Mobile240 = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 239 })
    return isMobile ? children : null
}

const Mobile350 = ({ children }) => {
    const isMobile = useMediaQuery({ minWidth: 240, maxWidth: 349 })
    return isMobile ? children : null
}

const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ minWidth: 350, maxWidth: 540 })
    return isMobile ? children : null
}

const Default660 = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 541, maxWidth: 659 })
    return isNotMobile ? children : null
}

const Default900 = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 660, maxWidth: 899 })
    return isNotMobile ? children : null
}

const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 900 })
    return isNotMobile ? children : null
}


const IndexTagRow = ({ name, tagsData }) => {

    return (
        <div style={{ margin: "10px 10px 0 10px", backgroundColor: 'white', border: 'solid 1px #ddd', borderRadius: 10 }}>
            <div style={{ height: '40px', borderBottom: 'solid 1px #f0f0f0' }}>
                <h4 style={{ lineHeight: '40px', color: '#108ee9', paddingLeft: 15, fontSize: '12px', fontWeight: 500, letterSpacing: 2 }}>{name}</h4>
            </div>

            <div style={{ margin: 15 }}>
                <Row gutter={[8, 12]}>
                    <Mobile240 >
                        <IndexTagRowItem colNum={24} tagsData={tagsData} />
                    </Mobile240>

                    <Mobile350 >
                        <IndexTagRowItem colNum={12} tagsData={tagsData} />
                    </Mobile350>

                    <Mobile >
                        <IndexTagRowItem colNum={8} tagsData={tagsData} />
                    </Mobile>

                    <Default660 >
                        <IndexTagRowItem colNum={6} tagsData={tagsData} />
                    </Default660>

                    <Default900 >
                        <IndexTagRowItem colNum={4} tagsData={tagsData} />
                    </Default900>

                    <Default >
                        <IndexTagRowItem colNum={3} tagsData={tagsData} />
                    </Default>
                </Row>
            </div>
        </div>
    );
}

export default IndexTagRow;