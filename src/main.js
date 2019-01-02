// Array de la data de Lol//
const array = Object.values(LOL.data);
// Funcion de tenplates para mi campeones
const templateListChampions = (list) => {
  let championsList = '';
  list.forEach((array) => {
    const templateList =
          `<div class='blog-card'>
          <img src='${array.img}'><br>
          <h2>${array.name}</h2><br>
          <h3>${array.title}</h3><br>
          </div>`;
    championsList += templateList;
  });
  document.getElementById('list-champions').innerHTML = championsList;
};

// Funcion de ordenar data de ascendente y descente
const sortBy = document.getElementById('order-champions');
sortBy.addEventListener('change', () => {
  const listenSortBy = sortBy.options[sortBy.selectedIndex].value;
  templateListChampions(window.data.sortData(array, parseInt(listenSortBy[0]), parseInt(listenSortBy[1])));
});

const marksman = document.getElementById('Marksman').value;
const valuesCheckBox = document.getElementsByTagName('checkbox');
const fuctionFilterCarry = lol.filterType(array, marksman); 
eventMarksman.addEventListener('change', () => {
  let championsList2 = '';
  fuctionFilterCarry.forEach((array) => {
    const templateList2 =
          `<div class='>
          <img src="${array.img}"><br>
          <h2>${array.name}</h2><br>
          <h3>${array.title}</h3><br>
          </div> `;
    championsList2 += templateList2;
  });
  document.getElementById('champions').innerHTML = championsList2;
});

