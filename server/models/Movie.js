import mongoose from "mongoose";

const { Schema, model } = mongoose;

const movieSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    genres: [
      {
        type: String,
        required: true,
      },
    ],
    duration: {
      type: Number,
      required: true,
    },
    description: String,
    languages: [
      {
        type: String,
        required: true,
      },
    ],
    formats: [
      {
        type: String,
        enum: ["2D", "3D", "IMAX", "4DX"],
        required: true,
      },
    ],
    poster: {
      type: String,
      required: true,
    },
    cover: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    releaseDate: {
      type: Date,
      required: true,
    },
    cast: [
      {
        type: Schema.Types.ObjectId,
        ref: "Cast",
      },
    ],
    crew: [
      {
        type: Schema.Types.ObjectId,
        ref: "Crew",
      },
    ],
  },
  { timestamps: true }
);

const Movie = model("Movie", movieSchema);
export default Movie;
