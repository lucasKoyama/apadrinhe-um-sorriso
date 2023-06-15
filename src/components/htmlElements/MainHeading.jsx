import PropTypes from 'prop-types';
import '../../styles/htmlElements/MainHeading.css';

function Heading3({title}) {
  return <h1 className='main-heading'>{title}</h1>;
}

Heading3.propTypes = ({
  title: PropTypes.string,
}).isRequired;

export default Heading3;
