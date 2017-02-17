import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { render } from 'react-dom';
import gql from 'graphql-tag';

class Layout extends React.Component {
    constructor(props) {
        super(props)
        const {error, content} = props;
    }

    render() {
        console.log('rendering now')
        const {error, content, client } = this.props;
        return (
            <ApolloProvider client={client}>
                <div>
                    <div>
                        {content()}
                    </div>
                </div>
            </ApolloProvider>
        )
    }
}
export default Layout


