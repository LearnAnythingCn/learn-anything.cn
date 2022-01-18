import React from "react"
import { Card, Col } from 'antd';
import { GatsbyImage } from "gatsby-plugin-image";
import logo from "../../images/learn-anything-icon.png"

const MovieTagRowItem = ({ colNum, tagsData, allShow }) => {

    var itemShow = 1;

    return tagsData.map(element => {
        let url = "/movie/" + element.slug;
        if (element.url && element.url.indexOf("https://learn-anything.cn") === -1) {
            url = element.url;
        }


        var imgUrl = {};
        imgUrl.type = "StaticImage";
        imgUrl.url = logo;
        if (element.image) {
            if(element.image.localFile){
                imgUrl.type = "GatsbyImage";
                imgUrl.url = element.image.localFile.childImageSharp.gatsbyImageData;
            }else if(element.image.url){
                imgUrl.url = "https://api.learn-anything.cn" + element.image.url;
            }
        } else if (element.imgUrl) {
            imgUrl.url = "https://api.learn-anything.cn" + element.imgUrl;
        } else if (element.imgLocal) {
            imgUrl.url = element.imgLocal;
        }


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
                            // <GatsbyImage
                            //     imgStyle={{ border: 'solid 1px #ddd', borderRadius: 15 }}
                            //     image={element.image.localFile.childImageSharp.gatsbyImageData}
                            //     alt={element.slug} />

                            imgUrl.type === "GatsbyImage" ?
                            (
                                // <div style={{ padding: '5px 0 0 4px' }}>
                                    // <GatsbyImage image={imgUrl.url} alt={itemTitle} imgStyle={{ width: 15, height: 15, border: 'solid 1px #ddd', borderRadius: 15 }} />
                                // </div>
                                <GatsbyImage
                                imgStyle={{ border: 'solid 1px #ddd', borderRadius: 15 }}
                                // image={element.image.localFile.childImageSharp.gatsbyImageData}
                                image={imgUrl.url}
                                alt={element.slug} />
                            ) :
                            (
                                <img src={imgUrl.url} alt={element.slug} style={{ border: 'solid 1px #ddd', borderRadius: 15 }} />
                            )
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