const swap = (arr, i, j) => {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

const givenArr = [101, 12, 92, 83, 5, 0, 3]

const bubbleSort = (arr) => {
    let isSorted = false
    while(!isSorted) {
        isSorted = true
        for(let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i+1]) {
                swap(arr, i, i+1)
                isSorted = false
            }
        }
    }
}

console.log(givenArr)

bubbleSort(givenArr)

console.log(givenArr)

