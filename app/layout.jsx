export const metadata = {
  title: 'Bàu Cát Trắng | KDL Xe Địa Hình & Trải Nghiệm Mũi Né Cao Cấp',
  icons: '/favicon.svg',
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Be+Vietnam+Pro:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
