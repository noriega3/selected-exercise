const express = require('express');
const bodyParser = require('body-parser');

const app = module.exports = express();

const router = express.Router(); // get an instance of the express Router

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/v1', router); // all of our routes will be prefixed with /api

// for this task, we will use subject/action/predicate (to follow a hexastore-like api)
// TODO: this is very basic, no idea what the json will entail.

router.get('/', (req, res) => {
  res.send('INDEX');
});
// school sending the invite
router.post('/school/invite/instructor', (req, res) => {
  res.send('OK');
});

// list of school's messages they have sent
router.get('/school/list/messages', (req, res) => {
  res.send('OK');
});

// school sending a message
router.post('/school/message/instructor', (req, res) => {
  res.send('OK');
});


// uses /get/invites and /get/messages together
router.get('/instructor/list/notifications', (req, res) => {
  res.send('OK');
});

router.get('/instructor/list/invites', (req, res) => {
  res.send('OK');
});

router.get('/instructor/list/messages', (req, res) => {
  res.send('OK');
});

router.get('/instructor/read/message', (req, res) => {
  res.send('OK');
});

router.get('/instructor/list/schools');

// TODO: could combine accept/reject with UPDATE
router.post('/instructor/accept/school', (req, res) => {
  res.send('OK');
});

router.post('/instructor/reject/school', (req, res) => {
  res.send('OK');
});

if (!module.parent) {
  app.listen(2000);
  console.log('Express started on port 2000');
  console.log('http://127.0.0.1:2000/v1/');
}
