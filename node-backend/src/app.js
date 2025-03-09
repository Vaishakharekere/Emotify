const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const userRoutes=require('./routes/userRoutes');
const musicRoutes=require('./routes/musicRoutes');

dotenv.config();

const app=express();
const port=process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const ConnectDB=require('./config/database');
ConnectDB();

app.use('/api/users',userRoutes);
app.use('/api/music',musicRoutes);

app.get('/',(req,res)=>{
    res.send('Server is running');
});

app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).send('Something went wrong');
}
);

app.listen(port,()=>{    
    console.log(`Server is running on port ${port}`);
});

module.exports=app;
