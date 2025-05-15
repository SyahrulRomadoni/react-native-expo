import { Feather } from '@expo/vector-icons';
import React from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useColorScheme
} from 'react-native';
import {
  BannerCarousel,
  BannerList,
  LabelCard,
  LabelCardWithTrigger,
  LabelText,
  RestoCardList,
  TabsMenuService
} from '../../components/custome';

export default function App() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const bannerCarousel = [
    {
      id: 1,
      image: 'https://lelogama.go-jek.com/post_featured_image/Info-Gojek-Header-Banner.jpg',
    },
    {
      id: 2,
      image: 'https://lelogama.go-jek.com/post_featured_image/jaga-kebersihan-layanan-BLOG-Banner.jpg',
    },
    {
      id: 3,
      image: 'https://lelogama.go-jek.com/post_featured_image/protokol-ekstra.jpg',
    },
  ];

  const servicesData = [
    {
      id: 1,
      name: 'GoRide',
      badge: '5RB',
      image: 'https://cdn-icons-png.flaticon.com/512/1023/1023346.png',
    },
    {
      id: 2,
      name: 'GoCar',
      badge: '5RB',
      image: 'https://cdn-icons-png.flaticon.com/512/2555/2555013.png',
    },
    {
      id: 3,
      name: 'GoFood',
      badge: '5RB',
      image: 'https://cdn-icons-png.flaticon.com/512/3272/3272779.png',
    },
    {
      id: 4,
      name: 'GoSend',
      badge: '5RB',
      image: 'https://cdn-icons-png.flaticon.com/512/7274/7274757.png',
    },
    {
      id: 5,
      name: 'GoMart',
      badge: '5RB',
      image: 'https://cdn-icons-png.flaticon.com/512/3142/3142740.png',
    },
    {
      id: 6,
      name: 'GoPay',
      badge: '5RB',
      image: 'https://cdn-icons-png.flaticon.com/512/6020/6020687.png',
    },
    {
      id: 7,
      name: 'GoHemmat',
      badge: '',
      image: 'https://cdn-icons-png.flaticon.com/512/8781/8781733.png',
    },
    {
      id: 8,
      name: 'Lainnya',
      badge: '',
      image: 'https://cdn-icons-png.flaticon.com/512/9970/9970242.png',
    },
  ];

  const bannerCard = [
    {
      id: 1,
      image: 'https://lelogama.go-jek.com/post_featured_image/promo-tokopedia-agustus.jpg',
      title: 'Promo Tokopedia WIB Kali Ini Edisi Spesial Ulang Tahun!',
      subtitle: 'Diskon s.d 35RB pake GoRide & GoCar!',
    },
    {
      id: 2,
      image: 'https://lelogama.go-jek.com/post_featured_image/promo-kesebelasan-Anniv_GoFood_Blog-Banner_1456x818_200rb.jpg',
      title: 'Promo Kesebelasan GoFood: Diskon s.d 200rb & diskon ongkir',
      subtitle: 'Diskon 50% untuk pengguna baru!',
    },
    {
      id: 3,
      image: 'https://lelogama.go-jek.com/post_featured_image/Screenshot_2023-09-14_104658.png',
      title: 'Promo Hari Perhubungan Nasional!',
      subtitle: 'Cashback hingga 75RB dengan GoPay!',
    },
  ];

  const restoDataList = [
    {
      id: 1,
      image: 'https://lelogama.go-jek.com/cms_editor/2018/06/29/Januari_JKT_Martabak.jpg',
      jarakTempuh: '2.73 km',
      durasiWaktu: '25-35 min',
      namaResto: 'Martabak 99 masakan manis gurih legit plus plus plus plus plus',
      rating: '4.8 - 3rb+ rating',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092',
      jarakTempuh: '1.2 km',
      durasiWaktu: '15-25 min',
      namaResto: 'Bakso Bakar Super Mantap Jiwa',
      rating: '4.7 - 2rb+ rating',
    },
    {
      id: 3,
      image: 'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/a50bc893-f54e-4ff0-b669-565231d3a715_Go-Biz_20220223_225110.jpeg',
      jarakTempuh: '3.5 km',
      durasiWaktu: '30-40 min',
      namaResto: 'Mie Ayam Level Pedas Mampus',
      rating: '4.5 - 1rb+ rating',
    },
  ];

  const handleTabsMenu = (item: any) => {
    console.log('id : ', item.id + ', name : ' + item.name);
  };

  const handleResto = (item: any) => {
    console.log('id : ' + item.id + ', name : ' + item.namaResto);
  };

  const handleBanner = (item: any) => {
    console.log('id : ' + item.id + ', name : ' + item.title);
  };

  const handleTrigger = () => {
    console.log('Tombol ditekan!');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      
      {/* Search Bar + Profile */}
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          paddingTop: Platform.OS === 'ios' ? 60 : 50,
          paddingBottom: 12,
          paddingHorizontal: 10,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 4,
          backgroundColor: isDark ? 'rgb(28, 28, 28)' : 'rgb(255, 255, 255)'
        }}
      >
        {/* Input Groups */}
        <View style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: isDark ? 'rgb(230, 230, 230)' : 'rgb(230, 230, 230)',
          borderRadius: 30,
          paddingHorizontal: 10,
          paddingVertical: Platform.OS === 'ios' ? 12 : 4,
          marginRight: 20,
        }}>
          <Feather
            name="search"
            style={{
              color: isDark ? 'rgb(170, 170, 170)' : 'rgb(170, 170, 170)',
              fontSize: Platform.OS === 'ios' ? 20 : 24,
              marginLeft: 5,
            }}
          />
          <TextInput
            placeholder="Pecel Lele, Bandeng..."
            style={{
              flex: 1,
              fontSize: Platform.OS === 'ios' ? 15 : 17,
              marginLeft: 5,
            }}
          />
        </View>
        <TouchableOpacity>
          <Feather
            name="user"
            style={{
              borderRadius: 50,
              padding: 10,
              backgroundColor: 'rgb(25, 200, 20)',
              color: 'rgb(255, 255, 255)',
              fontSize: 20
            }}
        />
        </TouchableOpacity>
      </View>

      {/* ScrollView */}
      <ScrollView style={{ flex: 1 }}>
        
        {/* Container */}
        <View
          style={{
            paddingTop: Platform.OS === 'ios' ? 43 : 100,
            paddingBottom: Platform.OS === 'ios' ? 130 : 140,
            backgroundColor: isDark ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)',
          }}
        >

          {/* Banner */}
          <BannerCarousel data={bannerCarousel} />

          {/* Balance Section */}
          <View
            style={{
              padding: 10,
              margin: 10,
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 12,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.2,
              shadowRadius: 6,
              elevation: 6,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: isDark ? 'rgb(28,28,28)' : 'rgb(255, 255, 255)'
            }}
          >
            {/* Wallet */}
            <View>
              <Text
                style={{
                  fontSize: Platform.OS === 'ios' ? 18 : 22,
                  fontWeight: 'bold',
                  color: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'
                }}
              >Rp 20.000.000</Text>
              <Text
                style={{
                  fontSize: Platform.OS === 'ios' ? 12 : 14,
                  color: '#888',
                }}
              >10.000.000 coins</Text>
            </View>

            {/* Button */}
            <View
              style={{
                flexDirection: 'row',
                gap: 10,
              }}
            >
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingHorizontal: 4,
                }}
              >
                <Feather
                  name="send"
                  style={{
                    borderRadius: 50,
                    padding: 10,
                    backgroundColor: 'rgb(25, 200, 20)',
                    color: 'rgb(255, 255, 255)',
                    fontSize: 20
                  }}
                />
                <Text
                  style={{
                    fontSize: 12,
                    marginTop: 4,
                    color: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'
                  }}
                >Bayar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingHorizontal: 4,
                }}
              >
                <Feather
                  name="plus-circle"
                  style={{
                    borderRadius: 50,
                    padding: 10,
                    backgroundColor: 'rgb(25, 200, 20)',
                    color: 'rgb(255, 255, 255)',
                    fontSize: 20
                  }}
                />
                <Text
                  style={{
                    fontSize: 12,
                    marginTop: 4,
                    color: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'
                  }}
                >Top Up</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingHorizontal: 4,
                }}
              >
                <Feather
                  name="more-horizontal"
                  style={{
                    borderRadius: 50,
                    padding: 10,
                    backgroundColor: 'rgb(25, 200, 20)',
                    color: 'rgb(255, 255, 255)',
                    fontSize: 20
                  }}
                />
                <Text
                  style={{
                    fontSize: 12,
                    marginTop: 4,
                    color: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'
                  }}
                >Lainnya</Text>
              </TouchableOpacity>

            </View>
          </View>

          {/* Tabs Menu Service */}
          <TabsMenuService data={servicesData} onTrigger={handleTabsMenu}/>

          {/* Label Text */}
          <LabelText text="Tebus murah !!"/>

          {/* Label Card */}
          <LabelCard text='Diskon s.d. 10rb/transaksi. Yuk, langganan GoPay Plus'/>

          {/* Label Card and Tigger */}
          <LabelCardWithTrigger text="Diskon s.d. 10rb/transaksi. Yuk, langganan GoPay Plus plus" onPress={handleTrigger}/>

          {/* Rating Resto */}
          <RestoCardList data={restoDataList} onTrigger={handleResto} />

          {/* Label Text */}
          <LabelText text="Tebus murah !!"/>

          {/* Label Card */}
          <LabelCard text='Diskon s.d. 10rb/transaksi. Yuk, langganan GoPay Plus'/>

          {/* Label Card and Tigger */}
          <LabelCardWithTrigger text="Diskon s.d. 10rb/transaksi. Yuk, langganan GoPay Plus plus" onPress={handleTrigger}/>

          {/* Banner Section */}
          <BannerList data={bannerCard} onTrigger={handleBanner} />
          
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
});