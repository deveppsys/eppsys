import { VertragArtTyp } from 'app/shared/model/enumerations/vertrag-art-typ.model';
import { VertragStatusTyp } from 'app/shared/model/enumerations/vertrag-status-typ.model';

export interface IVertragEpp {
  id?: number;
  art?: VertragArtTyp;
  status?: VertragStatusTyp;
}

export class VertragEpp implements IVertragEpp {
  constructor(public id?: number, public art?: VertragArtTyp, public status?: VertragStatusTyp) {}
}
