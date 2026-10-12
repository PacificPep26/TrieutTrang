const SITE = 'https://dulichtrieutrang.com';
const DESC = 'Du Lịch Triều Trang – Tour xe Jeep, thuê ATV, cưỡi lạc đà, đà điểu, trượt cát tại Bàu Trắng (Hòa Thắng, Lâm Đồng). Hotline 0979 391 234.';

export const metadata = {
  metadataBase: new URL(SITE),
  title: 'Du Lịch Triều Trang | Tour Jeep, ATV Bàu Trắng Mũi Né',
  description: DESC,
  keywords: ['Du lịch Triều Trang', 'Triều Trang', 'Bàu Trắng', 'tour jeep Bàu Trắng', 'thuê ATV Bàu Trắng', 'Mũi Né', 'đồi cát trắng'],
  alternates: { canonical: '/' },
  openGraph: { type: 'website', url: SITE, siteName: 'Du Lịch Triều Trang', title: 'Du Lịch Triều Trang | Tour Jeep, ATV Bàu Trắng', description: DESC, images: ['/images/jeep.jpg'], locale: 'vi_VN' },
  icons: { icon: '/icon.png', apple: '/apple-icon.png' },
};

// Business info for Google (name, phone, address, Facebook)
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TouristAttraction',
  name: 'Du Lịch Triều Trang',
  url: SITE,
  image: `${SITE}/icon.png`,
  telephone: '+84979391234',
  address: { '@type': 'PostalAddress', streetAddress: 'Bàu Trắng, thôn Hồng Lâm', addressLocality: 'Xã Hòa Thắng', addressRegion: 'Lâm Đồng', addressCountry: 'VN' },
  sameAs: ['https://www.facebook.com/bautrangdoicatmuine'],
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
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
