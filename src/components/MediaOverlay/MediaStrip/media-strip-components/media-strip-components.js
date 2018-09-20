
import React from 'react';
import PropTypes from 'prop-types';
import { faAngleLeft, faAngleRight } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Responsive from 'react-responsive';
import './media-strip-components.scss';
import { ViewportWidth } from '../../constants';


/**
 * Generic media strip arrow
 *
 * @param icon
 * @param disabled
 * @param onClick
 * @returns {MediaStripArrow}
 * @constructor
 */

const MediaStripArrow = ({ icon, disabled, onClick }) => (
  <Responsive minWidth={ViewportWidth.MD_MIN}>
    <button type="button" className="MediaStrip--arrow" onClick={onClick} disabled={disabled}>
      <FontAwesomeIcon icon={icon} size="2x" />
    </button>
  </Responsive>
);

MediaStripArrow.propTypes = {
  icon: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string,
  ]).isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};


/**
 * Previous arrow
 *
 * Disabled logic borrowed from:
 * https://github.com/FormidableLabs/nuka-carousel/blob/master/src/default-controls.js
 *
 * @param previousSlide
 * @param currentSlide
 * @param slideCount
 * @returns {MediaStripPreviousArrow}
 * @constructor
 */

export const MediaStripPreviousArrow = ({ previousSlide, currentSlide, slideCount }) => (
  <MediaStripArrow icon={faAngleLeft} onClick={previousSlide} disabled={currentSlide === 0 || slideCount === 0} />
);

MediaStripPreviousArrow.propTypes = {
  previousSlide: PropTypes.func.isRequired,
  currentSlide: PropTypes.number.isRequired,
  slideCount: PropTypes.number.isRequired,
};


/**
 * Next arrow
 *
 * Disabled logic borrowed from:
 * https://github.com/FormidableLabs/nuka-carousel/blob/master/src/default-controls.js
 *
 * @param nextSlide
 * @param currentSlide
 * @param slidesToScroll
 * @param slideCount
 * @returns {MediaStripNextArrow}
 * @constructor
 */

export const MediaStripNextArrow = ({ nextSlide, currentSlide, slidesToScroll, slideCount }) => (
  <MediaStripArrow icon={faAngleRight} onClick={nextSlide} disabled={currentSlide + slidesToScroll >= slideCount} />
);

MediaStripNextArrow.propTypes = {
  nextSlide: PropTypes.func.isRequired,
  currentSlide: PropTypes.number.isRequired,
  slidesToScroll: PropTypes.number.isRequired,
  slideCount: PropTypes.number.isRequired,
};