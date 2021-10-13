const arr = [1,'a','b',6,15];

     const numbersOnly = (val) => {
      if (typeof(val) === 'number') {  
        return val;
      }
    }

    const son = arr.filter(numbersOnly);
   console.log(son);