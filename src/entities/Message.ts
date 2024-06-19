interface IMessage {
  content: string;
  date: Date;
}

export default class Message implements IMessage {
  content: string;
  date: Date;
  constructor(data: IMessage) {
    this.content = data.content;
    this.date = data.date;
  }
}
