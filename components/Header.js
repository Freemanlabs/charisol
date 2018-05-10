import Head from 'next/head'
export default (props) => (
  <Head>
    <title>{props.title}</title>
    <link rel="shortcut icon" href="/favicon.ico" />
      <meta charSet="utf-8" />     
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
            <meta name="description" content="Charisol" />
            <script src={`assets/js/jquery.min.js`} type="text/javascript"></script>
  </Head>
)