const stringSplitter = (str, separator) => {
    if (!str.length) {
      return [];
    }
  
    str = Array.from(str)
    
    let miniStr;
    for (let i=0; i < str.length; i++) {  
      if (str[i] === separator) {    
        miniStr = str.slice(0, i);
        miniStr = miniStr.join('');
        str = str.slice(i+1).join('');
      }
    }
    
    if (!miniStr) {
      miniStr = str.join('')
      str = ''
    }
  
    return [miniStr, ...stringSplitter(str, separator)];
  }
  console.log(stringSplitter('02/20/2020', '/'))