import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Page from './Page';
import * as pageActions from '../../actions/PageActions';


function mapStateToProps(state) {
  return {
    page: state.page,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
