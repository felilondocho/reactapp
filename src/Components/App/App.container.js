import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { logOut } from '../../actions/actions';
import App from './App.component'

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => (
  bindActionCreators({ logOut }, dispatch)
);

export default (connect(mapStateToProps, mapDispatchToProps)(App));