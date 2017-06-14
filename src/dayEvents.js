import checkStatus from './checkStatus.js';
import parseJSON from './parseJSON.js';


var dataEventsAll;

var dayEvents = function(){
fetch(`http://128.199.53.150/events`)
		.then(checkStatus)
		.then(parseJSON)
     	.then((data) => {
    	dataEventsAll = data;
    	return (data);
    });

}
export default dayEvents;
export {dataEventsAll};