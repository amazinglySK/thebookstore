import mongoose from "mongoose";
import {SECRET_MONGODB_URL} from "$env/static/private"

export async function mongoConn() {
  await mongoose.connect(SECRET_MONGODB_URL);
};

export async function mongoDisconn() {
    await mongoose.disconnect()
}

