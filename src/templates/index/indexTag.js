import React from "react"
import { Layout, BackTop } from 'antd';
import FooterTemplate from "../footer";
import SearchInput from "../search/searchInput";
import IndexTagRow from "./indexTagRow";
import AdsImg from "../adImg";
import BookTagRow from "../book/bookTagRow";
import MovieTagRow from "../movie/movieTagRow";
import RecommendationTagRowIndex from "../recommendation/recommendationTagRowIndex";
const { Content } = Layout;


const IndexTag = ({ node }) => {

    let movieHotName = "最近更新 - 电影", bookHotName = "最近更新 - 图书", 
        recommendationHot = "推荐", recommendationCode = "编程";

    return (
        <Layout>
            <Content style={{ minHeight: '100vh', maxWidth: 960, left: 0, right: 0, width: '100%', margin: 'auto' }}>
                {
                    <SearchInput />
                }
                {
                    // 推荐 - hot
                    <RecommendationTagRowIndex
                        key={recommendationHot + "RecommendationTagRow"}
                        name={recommendationHot}
                        tagsData={node.recoHot.nodes}
                        // more = "/tag/movie-top"
                        more = "/recommendation"
                        style={{ marginTop: 10, backgroundColor: 'white' }}
                    />
                }
                {
                    <BookTagRow
                        key={bookHotName + "BookTagRow"}
                        name={bookHotName}
                        tagsData={node.allStrapiBooks.nodes}
                        // more = "/tag/movie-top"
                        more = "/book"
                        style={{ marginTop: 10, backgroundColor: 'white' }}
                    />
                }
                {
                    // 推荐 - code
                    <RecommendationTagRowIndex
                        key={recommendationCode + "RecommendationTagRow"}
                        name={recommendationCode}
                        tagsData={node.recoCode.nodes}
                        // more = "/tag/movie-top"
                        more = "/recommendation"
                        style={{ marginTop: 10, backgroundColor: 'white' }}
                    />
                }
                {
                    <MovieTagRow
                        key={movieHotName + "MovieTagRow"}
                        name={movieHotName}
                        tagsData={node.allStrapiMovies.nodes}
                        // more = "/tag/movie-top"
                        more = "/movie"
                        style={{ marginTop: 10, backgroundColor: 'white' }}
                    />
                }
                {
                    node.allStrapiTagParents.edges.map(element => {

                         // 按照 updated_at 进行降序排序
                         element.node.tags.sort(function (a, b) {
                            // return (new Date(b.updated_at) - new Date(a.updated_at))
                            return (a.rank - b.rank)
                        });


                        return (
                            <IndexTagRow
                                key={element.node.name + "ComputerLabelItem"}
                                name={element.node.name}
                                tagsData={element.node.tags}
                                style={{ marginTop: 10, backgroundColor: 'white' }}
                            />
                        )
                    })
                }
                {
                    <div style={{ margin: "10px 10px 0 10px" }}>
                        <AdsImg />
                    </div>
                }
            </Content>
            <FooterTemplate data={node.site.siteMetadata} />
            <BackTop visibilityHeight={50} />
        </Layout>
    );
}

export default IndexTag
