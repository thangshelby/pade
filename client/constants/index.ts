import arrowDown from "@/assets/icons/arrow-down.png";
import arrowUp from "@/assets/icons/arrow-up.png";
import backArrow from "@/assets/icons/back-arrow.png";
import chat from "@/assets/icons/chat.png";
import checkmark from "@/assets/icons/check.png";
import close from "@/assets/icons/close.png";
import dollar from "@/assets/icons/dollar.png";
import email from "@/assets/icons/email.png";
import eyecross from "@/assets/icons/eyecross.png";
import google from "@/assets/icons/google.png";
import home from "@/assets/icons/home.png";
import list from "@/assets/icons/list.png";
import lock from "@/assets/icons/lock.png"
import map from "@/assets/icons/map.png";
import marker from "@/assets/icons/marker.png";
import out from "@/assets/icons/out.png";
import person from "@/assets/icons/person.png";
import pin from "@/assets/icons/pin.png";
import point from "@/assets/icons/point.png";
import profile from "@/assets/icons/profile.png";
import search from "@/assets/icons/search.png";
import selectedMarker from "@/assets/icons/selected-marker.png";
import star from "@/assets/icons/star.png";
import target from "@/assets/icons/target.png";
import to from "@/assets/icons/to.png";
import check from "@/assets/images/check.png";
import getStarted from "@/assets/images/get-started.png";
import message from "@/assets/images/message.png";
import noResult from "@/assets/images/no-result.png";
import onboarding1 from "@/assets/images/onboarding1.png";
import onboarding2 from "@/assets/images/onboarding2.png";
import onboarding3 from "@/assets/images/onboarding3.png";
import signUpCar from "@/assets/images/signup-car.png";
import momo from "@/assets/images/MoMo_Logo.png";
import garage from "@/assets/images/garage.jpg";
import house from "@/assets/icons/house.png";
import residental from "@/assets/icons/residential.png";
import spaces from "@/assets/icons/spaces.png";
import land from "@/assets/icons/land.png";
import mansion from "@/assets/icons/mansion.png";
import camera from "@/assets/icons/security-camera.png";
import clearFire from "@/assets/icons/clear-fire.png";
import restaurant from "@/assets/icons/restaurant.png";
import carWash from "@/assets/icons/carwash.png";
import root from "@/assets/icons/root.png";
import atm from "@/assets/icons/atm.png";
import wifi from "@/assets/icons/wifi.png";
import shoppingMall from "@/assets/icons/shopping-mall.png";
import hospital from "@/assets/icons/hospital.png";
import school from "@/assets/icons/school.png";
import airport from "@/assets/icons/airport.png";
import park from "@/assets/icons/park.png";
import busStop from "@/assets/icons/bus-stop.png";
import trainStation from "@/assets/icons/train-station.png";
import gym from "@/assets/icons/gym.png";
import cameraPicture from "@/assets/icons/camera.png"; 
import plus from "@/assets/icons/plus.png";
import flash from "@/assets/icons/flash.png";
import calendar from "@/assets/icons/calendar.png";
import splash from "@/assets/icons/splash.jpg";
import switc from "@/assets/icons/switch.png";

import { PredictedPlaces, MarkerData } from "@/types/type";

export const images = {
  onboarding1,
  onboarding2,
  onboarding3,
  getStarted,
  signUpCar,
  check,
  noResult,
  message,
  momo,
  garage,
};

export const icons = {
  switc,
  splash,
  arrowDown,
  arrowUp,
  backArrow,
  chat,
  checkmark,
  close,
  dollar,
  email,
  eyecross,
  google,
  home,
  list,
  lock,
  map,
  marker,
  out,
  person,
  pin,
  point,
  profile,
  search,
  selectedMarker,
  star,
  target,
  to,
  house,
  residental,
  spaces,
  land,
  mansion,

  camera,
  clearFire,
  restaurant,
  carWash,
  root,
  atm,
  wifi,
  shoppingMall,
  hospital,
  school,
  airport,
  park,
  busStop,
  trainStation,
  gym,
  cameraPicture,
  plus,
  flash,
  calendar
};

