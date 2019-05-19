
function consumableUsers() {
  const users = ['Alice', 'Bob'];
  let i = -1;
  users[Symbol.iterator] = () => {
    const { length } = users;
    return {
      next() {
        i += 1;
        if (i === length) {
          return { done: true };
        }
        return { value: `user: ${users[i]}`, done: false };
      },
    };
  };
  return users;
  
}

export {
  consumableUsers,
};