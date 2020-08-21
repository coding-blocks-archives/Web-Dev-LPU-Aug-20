import React from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

export default () => {
  const [username, setUsername] = React.useState('null');
  const [profile, setProfile] = React.useState(null);

  const loadProfile = async () => {

  }

  return <div className="container">
    <div className="row">
      <div className="col-12 d-flex justify-content-center">
        <h1>Profile Viewer</h1>
      </div>
      <div className="col-12 d-flex justify-content-center">
        <input 
          placeholder="github username" 
          type="text" 
          value={username}
          onChange={(e) => {
            setUsername(e.target.value)
          }}
        />
        <button className="btn btn-primary" onClick={loadProfile}>
          Find Profile
        </button>
      </div>
    </div>
  </div>
}
