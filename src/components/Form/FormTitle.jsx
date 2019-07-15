import React from 'react';
import PropTypes from 'prop-types';

const FormTitle = ({ title, desc }) => {
  return (
    <div className="bk-formTitle">
      {title && <div className="bk-formTitle_main">{title}</div>}
      {desc && <div className="bk-formTitle_desc">{desc}</div>}
    </div>
  );
};

FormTitle.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default FormTitle;