import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faArrowLeft,
  faQrcode,
  faShareAlt,
  faMapMarkerAlt,
  faExclamationCircle,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  faStar,
  faUser,
  faFileAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "expo-router";
import ControlTimeInAndOut from "@/components/ControlTimeInAndOut";
const App = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="w-full">
      <ScrollView className="w-full relative">
        <Image
          source={{
            uri: "https://storage.googleapis.com/a1aa/image/T0Kjvkf6BfreaJbd4UV0FkZajfbpjWtzy6QP66yeCkCRLGddC.jpg",
          }}
          className="w-full h-72 object-cover"
        />
        <View className="absolute top-5 left-0 flex-row justify-between px-8 py-2 w-full items-center ">
          <TouchableOpacity className="bg-white p-2 rounded-full shadow-md">
            <FontAwesomeIcon icon={faArrowLeft} color="gray" />
          </TouchableOpacity>

          <TouchableOpacity className="bg-white p-2 rounded-full shadow-md">
            <FontAwesomeIcon icon={faShareAlt} color="gray" />
          </TouchableOpacity>
        </View>

        <View className="p-4 bg-white">
          <Text className="text-xl font-bold text-[#151551]">
            Vincom Center Đồng Khởi
          </Text>
          <View className="flex-row items-center text-sm mt-1">
            <View className="mr-1">
              <FontAwesomeIcon icon={faMapMarkerAlt} color="gray" />
            </View>
            <Text className="text-gray-500">7.5km</Text>
            <View className="ml-4 mr-1">
              <FontAwesomeIcon icon={faStar} color="yellow" />
            </View>
            <Text className="text-gray-500">4.5 (100)</Text>
          </View>
          <View className="text-sm mt-2 flex-row gap-x-1 items-center">
            <Text className="text-green-600 font-JakartaMedium">Mở cửa</Text>
            <Text className="text-[#151551] font-JakartaMedium">
              {" "}
              Từ 7:00 đến 23:30, thứ 2 đến thứ 7
            </Text>
          </View>
          <View className="bg-green-100  text-sm p-2 rounded mt-2 flex-row gap-x-1 items-center">
            <View className=" mr-1">
              <FontAwesomeIcon icon={faExclamationCircle} color="green" />
            </View>

            <Text className="text-green-600">
              Bãi xe không nhận giữ xe qua đêm
            </Text>
          </View>

          <View className="bg-gray-100 p-4 rounded mt-4">
            <ControlTimeInAndOut />
            <View className="flex-row justify-between items-center mt-4">
              <View>
                <Text className="text-gray-500 text-lg">Thời gian</Text>
                <Text className="text-blue-600 font-medium">
                  2 tiếng 30 phút
                </Text>
              </View>
              <View>
                <Text className="text-gray-500 text-lg">Phí tạm tính</Text>
                <Text className="text-blue-600 font-medium">75.000 đ</Text>
              </View>
            </View>
          </View>
        </View>

        <View className=" bg-white p-4 rounded-lg shadow-md">
          <Text className="text-xl font-bold mb-4 text-[#151551]">
            Mô tả bãi xe
          </Text>
          <View className="border border-general-200 p-4 rounded-lg mb-4 shadow-2xl">
            <View className="flex flex-row justify-between mb-2">
              <View className="text-center">
                <Text className="text-gray-500">2 giờ đầu</Text>
                <Text className="text-xl font-bold text-[#151551]">
                  25.000đ
                </Text>
              </View>
              <View className="text-center">
                <Text className="text-gray-500">Mỗi giờ sau</Text>
                <Text className="text-xl font-bold text-[#151551]">
                  + 20.000đ
                </Text>
              </View>
              <View className="text-center">
                <Text className="text-gray-500">Theo ngày</Text>
                <Text className="text-xl font-bold text-[#151551]">
                  200.000đ
                </Text>
              </View>
            </View>
            <Text className="text-gray-700 mb-4">
              Bãi xe nằm trong khu trung tâm thương mại Vincom Center Đồng Khởi,
              tầng B1-B2, an ninh cao, bãi có hệ thống camera quan sát.
            </Text>
            <View className="flex flex-row space-x-2 mb-4">
              <TouchableOpacity className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                <Text className="text-blue-600">Có mái che</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                <Text className="text-blue-600">Camera an ninh</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                <Text className="text-blue-600">Bãi xe liên kết</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Text className="text-blue-600 font-JakartaMedium">
                Quy định chung
              </Text>
            </TouchableOpacity>
          </View>
          <Text className="text-xl font-bold mb-4 text-[#151551]">
            Đánh giá
          </Text>
          <View className="space-y-4">
            <View className=" border border-general-200 p-4 rounded-lg mb-4 shadow-2xl">
              <View className="flex flex-row items-center mb-2">
                <Image
                  source={require("../../assets/images/ronaldo.jpg")}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <View>
                  <Text className="font-bold text-[#151551]">Lê Anh Nghĩa</Text>
                  <View className="flex flex-row items-center text-gray-500 text-sm">
                    <View className="mr-1">
                      <FontAwesomeIcon icon={faUser} color="gray" />
                    </View>
                    <Text className="text-gray-700">Tài xế</Text>
                    <View className="ml-3 mr-1">
                      <FontAwesomeIcon icon={faFileAlt} color="gray" />
                    </View>
                    <Text className="text-gray-700">17 bài đánh giá</Text>
                  </View>
                </View>
              </View>
              <View className="flex flex-row items-center mb-2">
                <View className="flex flex-row ">
                  <FontAwesomeIcon icon={faStar} color="yellow" />
                  <FontAwesomeIcon icon={faStar} color="yellow" />
                  <FontAwesomeIcon icon={faStar} color="yellow" />
                  <FontAwesomeIcon icon={faStar} color="yellow" />
                  <FontAwesomeIcon icon={faStar} color="yellow" />
                </View>
                <Text className="text-gray-500 text-sm ml-2">5 ngày trước</Text>
              </View>
              <Text className="text-[#151551]">
                Bãi giữ xe rất an ninh, sạch sẽ. Nhân viên rất nhiệt tình và chu
                đáo. Lần sau sẽ ghé lại.
              </Text>
            </View>
            <View className=" border border-general-200 p-4 rounded-lg mb-4 shadow-2xl">
              <View className="flex flex-row items-center mb-2">
                <Image
                  source={require("../../assets/images/ronaldo.jpg")}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <View>
                  <Text className="font-bold text-[#151551]">Trần Anh Minh</Text>
                  <View className="flex flex-row items-center text-gray-500 text-sm">
                    <View className="mr-1">
                      <FontAwesomeIcon icon={faUser} color="gray" />
                    </View>
                    <Text className="text-gray-700">Tài xế</Text>
                    <View className="ml-3 mr-1">
                      <FontAwesomeIcon icon={faFileAlt} color="gray" />
                    </View>
                    <Text className="text-gray-700">6 bài đánh giá</Text>
                  </View>
                </View>
              </View>
              <View className="flex flex-row items-center mb-2">
                <View className="flex flex-row ">
                  <FontAwesomeIcon icon={faStar} color="yellow" />
                  <FontAwesomeIcon icon={faStar} color="yellow" />
                  <FontAwesomeIcon icon={faStar} color="yellow" />
                  <FontAwesomeIcon icon={faStar} color="yellow" />
                  <FontAwesomeIcon icon={faStar} color="yellow" />
                </View>
                <Text className="text-gray-500 text-sm ml-2">1 tuần trước</Text>
              </View>
              <Text className="text-[#151551]">
              Bãi giữ xe có camera an ninh, mình cũng thấy yên tâm hơn.
              </Text>
            </View>
           
          </View>
          <TouchableOpacity>
            <Text className="text-blue-600 mt-4">Xem thêm đánh giá khác</Text>
          </TouchableOpacity>
          <View className="flex flex-row justify-between items-center mt-4">
            <TouchableOpacity 
            onPress={()=>{
              router.push('/(root)/park-success')
            }}
            className="bg-yellow-500 w-[80%]  text-white px-6 py-2 rounded-lg">
              <Text className="text-white text-center font-JakartaBold">Đặt chỗ</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-yellow-100  text-yellow-500 px-4 py-2 rounded-lg">
              <FontAwesomeIcon icon={faPhone} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

