export default class GameSaving {
  constructor(id, created, name, level, points) {
    this.id = id;
    this.created = created;
    this.UserInfo = {};
    this.UserInfo.id = id;
    this.UserInfo.name = name;
    this.UserInfo.level = level;
    this.UserInfo.points = points;
  }
}

// const person = new GameSaving(3, 863875486, 'ivan', 12, 34000);
