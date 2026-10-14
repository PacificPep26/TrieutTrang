const t = (vi, en, ko, zh) => ({ vi, en, ko, zh });
const item = (id, name, price, note) => ({ id, name, price, note });

export const menuUi = {
  eyebrow: t('ẨM THỰC ĐỒI CÁT', 'DUNE DINING', '사막의 맛', '沙丘美食'),
  title: t('Thực Đơn Triều Trang', 'Trieu Trang Menu', '찌에우짱 메뉴', 'Triều Trang 菜单'),
  subtitle: t(
    'Món Việt đậm vị, phục vụ tại Bàu Trắng. Chọn từng nhóm để xem món và giá.',
    'Flavorful Vietnamese dishes served at Bau Trang. Choose a category to see dishes and prices.',
    '바우짱에서 즐기는 진한 베트남 요리. 카테고리를 선택해 메뉴와 가격을 확인하세요.',
    '在白沙湖享用地道越南风味。请选择分类查看菜品与价格。'
  ),
  back: t('Về trang chủ', 'Back to home', '홈으로', '返回首页'),
  call: t('Gọi đặt món', 'Call to order', '전화 주문', '电话点餐'),
  unitNote: t('Giá chưa bao gồm vé cổng và thuế.', 'Prices exclude entrance tickets and tax.', '가격에는 입장권과 세금이 포함되지 않습니다.', '价格不含门票和税费。'),
  illustrative: t('Hình ảnh minh họa', 'Illustrative image', '연출 이미지', '示意图片'),
};

