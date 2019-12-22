import React from "react";
import PropTypes from "prop-types";

const Filters = props => {
  return (
    <section>
      <button
        data-name="blur"
        onClick={e => {
          props.onClick(e.target.attributes["data-name"].value);
        }}
      >
        Blur
      </button>
      <button
        data-name="brightness"
        onClick={e => {
          props.onClick(e.target.attributes["data-name"].value);
        }}
      >
        Brightness
      </button>
      <button
        data-name="invert"
        onClick={e => {
          props.onClick(e.target.attributes["data-name"].value);
        }}
      >
        Invert
      </button>
      <button
        data-name="grayscale"
        onClick={e => {
          props.onClick(e.target.attributes["data-name"].value);
        }}
      >
        Grayscale
      </button>
      <button
        data-name="reset"
        onClick={e => {
          props.onClick(e.target.attributes["data-name"].value);
        }}
      >
        reset
      </button>
    </section>
  );
};

Filters.propTypes = {
  onClick: PropTypes.func
};

export default Filters;
