import React from 'react';
import Button from './lib/Button';
import Input from './lib/Input';
import { useForm } from './lib/hooks';

const CreatePost = () => {
  const [{ title, content }, handleChangeForm] = useForm({ title: '' });

  return (
    <div className="top-0 inset-x-0 fixed">
      <div className="w-sreen h-screen bg-black opacity-70">
        <div className="flex justify-center w-screen">
          <div className="bg-white md:rounded-xl w-screen md:w-2/3 p-10">
            <div className="flex">
              <Input
                id="title"
                name="title"
                onChange={handleChangeForm}
                value={title}
                label="Title"
              />
              <Input
                id="title"
                name="content"
                onChange={handleChangeForm}
                value={content}
                label="Content"
              />
              <Button onClick={console.log}>Submit</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
