import mongoose, { Schema } from "mongoose";

const scoreSchema = new Schema(
  {
    try_one: Number,
    try_two: Number,
    conversion_one: Number,
    conversion_two: Number,
    penalty_one: Number,
    penalty_two: Number,
    dropGoal_one: Number,
    dropGoal_two: Number,
    duration: Number,
    addional_time: Number,
  },
  {
    timestamps: true,
  }
);

const Score = mongoose.models.Score || mongoose.model("Score", scoreSchema);

export default Score;
