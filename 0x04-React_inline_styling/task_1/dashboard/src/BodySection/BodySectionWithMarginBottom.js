import React, { Component } from 'react'
import BodySection from './BodySection';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class BodySectionWithMarginBottom extends Component {
  render() {
    return (
      <div className={css(bodyStylesWithMargin.marginBottom)}>
        <BodySection {...this.props}/>
      </div>
    );
  }
}

const bodyStylesWithMargin = StyleSheet.create({
	marginBottom: {
		marginBottom: '40px'
	}
});

BodySectionWithMarginBottom. defaultProps = {
	children: <React.Fragment />
};

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ])
};

export default BodySectionWithMarginBottom;