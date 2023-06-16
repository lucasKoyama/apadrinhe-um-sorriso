import PropTypes from 'prop-types';
import '../../styles/components/buttons/CustomButton.css';

function CustomButton({btnText, classe}) {
  return (<button className={classe}>{btnText}</button>);
}

CustomButton.propTypes = ({
  btnText: PropTypes.string,
  class: PropTypes.string,
}).isRequired;

export default CustomButton;