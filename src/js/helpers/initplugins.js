/*
 * Loads plugin modules and names from plugin directory.
*/

import { initPlugins, initViewPlugins } from 'actions/app';

// search the plugins directory and load all the files found there.
const pluginList = [];
const plugins = require('@neuprint/queries');
const viewPlugins = require('@neuprint/views');

Object.keys(plugins).forEach(key => {
  pluginList.push(plugins[key]);
});

export default function loadPlugins(store) {
  store.dispatch(initPlugins(pluginList));
  store.dispatch(initViewPlugins(viewPlugins));
}
