import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("as recived");
});

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
    console.log(`Env ${process.env.NODE_ENV}`);
    
});