import {Router} from 'express';

const router = new Router();

router.get('/_health', (req, res) => {
    res.status(200).send('Hello from {{ name }}!');
});

export default router;
