/*
 * Defines actions.
 */

const constants = {
  INIT_PLUGINS: 'INIT_PLUGINS',
  SET_APP_DB: 'SET_APP_DB',
  SET_NEO_DATASETS: 'SET_NEO_DATASETS',
  SET_NEO_SERVER: 'SET_NEO_SERVER',
  UPDATE_QUERY: 'UPDATE_QUERY',
  SET_QUERY_STATUS: 'SET_QUERY_STATUS',
  SET_NEO_ERROR: 'SET_NEO_ERROR',
  FINISH_QUERY: 'FINISH_QUERY',
  UPDATE_RESULTS: 'UPDATE_RESULTS',
  APPEND_RESULTS: 'APPEND_RESULTS',
  CLEAR_RESULT: 'CLEAR_RESULT',
  CLEAR_NEW_RESULT: 'CLEAR_NEW_RESULT',
  APP_SET_SELECTED_RESULT: 'APP_SET_SELECTED_RESULT',
  LOGIN_USER: 'LOGIN_USER',
  SET_USER_TOKEN: 'SET_USER_TOKEN',
  LOGOUT_USER: 'LOGOUT_USER',
  AUTH_ERROR: 'AUTH_ERROR',
  META_INFO_ERROR: 'META_INFO_ERROR',
  API_ERROR: 'API_ERROR',
  PLUGIN_SUBMIT: 'PLUGIN_SUBMIT',
  PLUGIN_SUBMITTING: 'PLUGIN_SUBMITTING',
  PLUGIN_SAVE_RESPONSE: 'PLUGIN_SAVE_RESPONSE',
  PLUGIN_SUBMIT_ERROR: 'PLUGIN_SUBMIT_ERROR',
  PLUGIN_RESPONSE_ERROR: 'PLUGIN_RESPONSE_ERROR',
  INIT_VIEWPLUGINS: 'INIT_VIEWPLUGINS',
  SKELETON_ADD: 'SKELETON_ADD',
  SKELETON_REMOVE: 'SKELETON_REMOVE',
  SKELETON_OPEN: 'SKELETON_OPEN',
  SKELETON_CLOSE: 'SKELETON_CLOSE',
  SKELETON_NEURON_SHOW: 'SKELETON_NEURON_SHOW',
  SKELETON_NEURON_HIDE: 'SKELETON_NEURON_HIDE',
  SKELETON_NEURON_LOADING: 'SKELETON_NEURON_LOADING',
  SKELETON_NEURON_LOAD_ERROR: 'SKELETON_NEURON_LOAD_ERROR',
  SKELETON_SET_CAMERA_POSITION: 'SKELETON_SET_CAMERA_POSITION',
  SET_FULLSCREEN_VIEWER: 'SET_FULLSCREEN_VIEWER',
  CLEAR_FULLSCREEN_VIEWER: 'CLEAR_FULLSCREEN_VIEWER',
  CLEAR_ERRORS: 'CLEAR_ERRORS',
  CLEAR_NOTIFICATION: 'CLEAR_NOTIFICATION',
  NOTIFICATION: 'NOTIFICATION',
  NEUROGLANCER_OPEN: 'NEUROGLANCER_OPEN',
  NEUROGLANCER_CLOSE: 'NEUROGLANCER_CLOSE',
  NEUROGLANCER_NEURON_SHOW: 'NEUROGLANCER_NEURON_SHOW',
  NEUROGLANCER_NEURON_HIDE: 'NEUROGLANCER_NEURON_HIDE',
  NEUROGLANCER_NEURON_LOADING: 'NEUROGLANCER_NEURON_LOADING',
  NEUROGLANCER_NEURON_LOAD_ERROR: 'NEUROGLANCER_NEURON_LOAD_ERROR',
  NEUROGLANCER_NEURON_ADD: 'NEUROGLANCER_NEURON_ADD',
  NEUROGLANCER_NEURON_REMOVE: 'NEUROGLANCER_NEURON_REMOVE',
  NEUROGLANCER_NEURON_COORDINATES_LOADING: 'NEUROGLANCER_NEURON_COORDINATES_LOADING',
  NEUROGLANCER_NEURON_COORDINATES_LOAD_ERROR: 'NEUROGLANCER_NEURON_COORDINATES_LOAD_ERROR',
  NEUROGLANCER_LAYER_LOADING: 'NEUROGLANCER_LAYER_LOADING',
  NEUROGLANCER_LAYER_LOAD_ERROR: 'NEUROGLANCER_LAYER_LOAD_ERROR',
  NEUROGLANCER_LAYER_ADD: 'NEUROGLANCER_LAYER_ADD',
  NEUROGLANCER_LAYER_REMOVE: 'NEUROGLANCER_LAYER_REMOVE'
};
export default constants;
