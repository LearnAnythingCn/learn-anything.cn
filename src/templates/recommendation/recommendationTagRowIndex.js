import React from "react"
import { List } from 'antd';
import { GatsbyImage } from "gatsby-plugin-image";

import './recommendationTagRowIndex.css'

// more 表示点击更多调整的链接，可取的值为：/movie、/tag/moive-hot 等
const RecommendationTagRowIndex = ({ name, tagsData, more, allShow, fixPath }) => {

    if (!fixPath) {
        fixPath = "/";
    }

    return (
        <div style={{ margin: "10px 10px 0 10px", backgroundColor: 'white', border: 'solid 1px #ddd', borderRadius: 10 }}>
            <List
                grid={{ gutter: 8, column: 2 }}
                header={
                    <div style={{ height: "30px" }}>
                        <div style={{ float: 'left', lineHeight: '30px', color: '#108ee9', paddingLeft: 15, fontSize: '12px', fontWeight: 500, letterSpacing: 2 }}>{name}</div>
                        {
                            more ?
                                <a href={more} target="_blank" rel="noreferrer">
                                    <div style={{ float: 'right', lineHeight: '30px', fontSize: 12, color: '#0089e1', marginRight: 15 }} >更多...</div>
                                </a>
                                :
                                <></>
                        }
                    </div>
                }
                itemLayout="horizontal"
                dataSource={tagsData}
                renderItem={item => (
                    <List.Item
                        style={{
                            padding: '10px 0px 5px 0px',
                            marginBottom: 0
                        }}
                    >
                        <List.Item.Meta
                            style={{cursor: 'pointer'}}
                            onClick={() => { window.open(fixPath + item.slug, "_blank"); }}
                            avatar={
                                <GatsbyImage
                                    imgStyle={{ border: 'solid 1px #ddd', borderRadius: 15 }}
                                    image={item.image.localFile.childImageSharp.gatsbyImageData}
                                    alt={item.title} />
                            }
                            title={
                                <div style={{
                                    fontWeight: 500,
                                    letterSpacing: 1,
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    textAlign: 'justify'
                                }}>
                                    {item.title}
                                </div>}
                            description={
                                <div style={{
                                    height: 20,
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    textAlign: 'justify'
                                }}>
                                    {item.description}
                                </div>}
                        />
                    </List.Item>
                )}
            />
        </div>
    );
}

export default RecommendationTagRowIndex;