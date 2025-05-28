import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';

const Events = () => {
  const events = [
    {
      title: 'Youth Health Summit 2024',
      date: 'May 15, 2024',
      time: '9:00 AM - 4:00 PM',
      location: 'Charlotte Convention Center',
      description: 'Join us for a day of inspiring talks, workshops, and networking with fellow health enthusiasts.',
      image: 'summit.jpg'
    },
    {
      title: 'Mental Wellness Workshop',
      date: 'June 2, 2024',
      time: '2:00 PM - 5:00 PM',
      location: 'Community Center',
      description: 'Learn practical strategies for maintaining mental health and supporting peers.',
      image: 'workshop.jpg'
    },
    {
      title: 'Health Innovation Challenge',
      date: 'July 10, 2024',
      time: '10:00 AM - 3:00 PM',
      location: 'Innovation Hub',
      description: 'Showcase your ideas for improving community health and compete for funding.',
      image: 'challenge.jpg'
    }
  ];

  return (
    <section id="events" className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2">Upcoming Events</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us at our upcoming events to learn, connect, and make a difference in your community.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card group"
            >
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:scale-110 transition-transform duration-300"></div>
              </div>

              <h3 className="text-xl font-bold mb-3">{event.title}</h3>

              <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{event.location}</span>
                </div>
              </div>

              <p className="text-gray-600 mb-6">{event.description}</p>

              <motion.button
                whileHover={{ gap: '0.5rem' }}
                className="inline-flex items-center text-primary font-medium hover:gap-2 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-1" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.a
            href="#all-events"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary inline-flex items-center"
          >
            View All Events
            <ArrowRight className="w-5 h-5 ml-2" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Events; 