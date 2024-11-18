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
  setSelectedInvoice: (invoice:Invoice) => set(() => ({ selectedInvoice: invoice })),
  clearSelectedInvoice: () => set(() => ({ selectedInvoice: null })),
}));