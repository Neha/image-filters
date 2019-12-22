import React, { useState } from 'react';
import Filters from '../Filters/Filters';
import PropTypes from 'prop-types';

const Image = props => {
  const [classes, setClasses] = useState([]);
  const imgName = props.imgName;

  function setFilter(className) {
    let _classes = Object.assign([], classes);
    if (className !== "reset") {
      if (!_classes.includes(className)) {
        _classes.push(className);
      } else {
        _classes.pop(className);
      }

      setClasses(_classes);
    } else {
      _classes = [];
      setClasses(_classes);
    }
  }

  return (
    <section>
      <div>
        <img src={imgName} className={classes.join(" ")} />
      </div>
      {imgName && <Filters onClick={setFilter} tabindex="1" />}
    </section>
  );
};

Image.propTypes = {
  imgName: PropTypes.string
};

export default Image;
