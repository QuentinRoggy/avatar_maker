import './style.scss';
import { useSelector } from 'react-redux';

function Avatar() {
  const avatar = useSelector((state) => state.avatar.shape);

  return (
    <div className="Avatar">
      <div className="body-img">
        <img src={avatar.body.url} alt="body" />
      </div>
      <div className="hair-img">
        <img src={avatar.hair.url} alt="body" />
      </div>
      <div className="eyes-img">
        <img src={avatar.eyes.url} alt="body" />
      </div>
      <div className="nose-img">
        <img src={avatar.nose.url} alt="body" />
      </div>
      <div className="mouth-img">
        <img src={avatar.mouth.url} alt="body" />
      </div>
      <div className="clothing-img">
        <img src={avatar.clothing.url} alt="body" />
      </div>
      <div className="facialHair-img">
        <img src={avatar.facialHair.url} alt="body" />
      </div>
    </div>

  );
}

export default Avatar;
