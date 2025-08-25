import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <div className="settings">
      <h1>Settings</h1>
      <p>Configure your app preferences.</p>
      <div className="settings-list">
        <div className="setting-item">
          <h3>Notifications</h3>
          <p>Manage your notification preferences</p>
        </div>
        <div className="setting-item">
          <h3>Theme</h3>
          <p>Choose your preferred theme</p>
        </div>
        <div className="setting-item">
          <h3>Language</h3>
          <p>Select your language</p>
        </div>
      </div>
      <Link to="/" className="back-link">
        Back to Home
      </Link>
    </div>
  );
};

export default Settings;