export const navBarItems = [
  {
    title: "Tổng quan",
  },
  {
    title: "Mô tả",
  },
  {
    title: "Đánh giá",
  },

  {
    title: "Vị trí",
  },
  {
    title: "Tiện nghi",
  },
  {
    title: "Policy",
  },
];

export const times: ["Theo giờ", "Theo ngày"] = ["Theo giờ", "Theo ngày"];
export const cars: ["Xe 4 chỗ", "Xe 7 chỗ", "Xe tải nhỏ", "Xe tải lớn"] = [
  "Xe 4 chỗ",
  "Xe 7 chỗ",
  "Xe tải nhỏ",
  "Xe tải lớn",
];
export const amenities: {
  title:
    | "Có mái che"
    | "Camera an ninh"
    | "Bình chữa cháy"
    | "Nhà hàng & Cafe"
    | "Rửa xe"
    | "ATM"
    | "Wifi";
  icon: any;
}[] = [
  {
    title: "Có mái che",
    icon: icons.root,
  },
  {
    title: "Camera an ninh",
    icon: icons.camera,
  },
  {
    title: "Bình chữa cháy",
    icon: icons.clearFire,
  },
  {
    title: "Nhà hàng & Cafe",
    icon: icons.restaurant,
  },
  {
    title: "Rửa xe",
    icon: icons.carWash,
  },
  {
    title: "Wifi",
    icon: icons.wifi,
  },
];

export type titleSpecialLocationNearby =
  | "Trung tâm thương mại"
  | "Bệnh viện"
  | "Trường học"
  | "Sân bay"
  | "Công viên"
  | "Trạm xe buýt"
  | "Ga tàu"
  | "Nhà ga"
  | "Khu dân cư"
  | "Phòng gym"
  | "Nhà hàng & Cafe";
export const specialLocationNearby: {
  title: titleSpecialLocationNearby;

  icon: any;
}[] = [
  {
    title: "Trung tâm thương mại",
    icon: icons.shoppingMall, // Bạn tự điền icon tại đây
  },
  {
    title: "Bệnh viện",
    icon: icons.hospital, // Bạn tự điền icon tại đây
  },
  {
    title: "Trường học",
    icon: icons.school, // Bạn tự điền icon tại đây
  },
  {
    title: "Sân bay",
    icon: icons.airport, // Bạn tự điền icon tại đây
  },
  {
    title: "Công viên",
    icon: icons.park, // Bạn tự điền icon tại đây
  },
  {
    title: "Trạm xe buýt",
    icon: icons.busStop, // Bạn tự điền icon tại đây
  },
  {
    title: "Ga tàu",
    icon: icons.trainStation, // Bạn tự điền icon tại đây
  },
  {
    title: "Khu dân cư",
    icon: icons.residental, // Bạn tự điền icon tại đây
  },
  {
    title: "Nhà hàng & Cafe",
    icon: icons.restaurant, // Bạn tự điền icon tại đây
  },
  {
    title: "Phòng gym",
    icon: icons.gym, // Bạn tự điền icon tại đây
  },
];

export const customMapStyle = [
  { elementType: "geometry", stylers: [{ color: "#f5f5f5" }] },
  { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#f5f5f5" }] },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#b7dfe6" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#ffffff" }],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [{ color: "#d6d6d6" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#cfcfcf" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#757575" }],
  },
];

