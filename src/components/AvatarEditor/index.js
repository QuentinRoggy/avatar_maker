import Icon from './Icon';
import './style.scss';

function AvatarEditor() {
  return (
    <div className="AvatarEditor">
      <Icon type="body" />
      <Icon type="hair" />
      <Icon type="eyes" />
      <Icon type="nose" />
      <Icon type="mouth" />
      <Icon type="clothing" />
      <Icon type="facialHair" />

    </div>
  );
}

export default AvatarEditor;
