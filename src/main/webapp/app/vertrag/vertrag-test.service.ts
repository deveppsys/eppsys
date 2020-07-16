import { Injectable } from '@angular/core';
import {
  BewegungArtTyp,
  BewegungStatusTyp,
  BewegungVM,
  MeldungArtTyp,
  MeldungStatusTyp,
  MeldungVM,
  VertragVM
} from "app/entities/model";

@Injectable({
  providedIn: 'root'
})
export class VertragTestService {

  constructor() { }

  generateVertrag(): VertragVM {
    const vertragVM = new VertragVM(
      'VTNNR12345/99',
      new Date( '2010-01-01'),
      new Date( '2010-01-01'),
      new Date( '2030-01-01'),
      new Date( '2050-01-01'),
      this.getBewegungen(),
      this.getMeldungen(),
    );
    return vertragVM;
  }

  private getBewegungen(): BewegungVM[] {
    const bewegungen: BewegungVM[] = [];
    // Einzahlungen
    let d = new Date('2010-01-01');
    for( let c=0; c<120; c++ ) {
      bewegungen.push(
        this.getBewegung(
          d,
          BewegungArtTyp.EINZAHLUNG_BEITRAG,
          BewegungStatusTyp.ABGERECHNET,
          d.getFullYear(),
          100.00
        )
      );
      if( d.getFullYear() > 2010 &&
          d.getMonth() === 4 ) {
        bewegungen.push(
          this.getBewegung(
            new Date( d.getFullYear() + '-05-15' ),
            BewegungArtTyp.EINZAHLUNG_ZULAGE,
            BewegungStatusTyp.ABGERECHNET,
            d.getFullYear() - 1,
            154.00
          )
        )
      }
      d =  new Date(d.setMonth(d.getMonth()+1));
    }
    return bewegungen;
  }

  /**
   *
   * @param datum
   * @param art
   * @param stat
   * @param betrag
   */
  private getBewegung(
    datum: Date,
    art: BewegungArtTyp,
    stat: BewegungStatusTyp,
    jahr: number,
    betrag: number
  ): BewegungVM {
    const datumangelegt = new Date(datum);
    let datumGebucht = new Date(datum);
    datumGebucht = new Date(datumGebucht.setDate(datumGebucht.getDate() + 2));
    const bewegung = new BewegungVM(
      datumangelegt,
      datumGebucht,
      art,
      stat,
      jahr,
      betrag
    );
    return bewegung;
  }

  /**
   *
   */
  private getMeldungen(): MeldungVM[] {
    const meldungen: MeldungVM[] = [];
    for( let c=2011; c<2020; c++ ) {

      meldungen.push(
        this.getMeldung(new Date(c + '-03-10'), new Date(c + '-03-10'), MeldungArtTyp.AZ01, MeldungStatusTyp.AUSGANG_EXPORTIERT_OHNE_FEHLER, c - 1, '')
      );
      if ( c !== 2012 ) {
        meldungen.push(
          this.getMeldung(new Date(c + '-03-11'), new Date(c + '-03-11'), MeldungArtTyp.ZA02, MeldungStatusTyp.EINGANG_IMPORTIERT_OHNE_FEHLER, c - 1, '')
        );
      } else {
        meldungen.push(
          this.getMeldung(new Date(c + '-03-11'), new Date(c + '-03-11'), MeldungArtTyp.AZ01, MeldungStatusTyp.EINGANG_IMPORTIERT_MIT_FEHLER, c - 1, '')
        );
        meldungen.push(
          this.getMeldung(new Date(c + '-03-20'), new Date(c + '-03-20'), MeldungArtTyp.AZ01, MeldungStatusTyp.AUSGANG_EXPORTIERT_OHNE_FEHLER, c - 1, '')
        );
        meldungen.push(
          this.getMeldung(new Date(c + '-03-21'), new Date(c + '-03-21'), MeldungArtTyp.ZA02, MeldungStatusTyp.EINGANG_IMPORTIERT_OHNE_FEHLER, c - 1, '')
        );
      }

    }
    meldungen.push(
      this.getMeldung(
        new Date( '2020-03-10'),
        null,
        MeldungArtTyp.AZ01,
        MeldungStatusTyp.AUSGANG_ANGELEGT,
        2019,
        ''
      )
    );
    return meldungen;
  }

  /**
   *
   */
  private getMeldung(
    datumangelegt: Date,
    datumverarbeitet: any,
    art: MeldungArtTyp,
    stat: MeldungStatusTyp,
    jahr: number,
    text: string
  ): MeldungVM {
    const meldung = new MeldungVM(
      datumangelegt,
      datumverarbeitet,
      art,
      stat,
      jahr,
      text
    );
    return meldung;
  }
}
