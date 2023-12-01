//Introduction to Sorting Algorithms
/* Notes
In the first part of this lesson, we will dive into the fascinating world of sorting algorithms.
While high-level programming languages offer built-in functions to sort collections, understanding how sorting algorithms work is essential for solving complex algorithmic problems with large datasets.
In this lesson, we will explore five different sorting algorithms and go behind the scenes to understand their inner workings.
Interestingly, different programming languages utilize different sorting algorithms - for example, C#, JavaScript, and Ruby all use the Quicksort algorithm, while Java relies on the Merge sort algorithm to sort collections.
By the end of this lesson, you'll have a deeper understanding of how these algorithms work and be better equipped to choose the best sorting algorithm for your specific needs.
*/
//The Concept of Sorting
/* Notes
Sorting is a fundamental operation in computer science that involves arranging elements of a data structure in a specific order.
The purpose of sorting algorithms is to transform an unsorted data structure into a sorted one, where the elements are arranged in ascending or descending order.
Sorting is crucial because it can significantly enhance the efficiency of searching, organizing, and analyzing data.

For instance, imagine you have a vast collection of customer data, and you want to analyze their purchases by date.
If the data is unsorted, you would need to manually search through each transaction to group the purchases by date, which could take a long time.
However, if the data is sorted by date, you can use an efficient searching algorithm to quickly organize the purchases by date with a few simple comparisons.

In this lesson, we will explore various common sorting algorithms and implement them using arrays and linked lists as our data structures of choice.
We will discuss the strengths and weaknesses of different algorithms, including their time and space complexities, and understand the trade-offs between them.
By comprehending how sorting works, you will be better prepared to select the appropriate sorting algorithm for your specific requirements.
*/
//Brute Force Approach to Sorting
/* Notes
Sorting is an essential operation in computer science, as it allows us to organize data in a specific order, making it easier to search, analyze, and process.
One way to sort an unsorted array is to create a new array of the same size, find the smallest element in the unsorted array and move it to the new "sorted" array.
We then find the second smallest element in the unsorted array and move it to the sorted array, and so on.
However, this brute force approach has a worst-case time and space complexity of O(N^2), making it impractical for sorting large datasets.

Fortunately, there are several efficient sorting algorithms that we can use instead.
In this lesson, we will explore five common sorting algorithms and their implementations in code.
By understanding the strengths and weaknesses of each algorithm, you will be better equipped to choose the most appropriate sorting algorithm for your needs.
*/
//Bubble Sort
/* Notes
The Bubble sort is a simple algorithm that looks at two elements and swaps them based on if the first element's value is greater than the other.
This method has O(N^2) worst-case time and space complexities.

Let’s look at an example.
Take the following array.

[0,7,3,4]

The algorithm will look at the first two values and compare them.
Zero is less than seven, so the algorithm will not swap them.
It will then look at seven and three.
Seven is greater than three so the algorithm will switch them.

[0,3,7,4]

It will find the same thing with seven and four.
The algorithm swaps them, and we are left with the following array.

[0,3,4,7]

The array is now sorted!
Bubble sort will continue to pass through the array N-1 times.
*/
//Here is a function that implements Bubble Sort to sort an array:
const bubbleSort = (arr) => {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}

bubbleSort([0, 7, 3, 4]) // [0,3,4,7]

