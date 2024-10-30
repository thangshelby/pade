import { TextInputProps, TouchableOpacityProps } from "react-native";

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
  distance: number
  title: string;
  address: string
  rating: number;
  time?: number;
  price: string;
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
  fare_price: number;
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
}

declare interface ParkingStore {
  parkings: MarkerData[];
  selectedParking: number | null;
  setSelectedParking: (driverId: number) => void;
  setParkings: (drivers: MarkerData[]) => void;
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

export interface Location{
  address: string;
  rating: number;
  type: string;
  distance: number;
  name: string;
}

export interface FindPlaceFilterStore{
  times:"Theo ngày"| "Theo tuần",
  setTimes:(time:"Theo ngày"| "Theo tuần")=>void
  cars:"Xe 4 chỗ"| "Xe 7 chỗ"| "Xe tải nhỏ"| "Xe tải lớn",
  setCars:(car:"Xe 4 chỗ"| "Xe 7 chỗ"| "Xe tải nhỏ"| "Xe tải lớn")=>void
  amenities:string[],
  setAmenities:(amenities:string[])=>void
  price:number,
  setPrice:(price:number)=>void
  distance:number,
  setDistance:(distance:number)=>void

  
}