import "./globals.css";
import { Logo } from "@/components/Logo";
import { AuthProvider } from "@/lib/contexts/AuthContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        {/* Logo in the top-left corner */}
        <div className="absolute top-4 left-4 z-10">
          <Logo />
        </div>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}