//Selection Sort
/* Notes
The Selection Sort algorithm finds the smallest number in the unsorted array and then exchanges it with the element in the first position.
Then, it finds the second smallest element in the array and exchanges it with the element in the second position.
This process continues until all of the elements in the unsorted array have been checked and rearranged into a new sorted array.

This algorithm requires O(N^2) comparisons, so it should only be used on small files, but there is an important exception to this rule.
When sorting files with large records and small keys, the cost of exchanging records controls the running time.
In such cases, selection sort requires O(N) time since the number of exchanges is at most N.
*/
//Here is a function that uses Selection Sort to sort an array:
let selectionSort = (arr) => {
    let len = arr.length;

    // Loop through each item in the array
    for (let i = 0; i < len; i++) {
        let min = i;
        // Compare the current item with the other elements to find the min value
        for (let j = i + 1; j < len; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        // Swap the current item with the min value
        if (min !== i) {
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }

    return arr;
}

//Insertion Sort
/* Notes
The Insertion Sort algorithm starts by splitting the array into two parts: sorted and unsorted.
This is similar to how you might sort playing cards in your hand.
Then, the array values from the unsorted part are found, compared, sorted, and placed into the sorted part.

The algorithm will iterate from arr[1] to arr[n], where the current element, arr[i], is compared with the element before it, arr[i-1].
If the element at [i] is smaller than [i-1], the two elements are swapped.

The Big O notation for worst-case and average-case for insertion sort's time and space complexity is O(N^2).
*/
//Consider this example for insertion sorting:
const insertionSort = (nums) => {
    for (let i = 1; i < nums.length; i++) {
        let j = i - 1
        let temp = nums[i]
        while (j >= 0 && nums[j] > temp) {
            nums[j + 1] = nums[j]
            j--
        }
        nums[j + 1] = temp
    }
    return nums
}
/* Notes
The code for insertion sort has two indices, i and j.
i tracks our outer loop and represents the current element we are sorting.
It starts at 1 instead of 0, because when we only have one element in our newly sorted array, there is nothing to sort.
Therefore, we start at the second element and compare it against the first. The second index, j, starts at i-1 and iterates from right to left until it finds the correct location to place the element.
Along the way, we move each element by one to make room for the new element being sorted.

Insertion Sort is similar to Selection Sort.
However, in a Selection Sort, sorted elements are found in output order stay in place found.
In contrast, with Insertion Sort, the unsorted elements stay in place until the loop finds the correct place to insert the next unsorted element, while elements of the sorted region keep getting moved around.
But they both have the same average to worst-case Big-O notation complexities for space and time.

The best-case notation for insertion sort is O(N).
This is because most of the elements are already sorted there is less movement among the elements.
*/

//Merge Sort
/* Notes
Merge Sort is a "divide and conquer" algorithm.
This algorithm first divides the input array into two halves, then recursively calls itself to further divide each section into subarrays until there are only two numbers to compare.
Then, the two numbers are compared to another and merged.
All of the subarrays will be compared and merged until the entire array is sorted.

Time complexity of the Merge Sort is O(n*Log n) in all three cases (worst, average, and best), as Merge Sort always divides the array in two halves and takes linear time to merge the halves back together.
Space complexity is O(N). It requires equal amount of additional space as the unsorted array.
This makes the merge sort algorithm faster than the Selection, Bubble, and Insertion Sorts for large data sets, and has a very consistent performance.

So what are the disadvantages of Merge Sort?
It’s more complex than the other sorting algorithms and might not be the best algorithm for small datasets.
Consider an array of 50 items. There will be little difference in the time complexity when using a Merge Sort algorithm versus another sorting algorithm.
And for best-case scenarios, other simple algorithms like Bubble Sort have a space complexity O(1), whereas the merge sort will always have a space complexity of O(N).

There are two main approaches to using Merge Sort, either with an iterative function or a recursive function. 
*/
//Recursion
/* Notes
Here is a basic strategy for solving the merge sort recursively:

Merge Sort is a sorting algorithm that uses a "divide and conquer" approach to sort an array of elements.
The basic idea is to break the array down into smaller sub-arrays, sort those sub-arrays, and then merge them back together into a single, sorted array.

Here's a high-level overview of the Merge Sort algorithm:

    Divide the array into two sub-arrays of roughly equal size.
    Recursively sort each of the sub-arrays.
    Merge the two sorted sub-arrays back together into a single sorted array.

Let's break each of these steps down in more detail:

    Divide the array into two sub-arrays of roughly equal size.

To divide the array, we start by finding the middle index of the array.
We can do this by dividing the length of the array by 2 and rounding down to the nearest integer.
This gives us the middle index.

We then create two new sub-arrays, one that contains the elements from the start of the original array up to the middle index, and another that contains the elements from the middle index to the end of the original array.

    Recursively sort each of the sub-arrays.

To sort each of the sub-arrays, we simply apply the same merge sort algorithm to each sub-array.
We keep dividing each sub-array in half until we reach sub-arrays of size 1, which are already sorted by definition.

    Merge the two sorted sub-arrays back together into a single sorted array.

To merge the two sorted sub-arrays back together, we start by comparing the first element of each sub-array.
We add the smaller of the two elements to a new array, and move to the next element in the sub-array that contained the smaller element.
We repeat this process, comparing the next element of each sub-array and adding the smaller one to our new array, until we've gone through both sub-arrays and added all the elements to the new array.
*/
//Let's look at this in code:
function mergeSortRecursive(arr) {
    // base case: if array is empty or has only one element, it is already sorted
    if (arr.length < 2) {
        return arr;
    }

    // divide the array into two sub-arrays of roughly equal size
    const middleIndex = Math.floor(arr.length / 2);
    const left = arr.slice(0, middleIndex);
    const right = arr.slice(middleIndex);

    // recursively sort each of the sub-arrays
    const sortedLeft = mergeSortRecursive(left);
    const sortedRight = mergeSortRecursive(right);

    // merge the two sorted sub-arrays back together into a single sorted array
    const mergedArr = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < sortedLeft.length && rightIndex < sortedRight.length) {
        if (sortedLeft[leftIndex] < sortedRight[rightIndex]) {
            mergedArr.push(sortedLeft[leftIndex]);
            leftIndex++;
        } else {
            mergedArr.push(sortedRight[rightIndex]);
            rightIndex++;
        }
    }

    return mergedArr.concat(sortedLeft.slice(leftIndex), sortedRight.slice(rightIndex));
}
/* Notes
This implementation uses recursion to sort the sub-arrays.
The base case is when the array has fewer than two elements, in which case it is already sorted and can be returned as is.
If the array has two or more elements, it is divided into two sub-arrays of roughly equal size using the slice() method.
The mergeSortRecursive() function is called recursively on each sub-array to sort them.

Once the two sub-arrays are sorted, they are merged back together into a single sorted array using a while loop.
The loop compares the first elements of each sub-array and adds the smaller one to a new array.
The index of the sub-array that contributed the element is then incremented, and the process is repeated until one sub-array is completely processed.
Any remaining elements in the other sub-array are then added to the new array.
Finally, the new array is returned as the fully merged and sorted array.
*/
//Iterative
/* Notes
Let's adjust our instructions to account for an iterative approach to merge sort.
    Divide the array into two sub-arrays of roughly equal size:
        Initialize a stack data structure to keep track of the sub-arrays to process.
        Push the original array onto the stack.
        While the stack is not empty, pop the top array from the stack and divide it into two sub-arrays of roughly equal size.
        Push the two sub-arrays onto the stack.
    Iteratively sort each of the sub-arrays:
        While the stack is not empty, pop the top array from the stack.
        If the size of the array is 1, it is already sorted, so we can continue to the next step.
        Otherwise, divide the array into two sub-arrays of roughly equal size, and push them onto the stack.
    Merge the two sorted sub-arrays back together into a single sorted array:
        While there are at least two arrays on the stack, pop the top two arrays from the stack.
        Merge the two arrays together using the standard merge procedure (i.e., compare the first elements of each array and add the smaller element to a new array).
        Push the merged array back onto the stack.
        If there is only one array left on the stack, this array is the sorted array, so we can return it.
Note that the iterative implementation uses a stack data structure to keep track of the sub-arrays to process, instead of the recursive calls used in the original algorithm.
This allows us to avoid the overhead of function calls and recursion, which can be expensive in terms of memory and performance.
*/
//Let's explore the iterative implementation further and look at some example code:
function mergeSortIterative(arr) {
    // if array is empty or has only one element, it is already sorted
    if (arr.length < 2) {
        return arr;
    }

    // create an array to hold sorted sub-arrays
    var sortedArr = [];

    // divide the original array into sub-arrays of size 1 and add to sorted array
    for (var i = 0; i < arr.length; i++) {
        sortedArr.push([arr[i]]);
    }

    // merge sub-arrays pairwise until one sub-array remains
    while (sortedArr.length > 1) {
        var tmpArr = [];

        // merge pairs of sub-arrays
        for (var j = 0; j < sortedArr.length; j += 2) {
            var left = sortedArr[j];
            var right = sortedArr[j + 1];

            // if only one sub-array exists (i.e. end of array is reached), add to tmpArr
            if (!right) {
                tmpArr.push(left);
                break;
            }

            var merged = [];

            // compare elements in the sub-arrays and add the smaller element to merged
            while (left.length && right.length) {
                if (left[0] < right[0]) {
                    merged.push(left.shift());
                } else {
                    merged.push(right.shift());
                }
            }

            // add any remaining elements from left or right sub-array to merged
            merged = merged.concat(left, right);

            // add merged sub-array to tmpArr
            tmpArr.push(merged);
        }

        // set sortedArr to the new array of merged sub-arrays
        sortedArr = tmpArr;
    }

    // the final element in sortedArr is the fully merged and sorted array
    return sortedArr[0];
}

//Quick Sort
/* Notes
Quicksort is also a divide and conquer algorithm like Merge Sort.
It follows the following steps:
    An element is chosen. This is called the pivot and is usually the first or the last item in the array.
    The elements are then rearranged so the left elements are smaller than the pivot value and the right elements are large than the pivot value.
    This is called partitioning.
    This process is repeated for the elements to the left and the right until the array is completely sorted.
To accomplish this we will use three functions named swap, partition, and sort.
These three functions will make up the solution to the algorithm.
*/
//Swap
/* Notes
The swap function accepts three parameters:
the array that contains the items that need to be swapped, and the indexes of the items that you want to swap.
*/
//Example Implementation:
const swap = (arr, left, right) => {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp
}
//Partition
/* Notes
The partition function also takes three parameters:
the array you are sorting, and indexes representing the range of elements you want to sort.
This function will loop through the partition of the array and move items to either side of the pivot, returning the index of where the pivot should be positioned within the array.
*/
//Example Implementation:
const partition = (arr, left, right) => {
    // middle element is the pivot
    let pivot = arr[Math.floor((right + left) / 2)],
        i = left, //left pointer
        j = right; //right pointer

    while (i <= j) {
        // from left to right, find index that's element is greater than pivot
        while (arr[i] < pivot) {
            i++;
        }
        //from right to left, find index that its element is smaller than pivot
        while (arr[j] > pivot) {
            j--;
        }
        if (i <= j) {
            // swap elements so they are on the correct side of the pivot
            swap(arr, i, j);
            i++;
            j--;
        }
    }

    // return the position of the pivot within the partition
    return i;
}
//Sort
/* Notes
Now, we create the recursive function that pulls the pieces together.
This function will accept the array that needs to be sorted, along with the partition's left and right indexes that need sorting.
*/
const sort = (arr, left, right) => {
    
    var index;
    if (arr.length > 1) {
        // get index of pivot
        index = partition(arr, left, right);
        // if left partition is not empty, sort it
        if (left < index - 1) { 
            sort(arr, left, index - 1);
        }
        // if right partition is not empty, sort it
        if (index < right) { 
            sort(arr, index, right);
        }
    }
    return arr;
}
//To use the function we would use the following:
let arr = [0,6,3,5,10,1]
sort(arr, 0, arr.length - 1)


