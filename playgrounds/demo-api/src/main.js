import './styles/main.scss';
import request from 'superagent';
request
  .get(`${process.env.BASE_API_URL}/example`)
  .set('Accept', 'application/json')
  .end((err, resp) => {
    document.getElementById('container').innerHTML = JSON.stringify(err || resp.body, 0, 2);
  });
