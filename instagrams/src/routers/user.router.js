import express from 'express';
import sequelize from '../models/connect.js';
import initModels from '../models/init-models.js';
import { getInforUser, userComment } from '../controllers/user.controller.js';
import { uploadCloudAvarta } from '../config/uploadCloudAvatar.js';
const userRouter = express.Router();
// chỗ này lấy imgid từ params, khi no click vô img
userRouter.post('/comment/:image_id',userComment);
userRouter.get('/detail-user/:user_id',getInforUser);
// update này lấy trong cái auth
// 
export default userRouter;