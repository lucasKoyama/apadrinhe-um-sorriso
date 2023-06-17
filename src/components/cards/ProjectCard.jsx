import CustomButton from '../buttons/CustomButton';
import PropTypes from 'prop-types';
import '../../styles/components/cards/DefaultCard.css';
import '../../styles/components/cards/ProjectCard.css'

function ProjectCard({ bgImgSrc, title, paragraph }) {
  return (
    <div style={ { backgroundImage: `url(${ bgImgSrc })` } } className='project-card'>
      <div className='card dark-area'>
        <h3>{ title }</h3>
        <p>{ paragraph }</p>
        <CustomButton btnText="Saiba mais" classe="secondary" />
      </div>
    </div>
  );
}

ProjectCard.propTypes = ({
  bgImgSrc: PropTypes.string,
  title: PropTypes.string,
  paragraph: PropTypes.string,
}).isRequired

export default ProjectCard;