import { create } from "zustand";
import { markersData } from "@/constants";
import { ParkingStore, LocationStore, MarkerData,FindPlaceFilterStore } from "@/types/type";

export const useLocationStore = create<LocationStore>((set) => ({
  userLatitude: null,
  userLongitude: null,
  userAddress: null,
  destinationLatitude: null,
  destinationLongitude: null,
  destinationAddress: null,
  setUserLocation: ({
    latitude,
    longitude,
    address,
  }: {
    latitude: number ;
    longitude: number;
    address: string;
  }) => {
    set(() => ({
      userLatitude: latitude,
      userLongitude: longitude,
      userAddress: address,
    }));

   
    const { selectedParking, clearSelectedParking } = useParkingStore.getState();
    if (selectedParking) clearSelectedParking();
  },

  setDestinationLocation: ({
    latitude,
    longitude,  
    address,
  }: {
    latitude: number;
    longitude: number;
    address: string;
  }) => {
    set(() => ({
      destinationLatitude: latitude,
      destinationLongitude: longitude,
      destinationAddress: address,
    }));

    
    const { selectedParking, clearSelectedParking } = useParkingStore.getState();
    if (selectedParking) clearSelectedParking();
  },
  clearUserLocation: () =>{
    set(() => ({
      userLatitude: null,
      userLongitude: null,
      userAddress: null,
    }));
  }
}));

export const useParkingStore = create<ParkingStore>((set) => ({
  parkings: markersData,
  selectedParking: null,
  setSelectedParking: (parkingId: number) =>
    set(() => ({ selectedParking: parkingId })),
  setParkings: (parkings: MarkerData[]) => set(() => ({ parkings })),
  clearSelectedParking: () => set(() => ({ selectedParking: null })),
}));




export const useFindPlaceFilter= create<FindPlaceFilterStore>((set) => ({
  times:"Theo ngày",
  setTimes:(time:"Theo ngày"| "Theo tuần")=>set(()=>({times:time})),
  cars:"Xe 4 chỗ",
  setCars:(car:"Xe 4 chỗ"| "Xe 7 chỗ"| "Xe tải nhỏ"| "Xe tải lớn")=>set(()=>({cars:car})),
  amenities:[],
  setAmenities:(amenities:string[])=>
    set(()=>({amenities})),
  price:25,
  setPrice:(price:number)=>set(()=>({price})),
  distance:500,
  setDistance:(distance:number)=>set(()=>({distance}))

}))


