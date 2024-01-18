import { v2 as cloudinary } from "cloudinary";
import { response } from "express";
import fs from "fs";
import { url } from "inspector";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (loacFilePath) => {
  try {
    if (!loacFilePath) return null;
    // upload file on cloudinary
    await cloudinary.uploader.upload(loacFilePath, {
      resource_type: "auto",
    });
    // file uploaded successfully
    console.log("File has been uploaded on clodinary", response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(loacFilePath); // remove localy saved temp file , bea=cause upload function got failed
    return null;
  }
};

export { uploadOnCloudinary };
