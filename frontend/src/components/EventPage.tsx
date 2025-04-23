import { useState, useEffect } from 'react';
import { Calendar, Users } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import moment from 'moment';


//Event Type
interface Event {
  id: number;
  title: string;
  description: string;
  start_time: string;
  max_capacity: number;
  booked: number;
}

//Dummy Event data
const mockEvents: Event[] = [
  {
    id: 1,
    title: "React Workshop",
    description: "Learn the fundamentals of React and build your first application",
    start_time: "2025-04-25T10:00:00",
    max_capacity: 50,
    booked: 42
  },
  {
    id: 2,
    title: "Node.js Bootcamp",
    description: "Dive into server-side JavaScript with Node.js and Express",
    start_time: "2025-04-26T14:00:00",
    max_capacity: 30,
    booked: 30
  },
  {
    id: 3,
    title: "AI in Web Development",
    description: "Explore how to integrate AI capabilities into modern web applications",
    start_time: "2025-04-27T09:30:00",
    max_capacity: 25,
    booked: 18
  }
];

export default function EventBookingPage() {
  const [events, setEvents] = useState<Event[]>([]);

  const [loading, setLoading] = useState<boolean>(true);

  const [userId, setUserId] = useState<number>(0);

  // Format date
  const formatDate = (dateString: string): string => {
    return moment(dateString).format('MMMM D, YYYY [at] hh:mm A');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setEvents(mockEvents);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // handle event booking
  const handleBookEvent = async (eventId: number) => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 600));

      const eventToBook = events.find(event => event.id === eventId);
      if (!eventToBook) {
        toast.error('Event not found');
        setLoading(false);
        return;
      }

      if (eventToBook.booked >= eventToBook.max_capacity) {
        toast.error('This event is now full. Please try another event.');
        setLoading(false);
        return;
      }
      // Update booking count
      setEvents(prevEvents =>
        prevEvents.map(event =>
          event.id === eventId ? { ...event, booked: event.booked + 1 } : event
        )
      );

      toast.success(`Successfully booked "${eventToBook.title}"`);
    } catch (error) {
      toast.error('Booking failed. Please try again later.');
      console.log(error);
    }

    setLoading(false);
  };

  const getRemainingSpots = (event: Event): number => {
    return event.max_capacity - event.booked;
  };

  return (

    <div className="bg-red-50 min-h-screen">

      <Toaster
        position="top-center"
        reverseOrder={true}
      />

      {/* Main heading */}
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Upcoming Events</h1>
          <p className="text-lg text-gray-600">Book your spot for these exciting workshops</p>
        </div>

        {/* User ID Input */}
        <div className="max-w-sm mx-auto mb-8">
          <label htmlFor="userId" className="block text-sm font-medium text-gray-700 mb-2">
            Enter your User ID
          </label>
          <input
            type="number"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(Number(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="User ID"
            min="0" 
          />
        </div>

        {/* Main Content */}
        {loading ? (

          <div className="flex justify-center py-12">
            <div className=" text-gray-500">Loading events...</div>
          </div>

        ) : (

          <div className="space-y-6">
            {events.map(event => {
              const remainingSpots = getRemainingSpots(event);
              const isFull = remainingSpots <= 0;
              return (
                <div
                  key={event.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg"
                >
                  <div className="p-6">

                    {/* Event Details */}
                    <div className="flex justify-between items-start">

                      {/* Booking Information */}
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-1">{event.title}</h2>
                        <p className="text-gray-600 mb-4">{event.description}</p>

                        <div className="space-y-2">

                          <div className="flex items-center text-gray-700">
                            <Calendar size={18} className="mr-2 text-indigo-500" />
                            <span>{formatDate(event.start_time)}</span>
                          </div>

                          <div className="flex items-center text-gray-700">
                            <Users size={18} className="mr-2 text-indigo-500" />
                            <span>
                              {isFull ? (
                                <span className="text-red-600 font-medium">Event Full</span>
                              ) : (
                                <>
                                  <span className="font-medium">{remainingSpots}</span> spots remaining
                                </>
                              )}
                            </span>
                          </div>

                        </div>
                      </div>

                      {/*Remaining Slot conatiner */}
                      <div className="ml-4 text-right">
                        <span className="inline-block bg-indigo-100 text-indigo-800 text-sm py-1 px-3 rounded-full font-medium">
                          {event.booked}/{event.max_capacity} booked
                        </span>
                      </div>

                    </div>

                    {/* Booking Button */}
                    <div className="mt-6">
                      <button
                        onClick={() => handleBookEvent(event.id)}
                        disabled={isFull || loading}
                        className={`w-full py-3 px-4 rounded-lg font-medium ${isFull
                          ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : loading ? 'bg-indigo-300 text-white cursor-wait' : 'bg-indigo-600 text-white hover:bg-indigo-700'
                          }`}
                      >
                        {isFull ? 'Event Full' : 'Book Now'}
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        )}

      </div>

    </div>
  );
}
