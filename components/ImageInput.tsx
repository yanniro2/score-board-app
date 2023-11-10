"use client";
import { useState, ChangeEvent } from "react";
import Image from "next/image";

const ImageInput = () => {
  const [image, setImage] = useState<string>("");

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      if (typeof reader.result === "string") {
        setImage(reader.result);
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <label className="block mb-2" htmlFor="imageInput">
        Upload an Team A image:
      </label>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="p-3 border rounded"
        id="imageInput"
      />
      {image && (
        <div style={{ width: "300px", height: "300px" }}>
          <Image
            src={image}
            alt="Selected Image"
            width={100}
            height={100}
            objectFit="contain"
          />
        </div>
      )}
    </div>
  );
};

export default ImageInput;
