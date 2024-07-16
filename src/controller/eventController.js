const Event = require('../model/event.js');

exports.getEvents = async (req, res) => {
    try{
        const events = await Event.find();
        console.log("Events received successfully:",events)
        res.json(events);
    }
    catch{
        res.status(500).json({ error: 'Server error'});
    }
}

exports.getEventById = async (req, res) => {
    try{
        const events = await Event.findById( req.params.id);
        if(!events){
            return res.status(404).json({ error: 'Event Not found'});
        }
        console.log("Events received successfully by Id:",events)
        res.json(events);
    }
    catch{
        res.status(500).json({ error: 'Server error'});
    }
}