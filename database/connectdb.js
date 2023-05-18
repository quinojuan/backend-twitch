import mongoose from "mongoose";

try {
  await mongoose.connect(process.env.URI_MONGO);
  console.log("Connect DB OK 👌");
} catch (error) {
  console.error("Error en la conexión a mongodb: " + error);
}
