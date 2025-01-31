import { motion } from 'framer-motion';

function About() {
  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1000" 
            alt="About Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-4 animate-fadeInUp">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">About Us</h1>
            <p className="text-xl text-gray-300">Transforming Education Through Technology</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <motion.section 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              Founded in 2020, EduTech emerged from a simple yet powerful vision: to democratize education through technology. What began as a small startup with a handful of courses has grown into a comprehensive online learning platform, serving thousands of students worldwide. Our journey is rooted in the belief that quality education should be accessible to everyone, regardless of their location or circumstances.
            </p>
            <p className="text-gray-600 leading-relaxed">
              In our early days, we focused on creating a user-friendly platform that could deliver high-quality educational content effectively. Through continuous feedback from our students and instructors, we've evolved our platform to incorporate interactive learning tools, real-time collaboration features, and personalized learning paths. Today, EduTech stands as a testament to our commitment to innovation in education, offering hundreds of courses across various disciplines.
            </p>
          </motion.section>

          <motion.section 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To be the world's leading online education platform, empowering individuals to achieve their full potential through accessible, high-quality learning experiences. We envision a future where geographical and economic barriers to education no longer exist, and where lifelong learning is a reality for everyone.
            </p>
          </motion.section>

          <motion.section 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed">We are committed to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Providing accessible, high-quality education to learners worldwide</li>
                <li>Developing innovative learning technologies that enhance the educational experience</li>
                <li>Creating engaging, industry-relevant courses that prepare students for real-world success</li>
                <li>Building a supportive learning community that encourages collaboration and growth</li>
                <li>Maintaining affordable pricing to ensure education remains accessible to all</li>
              </ul>
            </div>
          </motion.section>

          <motion.section 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-gray-600">
                  We constantly push the boundaries of what's possible in online education.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Accessibility</h3>
                <p className="text-gray-600">
                  We believe quality education should be available to everyone.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-gray-600">
                  We maintain high standards in all aspects of our educational offerings.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Community</h3>
                <p className="text-gray-600">
                  We foster a supportive environment for learning and growth.
                </p>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}

export default About;