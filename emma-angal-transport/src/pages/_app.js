import { Sora } from "@next/font/google";
import '../styles/globals.css'

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={sora.className}>
      <Component {...pageProps} />
    </main>
  );
}
