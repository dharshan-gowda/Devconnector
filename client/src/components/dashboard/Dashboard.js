import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import { connect } from 'react-redux';
import Spinner from '../layout/spinner';
import { Link } from 'react-router-dom';
import { DashboardActions } from './DashboardActions';
import Experience from './Experience';
import Education from './Education';

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  profile: { profile, loading },
  auth: { user },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large text-primary'>Dashboard</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Welcome {user && user.name}
      </p>
      {profile !== null ? (
        <Fragment>
          <DashboardActions />
          <Experience experience={profile.experience} />
          <Education education={profile.education} />
          <div className='my-2'>
            <button className='btn btn-danger' onClick={deleteAccount}>
              <i className='fas fa-user-minus'></i>Delete my account
            </button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <p>You've not set up your profile, please add some info</p>
          <Link to='/create-profile' className='btn btn-primary my-1'>
            Create Profile
          </Link>
        </Fragment>
      )}
      {/*

      <h2 class='my-2'>Experience Credentials</h2>
      <table class='table'>
        <thead>
          <tr>
            <th>Company</th>
            <th class='hide-sm'>Title</th>
            <th class='hide-sm'>Years</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tech Guy Web Solutions</td>
            <td class='hide-sm'>Senior Developer</td>
            <td class='hide-sm'>02-03-2009 - 01-02-2014</td>
            <td>
              <button class='btn btn-danger'>Delete</button>
            </td>
          </tr>
          <tr>
            <td>Traversy Media</td>
            <td class='hide-sm'>Instructor & Developer</td>
            <td class='hide-sm'>02-03-2015 - Now</td>
            <td>
              <button class='btn btn-danger'>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 class='my-2'>Education Credentials</h2>
      <table class='table'>
        <thead>
          <tr>
            <th>School</th>
            <th class='hide-sm'>Degree</th>
            <th class='hide-sm'>Years</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Northern Essex</td>
            <td class='hide-sm'>Associates</td>
            <td class='hide-sm'>02-03-2007 - 01-02-2009</td>
            <td>
              <button class='btn btn-danger'>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

      <div class='my-2'>
        <button class='btn btn-danger'>
          <i class='fas fa-user-minus'></i>
          Delete My Account
        </button>
      </div> */}
    </Fragment>
  );
};

Dashboard.propTypes = {
  profile: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});
export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
