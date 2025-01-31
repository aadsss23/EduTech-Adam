import { motion } from 'framer-motion';

function Courses() {
  const courses = [
    {
      id: 1,
      name: "Web Development Bootcamp",
      description: "Master modern web development with HTML, CSS, JavaScript, React, and Node.js.",
      price: "$499",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500",
      category: "Programming"
    },
    {
      id: 2,
      name: "Data Science Fundamentals",
      description: "Learn data analysis, visualization, and machine learning with Python.",
      price: "$599",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500",
      category: "Data Science"
    },
    {
      id: 3,
      name: "Digital Marketing Mastery",
      description: "Master SEO, social media marketing, and content strategy to enhance your online presence.",
      price: "$399",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=500",
      category: "Marketing"
    },
    {
      id: 4,
      name: "UI/UX Design Essentials",
      description: "Learn user interface and experience design principles.",
      price: "$449",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500",
      category: "Design"
    },
    {
      id: 5,
      name: "Mobile App Development",
      description: "Build iOS and Android apps with React Native.",
      price: "$549",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500",
      category: "Programming"
    },
    {
      id: 6,
      name: "Business Analytics",
      description: "Master data-driven decision making for business.",
      price: "$499",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500",
      category: "Business"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1000" 
            alt="Courses Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-4 animate-fadeInUp">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Our Courses</h1>
            <p className="text-xl text-gray-300">Explore our wide range of professional courses</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {courses.map(course => (
            <motion.div
              key={course.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:-translate-y-2 transition-all duration-300"
              variants={itemVariants}
            >
              <div className="relative h-48">
                <img 
                  src={course.image} 
                  alt={course.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                    {course.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{course.name}</h3>
                  <span className="text-primary font-bold">{course.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <button className="btn w-full">
                  Enroll Now
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Courses;