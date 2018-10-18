'use strict';

const swap = function(array, firstIndex, secondIndex){
    let temp = array[firstIndex];
    array[firstIndex]  = array[secondIndex];
    array[secondIndex] = temp;
};

const selectionSort = function(array){
    for(let i = 0; i < array.length; i++){
        let min = i;
        for(let j = i+1; j < array.length; j++){
            if(array[j] < array[min]){
                min = j;
            }
        }
        swap(array, i, min);
    }
    return array;
};
const array = [3,2,10,1];
console.log('sorted array',selectionSort(array));