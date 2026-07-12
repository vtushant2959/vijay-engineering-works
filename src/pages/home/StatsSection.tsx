import { motion } from 'framer-motion';
import { BuildingFactory2, Users, Globe } from '../../components/ui';

const stats = [
  { value: '35+', label: 'Years of Experience', icon: BuildingFactory2 },
  { value: '500+', label: 'Machines Delivered', icon: BuildingFactory2 },
  { value: '200+', label: 'Happy Clients', icon: Users },
  { value: '15+', label: 'Countries Served', icon: Globe },
];

export function StatsSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-800" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20v20h20V20H20zm0-20v20h20V0H20z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-accent-400" />
              </div>
              <motion.p
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, type: 'spring' }}
                className="font-heading font-bold text-4xl md:text-5xl text-white mb-2"
              >
                {stat.value}
              </motion.p>
              <p className="text-primary-200">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
