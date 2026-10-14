import MenuPage from '../../src/components/MenuPage/MenuPage';

export const metadata = {
  title: 'Thực Đơn | Du Lịch Triều Trang',
  description: 'Thực đơn món Việt, đặc sản dông cát, gà đồi cát, lẩu, cơm, mì và nước uống tại Du Lịch Triều Trang, Bàu Trắng.',
  alternates: { canonical: '/menu' },
};

export default function Page() {
  return <MenuPage />;
}