// import React, { useRef, useEffect, useState, useMemo } from "react";
// import {
//   View,
//   Text,
//   ScrollView,
//   TouchableOpacity,
//   Image,
//   StyleSheet,
// } from "react-native";
// import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
// import {
//   faShoppingBag,
//   faMapMarkerAlt,
//   faChurch,
//   faHospital,
//   faTrain,
//   faBriefcase,
//   faTree,
//   faSnowflake,
//   faUtensils,
//   faConciergeBell,
//   faWifi,
// } from "@fortawesome/free-solid-svg-icons";
// import { useDriverStore } from "@/store";
// import { markersData } from "@/constants";
// import Navbar from "@/components/Navbar";
// import { MarkerData } from "@/types/type";
// import { SafeAreaView } from "react-native-safe-area-context";
// import LocationNearby from "@/components/LocationNearby";

// const ParkDetail = () => {
//   const { selectedDriver } = useDriverStore();
//   // const currentPark:MarkerData = useMemo(()=>{
//   //   const response= markersData.filter((park)=>park.id=== selectedDriver)
//   //   return response[0]
//   // },[selectedDriver])

//   const currentPark = markersData[0];

//   const [navbarOpacity, setNavbarOpacity] = useState(0);
//   const [currentNavbarItem, setCurrentNavbarItem] = useState("Tổng quan");

