import { Schema, model } from "mongoose";

const LivingAreaSchema = new Schema({
  title: {
    type: String,
    required: true,
    default: "",
  },
  
  
});

export = model("LivingArea", LivingAreaSchema);