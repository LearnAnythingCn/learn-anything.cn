import React from "react"
import { Layout, BackTop } from 'antd';
import FooterTemplate from "../footer";
import SearchInput from "../search/searchInput";
import AdsImg from "../adImg";
import RecommendationTagRow from "./recommendationTagRow";
const { Content } = Layout;


const RecommendationTag = ({ node, allShow, pagination }) => {

    let more;
    if (node.allStrapiRecommendations.edges.length > 1) {
        more = "/recommendation/";
    }
    return (
        <Layout>
            <Content style={{ minHeight: '100vh', maxWidth: 960, left: 0, right: 0, width: '100%', margin: 'auto' }}>
                {
                    <SearchInput />
                }
                {
                    // articles 推荐
                    node.allStrapiRecommendations.edges.map(element => {

                        // 按照 updated_at 进行降序排序
                        element.node.articles.sort(function (a, b) {
                            return (new Date(b.updated_at) - new Date(a.updated_at))
                        });

                        return (
                            <RecommendationTagRow
                                key={element.node.name + "RecommendationTagRow"}
                                name={element.node.name}
                                tagsData={element.node.articles}
                                more={more ? (more + element.node.slug) : undefined}
                                allShow={allShow}
                                fixPath={"/"}
                                pagination={pagination}
                                style={{ marginTop: 10, backgroundColor: 'white' }}
                            />
                        )
                    })
                }
                {
                    // book 推荐
                }
                {
                    // movie 推荐
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

export default RecommendationTag
