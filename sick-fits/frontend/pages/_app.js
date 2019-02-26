import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo';
import withData from '../lib/withData';
import Page from '../components/Page';

class theApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = Component.getInitialProps(ctx);
    }
    // expose the query to the user
    pageProps.query = ctx.query;

    return { pageProps };
  }

  render() {
    const { Component, apollo, pageProps } = this.props;

    return (
      <ApolloProvider client={apollo}>
        <Container>
          <Page>
            <Component {...pageProps} />
          </Page>
        </Container>
      </ApolloProvider>
    );
  }
}

export default withData(theApp);
