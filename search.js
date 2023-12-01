//Introduction to Searching Algorithms
/* Notes
In computer science, searching algorithms refer to the methods and techniques used to locate specific elements within a data structure.
Whether it's searching for a particular name in a phone book, finding a specific value in a sorted list, or locating a specific record in a database, searching algorithms play a critical role in many areas of computing.

The choice of a searching algorithm often depends on the nature of the data being searched and the performance requirements of the application.
For example, some algorithms are designed for unsorted data, while others work best with sorted data.
Additionally, some algorithms are more efficient than others, with certain ones providing faster search times than others.

In this discussion, we will explore some of the most commonly used searching algorithms and their characteristics.
We will cover both the basic linear search algorithm as well as touch on more advanced techniques such as binary search, interpolation search, and hash-based search algorithms.
*/

//Linear Search
/* Notes
The simplest way to search is to look at every element in the data structure and check if that element matches the search criteria.
This is called Linear Search. Linear search, also known as sequential search, is one of the simplest search algorithms.
It involves evaluating every element in a data structure one by one until the desired element is found. 

Linear search is an algorithm that searches a list of elements in a sequential manner.
It starts at the beginning of the list and compares each element with the target element until either the target element is found or the end of the list is reached.

If the target element is found, the algorithm returns the index of the element.
If the element is not found, the algorithm returns -1.
*/
//Pseudocode for Linear Search:
/* Notes
Here is a sample pseudocode for linear search:
1    Start at the beginning of the collection.
2    Check if the current element matches the search criteria.
3    If a match is found, return the index of the element and stop searching.
4    If the end of the collection is reached without finding a match, return -1 to indicate that the element was not found.
5    Move to the next element in the collection and repeat steps 2-4 until a match is found or the end of the collection is reached.
*/
//Implementation of Linear Search:
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // target found at index i
        }
    }
    return -1; // target not found in array
}

// example usage:
const array = [3, 5, 2, 1, 6, 7];
const target = 2;
const result = linearSearch(array, target);
console.log(result); // output: 2 (index of target in array)  
/* Notes
In this example, the linearSearch() function takes an array arr and a target value to search for.
It iterates through the array using a for loop, checking each element in turn for a match with the target value using the === operator.
If a match is found, the function returns the index of the element where the match was found.
If no match is found after iterating through the entire array, the function returns -1 to indicate that the target value was not found in the array.

In summary, Linear search is a simple algorithm that is easy to understand and implement.
However, it may not be the best option for large data sets due to its O(N) time complexity.
Other search algorithms, such as binary search, may be more suitable for large data sets.

Linear Search is a sequential search over all elements, one at a time.
Every element is evaluated, and if a match is found, that particular element is returned.
Otherwise, the search continues until the end of the collection.
The time and space complexity is O(N), where N is the size of all elements in the data structure.
*/

//Binary Search
/* Notes
While linear search is a simple algorithm, there are more efficient searching algorithms that can be used for larger data sets.
One such algorithm is the Binary Search algorithm.
Binary Search is particularly useful when the data is already sorted.

The idea behind Binary Search is to divide the search interval in half at each step.
This is similar to how we might search a student directory for a name that starts with "T".
Rather than starting at the beginning or end of the list, we would start in the middle and eliminate half of the list with each comparison.

If the item we're searching for is greater than the middle value, we search in the right half of the data set.
Otherwise, we search in the left half. We continue to halve the available options until we find the item we're looking for.

The time complexity of Binary Search is O(log N), which is much faster than linear search's O(N), where N is the size of the data structure.
In the worst-case scenario, Binary Search will make log N comparisons.
*/
//Pseudocode for Binary Search:
/* Notes
Here are the steps for performing a binary search on a sorted array:
1    Set the low index to the first element in the array and the high index to the last element.
2    Calculate the middle index by taking the average of the low and high indices, rounded down to the nearest integer.
3    If the middle element matches the search criteria, return its index and exit the algorithm.
4    If the middle element is greater than the search criteria, set the high index to be one less than the middle index.
5    If the middle element is less than the search criteria, set the low index to be one greater than the middle index.
6    Repeat steps 2-5 until the search criteria is found or the low index is greater than the high index.
*/
//Implementation for Binary Search:
function binarySearch(arr, searchValue) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (arr[mid] === searchValue) {
            return mid;
        } else if (arr[mid] < searchValue) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;
}
/* Notes
In this implementation, the arr parameter is the sorted array to be searched and the searchValue parameter is the value to be searched for.
The function returns the index of the search value if it is found in the array, or -1 if it is not found.
*/

