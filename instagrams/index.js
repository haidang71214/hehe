import express from 'express';
import rootRouter from './src/routers/root.router.js';
import cors from 'cors'
import cookieParser from 'cookie-parser';

const app = express();
// chuyển mọi thứ sang json
app.use(express.json())
app.use(
   cors({
      origin: "http://localhost:3000",
      credentials: true, // Nếu bạn sử dụng cookie, phải có cấu hình này
      preflightContinue: true,
   })
);
//middware để getifomation
app.use(cookieParser());
// 
app.use(rootRouter);
app.get('/',(req,res)=>{
   res.send('hehehe')
});
app.listen(8080, () => {
   console.log("server on port 8080");
});
