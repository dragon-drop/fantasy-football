import React from 'react';

const Account = ({ account }) => (
  <div>
    <h1>Account ({account.id}) - £{account.budgetRemaining} to spend.</h1>
    
  </div>
);

export default Account;
