import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { retrieveFeeds } from "./feedSlice";
import FeedCard from "./FeedCard";

const Feed = () => {
  const dispatch = useDispatch();
  const { feeds, loading } = useSelector((state) => state.feeds);

  useEffect(() => {
    dispatch(retrieveFeeds());
  }, [dispatch]);

  const isEmptyObject = (obj) => {
    return JSON.stringify(obj) === "{}";
  };
  if (loading || feeds === null || isEmptyObject(feeds))
    return <p>Loading...</p>;

  const renderedFeeds = feeds.feedItems.map((item, index) => {
    return (
      <Link to={`/details/${item.username}`} className="box-link" key={index}>
        <FeedCard feed={item} />
      </Link>
    );
  });

  return <div className="feed-container">{renderedFeeds}</div>;
};
export default Feed;
