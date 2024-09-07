# Алгоритм бинарного поиска

<table>
  <tr>
    <td>Худший случай:</td>
    <td>O(log n)</td>
  </tr>
  <tr>
    <td>Лучший случай:</td>
    <td>O(log n)</td>
  </tr>
</table>

```
  function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
      const midIndex = Math.floor((left + right) / 2);
      const midItem = array[midIndex];

      if (midItem === target) {
        return midIndex;
      }

      if (midItem < target) {
        left = midIndex + 1;
      } else {
        right = midIndex - 1;
      }
    }

    return -1;
  }
```
