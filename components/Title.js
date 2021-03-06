/* @flow */

import React, { Component } from "react";
import { Text } from "react-native";
import { connectStyle } from "native-base-shoutem-theme";
import mapPropsToStyleNames from "native-base/src/Utils/mapPropsToStyleNames";

class Title extends Component {
  render() {
    return (
      <Text ref={c => (this._root = c)} {...this.props} />
    );
  }
}

Title.propTypes = {
  ...Text.propTypes,
  style: React.PropTypes.object
};

const StyledTitle = connectStyle("NativeBase.Title", {}, mapPropsToStyleNames)(
  Title
);
export { StyledTitle as Title };
