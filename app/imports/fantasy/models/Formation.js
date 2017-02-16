import { Positions } from '../lib/Positions';

/* FORMATION
 * Value Object
 * ---------
  GK: Number,
  DF: Number,
  MD: Number,
  FW: Number
  */

export class Formation {
  constructor(formation) {
    this.GK = formation? 1 : 0;
    Positions.forEach((position, i) => {
      if (i > 0) {
        this[position] = formation? parseInt(formation.split('-')[i-1], 10) : 0;
      }
    });
  }
};
