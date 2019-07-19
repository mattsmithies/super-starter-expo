import { connect } from 'react-redux';
import ActionCreator from 'src/actions';
import HomeScreen from 'src/screens/Home';
import { getAppStatus } from 'src/selectors/App';

const mapDispatchToProps = dispatch => ({
  updateAppState(update: Boolean) {
    dispatch(ActionCreator.stateUpdate(update));
  },
  exampleRequest() {
    dispatch(ActionCreator.exampleRequest());
  },
});

const mapStateToProps = state => ({
  status: getAppStatus(state),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