//Practice Problem for Binary Search
/* Notes
Here's a practice problem in JavaScript for implementing a binary search algorithm:

Suppose you are given an array of integers in sorted order.
Write a function binarySearch that takes in two parameters: a sorted array of integers and a target integer to search for in the array.
The function should return the index of the target integer if it exists in the array, or -1 if it does not.
*/
//Here is an example input and output:
const arr = [1, 3, 5, 7, 9, 11];
const target1 = 7;
console.log(binarySearch(arr, target)); // Output: 3
//And here is a possible implementation of the binarySearch function in JavaScript:
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
/* Notes
In this implementation, we keep track of the left and right endpoints of the search range using left and right variables, and we calculate the midpoint using the formula (left + right) / 2.
We then compare the target value to the value at the midpoint, and adjust the search range accordingly by updating either left or right.
We continue this process until either we find the target value or the search range is exhausted.
*/

//Interpolation Search
/* Notes
Interpolation Search is another searching algorithm that can be used to find an element in a sorted array.
It is an improvement over the Binary Search algorithm for datasets where the values are uniformly distributed.

Interpolation Search uses a formula to estimate the position of the desired element.
This formula assumes that the elements in the array are uniformly distributed.
If the elements are not uniformly distributed, Interpolation Search may not perform well.
*/
//Pseudocode for Interpolation Search
/* Notes
Here are the steps to perform an Interpolation Search:
1    Given an array of n elements, calculate the value of the target element to be found.
2    Set two pointers, low and high, to the first and last element of the array, respectively.
3    Calculate the position of the middle element using the formula: pos = low + ((target - arr[low]) * (high - low) / (arr[high] - arr[low]))
4    If the target element is found at position pos, return pos.
5    If the target element is greater than the element at position pos, update the low pointer to pos + 1 and repeat step 3.
6    If the target element is less than the element at position pos, update the high pointer to pos - 1 and repeat step 3.
7    If low becomes greater than high, the target element is not present in the array. Return -1.
*/
//Implementation of Interpolation Search:
function interpolationSearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high && target >= arr[low] && target <= arr[high]) {
        let pos = low + Math.floor(((target - arr[low]) * (high - low)) / (arr[high] - arr[low]));

        if (arr[pos] === target) {
            return pos;
        }

        if (arr[pos] < target) {
            low = pos + 1;
        } else {
            high = pos - 1;
        }
    }

    return -1;
}
//Note that the array must be sorted before using Interpolation Search.

//Hash-Based Search
/* Notes
Hash-based search, also known as hash table or hash map, is a search algorithm that uses a hash function to compute an index, or hash code, into an array of buckets or slots, where the desired value is expected to be found.
The idea behind the hash function is to transform the value being searched into a numerical value, which can be used as an index to directly access the corresponding bucket in the array.

The hash function must be carefully chosen to ensure that it distributes the values uniformly across the array, minimizing collisions, which occur when multiple values hash to the same index.
Collisions are resolved by a process called "chaining" or "open addressing", which involves storing the collided values in a linked list or probing for an empty slot, respectively.

The key advantage of hash-based search is its average-case time complexity of O(1), which means that searching for a value takes a constant amount of time, regardless of the size of the data set.
In practice, however, the worst-case time complexity can be as high as O(n), if all the values hash to the same bucket or there are many collisions.
*/
//Pseudocode for Hash-Based Search
/* Notes
Here are the basic steps for performing a hash-based search:
1   Choose a suitable hash function that maps the values to be searched to unique integers.

2   Create an array of buckets or slots, whose size is greater than or equal to the number of values to be searched.

3   For each value in the data set, apply the hash function to compute its index in the array, and store the value in the corresponding bucket.
    If a collision occurs, handle it by chaining or probing.

4   To search for a value, apply the hash function to compute its index in the array, and check if the value is in the corresponding bucket.
    If it is not found, either the value does not exist in the data set, or it has collided with other values in the same bucket, which must be searched sequentially.

5   To remove a value, search for it as above, and delete it from the linked list or mark it as deleted in the probing process.

6   To insert a value, search for it as above, and insert it into the linked list or the empty slot found in the probing process.

7   Periodically resize the array and rehash the values to ensure that the load factor, which is the ratio of the number of values to the size of the array, is kept within a certain range, typically between 0.5 and 1.5.
*/
//Implementation for Hash-Based Search:
const studentDatabase = {};

// Add some student data to the database
studentDatabase["John Doe"] = { id: 123, major: "Computer Science" };
studentDatabase["Jane Smith"] = { id: 456, major: "Biology" };
studentDatabase["Bob Johnson"] = { id: 789, major: "History" };

// Search for a student by name
function searchStudent(name) {
  if (studentDatabase.hasOwnProperty(name)) {
    return studentDatabase[name];
  } else {
    return "Student not found";
  }
}

