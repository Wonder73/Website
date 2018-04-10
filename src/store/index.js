import Vue from 'vue';
import Vuex from 'vuex';

import state from './state.js';
import getters from './getters.js';
import actions from './actions.js';
import mutatetions from './mutatetions.js';

Vue.use(Vuex);

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutatetions,
	modules:{

	}
})

