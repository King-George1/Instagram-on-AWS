require("dotenv").config();
export const config = {
  dev: {
    aws_region: process.env.AWS_REGION,
    aws_profile: process.env.AWS_PROFILE,
  },
  jwt: {
    secret: "helloworld",
  },
  prod: {
    username: "",
    password: "",
    database: "udagram_prod",
    host: "",
  },
};
