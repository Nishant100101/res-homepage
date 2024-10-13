import { Arima } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Barber One",
  description: "Your all in one stop",
};

const arimaMadurai = Arima({
  weight: ["700"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={arimaMadurai.className}>{children}</body>
    </html>
  );
}
