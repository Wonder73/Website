import axios from 'axios'
import state from './state.js'
import mutatetions from './mutatetions.js'

const actions = {
	getCount({commit,state}){
		axios.get('./config/php/demo.php').then(function (res){
		 	commit(mutatetions.getCount(state,res.data));
		})

	}
};

export default actions;
