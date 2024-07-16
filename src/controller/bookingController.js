const Booking = require('../model/booking.js');
const Event = require('../model/event');

exports.bookingTickets = async (req, res) => {
    const { eventId, tickets } = req?.body
    try{
        const events = await Event.findById(eventId);
        if(!events){
            return res.status(404).json({error : 'Event not found'});
        }

        if(events.availableTickets < tickets)
            return res.status(400).json({ error: 'Not enough tickets available'})

        let booking = new Booking({
            user: req.user.id,
            event: eventId,
            tickets
        })

        await booking.save();

        events.availableTickets -= tickets;
        await event.save();
        res.json(booking);
    }
    catch{
        res.status(500).json({ error: 'Server error'});
    }
}
