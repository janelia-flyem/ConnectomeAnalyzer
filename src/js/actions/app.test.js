import * as appActions from './app';
import C from '../reducers/constants';

describe('app Actions', () => {
  it('should create action to initialize plugins', () => {
    const expectedAction = {
      type: C.INIT_PLUGINS,
      pluginList: ['a', 'b']
    };
    expect(appActions.initPlugins(['a', 'b'])).toEqual(expectedAction);
  });
  it('should create action to initialize view plugins', () => {
    const expectedAction = {
      type: C.INIT_VIEWPLUGINS,
      plugins: { a: 'b' }
    };
    expect(appActions.initViewPlugins({ a: 'b' })).toEqual(expectedAction);
  });
  it('should create action to set app db', () => {
    const expectedAction = {
      type: C.SET_APP_DB,
      appDB: 'testDB'
    };
    expect(appActions.setAppDb('testDB')).toEqual(expectedAction);
  });
  it('should create an action to clear errors', () => {
    const expectedAction = {
      type: C.CLEAR_ERRORS
    };
    expect(appActions.clearErrors('')).toEqual(expectedAction);
  });
  it('should create an action to set full screen', () => {
    const expectedAction = {
      type: C.SET_FULLSCREEN_VIEWER,
      viewer: 'testViewer'
    };
    expect(appActions.setFullScreen('testViewer')).toEqual(expectedAction);
  });
  it('should clear full screen', () => {
    const expectedAction = {
      type: C.CLEAR_FULLSCREEN_VIEWER
    };
    expect(appActions.clearFullScreen()).toEqual(expectedAction);
  });
  it('should create action to launch notification', () => {
    const expectedAction = {
      type: C.NOTIFICATION,
      notification: 'test'
    };
    expect(appActions.launchNotification('test')).toEqual(expectedAction);
  });
  it('should create action to clear notification', () => {
    const expectedAction = {
      type: C.CLEAR_NOTIFICATION
    };
    expect(appActions.clearNotification()).toEqual(expectedAction);
  });
});
