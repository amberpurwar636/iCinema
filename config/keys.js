export default {
    mongoURI: process.env.MONGODB_URI || process.env.MONGO_URL,
    secretOrKey: process.env.SECRET_OR_KEY || "defaultSecretKey",
  };
  