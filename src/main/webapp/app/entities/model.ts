export class BewegungVM {
  constructor(
    public datumerstellung?: Date,
    public datumbuchung?: Date,
    public art?: BewegungArtTyp,
    public stat?: BewegungStatusTyp,
    public jahrZuordnung?: number,
    public betrag?: number
  ) {

  }
}

export enum BewegungArtTyp {
  EINZAHLUNG_BEITRAG = 'Einzahlung Beitrag',
  EINZAHLUNG_ZULAGE= 'Einzahlung Zulage',
  EINZAHLUNG_KAPITALUEBERTRAG= 'Einzahlung Kapitalübertrag',
  EINZAHLUNG_VERSORGUNGSAUSGLEICH= 'Einzahlung Versorgungsausgleich',

  AUSZAHLUNG_BEITRAG = 'Auszahlung Beitrag',
  AUSZAHLUNG_ZULAGE = 'Auszahlung Zulage',
  AUSZAHLUNG_KAPITALUEBERTRAG = 'Auszahlung Kapitalübertrag',
  AUSZAHLUNG_VERSORGUNGSAUSGLEICH = 'Auszahlung Versorgungsausgleich',
}

export enum BewegungStatusTyp {
  ANGELEGT = 'angelegt',
  ABGERECHNET = 'abgerechnet'

}

export class MeldungVM {
  constructor(
    public datumangelegt?: Date,
    public datumverarbeitet?: Date,
    public art?: MeldungArtTyp,
    public stat?: MeldungStatusTyp,
    public jahrZuordnung?: number,
    public verfahren?: MeldungVerfahrenTyp,
    public meldung?: string
  ) {

  }
}

export enum MeldungStatusTyp {
  EINGANG_ANGELEGT = 'Import angelegt',
  EINGANG_IMPORTIERT_OHNE_FEHLER = 'Import ohne Fehler',
  EINGANG_IMPORTIERT_MIT_FEHLER = 'Import mit Fehlern',
  EINGANG_NICHT_IMPORTIERBAR = 'Import fehlerhaft',

  AUSGANG_ANGELEGT = 'Export angelegt',
  AUSGANG_EXPORTIERT_OHNE_FEHLER = 'Export ohne Fehler',
  AUSGANG_EXPORTIERT_NICHT_EXPORTIERBAR = 'Export fehlerhaft'
}

export enum MeldungArtZusyTyp {
  AZ01 = 'AZ01',
  AZ02 = 'AZ02',
  AZ03 = 'AZ03',

  ZA01 = 'ZA01',
  ZA02 = 'ZA02',
  ZA03 = 'ZA03',
  ZA04 = 'ZA04'
}
export enum MeldungArtRebsyTyp {
  MZ01 = 'MZ01'
}

export enum MeldungArtMavTyp {
  MI01 = 'MI01',

  IM01 = 'IM01'
}


export enum MeldungVerfahrenTyp {
  ZUSY = 'zusy',
  REBSY = 'rebsy',
  MAV = 'mav'
}

export enum MeldungArtTyp  {
  AZ01 = MeldungArtZusyTyp.AZ01,
  AZ02 = MeldungArtZusyTyp.AZ02,
  AZ03 = MeldungArtZusyTyp.AZ03,

  ZA01 = MeldungArtZusyTyp.ZA01,
  ZA02 = MeldungArtZusyTyp.ZA02,
  ZA03 = MeldungArtZusyTyp.ZA03,
  ZA04 = MeldungArtZusyTyp.ZA04,

  MZ01 = MeldungArtRebsyTyp.MZ01,

  MI01 = MeldungArtMavTyp.MI01,
  IM01 = MeldungArtMavTyp.IM01
}

export class BerechnungJahrVM {
  constructor(
    public jahr?: number,
    public imJahrBeitrag?: number,
    public imJahrBeitragNgz?: number,
    public imJahrZulage?: number,
    public fuJahrBeitrag?: number,
    public fuJahrBeitragNgz?: number,
    public fuJahrZulage?: number,
    public fuJahrBeizul?: number,
  ) {

  }
}

export class BerechnungVM {
  constructor(
    public berechnungJahre?: BerechnungJahrVM[],
  ) {

  }
}

export class VertragVM {
  constructor(
    public nr?: string,
    public beginnvertrag?: Date,
    public beginneinzahlphase?: Date,
    public beginnauszahlphase?: Date,
    public beginnrentenphase?: Date,
    public bewegungen?: BewegungVM[],
    public meldungen?: MeldungVM[]
  ) {

  }
}
