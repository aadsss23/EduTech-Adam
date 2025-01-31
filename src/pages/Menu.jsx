import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { useFavorites } from '../context/FavoritesContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Menu() {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  const menuItems = [
    {
      id: 1,
      name: "Prime Ribeye Steak",
      description: "Daging sapi berusia 28 hari dengan saus anggur merah",
      price: "Rp 450.000",
      image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500"
    },
    {
      id: 2,
      name: "Seafood Paella",
      description: "Nasi kunyit Spanyol dengan hidangan laut",
      price: "Rp 380.000",
      image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=500"
    },
    {
      id: 3,
      name: "Duck Confit",
      description: "Paha bebek masak lambat dengan saus ceri",
      price: "Rp 360.000",
      image: "https://images.unsplash.com/photo-1619894991209-9f9694be045a?w=500"
    },
    {
      id: 4,
      name: "Lobster Thermidor",
      description: "Lobster dengan saus krim brandy",
      price: "Rp 520.000",
      image: "https://www.allrecipes.com/thmb/06cEC20xZ6VgIGOLmunJZzZAoFI=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/AR-87386-Lobster-Thermidor-DDMFS-4x3-3d182e9ac5ac494fbbb44787cd80fdad.jpg"
    },
    {
      id: 5,
      name: "Truffle Risotto",
      description: "Nasi Carnaroli dengan jamur truffle hitam",
      price: "Rp 340.000",
      image: "https://alwaysfromscratch.com/wp-content/uploads/2023/10/Mushroom-truffle-risotto-13.jpg"
    },
    {
      id: 6,
      name: "Chocolate Soufflé",
      description: "Soufflé cokelat hangat dengan es krim vanila",
      price: "Rp 160.000",
      image: "https://www.flavoursholidays.co.uk/wp-content/uploads/2022/02/Chocolate-souffle-BI-930x523.jpg.webp"
    }
  ];

  const handleFavoriteClick = (e, item) => {
    e.preventDefault();
    if (isFavorite(item.id)) {
      removeFromFavorites(item.id);
    } else {
      addToFavorites(item);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className="bg-black text-white pt-20"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          variants={itemVariants}
        >
          Menu <span className="text-primary">Kami</span>
        </motion.h1>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {menuItems.map(item => (
            <motion.div key={item.id} variants={itemVariants}>
              <Link 
                to={`/menu/${item.id}`}
                className="bg-secondary rounded-lg overflow-hidden group block"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <button
                    onClick={(e) => handleFavoriteClick(e, item)}
                    className="absolute top-4 right-4 text-2xl text-white hover:text-primary transition-colors"
                  >
                    <FontAwesomeIcon 
                      icon={isFavorite(item.id) ? faHeartSolid : faHeartRegular}
                      className={isFavorite(item.id) ? "text-primary" : ""}
                    />
                  </button>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <span className="text-primary font-bold">{item.price}</span>
                  </div>
                  <p className="text-gray-400 mb-4">{item.description}</p>
                  <div className="btn w-full">Lihat Detail</div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Menu;