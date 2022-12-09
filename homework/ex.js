function amountOfPages(summary){
    let result = '';
    let n = 0;

    for (let i = 1; i <= summary; i++) {
      result += i;
      if (result.length === summary) {
        n = i;
        break;
      }
    }

    return n;
  }

  console.log(amountOfPages(5));

  let e= '1234567891011121314151617';
  console.log(e.length);