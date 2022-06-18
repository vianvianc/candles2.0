const express = require('express')

const app=express();

app.get('/api/candles', (req, res => {
    const candles = [
        {id: 1, commodity: 'crude', month: 'Jan'},
        {id: 2, commodity: 'minigold', month: 'Jan'},
        {id: 3, commodity: 'copper', month: 'Jan'},
        {id: 4, commodity: 'CAD', month: 'Jan'},
        {id: 5, commodity: 'natgas', month: 'Jan'},

    ]
}));

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));