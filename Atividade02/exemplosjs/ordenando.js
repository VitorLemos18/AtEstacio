
const swap = (array, pos1, pos2) => {
    [array[pos1], array[pos2]] = [array[pos2], array[pos1]];
  };
  

  const shuffle = (array, numSwaps) => {
    for (let i = 0; i < numSwaps; i++) {
      const pos1 = Math.floor(Math.random() * array.length);
      const pos2 = Math.floor(Math.random() * array.length);
      swap(array, pos1, pos2);
    }
  };
  
  const bubble_sort = (array) => {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
          swap(array, j, j + 1);
        }
      }
    }
  };
  

  const selection_sort = (array) => {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
      swap(array, i, minIndex);
    }
  };
  

  const quick_sort = (array, start, end) => {
    if (start < end) {
      const pivotIndex = partition(array, start, end);
      quick_sort(array, start, pivotIndex - 1);
      quick_sort(array, pivotIndex + 1, end);
    }
  };
  

  const partition = (array, start, end) => {
    const pivot = array[end];
    let i = start - 1;
  
    for (let j = start; j < end; j++) {
      if (array[j] <= pivot) {
        i++;
        swap(array, i, j);
      }
    }
  
    swap(array, i + 1, end);
    return i + 1;
  };

  function add() {
    var valorInput = document.getElementById('valor')
    var listaValores = document.getElementById('valores')

    var node = document.createElement('li')
    var textNode = document.createTextNode(valorInput.value)

    node.appendChild(textNode)
    listaValores.appendChild(node)
}

function ordenar() {
    var listaValores = document.getElementById('valores')
    var listaAlgoritmo = document.getElementById('algoritmo')

    var valores = Array.from(listaValores.children).map((item) =>
        eval(item.innerHTML)
    )

    var algoritmo =
        listaAlgoritmo.options[listaAlgoritmo.selectedIndex].value
    if (algoritmo === 'bubble_sort') {
        bubble_sort(valores)
    } else if (algoritmo === 'selection_sort') {
        selection_sort(valores)
    } else if (algoritmo === 'quick_sort') {
        quick_sort(valores, 0, valores.length - 1)
    }

    listaValores.innerHTML = valores
        .map((item) => `<li>${item}</li>`)
        .reduce((acc, curr) => acc + curr, '')
}

function misturar() {
    var listaValores = document.getElementById('valores')

    var valores = Array.from(listaValores.children).map((item) =>
        eval(item.innerHTML)
    )

    shuffle(valores, valores.length * 2)

    listaValores.innerHTML = valores
        .map((item) => `<li>${item}</li>`)
        .reduce((acc, curr) => acc + curr, '')
}