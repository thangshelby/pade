
import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMapMarkerAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import { styled } from 'nativewind';
import { useDriverStore,useLocationStore } from '@/store';
import { MarkerData } from '@/types/type';
import { markersData } from '@/constants';
import { useRouter } from 'expo-router';

const Container = styled(View, 'bg-white p-4  shadow-md w-80');
const Header = styled(View, 'flex justify-between items-center mb-2');
const Title = styled(Text, 'text-lg font-semibold');
const Info = styled(View, 'flex items-center text-gray-500 text-sm');
const Divider = styled(View, 'border-t border-gray-200 my-2');
const Row = styled(View, 'flex justify-between items-center mb-2');
const Label = styled(Text, 'text-gray-500 text-sm');
const Value = styled(Text, 'text-lg font-semibold');
const ValueBlue = styled(Text, 'text-lg font-semibold text-blue-600');
const BadgeContainer = styled(View, 'flex space-x-2 mb-4');
const Badge = styled(Text, 'bg-blue-100 text-blue-600 text-sm px-2 py-1 rounded-full');
const ButtonContainer = styled(View, 'flex justify-between items-center');
const Button = styled(TouchableOpacity, 'bg-yellow-500 text-white text-lg font-semibold py-2 px-4 rounded-lg');
const ButtonSecondary = styled(TouchableOpacity, 'border border-gray-300 text-gray-500 text-lg font-semibold py-2 px-4 rounded-lg');

const LocationOverview =() => {
  // const {selectedDriver} = useDriverStore();
  const {destinationAddress} = useLocationStore();
  const [currentMarker,setCurrentMarker] = React.useState<MarkerData | null>(null);
  useEffect(()=>{
    if(destinationAddress){
      for (let i = 0; i < markersData.length; i++) {
        if (markersData[i].title === destinationAddress) {
          setCurrentMarker(markersData[i]);
        }
      }
    }
  },[destinationAddress])

  const router = useRouter();

  return (

    <Container className='border-[1px] border-primary-500'>
      <Header className='flex-col items-start justify-center gap-y-2'>
        <Title className='text-[#151551] font-JakartaExtraBold'>{currentMarker?.title}</Title>
        <Info className='flex-row gap-x-1 '>
          <FontAwesomeIcon icon={faMapMarkerAlt} color='#ADADAD' />
          <Text className='text-[#ADADAD]'>{currentMarker?.distance}km</Text>

          <FontAwesomeIcon icon={faStar} color="yellow" />
          <Text className='text-general-800'> {currentMarker?.rating} (120)</Text>
        </Info>
      </Header>
      <Divider />
      <Row className='flex-row'> 
        <View>
          <Label>Thời gian</Label>
          <Value className='text-[#151551]'>2 tiếng 45 phút</Value>
        </View>
        <View>
          <Label>Phí tạm tính</Label>
          <ValueBlue>{currentMarker?.price}</ValueBlue>
        </View>
      </Row> 
      <BadgeContainer className='flex-row'>
        <Badge>Có mái che</Badge>
        <Badge>Camera an ninh</Badge>
        <Badge>+1</Badge>
      </BadgeContainer>

      <ButtonContainer className='w-full flex-row'>

        <Button 
        onPress={() => {
          router.push('/(root)/park-detail');
        }}
        className='w-[80%] bg-yellow-400'>
          <Text className="text-white text-center font-JakartaBold">Đặt chỗ ngay</Text>
        </Button>

        <View className='flex-row w-[35px] h-[35px] border-[1px] border-yellow-400 bg-red-100   justify-evenly items-center '>
          <View className='p-[2px] rounded-full bg-yellow-400'/> 
          <View className='p-[2px] rounded-full bg-yellow-400'/> 
          <View className='p-[2px] rounded-full bg-yellow-400'/> 
        </View>
  
      </ButtonContainer>
    </Container>
  );
};

export default LocationOverview;
