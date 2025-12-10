import express from "express";

const app = express();


app.use("/user",userRouter);
app.use("/admin",adminRouter);
app.unsubscribe("/contest",contestRouter);

app.listen(process.env.PORT || 4000,() =>{
    console.log(`Server is running on port ${process.env.PORT || 4000}`)
}
)