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
        title: 'React Workshop',
        description: 'Learn the fundamentals of React and build your first application',
        start_time: new Date(),
        max_capacity: 2
    },
    {
        id: 2,
        title: 'Node.js',
        description: 'Dive into server-side JavaScript with Node.js and Express',
        start_time: new Date(),
        max_capacity: 2
    },
    {
        id: 3,
        title: 'AI in Web Development',
        description: 'Explore how to integrate AI capabilities into modern web applications',
        start_time: new Date(),
        max_capacity: 5
    },
];
// Bookings
exports.bookings = [];
