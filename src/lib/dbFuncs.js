import mongoose from "mongoose";
import {SECRET_MONGODB_URL} from "$env/static/private"

export function mongoConn() {
  mongoose.connect(SECRET_MONGODB_URL);
};

export function mongoDisconn() {
    mongoose.disconnect()
}

