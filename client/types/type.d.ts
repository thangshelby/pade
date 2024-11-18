import { TextInputProps, TouchableOpacityProps } from "react-native";

declare interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
}

declare interface UserStore {
  user: User | null;
  isSignedIn: boolean;
  setIsSignedIn: (isSignedIn: boolean) => void;
  setUser: (user: User) => void;
  clearUser: () => void;

}

// declare interface InvoiceStore {
//   totalPrice:number;
//   setTotalPrice:(price:number)=>void;
//   currentUser:UserStore;
//   setCurrentUser:(user:UserStore)=>void;
//   selectedParking:MarkerData;
//   setSelectedParking:(parking:MarkerData)=>void;
//   paymentStatus:'Paid'| 'Unpaid' | 'Pending';
//   setPaymentStatus:(status:'Paid'| 'Unpaid' | 'Pending')=>void;
// }


declare interface Parking {
  id: number;
  first_name: string;
  last_name: string;
  profile_image_url: string;
  car_image_url: string;
  car_seats: number;
  rating: number;
}

declare interface MarkerData {
  latitude: number;
  longitude: number;
  id: number;
  distance: number;
  title: string;
  address: string;
  rating: number;
  time?: number;
  price: string;
  workingHours: string;
  amenities: string[];
}

declare interface MapProps {
  destinationLatitude?: number;
  destinationLongitude?: number;
  onDriverTimesCalculated?: (driversWithTimes: MarkerData[]) => void;
  selectedDriver?: number | null;
  onMapReady?: () => void;
}

declare interface Ride {
  origin_address: string;
  destination_address: string;
  origin_latitude: number;
  origin_longitude: number;
  destination_latitude: number;
  destination_longitude: number;
  ride_time: number;
  fare_price: string;
  payment_status: string;
  driver_id: number;
  user_id: string;
  created_at: string;
  driver: {
    first_name: string;
    last_name: string;
    car_seats: number;
  };
}

declare interface ButtonProps extends TouchableOpacityProps {
  title: string;
  bgVariant?: "primary" | "secondary" | "danger" | "outline" | "success";
  textVariant?: "primary" | "default" | "secondary" | "danger" | "success";
  IconLeft?: React.ComponentType<any>;
  IconRight?: React.ComponentType<any>;
  className?: string;
}

declare interface GoogleInputProps {
  icon?: string;
  initialLocation?: string;
  containerStyle?: string;
  textInputBackgroundColor?: string;
  handlePress: ({
    latitude,
    longitude,
    address,
  }: {
    latitude: number;
    longitude: number;
    address: string;
  }) => void;
}

declare interface InputFieldProps extends TextInputProps {
  label: string;
  icon?: any;
  secureTextEntry?: boolean;
  labelStyle?: string;
  containerStyle?: string;
  inputStyle?: string;
  iconStyle?: string;
  className?: string;
}

declare interface PaymentProps {
  fullName: string;
  email: string;
  amount: string;
  driverId: number;
  rideTime: number;
}

declare interface LocationStore {
  userLatitude: number | null;
  userLongitude: number | null;
  userAddress: string | null;
  destinationLatitude: number | null;
  destinationLongitude: number | null;
  destinationAddress: string | null;
  setUserLocation: ({
    latitude,
    longitude,
    address,
  }: {
    latitude: number;
    longitude: number;
    address: string;
  }) => void;
  setDestinationLocation: ({
    latitude,
    longitude,
    address,
  }: {
    latitude: number;
    longitude: number;
    address: string;
  }) => void;
  clearUserLocation: () => void;
  clearDestinationLocation: () => void;
}

declare interface ParkingStore {
  parkings: MarkerData[];
  selectedParking: MarkerData | null;
  setSelectedParking: (parking: MarkerData) => void;
  setParkings: (parkings: MarkerData[]) => void;
  clearSelectedParking: () => void;
}

declare interface DriverCardProps {
  item: MarkerData;
  selected: number;
  setSelected: () => void;
}

export interface PredictedPlaces {
  id: number;
  placeId: string;
  description: string;
  distance: number;
}

interface Invoice {
  id: number;               // Corresponds to int identity(1,1) primary key
  userId: string;          // Corresponds to char(200) unique
  placeId: number;         // Corresponds to int
  totalHour: number;       // Corresponds to int
  startHour: string;       // Corresponds to time (you can use string for ISO format like 'HH:mm:ss')
  endHour: string;         // Corresponds to time (you can use string for ISO format like 'HH:mm:ss')
  createdAt: string;       // Corresponds to date (use string for ISO date format 'YYYY-MM-DD')
  totalPrice: number;      // Corresponds to int
  paymentMethod: string;   // Corresponds to char(20)
  paymentStatus: string;    // Corresponds to char(10)
  cartype: string;         // Corresponds to char(100)
}

export interface Location {
  address: string;
  rating: number;
  type: string;
  distance: number;
  name: string;
}

export interface FindPlaceFilterStore {
  times: {
    startTime: Date ;
    endTime: Date;
  };
  cars: "Xe 4 chỗ" | "Xe 7 chỗ" | "Xe tải nhỏ" | "Xe tải lớn";
  amenities: string[];
  price: number;
  distance: number;
  totalHour: number;
  totalPrice:number
  setTimes: (dates: { startTime: Date ; endTime: Date }) => void;
  setCars: (car: "Xe 4 chỗ" | "Xe 7 chỗ" | "Xe tải nhỏ" | "Xe tải lớn") => void;
  setAmenities: (amenities: string[]) => void;
  setPrice: (price: number) => void;
  setDistance: (distance: number) => void;
  setTotalHour: (totalHour:number) => void;
  setTotalPrice:(price:number)=>void;
}

export interface InvoiceStore{
  selectedInvoice:Invoice | null;
  setSelectedInvoice:(invoice:Invoice)=>void;
  clearSelectedInvoice:()=>void;
}