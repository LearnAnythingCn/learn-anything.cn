import React from "react"
import logo from "../../images/learn-anything-icon.png"
import TagPageItemComputer from "./tagPageItemComputer";
import TagPageItemMobile from "./tagPageItemMobile";

const TagPageItem = ({ data, mobile }) => {

    return data.map(element => {
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

        let url = "/" + element.slug;
        if (element.url && element.url.indexOf("https://learn-anything.cn") === -1) {
            url = element.url;
        }

        return (
            mobile ?
                <TagPageItemMobile
                    itemTitle={element.title}
                    url={url}
                    desc={element.desc ? element.desc : element.description}
                    imgUrl={imgUrl}
                    key={url}
                />
                :
                <TagPageItemComputer
                    itemTitle={element.title}
                    url={url}
                    desc={element.desc ? element.desc : element.description}
                    imgUrl={imgUrl}
                    key={url}
                />
        )
    })
}

export default TagPageItem
