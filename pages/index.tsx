import React, { useState } from 'react';
import PostDashboard from '../src/components/PostDashboard';
import db from '../db/db';
import NoPosts from '../src/components/NoPosts';
import CreatePost from '../src/components/CreatePost';

export async function getServerSideProps(context) {
  return {
    props: {
      posts: db.get('posts').value(),
    },
  };
}

const Home = ({ posts }) => {
  const [openNewPost, setOpenNewPost] = useState(false);

  const handleOpenNewPost = () => {
    setOpenNewPost(true);
  };

  const handleCloseNewPost = () => {
    setOpenNewPost(false);
  };

  return (
    <div className="container mx-auto md:px-4">
      {posts.length > 0 ? (
        <PostDashboard posts={posts} />
      ) : (
        <NoPosts
          handleOpenNewPost={handleOpenNewPost}
          handleCloseNewPost={handleCloseNewPost}
        />
      )}
      {openNewPost && <CreatePost />}
    </div>
  );
};

export default Home;
