import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, MousePointer, ArrowDown } from 'lucide-react';
import { useContext, useEffect, useRef, useState } from 'react';
import { GlobalContext } from '../App';

const Hero = () => {
  const { scrollPosition } = useContext(GlobalContext);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen pt-20 relative overflow-hidden perspective-1000">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#6C63FF_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.15]"></div>
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.02] via-transparent to-primary/[0.02]"></div>
      
      {/* Interactive Background Elements */}
      <motion.div 
        className="absolute inset-0"
        style={{
          rotateX: mousePosition.y * 5,
          rotateY: mousePosition.x * 5,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Floating Elements with 3D transform */}
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/[0.03] backdrop-blur-3xl"
          style={{ translateZ: 50 }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-secondary/[0.03] backdrop-blur-3xl"
          style={{ translateZ: 30 }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full bg-primary/[0.03] backdrop-blur-3xl"
          style={{ translateZ: 20 }}
          animate={{
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Content Container */}
      <motion.div 
        ref={containerRef}
        className="section-container relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-5rem)]"
        style={{ y, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
          style={{
            perspective: 1000,
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Logo and Name */}
          <div className="mb-8 relative">
            <motion.div 
              className="w-20 h-20 bg-primary/90 rounded-2xl mx-auto mb-4 relative overflow-hidden shadow-lg"
              whileHover={{ scale: 1.1, rotateY: 180 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{
                transformStyle: 'preserve-3d',
                rotateX: mousePosition.y * 20,
                rotateY: mousePosition.x * 20,
              }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,white_20%,transparent_60%)]"></div>
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_40%,rgba(255,255,255,0.2)_50%,transparent_60%)] animate-[shine_3s_infinite]"></div>
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-primary relative"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ backgroundSize: '200% auto' }}
            >
              Nova Youth Health Initiative
              <motion.span 
                className="absolute -inset-x-6 -inset-y-2 bg-primary/5 blur-xl -z-10"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.h1>
          </div>

          {/* Mission Statement */}
          <motion.p 
            className="text-xl md:text-2xl mb-12 text-gray-600 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="relative z-10">
              Empowering the next generation through health education, community engagement, and innovative learning experiences.
            </span>
            <motion.span 
              className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0"
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#workshops"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              <span className="relative flex items-center gap-2">
                Join a Workshop
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>
            <motion.a
              href="#modules"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary relative overflow-hidden group shadow-lg"
            >
              <span className="absolute inset-0 bg-black/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              <span className="relative flex items-center gap-2">
                View Modules
                <MousePointer className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </span>
            </motion.a>
            <motion.a
              href="#get-involved"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-primary/10 rounded-lg"></span>
              <span className="relative px-6 py-3 flex items-center justify-center text-primary font-medium gap-2">
                Get Involved
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </span>
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-sm font-medium">Scroll to explore</span>
        <ArrowDown className="w-5 h-5" />
      </motion.div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/[0.02] to-transparent"></div>
    </section>
  );
};

export default Hero; 