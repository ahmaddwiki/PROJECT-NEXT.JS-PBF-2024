import "./globals.css";
import { Inter } from "next/font/google";
// import Footer from "@/components/footer/Footer";
import Footer from "../components/footer/Footer";
// import { ThemeContextProvider } from "@/context/ThemeContext";
import { ThemeContextProvider } from "../context/ThemeContext";

// import ThemeProvider from "@/providers/ThemeProvider";
import ThemeProvider from "../providers/ThemeProvider";

// import AuthProvider from "@/providers/AuthProvider";
import AuthProvider from "../providers/AuthProvider";


// import Navbar from "@/components/navbar/Navbar";
import Navbar from "../components/navbar/Navbar";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LandsSport Blog",
  description: "The Best Blog Shoes!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ThemeContextProvider>
            <ThemeProvider>
              <div className="container">
                <div className="wrapper">
                  <Navbar />
                  {children}
                  <Footer />
                </div>
              </div>
            </ThemeProvider>
          </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
