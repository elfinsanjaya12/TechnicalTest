import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: function (req: any, file: any, cb: any) {
    cb(null, 'public/pdf/');
  },
  filename: function (req: any, file: any, cb: any) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const fileFilter = function (_req: any, file: any, cb: any) {
  // Allowed ext
  const fileTypes = /pdf/;
  // Check ext
  const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimeType = fileTypes.test(file.mimetype);

  if (mimeType && extName) {
    return cb(null, true);
  }

  return cb({ message: 'Error: PDF Only !!!' });
};

const uploadPdfMiddleware = multer({
  storage,
  fileFilter,
});

export default uploadPdfMiddleware;
