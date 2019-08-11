const multer  = require('multer');
const upload = multer();

const login = (username, code) => {
    if (username === 'bob' && code === 'marley') {
        return {
            traffic: 12,
            minutes: 13
        }
    } else {
        return {}
    }
};

const router = app => {
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.get('/', (req, res) => {
        res.send('It works');
    });

    app.post('/check', upload.none(), (req, res) => {
        const { username, code } = req.body;
        res.send(login(username, code));
    });
};

module.exports = router;
