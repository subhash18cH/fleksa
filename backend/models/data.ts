
// User Type
interface UserType {
  id: number;
  name: string;
  email: string;
  password: string;
}

// Event Type
interface EventType {
  id: number;
  title: string;
  description: string;
  start_time: Date;
  max_capacity: number;
}

// Booking Type
export interface BookingType {
  user_id: number;
  event_id: number;
  booked_at: Date;
}

// Dummy Users
export const users: UserType[] = [
  {
    id: 1,
    name: 'Subhash',
    email: 'subhash@example.com',
    password: "subhash123"
  },
  {
    id: 2,
    name: 'Alice',
    email: 'alice@example.com',
    password: "alice123"
  },
  {
    id: 3,
    name: 'Adam',
    email: 'adam@example.com',
    password: "adam123"
  },
];

// Dummy events
export const events: EventType[] = [
  {
    id: 1,
    title: 'Tech Meetup',
    description: 'Local meetup',
    start_time: new Date(),
    max_capacity: 2
  },
  {
    id: 2,
    title: 'Hackathon',
    description: '24hr coding challenge',
    start_time: new Date(),
    max_capacity: 2
  },
  {
    id: 3,
    title: 'Project Expo',
    description: '1 day long project expo',
    start_time: new Date(),
    max_capacity: 5
  },
];

// Bookings
export const bookings: BookingType[] = [];

