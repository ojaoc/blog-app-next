import { AiOutlineAlert } from 'react-icons/ai';

const NoPosts = ({ handleOpenNewPost, handleCloseNewPost }) => {
  return (
    <div className="flex justify-center items-center h-screen flex-col text-black space-y-2">
      <AiOutlineAlert className="text-7xl text-red-600" />
      <h3 className="text-xl font-light">No posts available!</h3>
      <button
        className="border-2 border-gray-400 py-2 px-4 rounded-full hover:bg-gray-400 hover:text-white hover:shadow-xl transition-colors transition-shadows"
        onClick={handleOpenNewPost}
      >
        Create one
      </button>
    </div>
  );
};

export default NoPosts;
