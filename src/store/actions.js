import axios from 'axios'
import state from './state.js'
import mutatetions from './mutatetions.js'

const actions = {
	getNews({commit,state}){
		axios.post('./static/php/news.php?opeartion=showAll').then(function (res){
			var data = JSON.stringify(res.data);
      // console.log(data.replace('/\\\"/g','\''));
      // console.log(typeof data);
      // console.log(typeof JSON.parse(data));
      // this.newNews = JSON.parse(data);
		 	commit(mutatetions.getNews(state,JSON.parse(data)));
		})
	},
	deleteNews({commit,state},params){
		commit(mutatetions.deleteNews(state,params.index));
	}
};

export default actions;
