import React from "react";
import "./SocialInfo.css";
import { Timeline } from "react-twitter-widgets";
const SocialInfo = props => {
  let { Facebook, Twitter, CodeRepository, Reddit } = props.props.socialSnap;
  let { twitter, twitterLink } = props.overrideData;
  Twitter.name = Twitter.name ? Twitter.name : "";
  Twitter.link = Twitter.link ? Twitter.link : "";

  let imgPath =
    "https://www.cryptocompare.com" + props.props.coinSnapFull.ImageUrl;
  let websiteUrl = props.props.coinSnapFull.WebsiteUrl;

  console.log("this :", SocialInfo);
  console.log("imgPath :", imgPath);
  console.log("this.props SOCIAL TAB :", props);
  console.log("Twitter :", Twitter);
  return (
    <div className="social-container">
      <div className="social-grid">
        <div className="title sm">
          <img src={imgPath} alt="logo" className="img-social" />
          <h1>Social Media</h1>
          <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
            Website
          </a>
          <div className="icons">
            {CodeRepository[0] ? (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={CodeRepository[0].url}
              >
                <img
                  src="../../assets/img/git.png"
                  alt="icon"
                  className="icon"
                />
              </a>
            ) : (
              ""
            )}
            {
              <a target="_blank" rel="noopener noreferrer" href={Facebook.link}>
                <img
                  src={require("../../../../assets/img/fb.png")}
                  alt="icon"
                  className="icon"
                />
              </a>
            }
            <a target="_blank" rel="noopener noreferrer" href={Reddit.link}>
              <img
                src={require("../../../../assets/img/reddit.png")}
                alt="icon"
                className="icon"
              />
            </a>
            {
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={twitterLink ? twitterLink : Twitter.link}
              >
                <img
                  src={require("../../../../assets/img/twitter.png")}
                  alt="icon"
                  className="icon"
                />
              </a>
            }
          </div>
        </div>
      </div>
      <div className="twitterbox">
        <Timeline
          className="twit"
          dataSource={{
            sourceType: "profile",
            screenName: twitter ? twitter : Twitter.name
          }}
          options={{
            username: twitter ? twitter : Twitter.name,
            height: 550
          }}
          onLoad={() => console.log("Timeline is loaded!")}
        />
      </div>
    </div>
  );
};

export default SocialInfo;
