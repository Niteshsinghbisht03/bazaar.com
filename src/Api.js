
import axios from 'axios';

export function getdata(id) {
  return axios.get('https://dummyjson.com/products/' + id).then(function(response){
    return response.data;
  });
    }
export function getAlldata() {
  return axios.get('https://dummyjson.com/products').then(function(response) {
    return response.data.products;
  });
}