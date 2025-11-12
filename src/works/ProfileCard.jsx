import React from "react";
import "./ProfileCard.css";

const ProfileCard = () => {
  return (
    <div className="form-wrapper">
      <div className="form-card">

        {/* IMAGE SECTION */}
        {/* <div className="image-box">
          <img
            src="https://dspncdn.com/a1/media/originals/82/ce/61/82ce61418005fe0714818db1d792f7b7.jpg"
            alt="profile"
          />
        </div>
 */}
        {/* FORM SECTION */}
        <div className="form-content">
          <h2>Registration Form</h2>

          <form>
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>

            <div className="form-group">
              <label>Gender</label>
              <select>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div className="form-group">
              <label>Date of Birth</label>
              <input type="date" />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter email" />
            </div>

            <div className="form-group">
              <label>Mobile</label>
              <input type="text" placeholder="Enter mobile" />
            </div>

            <div className="form-group">
              <label>Customer ID</label>
              <input type="text" placeholder="Enter customer ID" />
            </div>

            <div className="form-group">
              <label>Membership</label>
              <select>
                <option>Classic</option>
                <option>Silver</option>
                <option>Gold</option>
              </select>
            </div>

            <div className="btn-row">
              <button type="button" className="cancel-btn">Cancel</button>
              <button type="submit" className="save-btn">Save</button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ProfileCard;