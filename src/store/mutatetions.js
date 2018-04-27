import state from './state.js'
const mutatetions = {
	getNews(state,data){
		state.allNews = data;
	},
	deleteNews(state,index){
		state.allNews.splice(index,1);
	}
};

export default mutatetions;
