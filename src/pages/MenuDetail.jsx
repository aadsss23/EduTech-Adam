import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { useFavorites } from '../context/FavoritesContext';
import { motion } from 'framer-motion';

function MenuDetail() {
  const { id } = useParams();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const [menuItem, setMenuItem] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ rating: 0, comment: '' });
  const [hoveredStar, setHoveredStar] = useState(0);

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

  // Menu data
  useEffect(() => {
    const menuItems = [
      {
        id: 1,
        name: "Prime Ribeye Steak",
        description: "Daging sapi berusia 28 hari dengan saus anggur merah. Disajikan dengan sayuran panggang dan kentang tumbuk bawang putih.",
        price: "Rp 450.000",
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500",
        ingredients: ["Daging sapi prime ribeye", "Saus anggur merah", "Sayuran panggang", "Kentang tumbuk bawang putih"],
        preparationTime: "25-30 menit",
        calories: "850 kkal"
      },
      {
        id: 2,
        name: "Seafood Paella",
        description: "Nasi kunyit Spanyol dengan hidangan laut. Hidangan tradisional dengan udang, kerang, dan cumi-cumi.",
        price: "Rp 380.000",
        image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=500",
        ingredients: ["Beras Bomba", "Seafood campuran", "Kunyit", "Paprika", "Kacang polong"],
        preparationTime: "35-40 menit",
        calories: "680 kkal"
      },
      {
        id: 3,
        name: "Duck Confit",
        description: "Paha bebek masak lambat dengan saus ceri. Disajikan dengan kentang fingerling panggang dan sayuran musiman.",
        price: "Rp 360.000",
        image: "https://images.unsplash.com/photo-1619894991209-9f9694be045a?w=500",
        ingredients: ["Paha bebek", "Saus ceri", "Kentang fingerling", "Sayuran musiman"],
        preparationTime: "30-35 menit",
        calories: "780 kkal"
      },
      {
        id: 4,
        name: "Lobster Thermidor",
        description: "Lobster dengan saus krim brandy, dipanggang dengan keju Gruyère. Disajikan dengan asparagus.",
        price: "Rp 520.000",
        image: "https://www.allrecipes.com/thmb/06cEC20xZ6VgIGOLmunJZzZAoFI=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/AR-87386-Lobster-Thermidor-DDMFS-4x3-3d182e9ac5ac494fbbb44787cd80fdad.jpg",
        ingredients: ["Lobster segar", "Saus krim brandy", "Keju Gruyère", "Asparagus"],
        preparationTime: "40-45 menit",
        calories: "720 kkal"
      },
      {
        id: 5,
        name: "Truffle Risotto",
        description: "Nasi Carnaroli dengan jamur truffle hitam, disempurnakan dengan keju Parmesan dan minyak truffle.",
        price: "Rp 340.000",
        image: "https://alwaysfromscratch.com/wp-content/uploads/2023/10/Mushroom-truffle-risotto-13.jpg",
        ingredients: ["Beras Carnaroli", "Truffle hitam", "Keju Parmesan", "Minyak truffle", "Kaldu jamur"],
        preparationTime: "25-30 menit",
        calories: "590 kkal"
      },
      {
        id: 6,
        name: "Chocolate Soufflé",
        description: "Soufflé cokelat hangat dengan es krim vanila dan saus raspberry.",
        price: "Rp 160.000",
        image: "https://www.flavoursholidays.co.uk/wp-content/uploads/2022/02/Chocolate-souffle-BI-930x523.jpg.webp",
        ingredients: ["Cokelat hitam", "Telur", "Es krim vanila", "Saus raspberry"],
        preparationTime: "20-25 menit",
        calories: "450 kkal"
      }
    ];

    const found = menuItems.find(item => item.id === parseInt(id));
    setMenuItem(found);
  }, [id]);

  const handleFavoriteClick = () => {
    if (isFavorite(menuItem.id)) {
      removeFromFavorites(menuItem.id);
    } else {
      addToFavorites(menuItem);
    }
  };

  const handleRatingHover = (rating) => {
    setHoveredStar(rating);
  };

  const handleRatingLeave = () => {
    setHoveredStar(0);
  };

  const handleRatingClick = (rating) => {
    setNewReview(prev => ({ ...prev, rating }));
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReview.rating === 0) {
      alert('Silakan pilih rating');
      return;
    }
    if (!newReview.comment.trim()) {
      alert('Silakan tulis ulasan');
      return;
    }

    const review = {
      id: Date.now(),
      ...newReview,
      date: new Date().toISOString(),
      userName: 'Pengguna Anonim'
    };

    setReviews(prev => [review, ...prev]);
    setNewReview({ rating: 0, comment: '' });
  };

  if (!menuItem) {
    return (
      <div className="bg-black text-white pt-20 min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <p className="text-center">Memuat...</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="bg-black text-white pt-20 min-h-screen"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 py-16">
        {/* Menu Item Details */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
        >
          <motion.div className="relative" variants={itemVariants}>
            <img 
              src={menuItem.image} 
              alt={menuItem.name}
              className="w-full h-[400px] object-cover rounded-lg"
            />
            <button
              onClick={handleFavoriteClick}
              className="absolute top-4 right-4 text-2xl text-white hover:text-primary transition-colors"
            >
              <FontAwesomeIcon 
                icon={isFavorite(menuItem.id) ? faHeartSolid : faHeartRegular}
                className={isFavorite(menuItem.id) ? "text-primary" : ""}
              />
            </button>
          </motion.div>
          
          <motion.div className="space-y-6" variants={itemVariants}>
            <div>
              <h1 className="text-4xl font-bold mb-2">{menuItem.name}</h1>
              <p className="text-2xl text-primary font-bold">{menuItem.price}</p>
            </div>
            
            <p className="text-gray-400">{menuItem.description}</p>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Bahan-bahan</h3>
              <ul className="list-disc list-inside text-gray-400">
                {menuItem.ingredients.map((ingredient, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    custom={index}
                  >
                    {ingredient}
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold">Waktu Persiapan</h3>
                <p className="text-gray-400">{menuItem.preparationTime}</p>
              </div>
              <div>
                <h3 className="font-semibold">Kalori</h3>
                <p className="text-gray-400">{menuItem.calories}</p>
              </div>
            </div>

            <button className="btn w-full">Pesan Sekarang</button>
          </motion.div>
        </motion.div>

        {/* Reviews Section */}
        <motion.div 
          className="bg-secondary rounded-lg p-8"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-bold mb-8">Ulasan</h2>

          {/* Add Review Form */}
          <form onSubmit={handleReviewSubmit} className="mb-12">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Rating Anda
              </label>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onMouseEnter={() => handleRatingHover(star)}
                    onMouseLeave={handleRatingLeave}
                    onClick={() => handleRatingClick(star)}
                    className="text-2xl focus:outline-none"
                  >
                    <FontAwesomeIcon
                      icon={star <= (hoveredStar || newReview.rating) ? faStarSolid : faStarRegular}
                      className={star <= (hoveredStar || newReview.rating) ? "text-primary" : "text-gray-400"}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="comment" className="block text-sm font-medium text-gray-300 mb-2">
                Ulasan Anda
              </label>
              <textarea
                id="comment"
                rows="4"
                value={newReview.comment}
                onChange={(e) => setNewReview(prev => ({ ...prev, comment: e.target.value }))}
                className="w-full px-4 py-3 bg-black/30 border border-gray-700 rounded-md focus:outline-none focus:border-primary text-white"
                placeholder="Tulis ulasan anda di sini..."
              ></textarea>
            </div>

            <button type="submit" className="btn">
              Kirim Ulasan
            </button>
          </form>

          {/* Reviews List */}
          <div className="space-y-6">
            {reviews.length === 0 ? (
              <p className="text-gray-400 text-center">Belum ada ulasan. Jadilah yang pertama memberikan ulasan!</p>
            ) : (
              reviews.map(review => (
                <div key={review.id} className="border-b border-gray-700 pb-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-semibold">{review.userName}</p>
                      <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <FontAwesomeIcon
                            key={star}
                            icon={star <= review.rating ? faStarSolid : faStarRegular}
                            className={star <= review.rating ? "text-primary" : "text-gray-400"}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-400">
                      {new Date(review.date).toLocaleDateString()}
                    </p>
                  </div>
                  <p className="text-gray-300">{review.comment}</p>
                </div>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default MenuDetail;