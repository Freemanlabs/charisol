import Head from 'next/head'
import stylesheet from '../styles/index.scss';

export default (props) => (
  <Head>
    <title>{props.title}</title>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <link rel="shortcut icon" href="/favicon.ico" />
      <meta charSet="utf-8" />     
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
            <meta name="description" content="Charisol" />
            <script src="../static/jquery.min.js" type="text/javascript" />
            <script src='https://cdnjs.cloudflare.com/ajax/libs/flexslider/2.7.0/jquery.flexslider.min.js' type="text/javascript" />
            <script src='../static/slideout.min.js' type="text/javascript" />
            <script src='../static/app.js' type='text/javascript' />
            <script src='../static/myscript.js' type="text/javascript" />
            <script src="../static/visibility.checker.js" type="text/javascript"></script>
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-115010352-1"></script>
            <meta name="theme-color" content="#ffffff" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
            <meta name="description" content="Charisol" />
            <link rel="apple-touch-icon" sizes="180x180" href="../static/icon/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="../static/icon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="../static/icon/favicon-16x16.png" />
            <style dangerouslySetInnerHTML={{ __html: 
            `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-115010352-1');`
            }} />
           
            <script dangerouslySetInnerHTML={{ __html: 
            `(function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:833073,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=')`
            }} />
  </Head>
)