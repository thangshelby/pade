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
import lock from "@/assets/icons/lock.png";
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

import { Ride, MarkerData } from "@/types/type";
import { title } from "process";

export const images = {
  onboarding1,
  onboarding2,
  onboarding3,
  getStarted,
  signUpCar,
  check,
  noResult,
  message,
};

export const icons = {
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
};

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
    latitude: 10.801134230174613,
    longitude: 106.64906845538778,
    title: "Ấm - Sữa hạt và cà phê",
    id: 1,
    distance: 6.32,
    price: "85.000 đ",
    rating: 4.8,
    address:
      "72 Lê Trung Nghĩa, Phường 12, Tân Bình, Hồ Chí Minh 700000, Vietnam",
  },
  {
    latitude: 10.806346553362669,
    longitude: 106.65852482007274,
    title: "Chao Lua Football Field",
    id: 2,
    distance: 3.5,
    price: "100.000 đ",
    rating: 4.6,
    address: "30 Phan Thúc Duyện, Phường 4, Tân Bình, Hồ Chí Minh, Vietnam",
  },
  {
    latitude: 10.797672418170533,
    longitude: 106.65779652253939,
    title: "Dáng Việt - Private Fitness Studio",

    id: 3,

    distance: 4.7,
    price: "73.000 đ",
    rating: 4.7,
    address:
      "348/10 Đ. Hoàng Văn Thụ, Phường 4, Tân Bình, Hồ Chí Minh 700000, Vietnam",
  },
  {
    latitude: 10.791114486402513,
    longitude: 106.64216847102271,
    title: "Galaxy Cinema Tan Binh",
    id: 4,

    distance: 9.1,
    price: "47.000 đ",

    rating: 4.9,
    address:
      "246 Đ. Nguyễn Hồng Đào, Phường 14, Tân Bình, Hồ Chí Minh, Vietnam",
  },
  {
    latitude: 10.778266697209194,
    longitude: 106.70155383488034,
    title: "Vincom Center Đồng Khởi",
    id: 4,
    distance: 2.32,
    price: "88.000 đ",
    rating: 4.9,
    address: "72 Đ. Lê Thánh Tôn, Bến Nghé, Quận 1, Hồ Chí Minh, Vietnam",
  },
];

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

export const times: ["Theo ngày", "Theo tuần"] = ["Theo ngày", "Theo tuần"];
export const cars: ["Xe 4 chỗ", "Xe 7 chỗ", "Xe tải nhỏ", "Xe tải lớn"] = [
  "Xe 4 chỗ",
  "Xe 7 chỗ",
  "Xe tải nhỏ",
  "Xe tải lớn",
];
export const amenities: [
  "Có mái che",
  "Camera an ninh",
  "Bãi xe liên kết",
  "Nhà hàng & Cafe",
  "Rửa xe",
] = [
  "Có mái che",
  "Camera an ninh",
  "Bãi xe liên kết",
  "Nhà hàng & Cafe",
  "Rửa xe",
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

import { PredictedPlaces } from "@/types/type";
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


