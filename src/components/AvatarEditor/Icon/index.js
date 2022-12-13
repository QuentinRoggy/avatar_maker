import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { changeshape } from '../../../actions/avatarActions';
import './style.scss';

function Icon({ type }) {
  const dispatch = useDispatch();

  const avatar = useSelector((state) => state.avatar.shape);

  const handleClick = () => {
    dispatch(changeshape(type));
  };

  return (
    <div className="icon" onClick={handleClick}>
      <img src={avatar[type].url} alt={type} />
    </div>
  );
}

Icon.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Icon;
