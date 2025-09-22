import multer from "multer";
import os from "os";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // cb(null, "./public/temp");
    // cb(null, "/tmp");
    cb(null, os.tmpdir()); //! Node handles the correct path for each OS
  },

  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },

  //   filename: function (req, file, cb) {
  //     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
  //     cb(null, file.fieldname + "-" + uniqueSuffix);
  //   },
});

export const upload = multer({ storage: storage });


// import multer from "multer";

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./public/temp");
//   },

//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },

//   //   filename: function (req, file, cb) {
//   //     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//   //     cb(null, file.fieldname + "-" + uniqueSuffix);
//   //   },
// });

// export const upload = multer({ storage: storage });
