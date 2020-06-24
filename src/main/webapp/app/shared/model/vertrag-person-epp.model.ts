import { VertragPersonArtTyp } from 'app/shared/model/enumerations/vertrag-person-art-typ.model';

export interface IVertragPersonEpp {
  id?: number;
  art?: VertragPersonArtTyp;
  vertragId?: number;
  personId?: number;
}

export class VertragPersonEpp implements IVertragPersonEpp {
  constructor(public id?: number, public art?: VertragPersonArtTyp, public vertragId?: number, public personId?: number) {}
}
