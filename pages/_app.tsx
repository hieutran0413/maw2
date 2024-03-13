import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import * as React from 'react';

const myCustomFontRegular = localFont({
  src: '../fonts/NoiGroteskTrial-Regular.otf',
  weight: '400',
  style: 'normal',
  display: 'swap',
  variable: '--Noi Grotesk Trial',
});

const myCustomFontMedium = localFont({
  src: '../fonts/NoiGroteskTrial-Medium.otf', // Replace with your bold font file
  weight: '500',
  style: 'normal',
  display: 'swap',
  variable: '--Noi Grotesk Trial',
});

const myCustomFontBold = localFont({
  src: '../fonts/NoiGroteskTrial-Bold.otf', // Replace with your bold font file
  weight: '700',
  style: 'normal',
  display: 'swap',
  variable: '--Noi Grotesk Trial',
});




export default function MyApp({ Component, pageProps }: AppProps) {
  // Set the CSS variables on <body>
  React.useEffect(() => {
    document.body.classList.add(myCustomFontRegular.variable);
    document.body.classList.add(myCustomFontBold.variable);
    document.body.classList.add(myCustomFontMedium.variable);
  }, []);
  return <Component {...pageProps} />;
}

