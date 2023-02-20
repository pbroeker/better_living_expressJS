import { Schema, model } from "mongoose";

const UserImageSchema = new Schema({
  img: { data: Buffer, contentType: String  },
  room: {
    type: Schema.Types.ObjectId,
    ref: "room",
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "owner",
    required: true,
  },
  userComments: {
    type: Schema.Types.ObjectId,
    ref: "userComments",
  },
  userRooms: {
    type: Schema.Types.ObjectId,
    ref: "userRooms",
  },
  userTags: {
    type: Schema.Types.ObjectId,
    ref: "userTags",
  },
});

export = model("userImage", UserImageSchema);
