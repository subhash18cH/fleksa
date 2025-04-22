"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookings = exports.events = exports.users = void 0;
// Dummy Users
exports.users = [
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
exports.events = [
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
exports.bookings = [];
