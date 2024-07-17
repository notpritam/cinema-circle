import mongoose from "mongoose";

const { Schema, model } = mongoose;

const showtimeSchema = new Schema(
  {
    movie: {
      type: Schema.Types.ObjectId,
      ref: "Movie",
      required: true,
    },
    theater: {
      type: Schema.Types.ObjectId,
      ref: "Theater",
      required: true,
    },
    screenNumber: {
      type: Number,
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
    },
    format: {
      type: String,
      enum: ["2D", "3D", "IMAX", "4DX"],
      required: true,
    },
    time: {
      type: Date,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    bookedSeats: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

const Showtime = model("Showtime", showtimeSchema);
export default Showtime;
