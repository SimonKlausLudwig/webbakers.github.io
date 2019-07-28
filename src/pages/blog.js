import React from "react"

import Layout from "../elements/layout"
import Container from "../elements/container/container";
import Header from "../elements/header/header";
import {graphql} from "gatsby";
import BlogListComponent from "../components/bloglist/bloglist";
import {Helmet} from "react-helmet";


const StepsPage = ({
                       data: {
                           allMarkdownRemark: {edges},
                       },
                   }) => (
    <Layout>
        <Helmet>
            <title>Aktuelles bei Videobakers</title>
        </Helmet>
        <Header title={edges[0].node.frontmatter.title}
                subtitle={edges[0].node.frontmatter.subtitle}
                button={{href: edges[0].node.frontmatter.path, text: 'Jetzt lesen'}}>
            <Container padded>
                <BlogListComponent entries={edges}/>
            </Container>
        </Header>
    </Layout>
);

export default StepsPage


export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            subtitle
            img
            path
            title
            video
          }
        }
      }
    }
  }
`;