//   const containerRef = useRef<ScrollView>(null);
//   const overallRef = useRef<View>(null);
//   const descriptionRef = useRef<View>(null);
//   const reviewRef = useRef<View>(null);
//   const locationRef = useRef<View>(null);
//   const policyRef = useRef<View>(null);

//   return (
//     <SafeAreaView className="relative">
//       <Navbar
//         currentNavbarItem={currentNavbarItem}
//         handlePress={(item: string) => {
//           setCurrentNavbarItem(item);
//         }}
//         title={currentPark.title}
//         navbarOpacity={navbarOpacity}
//       />
//       <ScrollView
//         onScroll={(event) => {
//           const navbarOpacity =
//             Math.floor(event.nativeEvent.contentOffset.y / 40) * 20;
//           setNavbarOpacity(navbarOpacity > 100 ? 100 : navbarOpacity);
//         }}
//         ref={containerRef}
//         className="bg-gray-100 relative flex-col gap-y-2"
//       >
//         <Image
//           source={require("../../assets/images/san1.png")}
//           className="w-full h-[350px]"
//           resizeMode="cover"
//         />

//         <View style={styles.box}>
//           <View className="bg-white rounded-lg shadow-lg p-2 flex-row items-center justify-center space-x-4">
//             <View className="flex-row items-center space-x-2">
//               <View className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
//                 <Text className="text-white text-xl font-bold">7.4</Text>
//               </View>
//               <View className="text-sm">
//                 <Text className="text-blue-500 font-semibold">25 đánh giá</Text>
//                 <Text className="text-gray-500">Tiện lợi</Text>
//               </View>
//             </View>
//             <View className="flex-1 ">
//               <Text className="text-lg font-semibold text-gray-800">
//                 Quận Hoàn Kiếm, Hà Nội
//               </Text>
//               <View
//                 className="text-sm text-gray-500
//                flex-col items-start justify-center gap-y-1"
//               >
//                 <View className="flex-row gap-x-2">
//                   <FontAwesomeIcon icon={faShoppingBag} />
//                   <Text>Khu mua sắm</Text>
//                 </View>
//                 <View className="flex-row gap-x-2">
//                   <FontAwesomeIcon icon={faMapMarkerAlt} />
//                   <Text>Gần Hang Gai Street</Text>
//                 </View>
//               </View>
//             </View>
//           </View>

//           <View className="bg-white rounded-lg shadow-lg p-4 mt-2 flex-row items-center justify-between">
//             <View className="flex-row items-center space-x-2 text-blue-500">
//               <FontAwesomeIcon icon={faSnowflake} />
//               <Text>Máy lạnh</Text>
//             </View>
//             <View className="flex-row items-center space-x-2 text-blue-500">
//               <FontAwesomeIcon icon={faUtensils} />
//               <Text>Nhà hàng</Text>
//             </View>
//             <View className="flex-row items-center space-x-2 text-blue-500">
//               <FontAwesomeIcon icon={faConciergeBell} />
//               <Text>Lễ tân 24h</Text>
//             </View>
//             <View className="flex-row items-center space-x-2 text-blue-500">
//               <FontAwesomeIcon icon={faWifi} />
//               <Text>WiFi</Text>
//             </View>
//           </View>
//         </View>

//         <View style={styles.box}>
//           <LocationNearby currentPark={currentPark} />
//         </View>
//         <View>
//           <View className="p-4">
//             <View className="bg-white p-4 rounded-lg shadow-md">
//               <View className="flex-row justify-between items-center mb-4">
//                 <Text className="text-lg font-bold">Tiện ích</Text>
//                 <TouchableOpacity>
//                   <Text className="text-blue-500">Xem tất cả</Text>
//                 </TouchableOpacity>
//               </View>
//               <View className="bg-blue-100 p-4 rounded-lg text-center text-blue-700 font-bold mb-4">
//                 <Text>Đừng bỏ lỡ! Chỉ còn 1 phòng có giá này!</Text>
//               </View>
//               <View className="flex-row justify-between items-center">
//                 <View>
//                   <Text className="text-sm text-gray-300">Giá bắt đầu từ</Text>
//                   <Text className="text-2xl text-orange-500 font-bold">
//                     VND 529.670
//                   </Text>
//                   <Text className="text-xs text-gray-400">
//                     Tổng giá VND 600.647 bao gồm thuế và phí
//                   </Text>
//                 </View>
//                 <TouchableOpacity className="bg-orange-500 text-white px-4 py-2 rounded-lg">
//                   <Text>Chọn phòng</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default ParkDetail;
// const styles = StyleSheet.create({
//   box: {
//     backgroundColor: "white",
//     borderRadius: 10,
//     marginHorizontal: 10,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//     elevation: 5,
//   },
// });
