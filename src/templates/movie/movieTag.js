import React from "react"
import { Layout, BackTop } from 'antd';
import FooterTemplate from "../footer";
import SearchInput from "../search/searchInput";
import AdsImg from "../adImg";
import MovieTagRow from "./movieTagRow";
const { Content } = Layout;


const MovieTag = ({ node, allShow }) => {

    let more;
    if (node.allStrapiMovieTags.edges.length > 1) {
        more = "/tag/";
    }
    return (
        <Layout>
            <Content style={{ minHeight: '100vh', maxWidth: 960, left: 0, right: 0, width: '100%', margin: 'auto' }}>
                {
                    <SearchInput />
                }
                {
                    node.allStrapiMovieTags.edges.map(element => {
                        return (
                            <MovieTagRow
                                key={element.node.slug + "MovieTagRow"}
                                name={element.node.name}
                                tagsData={element.node.movies}
                                more={more ? (more + element.node.slug) : undefined}
                                allShow={allShow}
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

export default MovieTag
