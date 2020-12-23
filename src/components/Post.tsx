const Post = ({ title, content }) => {
  return (
    <div className="bg-white py-5 px-7 rounded-xl shadow-lg w-96 hover:bg-gray-100">
      <h4 className="text-black text-xl mb-3">{title}</h4>
      <p className="text-black text-base text-opacity-90 overflow-ellipsis break-words leading-6">
        {content}
      </p>
    </div>
  );
};

export default Post;
