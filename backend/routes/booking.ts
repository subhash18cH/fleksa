import express, { Router } from "express";
import { users, events, bookings, BookingType } from "../models/data"

const router: Router = express.Router();

// Request Type
interface BookingRequest {
  userId: number;
  eventId: number;
}

// Route to create new booking
router.post<{}, {}, BookingRequest>("/book", (req, res) => {
  const { userId, eventId } = req.body;

  // check if user exist
  const user = users.find(u => u.id === userId);
  if (!user) {
    res.status(404).json({ message: "User not found" });
    return;
  }
  
  // check if event exist
  const event = events.find(e => e.id === eventId);
  if (!event) {
    res.status(404).json({ message: "Event not found" });
    return;
  }

  // check if event is already booked by user
  const alreadyBooked = bookings.find(b => b.user_id === userId && b.event_id === eventId);
  if (alreadyBooked) {
    res.status(400).json({ message: "You have already booked this event" });
    return;
  }

  // checking event availability
  const eventBookings = bookings.filter(b => b.event_id === eventId).length;
  if (eventBookings >= event.max_capacity) {
    res.status(400).json({ message: "Event is fully booked" });
    return;
  }

  //booking the event
  const newBooking: BookingType = {
    user_id: userId,
    event_id: eventId,
    booked_at: new Date(),
  };
  bookings.push(newBooking);
  res.status(200).json({ message: "Booking successful" });
});

export { router };