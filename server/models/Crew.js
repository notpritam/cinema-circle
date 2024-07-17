import mongoose from "mongoose";

const { Schema, model } = mongoose;

const crewSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    bio: String,
    dateOfBirth: Date,
    nationality: String,
    role: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Crew = model("Crew", crewSchema);
export default Crew;
