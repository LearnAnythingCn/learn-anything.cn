import React from "react"
import { Button, Col } from 'antd';

const IndexTagRowItem = ({ colNum, tagsData }) => {

    return tagsData.map(element => {
        let slug = element.slug;
        return (
            <Col span={colNum} key={element.name + "a"} >
                <a href={"/tag/" + slug} target="_blank" rel="noreferrer">
                    {/* <Tag color="#aaa" style={{ width: 100, height: '30px', margin: 'auto', lineHeight: '30px', fontSize: 12, textAlign: 'center', borderRadius: 15, letterSpacing: 2 }}>
                        {element.name}
                    </Tag> */}

                    <Button style={{ width: 100, height: '30px', margin: 'auto', fontSize: 12, textAlign: 'center', borderRadius: 15, border:'dashed 1px #eee', letterSpacing: 1.5 }}>{element.name}</Button>
                </a>
            </Col>
        )
    })
}

export default IndexTagRowItem;