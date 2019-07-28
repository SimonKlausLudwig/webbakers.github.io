import React from "react"
import BlockStrol from "../../elements/blogstrol";
import Seperator from "../../elements/seperator/seperator";


const BlogListComponent = ({entries}) => {
    return <div>
        {entries
            .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
            .map(edge => [<BlockStrol
                path={edge.node.frontmatter.path}
                subtitle={edge.node.frontmatter.subtitle}
                img={edge.node.frontmatter.img}
                title={edge.node.frontmatter.title}>

                <img alt="blog thumbnail" src={"https://www.wyzowl.com/wp-content/uploads/2019/05/How-To-Embed-a-Video-in-Powerpoint-From-Drive-YouTube.png"}/>

            </BlockStrol>,

                <Seperator/>])}
    </div>
};

export default BlogListComponent;
