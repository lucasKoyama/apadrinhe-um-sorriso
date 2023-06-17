import PropTypes from 'prop-types';
import '../../styles/components/cards/DefaultCard.css';
import '../../styles/components/cards/MemberCard.css'

function MemberCard({ imgSrc, nome, role }) {
  return (
    <div className="card member-card">
      <img src={ imgSrc } alt="foto do membro do time" />
      <h3>{ nome }</h3>
      <h6 className="role">{ role }</h6>
    </div>
  );
}

MemberCard.propTypes = ({
  imgSrc: PropTypes.string,
}).isRequired;

export default MemberCard;