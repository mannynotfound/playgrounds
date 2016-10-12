import {Router} from 'express';
import request from 'request';

const router = new Router();
const REPO_ROUTE = 'https://api.github.com/repos/mannynotfound/playgrounds';

router.get('/example', (req, res) => {
    const reqOptions = {
        headers: {
            'User-Agent': 'example-app',
        },
    };

    request.get(REPO_ROUTE, reqOptions, (err, resp) => {
        if (err) {
            res.status(500).send(err);
        } else if (resp.statusCode === 200) {
            res.json(JSON.parse(resp.body));
        } else {
            res.send(resp)
        }
    });
});

export default router;
