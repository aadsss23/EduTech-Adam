import { useFavorites } from '../context/FavoritesContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';

function Favorites() {
  const { favorites, removeFromFavorites } = useFavorites();

  return (
    <div className="bg-black text-white pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-center mb-16">
          <FontAwesomeIcon icon={faHeart} className="text-primary text-4xl mr-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            My Favorites
          </h1>
        </div>

        {favorites.length === 0 ? (
          <div className="text-center text-gray-400">
            <p className="text-xl">You haven't added any favorites yet.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {favorites.map(item => (
              <div key={item.id} className="bg-secondary rounded-lg overflow-hidden">
                <div className="relative h-64">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => removeFromFavorites(item.id)}
                    className="absolute top-4 right-4 text-2xl text-white hover:text-primary transition-colors"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <span className="text-primary font-bold">{item.price}</span>
                  </div>
                  <p className="text-gray-400 mb-4">{item.description}</p>
                  <button className="btn w-full">
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Favorites;