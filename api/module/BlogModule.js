import createSchema from "./BlogSchema.js";

export const postBlog = (obj) => {
  return createSchema(obj).save();
};

export const getBlog = () => {
  return createSchema.find();
};
