import React from "react"
import { Card, Col } from 'antd';
import { GatsbyImage } from "gatsby-plugin-image";

const BookTagRowItem = ({ colNum, tagsData, allShow }) => {

    var itemShow = 1;
    return tagsData.map(element => {
        let url = "/book/" + element.slug;

        if (!allShow) {
            if (colNum === 3 && itemShow > 8) {
                return null;
            } else if (colNum === 4 && itemShow > 6) {
                return null;
            } else if (colNum === 6 && itemShow > 4) {
                return null;
            } else if (colNum === 8 && itemShow > 3) {
                return null;
            } else if (colNum === 12 && itemShow > 2) {
                return null;
            } else if (colNum === 24 && itemShow > 2) {
                return null;
            }
            itemShow++;
        }

        return (
            <Col span={colNum} key={element.slug + "a"} >
                <a href={url} target="_blank" rel="noreferrer" style={{color:"#888"}}>
                    <Card
                        hoverable
                        // onClick={() => { window.open(url, "_blank"); }}
                        style={{ width: 100, height: 140, overflow: 'hidden', borderRadius: 15 }}
                        cover={
                            <GatsbyImage
                                imgStyle={{ border: 'solid 1px #ddd', borderRadius: 15 }}
                                image={element.image.localFile.childImageSharp.gatsbyImageData}
                                alt={element.slug} />
                        }
                    >
                    </Card>
                    <div style={{
                        width: 100, lineHeight: '30px', textAlign: 'center', whiteSpace: 'nowrap',
                        overflow: 'hidden', textOverflow: 'ellipsis', verticalAlign: 'middle'
                    }}>{element.title}
                    </div>
                </a>
            </Col >
        )
    })
}

export default BookTagRowItem;