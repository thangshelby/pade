import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { icons } from "@/constants";
import { formatDate, formatTime } from "@/lib/utils";
import { Invoice } from "@/types/type";
import { useRouter } from "expo-router";
import { markersData, carAndImages } from "@/constants";
import { useUser } from "@clerk/clerk-expo";
import { useInvoiceStore } from "@/store";

const InvoiceCard = ({
  invoice,
  handleBottomSheet,
}: {
  invoice: Invoice;
  handleBottomSheet: (invoice?:Invoice) => void;
}) => {
  const { user } = useUser();
  const { setSelectedInvoice } = useInvoiceStore();
  const router = useRouter();
  const selectedParking = markersData[invoice.placeId];
  return (
    <View className="flex flex-row items-center justify-center bg-white rounded-lg shadow-sm shadow-neutral-300 mb-3">
      <View className="w-full flex flex-col items-start justify-center p-3">
        <View className="flex flex-row items-center justify-between">
          <Image
            source={{
              uri: "https://ucarecdn.com/a2dc52b2-8bf7-4e49-9a36-3ffb5229ed02/-/preview/465x466/",
            }}
            className="w-[80px] h-[90px] rounded-lg"
          />

          <View className="flex flex-col mx-5 gap-y-5 flex-1">
            <View className="flex flex-row items-center gap-x-2">
              <Image source={icons.to} className="w-5 h-5" />
              <Text className="text-md font-JakartaMedium" numberOfLines={1}>
                {selectedParking?.title || "Vincom Center Đồng Khởi"}
              </Text>
            </View>

            <View className="flex flex-row items-center gap-x-2">
              <Image source={icons.point} className="w-5 h-5" />
              <Text className="text-md font-JakartaMedium" numberOfLines={1}>
                {selectedParking?.address ||
                  "216 Võ Văn Ngân, Bình Thọ, Thủ Đức, Hồ Chí Minh, Vietnam"}
              </Text>
            </View>
          </View>
        </View>

        <View className="flex flex-col w-full mt-5 bg-general-500 rounded-lg p-3 items-start justify-center">
          <View className="flex flex-row items-center w-full justify-between mb-5">
            <Text className="text-md font-JakartaMedium text-gray-500">
              Date & Time
            </Text>
            <Text className="text-md font-JakartaBold" numberOfLines={1}>
              {formatDate(invoice.createdAt)},{formatTime(invoice.createdAt)}
              {/* , {formatTime(invoice.invoice_time)} */}
            </Text>
          </View>

          <View className="flex flex-row items-center w-full justify-between mb-5">
            <Text className="text-md font-JakartaMedium text-gray-500">
            Tên khách hàng
            </Text>
            <Text className="text-md font-JakartaBold">{user?.fullName}</Text>
          </View>

          <View className="flex flex-row items-center w-full justify-between mb-5">
            <Text className="text-md font-JakartaMedium text-gray-500 ">
              Loại xe
            </Text>
            <View>
              <Text className="text-md font-JakartaBold ">
                {invoice.cartype}
              </Text>
            </View>
          </View>

          <View className="flex flex-row items-center w-full justify-between">
            <Text className="text-md font-JakartaMedium text-gray-500">
              Payment Status
            </Text>
            <TouchableOpacity
              onPress={() => {
                setSelectedInvoice(invoice);
                router.push("/payment-detail");
              }}
            >
              <Text
                className={`text-md capitalize font-JakartaBold ${invoice.paymentStatus === "paid" ? "text-green-500" : "text-red-500"}`}>
                {invoice.paymentStatus}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="w-full p-4 bg-blue-500 rounded-b-2xl">
          <TouchableOpacity onPress={()=>{
            handleBottomSheet(invoice)
          }}>
            <Text className="text-center font-JakartaBold">View Progess</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default InvoiceCard;
