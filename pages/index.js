import Head from 'next/head'
import Layout from '../src/layout';
import Index from '../src/home/index';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Criósfera, Clima y Seguridad Hídrica</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <Index />
    </Layout>
  )
}
