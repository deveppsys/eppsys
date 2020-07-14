export class BewegungDTO {
  constructor(
    public datumerstellung?: Date,
    public datumbuchung?: Date,
    public art?: string,
    public stat?: string,
    public betrag?: number
  ) {

  }
}
