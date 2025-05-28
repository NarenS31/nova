import { motion } from 'framer-motion';
import { HandHeart, Building2, Gift } from 'lucide-react';

const GetInvolved = () => {
  const opportunities = [
    {
      icon: HandHeart,
      title: 'Volunteer',
      description: 'Share your skills and time to make a difference in youth health education.',
      cta: 'Join Our Team',
      href: '#volunteer'
    },
    {
      icon: Building2,
      title: 'Partner',
      description: 'Collaborate with us to expand our reach and impact in the community.',
      cta: 'Become a Partner',
      href: '#partner'
    },
    {
      icon: Gift,
      title: 'Donate',
      description: 'Support our mission to make health education accessible to all youth.',
      cta: 'Make a Donation',
      href: '#donate'
    }
  ];

  return (
    <section id="get-involved" className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2">Get Involved</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us in our mission to empower youth through health education. There are many ways to contribute and make a difference.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {opportunities.map((opportunity, index) => {
            const Icon = opportunity.icon;
            return (
              <motion.div
                key={opportunity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card text-center group hover:bg-primary hover:text-white transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-white/10">
                    <Icon className="w-8 h-8 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{opportunity.title}</h3>
                  <p className="text-gray-600 group-hover:text-white/90 mb-6">
                    {opportunity.description}
                  </p>
                </div>

                <motion.a
                  href={opportunity.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn bg-primary text-white group-hover:bg-white group-hover:text-primary inline-block"
                >
                  {opportunity.cta}
                </motion.a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GetInvolved; 