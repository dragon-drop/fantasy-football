import { Mongo } from 'meteor/mongo';

export const Accounts = new Mongo.Collection('accounts');
export const Players = new Mongo.Collection('players');
