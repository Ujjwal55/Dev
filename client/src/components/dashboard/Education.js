import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { deleteEducation } from '../../actions/profile';
import { connect } from 'react-redux';
import Moment from 'react-moment';
const Education = ({ education, deleteEducation }) => {
    const educations = education.map((edu) => (
        <tr key={edu._id}>
            <td>{edu.school}</td>
            <td className='hide-sm'>{edu.degree}</td>
            <td>
                <Moment format='DD/MM/YYYY'>{edu.from}</Moment> -{' '}
                {edu.to === null ? (
                    'Now'
                ) : (
                    <Moment format='DD/MM/YYYY'>{edu.to}</Moment>
                )}
            </td>
            <td>
                <button
                    onClick={() => deleteEducation(edu._id)}
                    className='btn btn-danger'
                >
                    Delete
                </button>
            </td>
        </tr>
    ));
    return (
        <Fragment>
            <h2 className='my-2'>Education Credentials</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th style={{backgroundColor: "#262625", color: "#fff"}}>School</th>
                        <th className='hide-sm' style={{backgroundColor: "#262625", color: "#fff"}}>Degree</th>
                        <th className='hide-sm' style={{backgroundColor: "#262625", color: "#fff"}}>Years</th>
                        <th style={{backgroundColor: "#262625", color: "#fff"}}/>
                    </tr>
                </thead>
                <tbody>{educations}</tbody>
            </table>
        </Fragment>
    );
};

Education.propTypes = {
    education: PropTypes.array.isRequired,
    deleteEducation: PropTypes.func.isRequired,
};

export default connect(null, { deleteEducation })(Education);
