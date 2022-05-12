const path = require('path');
const router = require('express').Router();

// wildcard route directs to home
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// note page
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;