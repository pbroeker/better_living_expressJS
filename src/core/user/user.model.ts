import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import * as dotenv from "dotenv";
dotenv.config();
const saltSize = parseInt(process.env.BCRYPT_SALT as string, 10);

const UserSchema = new Schema({
  id: String,
  first_name: String,
  last_name: String,
  birthdate: String,
  email: { type: String, required: true },
  password: { type: String, required: true },
  push_notif: { type: Boolean, default: false },
});

UserSchema.pre("save", async function (next) {
  const user = this;
  const salt = await bcrypt.genSalt(saltSize)
  user.password = await bcrypt.hash(user.password, salt);
  next();
});

const UserModel = model("CoreUser", UserSchema);
export = UserModel;
