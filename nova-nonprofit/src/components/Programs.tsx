import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Book, Brain, Users, Heart, Star, Zap } from 'lucide-react';
import { useRef, useEffect } from 'react';

const Programs = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [-5, 5]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const programs = [
    {
      icon: Book,
      title: 'Health Education Workshops',
      description: 'Interactive sessions covering essential health topics',
      color: 'from-blue-500/20 to-purple-500/20',
      iconBg: 'bg-blue-500/10',
      delay: 0,
    },
    {
      icon: Brain,
      title: 'Mental Health Support',
      description: 'Resources and guidance for mental well-being',
      color: 'from-purple-500/20 to-pink-500/20',
      iconBg: 'bg-purple-500/10',
      delay: 0.1,
    },
    {
      icon: Users,
      title: 'Peer Support Network',
      description: 'Connect with others in your health journey',
      color: 'from-pink-500/20 to-red-500/20',
      iconBg: 'bg-pink-500/10',
      delay: 0.2,
    },
    {
      icon: Heart,
      title: 'Community Outreach',
      description: 'Making health education accessible to all',
      color: 'from-red-500/20 to-orange-500/20',
      iconBg: 'bg-red-500/10',
      delay: 0.3,
    },
    {
      icon: Star,
      title: 'Leadership Development',
      description: 'Empowering youth to become health advocates',
      color: 'from-orange-500/20 to-yellow-500/20',
      iconBg: 'bg-orange-500/10',
      delay: 0.4,
    },
    {
      icon: Zap,
      title: 'Innovation Lab',
      description: 'Creating new solutions for health challenges',
      color: 'from-yellow-500/20 to-green-500/20',
      iconBg: 'bg-yellow-500/10',
      delay: 0.5,
    },
  ];

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="programs" className="py-20 relative overflow-hidden" ref={containerRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,#6C63FF08_1px,transparent_1px),linear-gradient(-45deg,#6C63FF08_1px,transparent_1px)] bg-[length:20px_20px]"></div>
      
      {/* Floating Gradients */}
      <motion.div 
        className="absolute right-0 top-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
      />
      <motion.div 
        className="absolute left-0 bottom-0 w-1/4 h-1/4 bg-gradient-to-tr from-secondary/10 to-transparent rounded-tr-full"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
      />

      {/* Content Container */}
      <motion.div 
        className="section-container relative"
        style={{ y, opacity }}
      >
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="heading-2 mb-6 relative inline-block"
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-primary">
              Our Programs
              <motion.span 
                className="absolute -inset-x-6 -inset-y-2 bg-primary/5 blur-xl -z-10"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Discover our comprehensive range of programs designed to empower and educate youth about health and well-being.
          </motion.p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={program.title}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: program.delay }}
              >
                <motion.div 
                  className="card p-6 h-full bg-white/50 backdrop-blur-sm relative overflow-hidden"
                  whileHover={{ scale: 1.02, rotateX: 5, rotateY: 5 }}
                  style={{
                    transformStyle: 'preserve-3d',
                    perspective: 1000,
                  }}
                >
                  {/* Card Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className="absolute inset-0 bg-primary/[0.02] group-hover:bg-primary/[0.05] transition-colors duration-300"></div>
                  
                  {/* Card Content */}
                  <div className="relative">
                    <motion.div
                      className={`w-12 h-12 ${program.iconBg} rounded-lg flex items-center justify-center mb-4 relative overflow-hidden group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-6 h-6 text-primary relative z-10" />
                      <motion.div
                        className="absolute inset-0 bg-primary/5 blur-lg"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>
                    
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      {program.description}
                    </p>

                    {/* Interactive Elements */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      className="absolute -inset-x-2 -inset-y-2 border border-primary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        rotateX,
                        rotateY,
                        transformStyle: 'preserve-3d',
                      }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.a
            href="#contact"
            className="btn-primary relative overflow-hidden group inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Get Involved</span>
            <motion.span
              className="absolute inset-0 bg-white/20"
              initial={{ y: "100%" }}
              whileHover={{ y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Programs; 