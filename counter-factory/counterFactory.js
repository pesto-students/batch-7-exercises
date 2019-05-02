function counterFactory() {
  var count = 0;
  return {
    increment: function() {
      return (count = count + 1);
    },
    decrement: function() {
      return (count = count - 1);
    }
  };
}

export { counterFactory };
