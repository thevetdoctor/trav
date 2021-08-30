const express = require('express');
const app = express();
const port = process.env.PORT || 4000;


app.get('/', (req, res) => {
    console.log('Welcome to trav4college!');
    
    res.status(200).json({
        message: 'Welcome to trav4college!'
    });
});

app.listen(port, () => console.log(`Server running @ port: ${port}`));