// Example usage
console.log(searchStudent("John Doe")); // { id: 123, major: "Computer Science" }
console.log(searchStudent("Jane Smith")); // { id: 456, major: "Biology" }
console.log(searchStudent("Bob Johnson")); // { id: 789, major: "History" }
console.log(searchStudent("Alice Brown")); // "Student not found"
/* Notes
In this example, we're using a JavaScript object (which is essentially a hash table) to store student data.
We can add data to the hash table by assigning key-value pairs using bracket notation (e.g. studentDatabase["John Doe"] = { id: 123, major: "Computer Science" };).

To search for a student, we can simply check if the hash table has a property with the given name (e.g. if (studentDatabase.hasOwnProperty(name)) {...}).
If it does, we can return the corresponding value (i.e. the student data object). If not, we return a message indicating that the student was not found.

Note that hash-based search is most useful when you need to perform frequent lookups on a large data set.
If you only need to search the data once or twice, it may not be worth the overhead of building and maintaining a hash table.
*/

//Comparison of Common Search Algorithms
/* Notes
1    Linear Search: This is the simplest search algorithm that checks every element in the data structure and returns the first element that matches the search criteria. It has a time complexity of O(n) and is best suited for small datasets.
        Time complexity: O(n)
        Space complexity: O(1)
        Suitable for small datasets or unsorted arrays.

2    Binary Search: This algorithm is used for searching sorted arrays. It starts by comparing the search element with the middle element of the array. If the search element is smaller than the middle element, it searches in the left half of the array; otherwise, it searches in the right half. It has a time complexity of O(log n) and is much faster than linear search.
        Time complexity: O(log n)
        Space complexity: O(1)
        Suitable for sorted arrays or datasets.

3    Interpolation Search: This algorithm is used for searching sorted arrays where elements are uniformly distributed. It uses the position of the search element to estimate its position in the array. It has an average time complexity of O(log log n) for uniformly distributed data.
        Time complexity: O(log(log n)) on average, O(n) in the worst case.
        Space complexity: O(1)
        Suitable for datasets with uniformly distributed values.

4    Hash-Based Search: This algorithm is used for searching unordered datasets using a hash table. It converts the search key into a hash value that points to the index of the corresponding element in the table. It has an average time complexity of O(1) for successful searches and O(n) for unsuccessful searches.
        Time complexity: O(1) average case, O(n) worst case.
        Space complexity: O(n)
        Suitable for datasets with unique keys and where fast access to specific elements is required.

Each search algorithm has its own advantages and disadvantages, and the best one to use depends on the specific requirements of your use case.
For example, if you have a small unsorted dataset, a linear search may be the most efficient choice.
If you have a sorted dataset, a binary search may be a better option. If you have uniformly distributed values, interpolation search may be more suitable, and if you have a dataset with unique keys and need fast access to specific elements, a hash-based search may be the most appropriate.
*/

//Real-world Examples for Search Algorithms
/* Notes
Here are some real-world examples of searching:
1    Web search: When you use a search engine like Google or Bing, you're performing a search on the internet to find information.

2    Database search: When you search for a particular record or information within a large database, such as searching for a customer's information in a customer database or searching for a product's inventory in a product database.

3    Library catalog search: When you search for a specific book, author, or subject in a library catalog to find a book or other material.

4    Job search: When you search for job listings that match your skills and qualifications on job search websites or company job boards.

5    E-commerce search: When you search for a particular product or category of products on an e-commerce website to find something to buy.

6    Social media search: When you search for a particular user, post, or hashtag on social media platforms like Twitter, Instagram, or Facebook.

7    Medical record search: When you search for a patient's medical history or information within a large database of medical records.

8    Criminal record search: When you search for information about a particular criminal or crime within a large database of criminal records.
These are just a few examples, but searching is used in many different fields and industries to find information, products, or data.
*/

//How to Choose the Best Algorithm for a Given Problem
/* Notes
Choosing the best algorithm for a given problem depends on various factors such as the size of the data set, the type of data, the frequency of the search, and the desired efficiency of the search.
Here are some considerations for selecting the best algorithm:
1    Size of the data set: For a small data set, any algorithm would work fine. However, for large data sets, algorithms with a lower time complexity would be more efficient.

2    Type of data: Depending on the type of data, different search algorithms may be more suitable. For example, binary search works best on sorted arrays, while hash-based search works best on unsorted arrays.

3    Frequency of the search: If the search is a one-time operation, then choosing a slower algorithm may be acceptable. However, if the search is a frequent operation, then choosing a faster algorithm may be necessary.

4    Desired efficiency of the search: Depending on the application, different levels of efficiency may be required. If a fast search is a top priority, then choosing an algorithm with the lowest time complexity would be ideal. On the other hand, if memory usage is a concern, then choosing an algorithm with lower space complexity would be more important.
In general, it is important to analyze the requirements of the problem before selecting the best algorithm.
By considering the above factors, you can choose the most appropriate search algorithm that best suits the given problem.
*/