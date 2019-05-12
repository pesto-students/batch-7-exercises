class ConsumableUsers {
  constructor() {
    this.users = ["Alice", "Bob"];
    this.consumed = false;
  }
  nextUser() {
    const user = this.users.shift();
    if (!user) {
      this.consumed = true;
      return undefined;
    }
    return `user: ${user}`;
  }
  done() {
    return this.consumed;
  }
}
export { ConsumableUsers };
