import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { logOut } from '../../actions/logInActions';
import App from './App.component'

const mapStateToProps = state => state.logIn;

const mapDispatchToProps = dispatch => (
  bindActionCreators({ logOut }, dispatch)
);

export default (connect(mapStateToProps, mapDispatchToProps)(App));