export abstract class AbstractFavoriteListPart {
  title: string;
  abstract readonly type: string;

  public getTitle(): string {
    return this.title;
  }

  public setTitle(title: string) {
    this.title = title;
  }

  public getType(): string {
    return this.type;
  }

}
