import Post from './Post';

const PostDashboard = ({ posts }) => {
  return (
    <div className="grid grid-cols-3 gap-6 justify-items-center">
      {posts.map((post) => (
        <Post title={post.title} content={post.content} />
      ))}
    </div>
  );
};

export default PostDashboard;