export const historyPlaces: PredictedPlaces[] = [
  {
    description:
      "123 Hồ Văn Huê, Phường 9 (Phú Nhuận), Phú Nhuận, Ho Chi Minh City",
    id: 0,
    placeId:
      "Ek4xMjMgSOG7kyBWxINuIEh1w6osIFBoxrDhu51uZyA5IChQaMO6IE5odeG6rW4pLCBQaMO6IE5odeG6rW4sIEhvIENoaSBNaW5oIENpdHkiLiosChQKEgkraHlz2Ch1MRHFJRFBgthsnxIUChIJP6vLLScpdTER-lnDhYsUgyw",
    distance: 1000,
  },
  {
    description: "123 Hồ Văn Long, Tân Tạo, Bình Tân, Ho Chi Minh City",
    distance: 7440,
    id: 1,
    placeId:
      "EjwxMjMgSOG7kyBWxINuIExvbmcsIFTDom4gVOG6oW8sIELDrG5oIFTDom4sIEhvIENoaSBNaW5oIENpdHkiMBIuChQKEgkLSgWWUCx1MRE5fH7RH_jNhhB7KhQKEglvjnr_Vix1MRFPeMbf02dfBg",
  },
  {
    description:
      "123 Hồ Bá Kiện, Cư xá Bắc Hải, Phường 15, District 10, Ho Chi Minh City",
    distance: 6517,
    id: 2,
    placeId:
      "ElUxMjMgSOG7kyBCw6EgS2nhu4duLCBDxrAgeMOhIELhuq9jIEjhuqNpLCBQaMaw4budbmcgMTUsIERpc3RyaWN0IDEwLCBIbyBDaGkgTWluaCBDaXR5IjASLgoUChIJMc9UstEudTERGQM51CLqEKoQeyoUChIJh3Oo-NAudTER8fVBm5rhZVo",
  },
  {
    description: "123 Hồ Văn Long, Bình Hưng Hòa B, Bình Tân, Ho Chi Minh City",
    distance: 2334,
    id: 3,
    placeId:
      "EkQxMjMgSOG7kyBWxINuIExvbmcsIELDrG5oIEjGsG5nIEjDsmEgQiwgQsOsbmggVMOibiwgSG8gQ2hpIE1pbmggQ2l0eSIwEi4KFAoSCUuC4Km-K3UxETfBe4EckGpNEHsqFAoSCQudKmG5K3UxEdVI_omFpDm1",
  },
  {
    description: "123 Hồ Đắc Di, Tay Thanh, Tân Phú, Ho Chi Minh City",
    distance: 2023,
    id: 4,
    placeId:
      "EjoxMjMgSOG7kyDEkOG6r2MgRGksIFRheSBUaGFuaCwgVMOibiBQaMO6LCBIbyBDaGkgTWluaCBDaXR5IjASLgoUChIJu7Uc_lgpdTERJ9Fj6EfWdIAQeyoUChIJ0afSDFkpdTERTrw_Ac3ePhw",
  },
];

export const carAndImages = [
  {
    type: "Xe 4 chỗ",
    image:
      "https://product.hstatic.net/200000605263/product/xehay-merc-e200-110719-3-removebg-preview_f1c0b2102a3047df8ec00c3b780bc9d1_master.png",
  },
  {
    type: "Xe 7 chỗ",
    image:
      "https://www.toyotacanthovn.com/files/800x/tr-ng-copy-min-F1BGqHstKz.png",
  },
  {
    type: "Xe tải nhỏ",
    image:
      "https://xetaisaigon.com/wp-content/uploads/2020/04/2-removebg-preview__1_-removebg-preview.png",
  },
  {
    type: "Xe tải lớn",
    image:
      "https://img.lovepik.com/bg/20240427/Large-American-Truck-with-Dump-Truck-Trailer-3D-Illustration-for_8280683_wh860.jpg!/fw/860",
  },
];

