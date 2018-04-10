import state from './state.js'
const mutatetions = {
	getCount(state,data){
		console.log(data);
		state.count = data;
	}
};

export default mutatetions;