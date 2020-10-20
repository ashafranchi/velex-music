import React from 'react';
import { graphql, Link } from 'gatsby';
import { Helmet } from 'react-helmet';

import Layout from 'components/Layout';

const MusicPage = ({data}) => {
    return (
        <Layout pageName="about">
            <Helmet>
                <title>Music</title>
            </Helmet>
        </Layout>
    )
}

export default MusicPage;

export const pageQuery = graphql`
    query {
        takeshape {
            getMusic {
              button {
                link
                url
              }
              myLinks {
                otherPlaces
                spotify
              }
              Music
            }
          }
    }
`;