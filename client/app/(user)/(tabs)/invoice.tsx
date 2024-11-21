import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import InvoiceCard from "@/components/InvoiceCard";
import { images } from "@/constants";
import BottomSheet from "@gorhom/bottom-sheet";
import { useRef, useState, useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Invoice } from "@/types/type";

import { useInvoiceStore } from "@/store";
import Timer from "@/components/Timer";

const Invoices = () => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const { selectedInvoice, setSelectedInvoice } = useInvoiceStore();

  const bottomSheetRef = useRef<BottomSheet>(null);
  const [isOPenBottomSheet, setIsOpenBottomSheet] = useState(false);
  const loading = false;

  useEffect(() => {
    const fetchInvoices = async () => {
      const response = await fetch(
        `http://192.168.42.1:3000/invoice/get_all_invoices`
      );
      const data = await response.json();
      setInvoices(data.invoices);
    };

    fetchInvoices();
  }, []);


  const handleBottomSheet = (invoice?: Invoice) => {
    if (invoice) {
      setSelectedInvoice(invoice);
      setIsOpenBottomSheet(true);
    } else {
      setIsOpenBottomSheet(false);
    }
  };


  return (
    <GestureHandlerRootView>
      <SafeAreaView className="flex-1 bg-white">
        <FlatList
          data={invoices}
          renderItem={({ item }) => (
            <InvoiceCard invoice={item} handleBottomSheet={handleBottomSheet} />
          )}
          keyExtractor={(item, index) => index.toString()}
          className="px-5"
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            paddingBottom: 100,
          }}
          ListEmptyComponent={() => (
            <View className="flex flex-col items-center justify-center">
              {!loading ? (
                <>
                  <Image
                    source={images.noResult}
                    className="w-40 h-40"
                    alt="No recent rides found"
                    resizeMode="contain"
                  />
                  <Text className="text-sm">No recent parks found</Text>
                </>
              ) : (
                <ActivityIndicator size="small" color="#000" />
              )}
            </View>
          )}
          ListHeaderComponent={
            <>
              <Text className="text-2xl font-JakartaBold my-5">
                All Recent Parkings
              </Text>
            </>
          }
        />

        {isOPenBottomSheet && (
          <BottomSheet ref={bottomSheetRef} snapPoints={["90%"]} index={0}>
            <Timer
              selectedInvoice={selectedInvoice!}
              setIsOpenBottomSheet={setIsOpenBottomSheet}
            />
          </BottomSheet>
        )}
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Invoices;
