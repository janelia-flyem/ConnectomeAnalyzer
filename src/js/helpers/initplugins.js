/*
 * Loads plugin modules and names from plugin directory.
*/

"use strict";

import C from "../reducers/constants"

// import plugins (could probably write a pre-processing script)
import CommonConnectivity from '../components/plugins/CommonConnectivity.react';
import FreeForm from '../components/plugins/FreeForm.react';
import SimpleConnections from '../components/plugins/SimpleConnections.react';
import RankedTable from '../components/plugins/RankedTable.react';
import NeuronsInROIs from '../components/plugins/NeuronsInROIs.react';
import ROIsIntersectingNeurons from '../components/plugins/ROIsIntersectingNeurons.react';
import ROIConnectivity from '../components/plugins/ROIConnectivity.react';
import NeuronMeta from '../components/plugins/NeuronMeta.react';
import Autapses from '../components/plugins/Autapses.react';
import Distribution from '../components/plugins/Distribution.react';
import Completeness from '../components/plugins/Completeness.react';

const pluginList = [NeuronsInROIs, NeuronMeta, ROIConnectivity, RankedTable, SimpleConnections, ROIsIntersectingNeurons, CommonConnectivity, FreeForm, Autapses, Distribution, Completeness];

export default function loadPlugins(store) {
    store.dispatch({type: C.INIT_PLUGINS, pluginList: pluginList, reconIndex: 7});
}

