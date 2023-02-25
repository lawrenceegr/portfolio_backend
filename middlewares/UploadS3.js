const multer = require("multer");
const multerS3 = require("multer-s3");
const AWS = require('aws-sdk');

// configure the AWS SDK with your S3 credentials

 const  accessKeyId=process.env.AWS_ACCESS_KEY
 const secretAccessKey= process.env.AWS_SECRET_KEY
 const region= process.env.AWS_BUCKET_REGION

//   filter to accept images only
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type, only JPEG and PNG is allowed!"), false);
  }
};
// create an S3 instance
const s3 = new AWS.S3({
    accessKeyId,
    secretAccessKey,
    region,
    AWS_SDK_LOAD_CONFIG:1
});
const upload = multer({
    fileFilter,
    storage: multerS3({
      s3: s3,
      bucket: process.env.AWS_BUCKET_NAME,
      
      metadata: function(req, file, cb) {
        cb(null, {fieldName: file.fieldname});
      },
      key: function(req, file, cb) {
        cb(null, Date.now().toString() + file.originalname)
      }
    })
  });
  module.exports = upload;
