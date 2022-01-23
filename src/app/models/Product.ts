// ICI ON CREE UNE CLASSE

export class Product {
  private _id: number;
  private _name: string;
  private _status: boolean;

  constructor(id: number, name: string, status: boolean) {
    this._id = id;
    this._name = name;
    this._status = status;
  }

  /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Getter status
   * @return {boolean}
   */
  public get status(): boolean {
    return this._status;
  }

  /**
   * Setter id
   * @param {number} value
   */
  public set id(value: number) {
    this._id = value;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value;
  }

  /**
   * Setter status
   * @param {boolean} value
   */
  public set status(value: boolean) {
    this._status = value;
  }
}
