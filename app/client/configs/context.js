import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {ReactiveDict} from 'meteor/reactive-dict';
import {Tracker} from 'meteor/tracker';
import ApolloClient from 'apollo-client';
import { meteorClientConfig } from 'meteor/apollo';

export default function () {
  return {
    Meteor,
    Client: new ApolloClient(meteorClientConfig),
    FlowRouter,
    LocalState: new ReactiveDict(),
    Tracker
  };
}
