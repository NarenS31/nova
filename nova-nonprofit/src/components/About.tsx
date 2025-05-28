import { motion } from 'framer-motion';
import { Heart, Users, Brain } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Users,
      title: 'Youth-led',
      description: 'Created and driven by passionate young leaders',
      gradient: 'from-blue-500/20 via-purple-500/20 to-blue-500/20',
      iconColor: 'text-blue-500'
    },
    {
      icon: Heart,
      title: 'Community-focused',
      description: 'Building stronger, healthier communities together',
      gradient: 'from-purple-500/20 via-pink-500/20 to-purple-500/20',
      iconColor: 'text-purple-500'
    },
    {
      icon: Brain,
      title: 'Health-Driven',
      description: 'Promoting comprehensive health education and awareness',
      gradient: 'from-pink-500/20 via-primary/20 to-pink-500/20',
      iconColor: 'text-primary'
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-gray-50">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,#6C63FF05_1px,transparent_1px),linear-gradient(-45deg,#6C63FF05_1px,transparent_1px)] bg-[length:20px_20px]"></div>
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Our Story & Mission
              </h2>
              <div className="prose prose-lg">
                <p className="text-gray-600">
                  Founded in 2024, Nova Youth Health Initiative emerged from a simple yet powerful idea: health education should be accessible, engaging, and youth-driven. Our mission is to empower young people with the knowledge and tools they need to make informed decisions about their health and well-being.
                </p>
                <p className="text-gray-600">
                  Through innovative workshops, online modules, and community events, we're creating a movement of health-conscious youth leaders who are passionate about making a difference in their communities.
                </p>
              </div>

              {/* Highlights */}
              <div className="mt-12 grid sm:grid-cols-3 gap-6">
                {highlights.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group"
                    >
                      <div className="h-full p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className={`w-6 h-6 ${item.iconColor}`} />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative lg:h-[600px]"
            >
              <div className="relative h-full">
                {/* Main Image */}
                <div className="relative z-20 h-full rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="/about-image.jpg" 
                    alt="Youth Health Initiative" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-multiply"></div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
                <div className="absolute -top-6 -left-6 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
                
                {/* Pattern Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_40%,rgba(255,255,255,0.1)_45%,transparent_50%)] bg-[length:200%_100%] animate-[shine_3s_infinite_linear]"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 