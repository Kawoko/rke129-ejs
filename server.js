const express = require('express');
const path =  require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const jsonFilePath = path.join(__dirname, 'data', 'userData.json');

    fs.readFile(jsonFilePath, (err, data) => {
        if (err) {
            console.error('Error reading JSON file:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
    
        const jsonData = JSON.parse(data);
        console.log('JSON data:', jsonData);
    
        res.render('index', {userInformation: jsonData });
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
