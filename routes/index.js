var express = require('express');
var router = express.Router();
var path = require('path');
 
/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
});

router.get('/data', function(req,res){
	res.json([{"id": 1, "time": "9:00 AM", "timeslot": "00"},
        {"id": 2, "time": "", "timeslot": "30"},
        {"id": 3, "time": "10:00 AM", "timeslot": "00"},
        {"id": 4, "time": "", "timeslot": "30"},
        {"id": 5, "time": "11:00 AM", "timeslot": "00"},
        {"id": 6, "time": "", "timeslot": "30"},
        {"id": 7, "time": "12:00 PM", "timeslot": "00"},
        {"id": 8, "time": "", "timeslot": "30"},
        {"id": 9, "time": "1:00 PM", "timeslot": "00"},
        {"id": 10, "time": "", "timeslot": "30"},
		{"id": 11, "time": "2:00 PM", "timeslot": "00"},
		{"id": 12, "time": "", "timeslot": "30"},
		{"id": 13, "time": "3:00 PM", "timeslot": "00"},
		{"id": 14, "time": "", "timeslot": "30"},
		{"id": 15, "time": "4:00 PM", "timeslot": "00"},
		{"id": 16, "time": "", "timeslot": "30"},
		{"id": 17, "time": "5:00", "timeslot": "00"}]);
});

module.exports = router;