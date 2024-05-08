import React from 'react';
import './DeploymentBox.css'; // Import the CSS file for styling
import rocket from './rocket_image.png'

const DeploymentBox = () => {
  return (
    <div className="deployment-box-deploy">
      <img src={rocket} alt="Rocket" className="box-image-deploy" />
      <div className="text-container-deploy">
        <p className="box-text-deploy">"10 days"</p>
        <p className="box-subtext-deploy">"Staff Deployment"</p>
      </div>
    </div>
  );
}

export default DeploymentBox;
