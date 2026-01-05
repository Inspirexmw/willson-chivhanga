import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <style>{`
        :root {
          --color-primary: #2D5A3D;
          --color-bg: #FAF9F6;
          --color-text: #2C2C2C;
        }
        
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap');
        
        .font-serif {
          font-family: 'Playfair Display', Georgia, serif;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        ::selection {
          background-color: #2D5A3D;
          color: white;
        }
      `}</style>
      <Header />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}