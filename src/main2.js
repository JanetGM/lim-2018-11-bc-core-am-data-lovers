// Funcion de tenplates para mi campeones
/* global array, arrayKeys, newArrayKeys*/
const array = Object.values(LOL.data);
const arrayKeys = Object.values(array[0]);
const newArrayKeys = Object.keys(arrayKeys[12]);
const newStats = Object.values(array);
newStats;
const conteinerChampions = document.getElementById('list-champions');
const templateListChampions = (array) => {
  let championsList = [];
  console.log(championsList);
  let newchampionList = [];
  conteinerChampions.value = '';
  for (let i = 0; i < array.length; i++) 
    championsList.push(Object.assign({}, array[i]));

  for (let i = 0; i < championsList.length; i++) {
    newchampionList.push(

      `<div class='blog-card'>   
            <a class='card' id='${championsList[i].id}' href='#modal${i}'>
            <img class='img-1'src='campeones/${championsList[i].name}.PNG'><br>
            <div class='layer'>
            <img class='img-2' src='imagenes/escudo.PNG'>
            <h2 class='txt-1'>${championsList[i].name}</h2><br>
            <h3 class='txt-2'>"${championsList[i].title}"</h3><br>
            </div></a>
            </div>

        <section class='modal-window' id='modal${i}'>
            <div class='modal-champions' id='${championsList[i].id}'> 
            <a href='#' title='Close' class='modal-close'>X</a>
            <img class='img-modal'src='anima/${championsList[i].name}.JPG'>
            <h1 class='modal-text'><img class='img-modal2'src='imagenes/guerra.PNG'><br>${championsList[i].name}</h1>
            <h3 class='modal-text2'>"${ championsList[i].title}"</h3>
            <p class='modal-text3'>${ championsList[i].blurb}<br>
            <br>Sus roles son: ${ championsList[i].tags}.</p>
            <h4 class='modal-text4'>Tabla estadistica por rango de niveles de los atributos mas importantes de los campeones:</h4>
            <table class='table'>
              <tr class='col'>
                <th class='col'> Stats </th>
                <th class='row'> Per Level </th>
                <th class='col'> Level. 1 </th>
                <th class='col'> Level. 6 </th>
                <th class='col'> Level. 12 </th>
                <th class='col'> Level. 18 </th>
              </tr>
              <tr class='col'>
                <td class='text-row col'>${ newArrayKeys[0]}</td>
                <td class='col'>${ championsList[i].stats.hpperlevel}</td>
                <td class='col'>${ championsList[i].stats.hp}</td>
                <td class='col'>${window.lol.statFunction(6, array, 1)}</td>
                <td class='col'>${window.lol.statFunction(12, array, 1)}</td>
                <td class='col'>${window.lol.statFunction(18, array, 1)}</td>
              </tr>
              <tr class='col'>
                <td class='text-row col'>${ newArrayKeys[2]}</td>
                <td class='col'>${ championsList[i].stats.mpperlevel}</td>
                <td class='col'>${ championsList[i].stats.mp}</td>
                <td class='col'>${window.lol.statFunction(6, array, 2)}</td>
                <td class='col'>${window.lol.statFunction(12, array, 2)}</td>
                <td class='col'>${window.lol.statFunction(18, array, 2)}</td>
              </tr>
              <tr class='col'>
                <td class='text-row col'>${ newArrayKeys[5]}</td>
                <td class='col'>${ championsList[i].stats.armorperlevel}</td>
                <td class='col'>${ championsList[i].stats.armor}</td>
                <td class='col'>${window.lol.statFunction(6, array, 3)}</td>
                <td class='col'>${window.lol.statFunction(12, array, 3)}</td>
                <td class='col'>${window.lol.statFunction(18, array, 3)}</td>
              </tr>
              <tr  class='col'>
                <td class='text-row col'>${ newArrayKeys[7]}</td>
                <td class='col'>${ championsList[i].stats.spellblockperlevel}</td>
                <td class='col'>${ championsList[i].stats.spellblock}</td>
                <td class='col'>${window.lol.statFunction(6, array, 4)}</td>
                <td class='col'>${window.lol.statFunction(12, array, 4)}</td>
                <td class='col'>${window.lol.statFunction(18, array, 4)}</td>
              </tr>
              <tr  class='col'>
                <td class='text-row col'>${ newArrayKeys[10]}</td>
                <td class='col'>${ championsList[i].stats.hpregenperlevel}</td>
                <td class='col'>${ championsList[i].stats.hpregen}</td>
                <td class='col'>${window.lol.statFunction(6, array, 5)}</td>
                <td class='col'>${window.lol.statFunction(12, array, 5)}</td>
                <td class='col'>${window.lol.statFunction(18, array, 5)}</td>
              </tr>
            </table>
          </div>
        </section>`
    );
  }
  conteinerChampions.innerHTML = newchampionList.join('');
};

templateListChampions(array);

// filtrado
const valuesCheckBox = document.getElementsByClassName('checkbox');
const checkbox = Object.values(valuesCheckBox);
const filter = (arrayTag) => {
  let tagChoices = [];
  arrayTag.forEach(tag => {
    tag.addEventListener('change', () => {
      if (tag.checked === true) {
        tagChoices.push(tag.value);
      } else {
        let element = tagChoices.indexOf(tag.value);
        tagChoices.splice(element, 1);
        templateListChampions(array);
      }
      templateListChampions(window.lol.dataFilter(array, tagChoices));
    });
  });
};

filter(checkbox);

// Funcion de ordenar data de ascendente y descente
const sortBy = document.getElementById('order-champions');
sortBy.addEventListener('change', () => {
  const listenSortBy = sortBy.value;
  templateListChampions(window.lol.sortData(array, listenSortBy));
});