export const bankIcons = [
  {
    id: 0,
    name: "Vietcombank",
    image:
      "data:image/jpeg;base64,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",
  },
  {
    id: 1,
    name: "VietinBank",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLivHbziB9tjoR3OQuvR626wCxNQ-efzySfw&s",
  },
  {
    id: 2,
    name: "Techcombank",
    image: "https://cdn.haitrieu.com/wp-content/uploads/2021/11/Logo-TCB-V.png",
  },
  {
    id: 3,
    name: "MBBank",
    image:
      "data:image/png;base64,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",
  },
  {
    id: 4,
    name: "TPBank",
    image:
      "https://cdn.tuoitre.vn/thumb_w/1200/471584752817336320/2023/2/23/9d8ed59b46446656b14efc88b058399cd81d9amv2-1677151417649694732849.png",
  },
  {
    id: 5,
    name: "VPBank",
    image:
      "https://ducanhland.com/wp-content/uploads/2021/08/ngan-hang-vpbank.jpg",
  },
  {
    id: 6,
    name: "ACB",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTahOP_Mj1jezkbsOgT2ioLyLjYtpe36g-lng&s",
  },
  {
    id: 7,
    name: "BIDV",
    image:
      "data:image/png;base64,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",
  },
  {
    id: 8,
    name: "VIB",
    image:
      "data:image/png;base64,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",
  },
  {
    id: 9,
    name: "Agribank",
    image:
      "data:image/png;base64,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",
  },
];

