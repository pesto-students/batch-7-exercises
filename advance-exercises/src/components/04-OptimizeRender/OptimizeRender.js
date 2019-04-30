/*
  Q4:
  - Modify <ListView> so that it only renders the list items that are visible!
  (i.e., The list should only have as many items as the window can show in the beginning.
    As you start scrolling down, more items are pushed to the array of list items.
    This will optimize RENDER as all the items will not get loaded initially.)

  - Render fewer rows as the size of the window changes (hint: Listen
    for the window's "resize" event).
*/

import React from 'react';
import PropTypes from 'prop-types';

// This is a function that takes a number and return a div
// with that number in english. The text in div has a color
// based on the number.
import * as RainbowListDelegate from './RainbowListDelegate';

class ListView extends React.Component {
  static propTypes = {
    numRows: PropTypes.number.isRequired,
    rowHeight: PropTypes.number.isRequired,
    renderRowAtIndex: PropTypes.func.isRequired,
  };

  render() {
    const { numRows, rowHeight, renderRowAtIndex } = this.props;
    const totalHeight = numRows * rowHeight;

    const items = [];

    let index = 0;
    while (index < numRows) {
      items.push(<li key={index}>{renderRowAtIndex(index)}</li>);
      index += 1;
    }

    return (
      <div style={{ height: '100vh', overflowY: 'scroll' }}>
        <div style={{ height: totalHeight }}>
          <ol>{items}</ol>
        </div>
      </div>
    );
  }
}

const OptimizeRender = () => (
  <ListView
    numRows={500}
    rowHeight={RainbowListDelegate.rowHeight}
    renderRowAtIndex={RainbowListDelegate.renderRowAtIndex}
  />
);

export default OptimizeRender;
