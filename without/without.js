function without(array1, array2) {
  const map = new Map(Object.entries({ ...array1 }));
  array1.map((ele) => {
    if (Object.is(ele, -0)) {
      map.set('-0', ele);
    } else if (typeof ele === 'object') {
      map.set(ele.toString(), ele);
    } else {
      map.set(ele, ele);
    }
    return ele;
  });

  return array2.filter((ele) => {
    if (Object.is(ele, -0)) {
      return !map.has('-0');
    }
    if (typeof ele === 'object') {
      return !map.has(ele.toString());
    }
    return !map.has(ele);
  });
}

export { without };
