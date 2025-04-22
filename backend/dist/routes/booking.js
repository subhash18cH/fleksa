"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const data_1 = require("../models/data");
const router = express_1.default.Router();
exports.router = router;
// Route to create new booking
router.post("/book", (req, res) => {
    const { userId, eventId } = req.body;
    // check if user exist
    const user = data_1.users.find(u => u.id === userId);
    if (!user) {
        res.status(404).json({ message: "User not found" });
        return;
    }
    // check if event exist
    const event = data_1.events.find(e => e.id === eventId);
    if (!event) {
        res.status(404).json({ message: "Event not found" });
        return;
    }
    // check if event is already booked by user
    const alreadyBooked = data_1.bookings.find(b => b.user_id === userId && b.event_id === eventId);
    if (alreadyBooked) {
        res.status(400).json({ message: "You have already booked this event" });
        return;
    }
    // checking event availability
    const eventBookings = data_1.bookings.filter(b => b.event_id === eventId).length;
    if (eventBookings >= event.max_capacity) {
        res.status(400).json({ message: "Event is fully booked" });
        return;
    }
    //booking the event
    const newBooking = {
        user_id: userId,
        event_id: eventId,
        booked_at: new Date(),
    };
    data_1.bookings.push(newBooking);
    res.status(200).json({ message: "Booking successful" });
});
