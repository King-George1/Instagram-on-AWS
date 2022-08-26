import AWS = require("aws-sdk");
import { config } from "./config/config";

const c = config.dev;

//Configure AWS
if (c.aws_profile !== "DEPLOYED") {
  const credentials = new AWS.SharedIniFileCredentials({
    profile: c.aws_profile,
  });
  AWS.config.credentials = credentials;
}
