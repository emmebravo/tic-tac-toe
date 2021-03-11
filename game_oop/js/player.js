class Player {
  constructor(name, id, color, active = false) {
    this.name = name;
    this.id = id;
    this.color = color;
    this.active = active;
    this.tokens = this.createTokens(5);
  }

  // Determine which tokens havn't been played yet
  get unusedTokens() {
    const unusedTokens = this.tokens.filter((token) => !token.played);
    return unusedTokens;
  }

  //Pull one of the player's unused tokens to be used as the next active token
  get activeToken() {
    return this.unusedTokens[0];
  }

  // Each Player will get 5 tokens
  createTokens(numOfTokens) {
    const tokens = [];
    for (let i = 0; i < numOfTokens; i++) {
      const token = new Token(this, i);
      tokens.push(token);
    }
    return tokens;
  }
}
