export const vi = {
  nav: {
    home: "Trang Chủ",
    services: "Tour & Dịch Vụ",
    spots: "Điểm Check-in",
    gallery: "Thư Viện Ảnh",
    dining: "Ẩm Thực",
    reviews: "Đánh Giá",
    faq: "Hỏi Đáp",
    bookNow: "Đặt Tour",
    hotline: "Hotline",
    callUs: "Gọi ngay"
  },
  hero: {
    tag: "THIÊN ĐƯỜNG SA MẠC MŨI NÉ",
    title: "Bàu Cát Trắng",
    subtitle: "Tour xe Jeep, xe địa hình ATV và các trải nghiệm đồi cát cùng đội ngũ tài xế bản địa giàu kinh nghiệm.",
    exploreBtn: "Xem dịch vụ",
    galleryBtn: "Xem hình ảnh"
  },
  trust: {
    badge: "VÌ SAO CHỌN TRIỀU TRANG",
    title: "Trải Nghiệm Trọn Vẹn, Dịch Vụ Chuyên Nghiệp",
    items: [
      {
        icon: "directions_car",
        title: "Đội Xe Đa Dạng",
        desc: "Xe Jeep, Land Cruiser và ATV 400cc, được bảo dưỡng định kỳ."
      },
      {
        icon: "photo_camera",
        title: "Tài Xế Bản Địa",
        desc: "Tài xế chuyên nghiệp, thông thạo địa hình và các điểm check-in đẹp nhất."
      },
      {
        icon: "access_time_filled",
        title: "Đặt Tour Nhanh",
        desc: "Đặt chỗ nhanh qua hotline hoặc Zalo, tư vấn lịch trình rõ ràng."
      },
      {
        icon: "verified_user",
        title: "Giá Niêm Yết Rõ Ràng",
        desc: "Bảng giá công khai theo từng dịch vụ. Giá chưa gồm vé cổng và thuế."
      }
    ]
  },
  services: {
    title: "Dịch Vụ & Trải Nghiệm",
    tabs: {
      all: "Tất Cả",
      jeep: "Tour Xe Jeep",
      adventure: "Trải Nghiệm Đồi Cát"
    },
    items: [
      {
        id: "jeep-tour",
        type: "jeep",
        title: "Tour Xe Jeep Đồi Cát Bay",
        desc: "Tài xế đưa đoàn qua đồi cát trắng, hồ Bàu Trắng và các điểm check-in. Tối đa 6 khách/xe, khởi hành 13:30 đón hoàng hôn.",
        price: "800.000đ / Xe",
        badge: "Hoàng hôn",
        image: "/images/jeep-gate.jpg"
      },
      {
        id: "atv",
        type: "adventure",
        title: "Xe Địa Hình ATV Leo Đồi",
        desc: "Tài xế điều khiển ATV 400cc đưa quý khách vượt các triền cát dốc. Mỗi xe phục vụ 1–2 khách.",
        price: "800.000đ / 20 Phút",
        badge: "Cảm giác mạnh",
        image: "/images/atv-convoy.jpg"
      },
      {
        id: "camel",
        type: "adventure",
        title: "Cưỡi Lạc Đà Check-in",
        desc: "Chụp ảnh cùng lạc đà giữa đồi cát bao la, phong cách sa mạc Sahara.",
        price: "200.000đ / Vòng / Người",
        badge: "Góc ảnh đẹp",
        image: "/images/camel-real.jpg"
      },
      {
        id: "ostrich",
        type: "adventure",
        title: "Cưỡi Đà Điểu",
        desc: "Trải nghiệm vui nhộn, phù hợp cho cả gia đình và trẻ nhỏ.",
        price: "100.000đ / Vòng / Người",
        badge: "Cho gia đình",
        image: "/images/ostrich-real.jpg"
      },
      {
        id: "sandboard",
        type: "adventure",
        title: "Trượt Cát Bàu Trắng",
        desc: "Trượt từ đỉnh đồi cát xuống thung lũng cát trắng mịn.",
        price: "50.000đ / Ván / Người",
        badge: "Vui nhộn",
        image: "/images/sandboard.jpg"
      }
    ],
    bookBtn: "Đặt Tour"
  },
  spots: {
    tag: "MUST-VISIT DESTINATIONS",
    title: "Những Điểm Check-in Nổi Bật",
    subtitle: "Mỗi góc tại Bàu Trắng đều là một khung hình đẹp",
    items: [
      {
        title: "Đồi Cát Trắng",
        desc: "Những triền cát trắng nối dài đến chân trời dưới bầu trời rộng.",
        image: "/images/bau-trang-dunes-clouds.jpg"
      },
      {
        title: "Hồ Bàu Trắng",
        desc: "Mặt hồ xanh giữa những đụn cát vàng, cảnh sắc tương phản hiếm có.",
        image: "/images/bau-trang-lake-panorama.jpg"
      },
      {
        title: "Vân Cát Ban Mai",
        desc: "Gió và nắng tạo nên những đường vân cát mềm mại trải dài.",
        image: "/images/bau-trang-sand-ripples.jpg"
      },
      {
        title: "Hoàng Hôn Trên Đồi",
        desc: "Ánh chiều phủ vàng các triền cát, khung cảnh đậm chất điện ảnh.",
        image: "/images/bau-trang-sunset-dunes.jpg"
      }
    ]
  },
  dining: {
    tag: "REST & RECHARGE",
    title: "Ẩm Thực & Giải Khát",
    subtitle: "Nghỉ chân sau hành trình với các món đặc sản và thức uống mát lạnh.",
    menuIntro: "Đặc sản đồi cát, hải sản, cơm, mì, lẩu và thức uống.",
    viewMenu: "Xem Thực Đơn",
    reserveTable: "Đặt Chỗ Trước",
    specialties: [
      { name: "Dông cát", desc: "Nướng muối ớt, xào lăn xúc bánh tráng, nướng mọi." },
      { name: "Gà đồi cát", desc: "Gà ta thả đồi: xé phay trộn gỏi, nướng than hoa, nấu cháo." }
    ]
  },
  gallery: {
    tag: "MOMENTS & MEMORIES",
    title: "Hình Ảnh Thực Tế",
    subtitle: "Những khoảnh khắc tại Bàu Trắng cùng Triều Trang",
    more: "Xem thêm ảnh",
    less: "Thu gọn"
  },
  reviews: {
    tag: "TESTIMONIALS",
    title: "Khách Hàng Nói Gì"
  },
  faq: {
    tag: "FREQUENTLY ASKED QUESTIONS",
    title: "Câu Hỏi Thường Gặp",
    items: [
      {
        q: "Nên mặc gì khi đi tour đồi cát?",
        a: "Nên chọn trang phục thoải mái, màu nổi như trắng, đỏ, vàng để lên ảnh đẹp trên nền cát. Mang theo kính râm, nón và kem chống nắng."
      },
      {
        q: "Đặt tour như thế nào?",
        a: "Gọi hotline 0979 391 234 hoặc nhắn Zalo để được tư vấn lịch trình và giữ chỗ."
      },
      {
        q: "Đi ATV có an toàn không?",
        a: "Xe ATV do tài xế có kinh nghiệm điều khiển, khách ngồi phía sau. Mỗi xe tối đa 1–2 khách, tài xế sẽ hướng dẫn tư thế ngồi và lưu ý an toàn trước khi khởi hành."
      },
      {
        q: "Giá tour đã gồm vé cổng chưa?",
        a: "Giá niêm yết chưa bao gồm vé cổng và thuế. Vui lòng liên hệ hotline để được báo chi phí cụ thể."
      }
    ]
  },
  cta: {
    title: "Sẵn Sàng Cho Chuyến Đi Bàu Trắng?",
    desc: "Liên hệ để được tư vấn lịch trình và giữ chỗ.",
    callNow: "Gọi Ngay: 0979 391 234",
    chatZalo: "Tư Vấn Qua Zalo"
  },
  contact: {
    tag: "Liên hệ với chúng tôi",
    title: "Đến đây dễ dàng",
    desc: "Tour xe Jeep, ATV và các trải nghiệm đồi cát tại Bàu Trắng. Luôn sẵn sàng đón tiếp quý khách.",
    infoTitle: "Thông tin liên hệ",
    hotline: "Hotline",
    address: "Địa chỉ",
    addressValue: "Hòa Thắng, Lâm Đồng",
    hours: "Giờ mở cửa",
    hoursValue: "5:00 – 17:30 hàng ngày",
    amenitiesTitle: "Tiện ích",
    amenities: ["Bãi đậu xe", "WC", "Thay đồ", "Nước uống", "WiFi"],
    callNow: "Gọi Ngay",
    mapTitle: "Bản đồ Du Lịch Triều Trang"
  },
  footer: {
    desc: "Du Lịch Triều Trang: tour xe Jeep, ATV và trải nghiệm đồi cát tại Bàu Trắng, Hòa Thắng, Lâm Đồng.",
    quickLinks: "Liên Kết Nhanh",
    contactInfo: "Thông Tin Liên Hệ",
    address: "Bàu Trắng, thôn Hồng Lâm, xã Hòa Thắng, tỉnh Lâm Đồng",
    rights: "Bản quyền thuộc về Du Lịch Triều Trang."
  }
};
