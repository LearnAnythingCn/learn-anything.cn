import React from "react"
import { navigate } from "gatsby"
import { List, Pagination } from 'antd';
import { GatsbyImage } from "gatsby-plugin-image";
import './recommendationTagRow.css'

// more 表示点击更多调整的链接，可取的值为：/movie、/tag/moive-hot 等
const RecommendationTagRow = ({ location, name, tagsData, more, allShow, fixPath, pagination }) => {

    if (!fixPath) {
        fixPath = "/";
    }

    let paginationShow = false;
    if(pagination && pagination.numPages > 1)
        paginationShow = true;

    return (
        <div style={{ margin: "10px 10px 0 10px", backgroundColor: 'white', border: 'solid 1px #ddd', borderRadius: 10 }}>
            <List
                header={
                    <div style={{ height: '23px' }}>
                        <div style={{ float: 'left', lineHeight: '23px', color: '#108ee9', paddingLeft: 15, fontSize: '12px', fontWeight: 500, letterSpacing: 2 }}>{name}</div>
                        {
                            more ?
                                <a href={more} target="_blank" rel="noreferrer">
                                    <div style={{ float: 'right', lineHeight: '23px', fontSize: 12, color: '#0089e1', marginRight: 15 }} >更多...</div>
                                </a>
                                :
                                <></>
                        }
                    </div>
                }
                itemLayout="horizontal"
                split={true}
                dataSource={tagsData}
                renderItem={item => (
                    <List.Item style={{
                        padding: '15px 0 15px 0',
                        cursor: 'pointer',
                        marginBottom: 0
                    }}>
                        <List.Item.Meta
                            onClick={() => { window.open(fixPath + item.slug, "_blank"); }}
                            avatar={
                                <GatsbyImage
                                    imgStyle={{ border: 'solid 1px #ddd', borderRadius: 15 }}
                                    image={item.image.localFile.childImageSharp.gatsbyImageData}
                                    alt={item.title}
                                />
                            }
                            title={
                                <div style={{
                                    fontWeight: 500,
                                    letterSpacing: 1,
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    textAlign: 'justify',
                                    // fontSize: 13
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
            {
                paginationShow ?
                    <Pagination defaultCurrent={1} current={pagination.currentPage} pageSize={pagination.pageSize} total={pagination.total}
                        style={{ textAlign: 'center' }}
                        onChange={
                            (e) => {
                                let page = "/";
                                if(pagination.pathname.charAt(pagination.pathname.length -1 )==="/"){
                                    pagination.pathname = pagination.pathname.slice(0, pagination.pathname.length-1);
                                }
                                // 第一页跳转到第一页
                                if (pagination.currentPage === 1 && e === 1) {
                                    page = pagination.pathname;
                                    return null;
                                } else if (pagination.currentPage === 1 && e !== 1) {
                                    // 第一页跳转到其他页
                                    page = pagination.pathname + "/" + e;
                                } else if (pagination.currentPage !== 1 && e === 1) {
                                    // 其他页跳转到第一页
                                    page = pagination.pathname.slice(0, pagination.pathname.lastIndexOf("/"));
                                } else {
                                    // 其他页跳转其他页
                                    page = pagination.pathname.slice(0, pagination.pathname.lastIndexOf("/") + 1) + e;
                                }

                                return navigate(page)
                            }
                        }
                    />
                    :
                    null
            }
        </div>
    );
}

export default RecommendationTagRow;