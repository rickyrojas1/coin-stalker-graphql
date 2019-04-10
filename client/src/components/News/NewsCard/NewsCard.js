import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import "./NewsCard.css";

const NewsCard = props => {
  const styles = {
    card: {
      maxWidth: 345
    },
    media: {
      height: 0,
      paddingTop: "56.25%" // p16:9
    }
  };

  let article = props.article;
  let date = new Date(article.published_on * 1000);
  var el = document.createElement("p");
  el.innerHTML = article.body;
  let bio = el.innerText;
  let shortBio = bio.substring(0, 350) + "...";

  return (
    <div className="news-card">
      <Card style={styles.card} className="crd">
        <CardMedia
          style={styles.media}
          image={article.imageurl}
          title={article.tags}
        />

        <CardContent>
          <Typography
            gutterBottom
            variant="headline"
            component="h1"
            className="article-title"
            style={{ fontSize: 20, fontWeight: "bold" }}
          >
            {article.title}
          </Typography>

          <Typography component="h5" style={{ fontSize: 12, marginBottom: 20 }}>
            {date.toDateString()}
          </Typography>

          <Typography component="h5" style={{ fontSize: 12 }}>
            {shortBio}
          </Typography>
        </CardContent>
        <hr className="divider" />
        <CardActions className="card-bottom-container">
          <div className="button-container">
            <Button size="large" color="primary">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={article.url}
                className="read-article"
              >
                Read Article
              </a>
            </Button>
          </div>
          <div className="card-bottom-source-container">
            <Typography
              component="h4"
              style={{
                fontSize: 14,
                fontWeight: "bold",
                marginTop: 10,
                marginRight: 10
              }}
            >
              {article.source_info.name}
            </Typography>
            <Avatar src={article.source_info.img} style={{}} />
          </div>
        </CardActions>
      </Card>
    </div>
  );
};

export default NewsCard;