import {
  faShield,
  faLanguage,
  faLock,
  faHouse,
  faCircleQuestion,
  faNotesMedical,
  faPen,
  faBook,
  faUser,
  faCreditCard,
  faFile,
  faBell,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

export const profileFields = [
  {
    id: 1,
    title: "Cài đặt",
    value: [
      { sub_title: "Thông tin cá nhân", icon: faUser },
      { sub_title: "Đăng nhập và bảo mật", icon: faShield },
      { sub_title: "Thanh toán và chi trả", icon: faCreditCard },
      { sub_title: "Thuế", icon: faFile },
      { sub_title: "Ngôn ngữ", icon: faLanguage },
      { sub_title: "Quyền riêng tư và chia sẻ", icon: faLock },
      { sub_title: "Thông báo", icon: faBell },
    ],
  },
  {
    id: 2,
    title: "Cho thuê bãi đỗ xe",
    value: [
      { sub_title: "Đăng cho thuê chỗ của bạn", icon: faHouse },
      { sub_title: "Tìm hiểu về việc đón tiếp khách", icon: faHouse },
      { sub_title: "Tổ chức trách nhiệm", icon: faHouse },
    ],
  },
  {
    id: 3,
    title: "Hỗ trợ",
    value: [
      { sub_title: "Trung tâm trợ giúp", icon: faCircleQuestion },
      { sub_title: "Tìm trợ giúp về vấn đề an toàn", icon: faShield },
      { sub_title: "Gửi phẩn hồi cho chúng tôi", icon: faPen },
    ],
  },
  {
    id: 4,
    title: "Về Pade",
    value: [
      { sub_title: "Tìm hiểu về Pade", icon: faBook },
      { sub_title: "Cơ hội nghề nghiệp", icon: faBook },
    ],
  },
];

export const onboarding = [
  {
    id: 1,
    title: "The perfect ride is just a tap away!",
    description:
      "Your journey begins with Ryde. Find your ideal ride effortlessly.",
    image: images.onboarding1,
  },
  {
    id: 2,
    title: "Best car in your hands with Ryde",
    description:
      "Discover the convenience of finding your perfect ride with Ryde",
    image: images.onboarding2,
  },
  {
    id: 3,
    title: "Your ride, your way. Let's go!",
    description:
      "Enter your destination, sit back, and let us take care of the rest.",
    image: images.onboarding3,
  },
];

export const markersData: MarkerData[] = [
  {
    latitude: 10.778266697209194,
    longitude: 106.70155383488034,
    title: "Vincom Center Đồng Khởi",
    id: 1,
    distance: 2.32,
    price: "88.000 đ",
    rating: 4.9,
    address: "72 Đ. Lê Thánh Tôn, Bến Nghé, Quận 1, Hồ Chí Minh, Vietnam",
    workingHours: "8:00 - 22:00",
    amenities: [
      "Có mái che",
      "Camera an ninh",
      "Bãi xe liên kết",
      "Nhà hàng & Cafe",
      "Rửa xe",
    ],
  },
  {
    latitude: 10.771656,
    longitude: 106.704963,
    title: "Takashimaya Saigon Centre",
    id: 2,
    distance: 1.87,
    price: "75.000 đ",
    rating: 4.8,
    address: "65 Lê Lợi, Bến Nghé, Quận 1, Hồ Chí Minh, Vietnam",
    workingHours: "8:00 - 23:00",
    amenities: [
      "Có mái che",
      "Camera an ninh",
      "Bãi xe liên kết",
      "Wi-Fi miễn phí",
    ],
  },
  {
    latitude: 10.775324,
    longitude: 106.698928,
    title: "Diamond Plaza",
    id: 3,
    distance: 2.5,
    price: "80.000 đ",
    rating: 4.7,
    address: "34 Lê Duẩn, Bến Nghé, Quận 1, Hồ Chí Minh, Vietnam",
    workingHours: "7:00 - 22:30",
    amenities: [
      "Có mái che",
      "Camera an ninh",
      "Nhà hàng & Cafe",
      "Wi-Fi miễn phí",
    ],
  },
  {
    latitude: 10.771989,
    longitude: 106.697375,
    title: "Parkson Saigon Tourist Plaza",
    id: 4,
    distance: 2.1,
    price: "65.000 đ",
    rating: 4.5,
    address: "35 Lê Thánh Tôn, Bến Nghé, Quận 1, Hồ Chí Minh, Vietnam",
    workingHours: "8:00 - 21:00",
    amenities: ["Camera an ninh", "Bãi xe liên kết", "Nhà hàng & Cafe", "ATM"],
  },
  {
    latitude: 10.768556,
    longitude: 106.703225,
    title: "Bitexco Financial Tower",
    id: 5,
    distance: 1.95,
    price: "85.000 đ",
    rating: 4.6,
    address: "2 Hải Triều, Bến Nghé, Quận 1, Hồ Chí Minh, Vietnam",
    workingHours: "7:00 - 22:00",
    amenities: ["Có mái che", "Camera an ninh", "Rửa xe", "Nhà hàng & Cafe"],
  },
  {
    latitude: 10.763214,
    longitude: 106.682526,
    title: "Nowzone Fashion Mall",
    id: 6,
    distance: 3.1,
    price: "60.000 đ",
    rating: 4.3,
    address: "235 Nguyễn Văn Cừ, Nguyễn Cư Trinh, Quận 1, Hồ Chí Minh, Vietnam",
    workingHours: "8:00 - 21:30",
    amenities: ["Có mái che", "Camera an ninh", "Bãi xe liên kết"],
  },
  {
    latitude: 10.763322,
    longitude: 106.684772,
    title: "SC VivoCity",
    id: 7,
    distance: 5.4,
    price: "45.000 đ",
    rating: 4.2,
    address: "1058 Nguyễn Văn Linh, Tân Phong, Quận 7, Hồ Chí Minh, Vietnam",
    workingHours: "8:00 - 22:00",
    amenities: [
      "Có mái che",
      "Camera an ninh",
      "Nhà hàng & Cafe",
      "Wi-Fi miễn phí",
    ],
  },
  {
    latitude: 10.805314,
    longitude: 106.714739,
    title: "AEON Mall Tân Phú",
    id: 8,
    distance: 7.5,
    price: "55.000 đ",
    rating: 4.8,
    address: "30 Bờ Bao Tân Thắng, Sơn Kỳ, Tân Phú, Hồ Chí Minh, Vietnam",
    workingHours: "7:30 - 23:00",
    amenities: [
      "Có mái che",
      "Camera an ninh",
      "Bãi xe liên kết",
      "Nhà hàng & Cafe",
    ],
  },
  {
    latitude: 10.822665,
    longitude: 106.687132,
    title: "Vincom Thủ Đức",
    id: 9,
    distance: 10.0,
    price: "40.000 đ",
    rating: 4.6,
    address: "216 Võ Văn Ngân, Bình Thọ, Thủ Đức, Hồ Chí Minh, Vietnam",
    workingHours: "8:00 - 22:00",
    amenities: ["Có mái che", "Camera an ninh", "ATM", "Rửa xe"],
  },
  {
    latitude: 10.779623,
    longitude: 106.698463,
    title: "Central Park Vinhomes",
    id: 10,
    distance: 6.0,
    price: "70.000 đ",
    rating: 4.9,
    address: "208 Nguyễn Hữu Cảnh, Bình Thạnh, Hồ Chí Minh, Vietnam",
    workingHours: "8:00 - 23:00",
    amenities: [
      "Có mái che",
      "Camera an ninh",
      "Bãi xe liên kết",
      "Nhà hàng & Cafe",
      "Wi-Fi miễn phí",
    ],
  },
  {
    latitude: 10.729344,
    longitude: 106.721261,
    title: "Lotte Mart Quận 7",
    id: 11,
    distance: 6.8,
    price: "55.000 đ",
    rating: 4.5,
    address: "469 Nguyễn Hữu Thọ, Tân Hưng, Quận 7, Hồ Chí Minh, Vietnam",
    workingHours: "8:00 - 22:00",
    amenities: ["Có mái che", "Camera an ninh", "ATM", "Nhà hàng & Cafe"],
  },
  {
    latitude: 10.777164,
    longitude: 106.693797,
    title: "Galaxy Nguyễn Du",
    id: 12,
    distance: 2.0,
    price: "40.000 đ",
    rating: 4.4,
    address: "116 Nguyễn Du, Bến Thành, Quận 1, Hồ Chí Minh, Vietnam",
    workingHours: "8:00 - 23:00",
    amenities: ["Có mái che", "Camera an ninh", "Wi-Fi miễn phí"],
  },
  {
    latitude: 10.780374,
    longitude: 106.694892,
    title: "Bến Thành Parking",
    id: 13,
    distance: 1.9,
    price: "30.000 đ",
    rating: 4.1,
    address: "Quảng trường 23/9, Phạm Ngũ Lão, Quận 1, Hồ Chí Minh, Vietnam",
    workingHours: "24/7",
    amenities: ["Camera an ninh", "ATM", "Rửa xe"],
  },
  {
    latitude: 10.804038,
    longitude: 106.715346,
    title: "Big C Miền Đông",
    id: 14,
    distance: 6.4,
    price: "35.000 đ",
    rating: 4.3,
    address: "268 Tô Hiến Thành, Phường 15, Quận 10, Hồ Chí Minh, Vietnam",
    workingHours: "8:00 - 22:00",
    amenities: [
      "Có mái che",
      "Camera an ninh",
      "Wi-Fi miễn phí",
      "Nhà hàng & Cafe",
    ],
  },
  {
    latitude: 10.809221,
    longitude: 106.716348,
    title: "Giga Mall Thủ Đức",
    id: 15,
    distance: 9.7,
    price: "60.000 đ",
    rating: 4.7,
    address:
      "240-242 Phạm Văn Đồng, Hiệp Bình Chánh, Thủ Đức, Hồ Chí Minh, Vietnam",
    workingHours: "7:30 - 23:00",
    amenities: ["Có mái che", "Camera an ninh", "Bãi xe liên kết", "ATM"],
  },
  {
    latitude: 10.764536,
    longitude: 106.690204,
    title: "Co.opMart Lý Thường Kiệt",
    id: 16,
    distance: 5.3,
    price: "40.000 đ",
    rating: 4.0,
    address: "497 Hòa Hảo, Quận 10, Hồ Chí Minh, Vietnam",
    workingHours: "8:00 - 22:00",
    amenities: [
      "Có mái che",
      "Camera an ninh",
      "Nhà hàng & Cafe",
      "Wi-Fi miễn phí",
    ],
  },
  {
    latitude: 10.761843,
    longitude: 106.661717,
    title: "E-Town Building",
    id: 17,
    distance: 5.5,
    price: "55.000 đ",
    rating: 4.4,
    address: "364 Cộng Hòa, Tân Bình, Hồ Chí Minh, Vietnam",
    workingHours: "7:00 - 20:00",
    amenities: ["Có mái che", "Camera an ninh", "ATM", "Nhà hàng & Cafe"],
  },
  {
    latitude: 10.771327,
    longitude: 106.702806,
    title: "Bãi xe Bùi Viện",
    id: 18,
    distance: 2.3,
    price: "50.000 đ",
    rating: 4.2,
    address: "Bùi Viện, Phạm Ngũ Lão, Quận 1, Hồ Chí Minh, Vietnam",
    workingHours: "24/7",
    amenities: ["Camera an ninh", "ATM", "Rửa xe"],
  },
  {
    latitude: 10.761392,
    longitude: 106.693272,
    title: "Hồ Con Rùa",
    id: 19,
    distance: 3.4,
    price: "30.000 đ",
    rating: 4.1,
    address: "Công Trường Quốc Tế, Phường 6, Quận 3, Hồ Chí Minh, Vietnam",
    workingHours: "8:00 - 23:00",
    amenities: ["Có mái che", "Camera an ninh", "Nhà hàng & Cafe"],
  },
  {
    latitude: 10.770214,
    longitude: 106.687646,
    title: "Bệnh viện Chợ Rẫy",
    id: 20,
    distance: 3.7,
    price: "50.000 đ",
    rating: 4.2,
    address: "201B Nguyễn Chí Thanh, Quận 5, Hồ Chí Minh, Vietnam",
    workingHours: "24/7",
    amenities: ["Có mái che", "Camera an ninh", "ATM", "Wi-Fi miễn phí"],
  },
  {
    latitude: 10.799785,
    longitude: 106.632998,
    title: "Aeon Mall Tân Phú",
    id: 21,
    distance: 1.2,
    price: "50.000 đ",
    rating: 4.8,
    address: "30 Bờ Bao Tân Thắng, Sơn Kỳ, Tân Phú, Hồ Chí Minh, Vietnam",
    workingHours: "7:30 - 23:00",
    amenities: ["Có mái che", "Camera an ninh", "Nhà hàng & Cafe", "Rửa xe"],
  },
  {
    latitude: 10.812579,
    longitude: 106.625217,
    title: "Co.opmart Tân Phú",
    id: 22,
    distance: 2.0,
    price: "30.000 đ",
    rating: 4.5,
    address: "718 Âu Cơ, Tân Thành, Tân Phú, Hồ Chí Minh, Vietnam",
    workingHours: "8:00 - 21:30",
    amenities: ["Camera an ninh", "ATM", "Nhà hàng & Cafe"],
  },
  {
    latitude: 10.800105,
    longitude: 106.628139,
    title: "Big C Phú Thạnh",
    id: 23,
    distance: 1.5,
    price: "45.000 đ",
    rating: 4.6,
    address: "800 Âu Cơ, Phú Thạnh, Tân Phú, Hồ Chí Minh, Vietnam",
    workingHours: "7:00 - 22:00",
    amenities: ["Có mái che", "Camera an ninh", "Rửa xe", "Nhà hàng & Cafe"],
  },
  {
    latitude: 10.807142,
    longitude: 106.642182,
    title: "Pandora City",
    id: 24,
    distance: 3.0,
    price: "35.000 đ",
    rating: 4.4,
    address: "1/1 Trường Chinh, Tây Thạnh, Tân Phú, Hồ Chí Minh, Vietnam",
    workingHours: "8:00 - 22:00",
    amenities: ["Có mái che", "ATM", "Nhà hàng & Cafe"],
  },
  {
    latitude: 10.793193,
    longitude: 106.637974,
    title: "Chung cư Sơn Kỳ 1",
    id: 25,
    distance: 1.8,
    price: "20.000 đ",
    rating: 4.3,
    address: "15 Đường Số 1, Sơn Kỳ, Tân Phú, Hồ Chí Minh, Vietnam",
    workingHours: "24/7",
    amenities: ["Camera an ninh", "ATM"],
  },
];
