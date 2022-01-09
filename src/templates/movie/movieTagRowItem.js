import React from "react"
import { Card, Col } from 'antd';
import { GatsbyImage } from "gatsby-plugin-image";

const MovieTagRowItem = ({ colNum, tagsData, allShow }) => {

    var itemShow = 1;

    return tagsData.map(element => {
        let url = "/movie/" + element.slug;

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
            <Col span={colNum} key={element.slug + "col"} >
                <a href={url} target="_blank" rel="noreferrer" style={{color:"#888"}}>
                    <Card
                        hoverable
                        // onClick={() => { window.open(url, "_blank"); }}
                        // 推荐大小 115*161
                        style={{
                            width: 100,
                            height: 140,
                            textAlign: 'center',
                            overflow: 'hidden',
                            borderRadius: 15
                        }}
                        cover={
                            // <GatsbyImage style={{}} imgStyle={{overflow: 'hidden'}} image={element.image.localFile.childImageSharp.gatsbyImageData} alt={element.title} />
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

export default MovieTagRowItem;