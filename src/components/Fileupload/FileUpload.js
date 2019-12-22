import React from 'react';
import PropTypes from 'prop-types';

const FileUpload = props => {
  return (
    <section>
      <div>
        <label>Upload your Image</label>
        <input
          type="file"
          onChange={event => {
            props.onChange(URL.createObjectURL(event.target.files[0]));
          }}
        />
      </div>
    </section>
  );
};

FileUpload.propTypes = {
  onChange: PropTypes.func
};

export default FileUpload;
