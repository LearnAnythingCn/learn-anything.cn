import React from "react"
import { Card, Avatar } from 'antd';
// import LinesEllipsis from 'react-lines-ellipsis'
import { GatsbyImage } from "gatsby-plugin-image"

const { Meta } = Card;
const TagPageItemMobile = ({ itemTitle, url, desc, imgUrl }) => {

    return (
        <div style={{ width: '100%' }} key={url}>
            <Card
                style={{ cursor: 'pointer', textAlign: 'left', borderRadius: 10 }}
                onClick={() => { window.open(url, "_blank"); }}>

                <Meta
                    avatar={
                        imgUrl.type === "GatsbyImage" ?
                            (
                                // <div style={{ padding: '5px 0 0 4px' }}>
                                <GatsbyImage image={imgUrl.url} alt={itemTitle} imgStyle={{ width: 15, height: 15, border: 'solid 1px #ddd', borderRadius: 15 }} />
                                // </div>
                            ) :
                            (
                                // <div style={{ padding: '2px 0 0 4px' }}>
                                <Avatar src={imgUrl.url} style={{ width: 15, height: 15, border: 'solid 1px #ddd', borderRadius: 15 }} />
                                // </div>
                            )
                    }
                    title={
                        <div style={{
                            fontWeight: 500,
                            letterSpacing: 1,
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            textAlign: 'justify',
                            fontSize: 12
                        }}>
                            {itemTitle}
                        </div>
                    }

                    description={
                        <div style={{
                            height: 20,
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            textAlign: 'justify'
                        }}>
                            {desc}
                        </div>
                    }

                // title={itemTitle}
                // description={
                //     <LinesEllipsis
                //         text={desc}
                //         maxLine='2'
                //         ellipsis='...'
                //         trimRight
                //         basedOn='letters'
                //     />
                // }
                // style={{ height: 67, overflow: 'hidden', textOverflow: 'ellipsis', textAlign: 'justify' }}
                />

            </Card>
        </div>
    )

}

export default TagPageItemMobile