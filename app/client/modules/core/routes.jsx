import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './containers/main_layout';
import Home from './containers/home';
import Account from './containers/account';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);
  
  FlowRouter.route('/', {
    name: 'home',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Home />)
      });
    }
  });
  FlowRouter.route('/team/:_id', {
    name: 'account',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Account />)
      });
    }
  });
}
