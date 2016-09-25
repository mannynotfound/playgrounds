import express from 'express';

const router = new express.Router();

router.get('/getData', (req, res) => {
  res.send({'rofl': 'lol'});
});

export default router;
