import React, { useState } from "react";

const CreatePostCard = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 space-y-4">
      {/* Image Input */}
      <div>
        <label
          htmlFor="imageInput"
          className="block text-sm font-medium text-gray-700"
        >
          Image to Post:
        </label>
        <input
          type="file"
          id="imageInput"
          accept="image/*"
          className="mt-1 p-2 border rounded-md w-full h-24"
          onChange={handleImageChange}
          multiple
        />
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Selected"
            className="mt-2 rounded-md max-w-[100px] h-auto"
          />
        )}
      </div>

      {/* Text Area */}
      <div>
        <label
          htmlFor="textarea"
          className="block text-sm font-medium text-gray-700"
        >
          Caption:
        </label>
        <textarea
          id="textarea"
          rows="4"
          cols="50"
          className="mt-1 p-2 border rounded-md w-full"
        ></textarea>
      </div>

      <div>
        <label
          htmlFor="dateInput"
          className="block text-sm font-medium text-gray-700"
        >
          Schedule Post on:
        </label>
        <input
          type="date"
          id="dateInput"
          className="mt-1 p-2 border rounded-md w-full"
        />
      </div>

      {/* Post On and Checkboxes in column */}
      <div className="flex flex-col">
        <label className="block text-sm font-medium text-gray-700">
          Post On
        </label>
        <div className="ml-2 space-y-2 flex flex-wrap">
          <div className="flex items-center m-1 p-1">
            <input
              type="checkbox"
              id="instagram"
              name="instagram"
              className="mr-2"
            />
            <label htmlFor="instagram">Instagram</label>
          </div>
          <div className="flex items-center m-1 p-1">
            <input
              type="checkbox"
              id="facebook"
              name="facebook"
              className="mr-2"
            />
            <label htmlFor="facebook">Facebook</label>
          </div>
          <div className="flex items-center m-1 p-1">
            <input
              type="checkbox"
              id="LinkedIn"
              name="LinkedIn"
              className="mr-2"
            />
            <label htmlFor="LinkedIn">LinkedIn</label>
          </div>
          <div className="flex items-center m-1 p-1">
            <input
              type="checkbox"
              id="Threads"
              name="Threads"
              className="mr-2"
            />
            <label htmlFor="Threads">Threads</label>
          </div>
          <div className="flex items-center m-1 p-1">
            <input
              type="checkbox"
              id="tweeter"
              name="tweeter"
              className="mr-2"
            />
            <label htmlFor="tweeter">X (Tweeter)</label>
          </div>
          {/* Add more checkboxes as needed */}
        </div>
      </div>

      {/* Post Button */}
      <button className="bg-blue-500 text-white p-3 rounded-md w-1/2 items-center">
        Post
      </button>
    </div>
  );
};

export default CreatePostCard;
