export class NoteUpsertRequest {
  private _title: string;
  private _content?: string;

  constructor(title: string, content?: string) {
    this._title = title;
    this._content = content;
  }

  public static fromObject(
    {title, content}: { title: string, content?: string},
  ): NoteUpsertRequest {
    return new NoteUpsertRequest(title, content);
  }

  get title() {
    return this._title;
  }

  get content() {
    return this._content;
  }
}
