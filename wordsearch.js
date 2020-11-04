
  // const horizontalJoin = letters.map(ls => ls.join(''))
  // for (l of horizontalJoin) {
  //     if (l.includes(word)) return true
  // }

    
  const wordSearch = (letters, word) => {
    let row = "";
    let column = "";
    for (let i = 0; i < letters[0].length; i++) {
      for (let j = 0; j < letters[i].length; j++) {
        row += letters[i][j];
        column += letters[j][i];
        if (row.includes(word)) {
          return true;
        } else if (column.includes(word)) {
          return true;
        }
      }
    }
    return false;
  };


  module.exports = wordSearch;
