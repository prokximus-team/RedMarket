import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Red Market</title>
				<meta name="description" content="Generated by Syed Adeeb" />
				<link rel="icon" href="/icon.png" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
