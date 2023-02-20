import { Request, Response } from "express";
import UserImageModel from "./userImage.model";
import fs from "fs";
import { JwtPayload } from "jsonwebtoken";

export const getAllUserImages = async (req: Request, res: Response) => {
  const userImages = await UserImageModel.find();
  console.log('userImages: ', userImages);
  if (userImages) {
    const userImagesNoData = userImages.map(userImage => {
      return { id: userImage._id, owner: userImage.owner};
    })
    res.status(200).send(userImagesNoData);
  } else {
    res.status(500).send("Failed loading userImages")
  }
};

export const getUserImageById = async (req: Request, res: Response) => {
  const { imageId } = req.params;
  const userImage = await UserImageModel.findById(imageId);

  if (userImage) {
    res.status(200).contentType("image/png").send(userImage.img?.data);
  } else {
    res.status(404).send("No userimage with this id found")
  }
};

export const updateUserImage = async (req: Request, res: Response) => {};

export const uploadUserImage = async (req: Request, res: Response) => {
  const { file, user } = req;
  if (file && user) {
    const img = fs.readFileSync(file.path);
    const finalImg = {
      data: fs.readFileSync(file.path),
      contentType: file.mimetype,
    };
    UserImageModel.create(
      { owner: (user as JwtPayload).sub, img: finalImg },
      (err, result) => {
        if (err) {
          console.log("error: ", err);
          res.status(500).send("Image could not be saved");
        } else {
          res.status(200).send("Image successfully uploaded");
        }
      }
    );
  }
};

export const deleteUserImage = async (req: Request, res: Response) => {};
