import PropTypes from 'prop-types';

const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="bg-[#111111] border border-[rgba(255,255,255,0.05)] rounded-lg p-6 sm:p-8 md:p-10 h-full w-full transition-all duration-300 hover:border-[rgba(255,255,255,0.1)] hover:shadow-lg hover:shadow-black/20 hover:-translate-y-2">
      <div className="flex flex-col sm:flex-row items-start text-left">
        {icon && (
          <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
            <img src={icon} alt={title} className="w-12 h-12 object-contain" />
          </div>
        )}
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-6">{title}</h3>
          <p className="text-sm text-gray-300 text-justify">{description}</p>
        </div>
      </div>
    </div>
  );
};

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string
};

export default FeatureCard;