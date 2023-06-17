import PropTypes from 'prop-types';
import '../../styles/components/cards/ServiceCard.css'

function ServiceCard({ faIcon, title, paragraph }) {
  return (
    <div className='service-card'>
      <i className={ `icon ${faIcon}` }></i>
      <div>
        <h4>{ title }</h4>
        <p>{ paragraph }</p>
      </div>
    </div>
  );
}

ServiceCard.propTypes = ({
  faIcon: PropTypes.string,
  title: PropTypes.string,
  paragraph: PropTypes.string,
}).isRequired;

export default ServiceCard;
