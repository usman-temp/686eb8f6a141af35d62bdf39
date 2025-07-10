/* eslint-disable */
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export default function RecipeCard({ recipe, index }) {
  return (
    <motion.div
      key={recipe.id}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.2 }}
      viewport={{ once: true, margin: '-100px' }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow focus:outline-none focus:ring-2 focus:ring-orange-500"
      role="group"
      tabIndex="0"
      aria-labelledby={`recipe-title-${recipe.id}`}
    >
      <img
        src={recipe.image}
        alt={`Image of ${recipe.title}`}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 id={`recipe-title-${recipe.id}`} className="text-xl font-semibold mb-2">
          {recipe.title}
        </h3>
        <p className="text-gray-500">{recipe.time}</p>
        {recipe.servings && (
          <p className="text-gray-400 text-sm mt-1">Serves: {recipe.servings}</p>
        )}
      </div>
    </motion.div>
  );
}

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    servings: PropTypes.number
  }).isRequired,
  index: PropTypes.number.isRequired
};