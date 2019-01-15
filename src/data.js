// Funcion de ordenar asc y desc
const sortData = (data, sortBy) => {
  let newArrayFilter = [];
  for (let i = 0; i < data.length; i++)
    newArrayFilter.push(Object.assign({}, data[i]));
  newArrayFilter.sort(
    function(champion1, champion2) {
      if (champion1.name > champion2.name) {
        return 1;
      } if (champion1.name < champion2.name) {
        return -1;
      }
      return 0;
    }
  );
  if (sortBy === '01') {
    newArrayFilter.reverse();
  }
  return newArrayFilter;
};

// Funcion de de los 10 mejores campeones
const getTopTen = (data) => {
  const newArray = data.map(copyData => Object.assign({}, { name: copyData.name, attackdamage: copyData.stats.attackdamage, img: copyData.img }));
  let newArrayOrder = newArray.sort((higher, lessHiger) => {
    if (higher.attackdamage <= lessHiger.attackdamage) {
      return 1;
    } else {
      return -1;
    }
  });
  return newArrayOrder.slice(0, 10);
};

// Funcion de filtrado
const dataFilter = (data, tagChoices) => {
  const arr = data.filter(champion => {
    const newDataarray = [];
    tagChoices.forEach(options => {
      if (champion.tags.includes(options)) {
        newDataarray.push(true);
      } else {
        newDataarray.push(false);
      }
    });
    if (newDataarray.includes(false)) {
      return false;
    } else {
      return champion;
    }
  });
  return arr;
};

// Funcion de operacion de las estadisticas  por cada nivel de cada campeon
const statFunction = (num, array, stats) => {
  for (let i = 0; i < array.length; i++) {
    if (stats === 1) {
      return (parseFloat(array[i].stats.hp) + (parseFloat(array[i].stats.hpperlevel) * num)).toFixed(2);
    }
    if (stats === 2) {
      return (parseFloat(array[i].stats.mp) + (parseFloat(array[i].stats.mpperlevel) * num)).toFixed(2);
    }
    if (stats === 3) {
      return (parseFloat(array[i].stats.armor) + (parseFloat(array[i].stats.armorperlevel) * num)).toFixed(2);
    }
    if (stats === 4) {
      return (parseFloat(array[i].stats.spellblock) + (parseFloat(array[i].stats.spellblockperlevel) * num)).toFixed(2);
    }
    if (stats === 5) {
      return (parseFloat(array[i].stats.hpregen) + (parseFloat(array[i].stats.hpregenperlevel) * num)).toFixed(2);
    } else {
      return 0;
    }
  }
};
window.lol = {
  sortData,
  getTopTen,
  dataFilter,
  statFunction
};