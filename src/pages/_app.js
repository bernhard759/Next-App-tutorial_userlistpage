import Layout from "@/components/Layout";
import { Inter } from 'next/font/google'
import "@/styles/globals.css";

// Google Font
const inter = Inter({ subsets: ['latin'] })

// App
export default function App({ Component, pageProps }) {
  return (
    <main className={inter.className}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </main>
  );
}
