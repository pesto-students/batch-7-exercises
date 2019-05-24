function tiles({ small, big, target }) {
  const SMALL_LENGTH = 1;
  const BIG_LENGTH = 5;
  const numOfBigTilesRequired = parseInt(target / 5, 10);
  let remainingLength = 0;
  if (numOfBigTilesRequired >= big) {
    remainingLength = target - big * BIG_LENGTH;
  } else {
    remainingLength = target - numOfBigTilesRequired * BIG_LENGTH;
  }
  if (remainingLength > small * SMALL_LENGTH) {
    return false;
  }
  return true;
}

export { tiles };
