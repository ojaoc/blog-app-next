import React from 'react';
import Button from './lib/Button';
import Input from './lib/Input';
import { ImCross } from 'react-icons/im';
import { useForm } from 'react-hook-form';

const CreatePost = ({ handleCloseNewPost }) => {
  const { register, handleSubmit, errors } = useForm<FormData>();

  return (
    <div className="top-0 inset-x-0 fixed">
      <div className="w-sreen h-screen bg-black bg-opacity-80">
        <div className="flex justify-center w-screen">
          <div className="bg-white bg-opacity-100 sm:rounded-xl h-screen sm:h-auto w-screen md:w-8/12 xl:w-6/12 max-w-xl p-8 sm:transform sm:translate-y-10">
            <div className="flex justify-end mb-8">
              <button onClick={handleCloseNewPost}>
                <ImCross className="text-xs text-gray-800" />
              </button>
            </div>
            <div className="flex flex-col space-y-6 items-center px-6">
              <Input
                id="title"
                name="title"
                ref={register({ required: true })}
                label="Title"
              />
              <Input
                id="content"
                name="content"
                ref={register({ required: true })}
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
