const FeedCard = (props) => {
  const { feed, caption } = props;
  const captionContent = caption ? (
    <div className="caption">{caption}</div>
  ) : null;

  return (
    <div className="feed-box">
      <div className="image">
        <img src={feed.profileImageUrl} alt={feed.username}></img>
      </div>
      <div className="content">
        <div>{feed.username}</div>
        <div>{feed.title}</div>
        {captionContent}
        <div className="stats">
          <div>
            {feed.likes} likes | {feed.followers} followers
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeedCard;
