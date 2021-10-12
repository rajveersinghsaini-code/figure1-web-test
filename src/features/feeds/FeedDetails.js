import { useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import FeedCard from "./FeedCard";
const FeedDetails = ({ match }) => {
  const { username } = match.params;
  const feedDetails = useSelector((state) => {
    if (state.feeds.feeds.feedItems)
      return state.feeds.feeds.feedItems.find((f) => f.username === username);
  });
  if (!feedDetails) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <FeedCard feed={feedDetails} caption={feedDetails.caption} />
      <div>
        <Link to="/">Back to list</Link>
      </div>
    </div>
  );
};

export default FeedDetails;
