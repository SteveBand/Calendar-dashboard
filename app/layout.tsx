"use client";

import "@/styles/globals.scss";
import "@/styles/main.scss";
import { ReduxProvider } from "@/lib/ReduxProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
