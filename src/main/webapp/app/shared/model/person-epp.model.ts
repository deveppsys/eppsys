export interface IPersonEpp {
  id?: number;
  nachname?: string;
  vorname?: string;
  geburtsname?: string;
  geburtsort?: string;
}

export class PersonEpp implements IPersonEpp {
  constructor(
    public id?: number,
    public nachname?: string,
    public vorname?: string,
    public geburtsname?: string,
    public geburtsort?: string
  ) {}
}
