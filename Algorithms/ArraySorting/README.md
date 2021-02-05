# Sorting Algorithms

Visualization: 
https://visualgo.net/en
https://www.toptal.com/developers/sorting-algorithms


The ideal sorting algorithm would have the following properties:

- Stable: Equal keys aren’t reordered.
- Operates in place, requiring O(1) extra space.
- Worst-case O(n·lg(n)) key comparisons.
- Worst-case O(n) swaps.
- Adaptive: Speeds up to O(n) when data is nearly sorted or when there are few unique keys.

There is no algorithm that has all of these properties, and so the choice of sorting algorithm depends on the application.

All comparison sorts can only have a best case time-complexity of O(nlogn) or worse.
See: https://en.wikipedia.org/wiki/Comparison_sort

But there are non-comparison sort (most work on numbers) (like Radix sort O(nk), Counting sort O(n+k)), which has better time-complexity.