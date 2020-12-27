import { AiOutlineAlert } from 'react-icons/ai';
import Button from './lib/Button';

const NoPosts = ({ handleOpenNewPost, handleCloseNewPost }) => {
  return (
    <div className="flex justify-center items-center h-screen flex-col text-black space-y-2">
      <AiOutlineAlert className="text-7xl text-red-600" />
      <h3 className="text-xl font-light">No posts available!</h3>
      <Button onClick={handleOpenNewPost}>Create one</Button>
    </div>
  );
};

export default NoPosts;
