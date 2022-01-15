import React from "react"
import { navigate } from "gatsby"
import { Row, Pagination } from 'antd';
import { useMediaQuery } from 'react-responsive'
import MovieTagRowItem from "./movieTagRowItem";

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

// more 表示点击更多调整的链接，可取的值为：/movie、/tag/moive-hot 等
const MovieTagRow = ({ name, tagsData, more, allShow, pagination }) => {

    let paginationShow = false;
    if(pagination && pagination.numPages > 1)
        paginationShow = true;

    return (
        <div style={{ margin: "10px 10px 0 10px", backgroundColor: 'white', border: 'solid 1px #ddd', borderRadius: 10 }}>
            <div style={{ height: '40px', borderBottom: 'solid 1px #f0f0f0' }}>
                {/* <h4 style={{ lineHeight: '40px', color: '#108ee9', paddingLeft: 15, fontSize: '12px', fontWeight: 500, letterSpacing: 2 }}>{name}</h4> */}
                <div style={{ float: 'left', lineHeight: '40px', color: '#108ee9', paddingLeft: 15, fontSize: '12px', fontWeight: 500, letterSpacing: 2 }}>{name}</div>

                {
                    more ?
                        <a href={more} target="_blank" rel="noreferrer">
                            <div style={{ float: 'right', lineHeight: '40px', fontSize: 12, color: '#0089e1', marginRight: 15 }} >更多...</div>
                        </a>
                        :
                        <></>
                }

            </div>

            <div style={{ margin: '15px 15px 5px 15px' }}>
                <Row gutter={[8, 12]}>
                    <Mobile240 >
                        <MovieTagRowItem colNum={24} tagsData={tagsData} allShow={allShow} />
                    </Mobile240>

                    <Mobile350 >
                        <MovieTagRowItem colNum={12} tagsData={tagsData} allShow={allShow} />
                    </Mobile350>

                    <Mobile >
                        <MovieTagRowItem colNum={8} tagsData={tagsData} allShow={allShow} />
                    </Mobile>

                    <Default660 >
                        <MovieTagRowItem colNum={6} tagsData={tagsData} allShow={allShow} />
                    </Default660>

                    <Default900 >
                        <MovieTagRowItem colNum={4} tagsData={tagsData} allShow={allShow} />
                    </Default900>

                    <Default >
                        <MovieTagRowItem colNum={3} tagsData={tagsData} allShow={allShow} />
                    </Default>
                </Row>

                {
                    paginationShow ?
                        <Pagination defaultCurrent={1} current={pagination.currentPage} pageSize={pagination.pageSize} total={pagination.total}
                            showSizeChanger = {false}
                            style={{ textAlign: 'center', paddingTop:20 }}
                            onChange={
                                (e) => {
                                    let page = "/";
                                    if (pagination.pathname.charAt(pagination.pathname.length - 1) === "/") {
                                        pagination.pathname = pagination.pathname.slice(0, pagination.pathname.length - 1);
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
        </div>
    );
}

export default MovieTagRow;