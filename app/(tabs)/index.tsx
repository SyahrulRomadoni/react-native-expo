import { Feather } from '@expo/vector-icons';
import React from 'react';
import {
  Image,
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
import BannerList from '../../components/BannerList';
import RestoCardList from '../../components/RestoCardList';

export default function App() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  // Dummy data
  const servicesData = [
    {
      id: 1,
      name: 'GoRide',
      badge: '5RB',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg',
    },
    {
      id: 2,
      name: 'GoRide',
      badge: '5RB',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg',
    },
    {
      id: 3,
      name: 'GoRide',
      badge: '5RB',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg',
    },
    {
      id: 4,
      name: 'GoRide',
      badge: '5RB',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg',
    },
    {
      id: 5,
      name: 'GoRide',
      badge: '5RB',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg',
    },
    {
      id: 6,
      name: 'GoRide',
      badge: '5RB',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg',
    },
    {
      id: 7,
      name: 'GoRide',
      badge: '5RB',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg',
    },
    {
      id: 8,
      name: 'GoRide',
      badge: '5RB',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg',
    },
  ];

  const bannerList = [
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
      image: 'https://lelogama.go-jek.com/cms_editor/2018/06/29/Januari_JKT_Martabak.jpg',
      jarakTempuh: '2.73 km',
      durasiWaktu: '25-35 min',
      namaResto: 'Martabak 99 masakan manis gurih legit plus plus plus plus plus',
      rating: '4.8 - 3rb+ rating',
    },
    {
      image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092',
      jarakTempuh: '1.2 km',
      durasiWaktu: '15-25 min',
      namaResto: 'Bakso Bakar Super Mantap Jiwa',
      rating: '4.7 - 2rb+ rating',
    },
    {
      image: 'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/a50bc893-f54e-4ff0-b669-565231d3a715_Go-Biz_20220223_225110.jpeg',
      jarakTempuh: '3.5 km',
      durasiWaktu: '30-40 min',
      namaResto: 'Mie Ayam Level Pedas Mampus',
      rating: '4.5 - 1rb+ rating',
    },
  ];

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
          <View
            style={{
              // paddingHorizontal: 16
            }}
          >
            <Image
              style={{
                width: '100%',
                height: 200,
              }}
              source={{ uri: 'https://play-lh.googleusercontent.com/IT-4gpRmMwvtYlw5M3JbamStGWlDArwYDXaWex0kbhEy-jyb5txK2Ri4GtS6syghui8' }}
            />
          </View>

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
              >Rp 99.000.000</Text>
              <Text
                style={{
                  fontSize: Platform.OS === 'ios' ? 12 : 14,
                  color: '#888',
                }}
              >99.000.000 coins</Text>
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
                >Lainya..</Text>
              </TouchableOpacity>

            </View>
          </View>

          {/* Services */}
          <View style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            padding: 10
          }}>

            {servicesData.map((item, idx) => (
              <View
                key={idx}
                style={{
                  alignItems: 'center',
                  width: '25%',
                  marginBottom: 10,
                }}
              >

                <Text
                  style={{
                    fontSize: 12,
                    paddingHorizontal: 4,
                    marginBottom: 2,
                    alignSelf: 'flex-start',
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 10,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 0,
                    width: '60%',
                    textAlign: 'center',
                    backgroundColor: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)',
                    color: isDark ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)',
                  }}
                >
                  {item.badge}
                </Text>

                <Image
                  source={{ uri: item.image }}
                  style={{
                    width: '90%',
                    height: 80,
                    borderRadius: 10,
                    marginBottom: 5,
                    resizeMode: 'contain',
                  }}
                />

                <Text>{item.name}</Text>
                
              </View>
            ))}

          </View>

          {/* Label */}
          <View>
            <Text
              style={{
                marginHorizontal: 10,
                fontWeight: 'bold',
                fontSize: 20,
                color: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)',
              }}
            >Tebus murah !!</Text>
          </View>

          {/* Promo Info */}
          <View
            style={{
              backgroundColor: 'rgba(130, 239, 84, 0.3)',
              padding: 10,
              marginHorizontal: 10,
              borderRadius: 10,
              marginTop: 10
            }}
          >
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={{
                color: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'
              }}
            >
              Diskon s.d. 10rb/transaksi. Yuk, langganan GoPay Plus plus plus
            </Text>
          </View>

          {/* Rating Resto */}
          <RestoCardList data={restoDataList} />

          {/* Label */}
          <View>
            <Text
              style={{
                marginHorizontal: 10,
                fontWeight: 'bold',
                fontSize: 20,
                color: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)',
              }}
            >Tebus murah !!</Text>
          </View>

          {/* Promo Info */}
          <View
            style={{
              backgroundColor: 'rgba(130, 239, 84, 0.3)',
              padding: 10,
              marginHorizontal: 10,
              borderRadius: 10,
              marginTop: 10
            }}
          >
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={{
                color: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'
              }}
            >
              Diskon s.d. 10rb/transaksi. Yuk, langganan GoPay Plus plus plus
            </Text>
          </View>

          {/* Banner Section */}
          <BannerList data={bannerList}/>
          
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
});