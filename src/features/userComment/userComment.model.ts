import { Schema, model } from "mongoose";

const UserCommentSchema = new Schema({});

export = model("comment", UserCommentSchema);
