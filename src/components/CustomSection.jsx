import PropTypes from 'prop-types';
import CustomButton from './buttons/CustomButton';
import TitleParagraph from './TitleParagraph';
import '../styles/components/CustomSection.css';

function CustomSection({bgColor, sideTitle, mainTitle, paragraphArray, btnText, sideImg}) {
  return (
    <section className="section" style={ { backgroundColor: bgColor } }>
      {
       sideImg
       && <div className='photo-area'><img src={ sideImg } alt="imagem lateral" /></div>
      }
      <div className='content-area'>
        <h4 className='side-title'><div className="sideTitle-dash" />{ sideTitle }</h4>
        <TitleParagraph
          title={ mainTitle }
          paragraphArray={ paragraphArray }
        />
        { btnText && <CustomButton btnText={ btnText } classe="primary"/>}
      </div>
    </section>
  );
}

CustomSection.propTypes = ({
  bgColor: PropTypes.string,
  sideTitle: PropTypes.string,
  mainTitle: PropTypes.string,
  paragraphArray: PropTypes.array,
  btnText: PropTypes.string,
  sideImg: PropTypes.string,
}).isRequired;

export default CustomSection;