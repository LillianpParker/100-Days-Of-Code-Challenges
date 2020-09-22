// Bubble sort the following list: 4, 7, 2, 5, 6

array = [4, 7, 2, 5, 6]

function bubble(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j - 1] > array[j]) {
                let num = array[j - 1]
                array[j - 1] = array[j]
                array[j] = num
            }
        }
    }
  return array;
}

//And again!

arr = [72, 108, 12, 37, 66, 10095, 679]

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j <arr.length; j++){
            if (arr[j-1] > arr[j]) {
            let num = arr[j-1]
            arr[j-1] = arr[j]
            arr[j] = num
            }
        }
    }
    return arr
}
