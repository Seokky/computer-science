# Алгоритм быстрой сортировки

<table>
  <tr>
    <td>Худший случай:</td>
    <td>O(n^2)</td>
  </tr>
  <tr>
    <td>Лучший случай:</td>
    <td>O(n log n)</td>
  </tr>
</table>

```
  function quickSort(array) {
    if (array.length <= 1) {
      return array
    }

    const pivotIndex = Math.floor(array.length / 2)
    const pivot = array[pivotIndex]
    const less = []
    const greater = []

    array.forEach((item, index) => {
      if (index === pivotIndex) {
        return
      }

      if (item <= pivot) {
        less.push(item)
      } else {
        greater.push(item)
      }
    })

    return quickSort(less).concat(pivot, quickSort(greater))
  }
```

Проверку `<=` нужно делать для того, чтобы включить равные по значению элементы, но не являющиеся pivot'ом, в результирующий массив.

`less` и `greater` можно было бы заполнить посредством `Array.prototype.filter`, но тогда придется проитерироваться по массиву два раза вместо одного.
