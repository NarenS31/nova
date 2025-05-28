import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const stats = [
    { value: 300, label: 'Students Reached' },
    { value: 4, label: 'Partner Organizations' },
    { value: 12, label: 'Workshops Completed' },
    { value: 95, label: 'Satisfaction Rate', suffix: '%' }
  ];

  const testimonials = [
    {
      quote: "The workshops were engaging and really helped me understand complex health topics in a fun way.",
      author: "Sarah M.",
      role: "High School Student"
    },
    {
      quote: "Nova's program has transformed how our students think about health education.",
      author: "David Chen",
      role: "School Principal"
    },
    {
      quote: "Being part of this initiative has given me the confidence to make better health choices.",
      author: "James Wilson",
      role: "Program Participant"
    }
  ];

  const CounterAnimation = ({ value, suffix = '' }: { value: number; suffix?: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    useEffect(() => {
      if (isInView) {
        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = value / steps;
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= value) {
            setCount(value);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);
  
        return () => clearInterval(timer);
      }
    }, [isInView, value]);
  
    return (
      <span ref={ref} className="text-4xl font-bold text-primary">
        {count}{suffix}
      </span>
    );
  };

  return (
    <section id="impact" className="py-20 bg-gray-50">
      <div className="section-container">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <CounterAnimation value={stat.value} suffix={stat.suffix} />
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2">What People Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our community members about their experiences with Nova.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card relative"
            >
              <Quote className="w-8 h-8 text-primary/20 absolute -top-4 -left-4" />
              <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 