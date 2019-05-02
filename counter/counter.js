function counter() {
  let counts = 0;
  return () => {
    counts += 1;
    return counts;
  };
}

export { counter };