export const menuCategories = [
  {
    id: 'noodles',
    image: '/images/menu/pho-bo.jpg',
    title: t('Cơm, Mì & Phở', 'Rice, Noodles & Pho', '밥·면·쌀국수', '米饭、面与河粉'),
    items: [
      item('pho-bo', t('Phở bò', 'Beef pho', '소고기 쌀국수', '牛肉河粉'), '40.000đ'),
      item('hu-tieu-bo', t('Hủ tiếu bò', 'Beef rice noodles', '소고기 후띠우', '牛肉粿条'), '40.000đ'),
      item('mi-nuoc-trung', t('Mì nước trứng', 'Egg noodle soup', '달걀 라면', '鸡蛋汤面'), '20.000đ'),
      item('mi-nuoc-bo', t('Mì nước bò', 'Beef noodle soup', '소고기 라면', '牛肉汤面'), '30.000đ'),
      item('mi-nuoc-muc', t('Mì nước mực', 'Squid noodle soup', '오징어 라면', '鱿鱼汤面'), '30.000đ'),
      item('mi-nuoc-thap-cam', t('Mì nước thập cẩm', 'Mixed noodle soup', '모둠 라면', '什锦汤面'), '50.000đ'),
      item('mi-xao-bo', t('Mì xào bò', 'Stir-fried noodles with beef', '소고기 볶음면', '牛肉炒面'), '50.000đ'),
      item('mi-xao-muc', t('Mì xào mực', 'Stir-fried noodles with squid', '오징어 볶음면', '鱿鱼炒面'), '50.000đ'),
      item('mi-xao-trung', t('Mì xào trứng', 'Stir-fried noodles with egg', '달걀 볶음면', '鸡蛋炒面'), '40.000đ'),
      item('mi-xao-rau', t('Mì xào rau', 'Stir-fried noodles with vegetables', '채소 볶음면', '蔬菜炒面'), '30.000đ'),
    ],
  },
  {
    id: 'hotpot',
    image: '/images/menu/lau-ga-la-giang.jpg',
    title: t('Lẩu & Rau', 'Hotpot & Vegetables', '전골·채소', '火锅与蔬菜'),
    items: [
      item('lau-ga', t('Lẩu gà lá giang', 'Chicken hotpot with la giang leaves', '라장잎 닭 전골', '酸叶鸡肉火锅'), '250.000đ/lẩu'),
      item('lau-ca-bop', t('Lẩu cá bóp', 'Cobia hotpot', '능성어 전골', '军曹鱼火锅'), '250.000đ/lẩu'),
      item('lau-hai-san', t('Lẩu hải sản', 'Seafood hotpot', '해산물 전골', '海鲜火锅'), '250.000đ/lẩu'),
      item('rau-cai-xao', t('Rau cải xào', 'Stir-fried mustard greens', '청경채 볶음', '炒芥菜'), '30.000đ'),
      item('rau-cai-luoc', t('Rau cải luộc', 'Boiled mustard greens', '데친 청경채', '水煮芥菜'), '30.000đ'),
      item('rau-muong-xao', t('Rau muống xào tỏi', 'Water spinach with garlic', '공심채 마늘볶음', '蒜蓉空心菜'), '30.000đ'),
      item('rau-muong-luoc', t('Rau muống luộc', 'Boiled water spinach', '데친 공심채', '水煮空心菜'), '30.000đ'),
      item('trung-luoc', t('Trứng luộc', 'Boiled eggs', '삶은 달걀', '水煮蛋'), '15.000đ'),
      item('trung-danh', t('Trứng đánh', 'Vietnamese omelet', '베트남식 오믈렛', '越式煎蛋'), '30.000đ'),
      item('khoai-tay', t('Khoai tây chiên', 'French fries', '감자튀김', '炸薯条'), '50.000đ'),
      item('ngu-qua', t('Ngũ quả luộc', 'Five boiled vegetables', '모둠 데친 채소', '五色水煮蔬菜'), '50.000đ'),
    ],
  },
  {
    id: 'specialties',
    image: '/images/menu/ca-loc-chien-xu.jpg',
    title: t('Cá, Dông & Gà', 'Fish, Sand Lizard & Chicken', '생선·모래도마뱀·닭', '鱼、沙蜥与鸡'),
    items: [
      item('ca-chien', t('Cá lóc chiên xù', 'Crispy fried snakehead fish', '가물치 통튀김', '酥炸黑鱼'), '300.000đ/kg'),
      item('ca-kho', t('Cá lóc kho tộ', 'Braised snakehead fish', '가물치 뚝배기조림', '砂锅焖黑鱼'), '300.000đ/kg'),
      item('ca-hap', t('Cá lóc hấp hành', 'Steamed snakehead fish with scallions', '파를 곁들인 가물치찜', '葱蒸黑鱼'), '300.000đ/kg'),
      item('ca-chua', t('Cá lóc nấu chua', 'Sour snakehead fish soup', '가물치 새콤탕', '酸汤黑鱼'), '300.000đ/kg'),
      item('dong-moi', t('Dông nướng mọi', 'Charcoal-grilled sand lizard', '숯불 모래도마뱀 구이', '炭烤沙蜥'), '1.000.000đ/kg'),
      item('dong-xao', t('Dông xào lăn', 'Stir-fried sand lizard', '모래도마뱀 볶음', '香炒沙蜥'), '1.000.000đ/kg'),
      item('dong-muoi-ot', t('Dông nướng muối ớt', 'Chili-salt grilled sand lizard', '소금·고추 모래도마뱀 구이', '椒盐烤沙蜥'), '1.000.000đ/kg'),
      item('dong-goi', t('Dông trộn gỏi', 'Sand lizard salad', '모래도마뱀 샐러드', '沙蜥拌沙拉'), '1.000.000đ/kg'),
      item('chao-ga', t('Cháo gà', 'Chicken porridge', '닭죽', '鸡粥'), '300.000đ/kg'),
      item('ga-goi', t('Gà trộn gỏi', 'Chicken salad', '닭고기 샐러드', '鸡肉沙拉'), '300.000đ/kg'),
      item('ga-nuong', t('Gà nướng', 'Charcoal-grilled chicken', '숯불 닭구이', '炭烤鸡'), '300.000đ/kg'),
    ],
  },
  {
    id: 'drinks',
    image: '/images/menu/da-chanh.jpg',
    title: t('Nước uống & Cơm phần', 'Drinks & Set Menus', '음료·세트 메뉴', '饮品与套餐'),
    items: [
      item('sinh-to-dua-hau', t('Sinh tố dưa hấu', 'Watermelon smoothie', '수박 스무디', '西瓜冰沙'), '30.000đ'),
      item('dua-trai', t('Dừa tươi nguyên trái', 'Fresh whole coconut', '생 코코넛', '鲜椰子'), '30.000đ'),
      item('da-chanh', t('Đá chanh', 'Iced lime drink', '아이스 라임 음료', '冰青柠水'), '20.000đ'),
      item('chanh-nong', t('Chanh nóng', 'Hot lime drink', '따뜻한 라임 음료', '热青柠水'), '20.000đ'),
      item('set-1', t('Set cơm 1', 'Rice set 1', '식사 세트 1', '套餐 1'), '1.500.000đ/bàn', t('Cơm trắng, sườn ram, trứng chiên, rau muống xào tỏi, mực xào chua ngọt, canh chua cá bóp, trái cây', 'Rice, caramelized pork ribs, fried egg, garlic water spinach, sweet-and-sour squid, cobia sour soup, fruit', '밥, 돼지갈비조림, 달걀부침, 공심채볶음, 새콤달콤 오징어볶음, 능성어 새콤탕, 과일', '米饭、红烧排骨、煎蛋、蒜蓉空心菜、酸甜鱿鱼、军曹鱼酸汤、水果')),
      item('set-2', t('Set cơm 2', 'Rice set 2', '식사 세트 2', '套餐 2'), '1.500.000đ/bàn', t('Cá thu chiên sốt cà, trứng chiên thịt bằm, rau cải xào, mực xào chua ngọt, gà ram, canh chua cá bóp, trái cây', 'Fried mackerel in tomato sauce, minced-pork omelet, greens, sweet-and-sour squid, caramelized chicken, cobia sour soup, fruit', '토마토소스 고등어튀김, 다진 돼지고기 오믈렛, 채소볶음, 새콤달콤 오징어, 닭조림, 능성어 새콤탕, 과일', '茄汁炸鲭鱼、肉末煎蛋、炒青菜、酸甜鱿鱼、红烧鸡、军曹鱼酸汤、水果')),
      item('set-3', t('Set cơm 3', 'Rice set 3', '식사 세트 3', '套餐 3'), '1.500.000đ/bàn', t('Cơm trắng, rau trộn, bò xào cần tây, ngũ quả kho quẹt, tôm thịt ram, canh cải thịt bằm, trái cây', 'Rice, mixed salad, beef with celery, vegetables with caramelized dip, caramelized shrimp and pork, mustard-green soup, fruit', '밥, 샐러드, 셀러리 소고기볶음, 채소와 베트남식 딥, 새우·돼지고기조림, 다진 고기 채소국, 과일', '米饭、拌菜、芹菜炒牛肉、五蔬蘸酱、红烧虾肉、肉末菜汤、水果')),
      item('set-4', t('Set cơm 4', 'Rice set 4', '식사 세트 4', '套餐 4'), '1.500.000đ/bàn', t('Cơm trắng, cá bóp kho tộ, mực nhồi thịt nấm, bò xào cải, sườn chiên, canh gà lá giang, trái cây', 'Rice, braised cobia, stuffed squid, beef with greens, fried ribs, chicken and la giang soup, fruit', '밥, 능성어조림, 고기·버섯 오징어순대, 채소 소고기볶음, 갈비튀김, 라장잎 닭국, 과일', '米饭、砂锅军曹鱼、肉菇酿鱿鱼、青菜炒牛肉、炸排骨、酸叶鸡汤、水果')),
    ],
  },
];

export const getText = (value, lang) => value?.[lang] || value?.vi || '';
