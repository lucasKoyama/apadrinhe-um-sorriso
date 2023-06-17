import PropTypes from 'prop-types';
import '../styles/components/TitleParagraph.css';

function TitleParagraph({ title, paragraphArray }) {
  return (
    <>
     <h1 className="title">{ title }</h1>
     { 
      paragraphArray 
      && paragraphArray.map((paragraph, index) => (
        <p className="paragraph" key={ index }>{ paragraph }</p>
      ))
     }
    </>
  );
}

TitleParagraph.propTypes = ({
  title: PropTypes.string,
  paragraphArray: PropTypes.array,
}).isRequired;

export default TitleParagraph;