import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
  const featuredCourses = [
    {
      id: 1,
      name: "Web Development Bootcamp",
      description: "Master modern web development with HTML, CSS, JavaScript, React, and Node.js",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500"
    },
    {
      id: 2,
      name: "Data Science Fundamentals",
      description: "Learn data analysis, visualization, and machine learning with Python",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500"
    },
    {
      id: 3,
      name: "Digital Marketing Mastery",
      description: "Master SEO, social media marketing, and content strategy",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=500"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1000" 
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-4 animate-fadeInUp">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Welcome to EduTech
              <span className="block mt-2">Learn Anytime, Anywhere</span>
            </h1>
            <p className="text-2xl text-gray-200 mb-8">
              Transform your future with online education
            </p>
            <Link to="/courses" className="btn text-lg">
              Explore Courses
            </Link>
          </div>
        </div>
      </section>

      {/* About Platform Section */}
      <section className="py-20 px-4 bg-gray-50 flex justify-center">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8">Why Choose EduTech?</h2>
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="mb-4">
              EduTech is a cutting-edge online learning platform designed to revolutionize education through technology. We believe that quality education should be accessible to everyone, anywhere in the world.
            </p>
            <p className="mb-4">
              Our platform combines expert-led instruction with interactive learning experiences to help you master new skills at your own pace. Whether you're looking to advance your career, explore new interests, or gain professional certifications, EduTech provides the tools and resources you need to succeed.
            </p>
            <p>
              With a diverse range of courses taught by industry experts, flexible learning schedules, and hands-on projects, we ensure that your learning journey is both effective and engaging. Join thousands of learners who have already transformed their lives through EduTech's innovative approach to online education.
            </p>
          </div>
          <div className="text-center mt-8">
            <Link to="/about" className="text-primary hover:text-primary/80 transition-colors font-semibold">
              Learn More About Us →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Featured <span className="text-primary">Courses</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map(course => (
              <motion.div
                key={course.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:-translate-y-2 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48">
                  <img 
                    src={course.image} 
                    alt={course.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{course.name}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <Link 
                    to="/courses" 
                    className="text-primary hover:text-primary/80 transition-colors font-semibold"
                  >
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;