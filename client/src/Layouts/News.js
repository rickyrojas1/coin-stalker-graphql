import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import NewsCard from "../components/News/NewsCard/NewsCard";
import Footer from "../components/Footer/Footer";
import "./News.css";

const CRYPTO_NEWS_QUERY = gql`
  query hi {
    cryptoNews {
      id
      guid
      published_on
      imageurl
      title
      url
      source
      body
      tags
      categories
      upvotes
      downvotes
      lang
      source_info {
        name
        img
      }
    }
  }
`;

class News extends Component {
  render() {
    return (
      <div>
        <Query query={CRYPTO_NEWS_QUERY}>
          {({ loading, error, data }) => {
            if (loading)
              return (
                <div id="preloader">
                  <div id="loader" />
                </div>
              );
            if (error) console.error("ERR: ", error);
            let articleList = data.cryptoNews;
            return (
              <div>
                <div className="outter-news-container">
                  <div className="news-header">
                    <h1>TODAY IN CRYPTO</h1>
                  </div>
                  <div className="news-container">
                    {articleList.map(v => {
                      if (v) {
                        return <NewsCard article={v} />;
                      } else {
                        return "";
                      }
                    })}
                  </div>
                </div>
                <Footer />
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default News;
