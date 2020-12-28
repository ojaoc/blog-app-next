import React from 'react';
import Button from './lib/Button';
import Input from './lib/Input';
import { useForm } from './lib/hooks';
import { ImCross } from 'react-icons/im';

const CreatePost = ({ handleCloseNewPost }) => {
  const [{ title, content }, handleChangeForm] = useForm({ title: '' });

  return (
    <div className="top-0 inset-x-0 fixed">
      <div className="w-sreen h-screen bg-black bg-opacity-80">
        <div className="flex justify-center w-screen">
          <div className="bg-white bg-opacity-100 md:rounded-xl w-screen md:w-1/3 p-8 md:transform md:translate-y-10">
            <div className="flex justify-end mb-8">
              <button onClick={handleCloseNewPost}>
                <ImCross className="text-xs text-gray-900" />
              </button>
            </div>
            <div className="flex flex-col space-y-6 items-center px-6">
              <Input
                id="title"
                name="title"
                onChange={handleChangeForm}
                value={title}
                label="Title"
              />
              <Input
                id="content"
                name="content"
                onChange={handleChangeForm}
                value={content}
                rows={6}
                label="Content"
              />
              <div className="self-end">
                <Button onClick={console.log}>Submit</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
