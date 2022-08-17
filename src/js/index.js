
import { form, test, test2 } from './refs'


console.log(form);



const sendRequest = (e) => {
    e.preventDefault()

    console.log('123');
}


form.addEventListener('submit', sendRequest)
// my key user_id:29295172 

// var KEY = '29295172-fd47bcd787cfab0bc667791c6';
// var URL = "https://pixabay.com/api/?key=KEY+&q=red+roses";
// $.getJSON(URL, function(data){
// if (parseInt(data.totalHits) > 0)
//     $.each(data.hits, function(i, hit){ console.log(hit.pageURL); });
// else
//     console.log('No hits');
// });