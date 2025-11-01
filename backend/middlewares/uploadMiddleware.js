const multer = require("multer");
const path = require("path");
const fs = require("fs");

//Create upload directory if it doesn't exists
const uploadDir = "uploads";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

//Set up storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

//Check file type
function checkFile(file, cb) {
  const fileTypes = /jpeg|jpg|png|gif/;
  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimeType = fileTypes.test(file.mimeType);

  if (extname && mimeType) {
    return cb(null, true);
  } else {
    cb("Error: Images Only !");
  }
}

//Initialize upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 2 * 1024 * 1024 },
  fileFilter: function (req, file, cb) {
    checkFile(file, cb);
  },
}).single("coverImage"); //Field name for the uploaded file

module.exports = upload;
