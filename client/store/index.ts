import { create } from "zustand";
import { markersData } from "@/constants";
import {
  ParkingStore,
  LocationStore,
  MarkerData,
  FindPlaceFilterStore,
  InvoiceStore,
  Invoice,
} from "@/types/type";

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
    latitude: number;
    longitude: number;
    address: string;
  }) => {
    set(() => ({
      userLatitude: latitude,
      userLongitude: longitude,
      userAddress: address,
    }));

    const { selectedParking, clearSelectedParking } =
      useParkingStore.getState();
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
  },
  clearUserLocation: () => {
    set(() => ({
      userLatitude: null,
      userLongitude: null,
      userAddress: null,
    }));
  },
  clearDestinationLocation: () => {
    set(() => ({
      destinationLatitude: null,
      destinationLongitude: null,
      destinationAddress: null,
    }));
  },
}));

export const useParkingStore = create<ParkingStore>((set) => ({
  parkings: markersData,
  selectedParking: null,
  setSelectedParking: (parking: MarkerData) =>
    set(() => ({ selectedParking: parking })),
  setParkings: (parkings: MarkerData[]) => set(() => ({ parkings })),
  clearSelectedParking: () => set(() => ({ selectedParking: null })),
}));

export const useFindPlaceFilter = create<FindPlaceFilterStore>((set) => ({
  times: { startTime: new Date(), endTime: new Date() },
  cars: "Xe 4 chỗ",
  amenities: [],
  price: 25,
  distance: 500,
  totalHour: 0,
  totalPrice: 0,
  setTimes: (times: { startTime: Date; endTime: Date }) =>
    set(() => ({ times: times })),
  setCars: (car: "Xe 4 chỗ" | "Xe 7 chỗ" | "Xe tải nhỏ" | "Xe tải lớn") =>
    set(() => ({ cars: car })),
  setAmenities: (amenities: string[]) => set(() => ({ amenities })),
  setPrice: (price: number) => set(() => ({ price })),
  setDistance: (distance: number) => set(() => ({ distance })),
  setTotalHour: (totalHour) => set(() => ({ totalHour })),
  setTotalPrice: (price: number) => set(() => ({ totalPrice: price })),
}));

export const useInvoiceStore = create<InvoiceStore>((set) => ({
  selectedInvoice: null,
  setSelectedInvoice: (invoice: Invoice) =>
    set(() => ({ selectedInvoice: invoice })),
  clearSelectedInvoice: () => set(() => ({ selectedInvoice: null })),
}));

export type carType =
  "Xe 4 chỗ" | "Xe 7 chỗ" | "Xe tải nhỏ" | "Xe tải lớn" | null;

export type descriptionsType = {
  quantity: number;
  size: {
    width: number;
    height: number;
  };
  carType:carType,
  oparatingTime: {
    start: Date;
    close: Date;
  };
};

type parkingType =
  | "Trong nhà"
  | "Bãi đỗ xe chung cư"
  | "Bãi đỗ xe chuyên dụng"
  | "Khu đất trống"
  | "Sân vườn"
  | null;

interface setUpParkingStore {
  parkingType: parkingType;

  parkingLocation: {
    latitude: number | null;
    longitude: number | null;
    address: string | null;
  };
  descriptions: descriptionsType;
  amenities: string[];
  locationNearBy:string[];
  pictures: string[];
  bookingMethod:number|null
  price: number;
  setParkingType: (type:parkingType) => void;
  setParkingLocation: (parkingLocation: {
    latitude: number;
    longitude: number;
    address: string;
  }) => void;
  setDescriptions: (descriptions: descriptionsType) => void;
  setAmenities: (amenities: string[]) => void;
  setLocationNearBy:(locationNearBy:string[])=>void;


  setPictures: (pictures: string[]) => void;
  setBookingMethod:(method:number)=>void
  setPrice: (price: number) => void;
}

export const useSetUpParkingStore = create<setUpParkingStore>((set) => ({
  parkingType: null,
  parkingLocation: {
    latitude: null,
    longitude: null,
    address: null,
  },
  descriptions: {
    quantity: 0,
    size: { width: 0, height: 0 },
    carType: "Xe 4 chỗ",
    oparatingTime: {
      start: new Date(),
      close: new Date(),
    },
  },
  amenities: [],
  locationNearBy:[],
  pictures: [],
  bookingMethod:null,
  price: 0,
  setParkingType: (type) => set({ parkingType: type }),
  setParkingLocation: (parkingLocation) => set({ parkingLocation }),
  setDescriptions: (descriptions) => set({ descriptions: descriptions }),
  setAmenities: (amenities) => set({ amenities }),
  setLocationNearBy:(locationNearBy)=>set({locationNearBy}),
  setPictures: (pictures) => set({ pictures }),
  setBookingMethod:(method)=>set({bookingMethod:method}),
  setPrice: (price) => set({ price }),
}));
