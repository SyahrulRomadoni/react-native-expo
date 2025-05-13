import { Feather } from '@expo/vector-icons';
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useColorScheme
} from 'react-native';
export default function App() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  // Dummy data
  const servicesData = [
    { name: 'GoRide', badge: '5RB' },
    { name: 'GoCar', badge: '10RB' },
    { name: 'GoFood', badge: '15RB' },
    { name: 'GoSend', badge: '8RB' },
    { name: 'GoShop', badge: '12RB' },
    { name: 'GoMart', badge: '6RB' },
    { name: 'GoBox', badge: '20RB' },
    { name: 'GoPulsa', badge: '3RB' },
  ];

  const restoData = [
    {
      image: 'https://lelogama.go-jek.com/cms_editor/2018/06/29/Januari_JKT_Martabak.jpg',
      jarakTempuh: '2.73 km',
      durasiWaktu: '25-35 min',
      namaResto: 'Martabak 99 masakan manis gurih legit',
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
          borderEndStartRadius: 20,
          borderEndEndRadius: 20,
          paddingTop: 50,
          paddingBottom: 12,
          paddingHorizontal: 16,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 4,
          backgroundColor: isDark ? 'rgb(28, 28, 28)' : 'rgb(255, 255, 255)'
        }}
      >
        <View style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#f1f1f1',
          borderRadius: 30,
          paddingHorizontal: 10,
          paddingVertical: 6,
          marginRight: 20,
        }}>
          <Feather
            name="search"
            style={{
              color: 'rgb(140, 140, 140)',
              fontSize: 20,
              marginLeft: 5,
            }}
          />
          <TextInput
            placeholder="Pecel Lele, Bandeng..."
            style={{
              flex: 1,
              marginLeft: 6,
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
            paddingTop: 90,
            paddingBottom: 130,
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
              padding: 16,
              borderRadius: 16,
              margin: 16,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.2,
              shadowRadius: 6,
              elevation: 6,
              backgroundColor: isDark ? 'rgb(28,28,28)' : 'rgb(255, 255, 255)'
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'
                }}
              >Rp 99.000.000</Text>
              <Text
                style={{
                  fontSize: 14,
                  color: '#888',
                }}
              >99.000.000 coins</Text>
            </View>

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
                  paddingHorizontal: 10,
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
                  paddingHorizontal: 10,
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
                  paddingHorizontal: 10,
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
                  margin: 10,
                  width: 70
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    paddingHorizontal: 4,
                    marginBottom: 2,
                    alignSelf: 'flex-start',
                    borderTopStartRadius: 0,
                    borderTopEndRadius: 20,
                    borderEndStartRadius: 20,
                    borderEndEndRadius: 0,
                    width: 50,
                    textAlign: 'center',
                    backgroundColor: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)',
                    color: isDark ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)',
                  }}
                >{item.badge}</Text>
                <View
                  style={{
                    width: 60,
                    height: 60,
                    backgroundColor: '#cce',
                    borderRadius: 5,
                    marginBottom: 5 
                  }}
                ></View>
                <Text>{item.name}</Text>
              </View>
            ))}
          </View>

          {/* Promo Info */}
          <View
            style={{
              backgroundColor: 'rgba(130, 239, 84, 0.3)',
              padding: 10,
              marginHorizontal: 16,
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

          {/* Banner */}
          <View
            style={{
              padding: 16,
            }}
          >
            <View
              style={{
                width: '100%',
                borderRadius: 12,
                backgroundColor: isDark ? 'rgb(28, 28, 28)' : 'rgb(255, 255, 255)',
                marginBottom: 10,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 6,
                elevation: 6,
            }}>
              <Image
                style={{
                  width: '100%',
                  height: 200,
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                }}
                source={{ uri: 'https://play-lh.googleusercontent.com/IT-4gpRmMwvtYlw5M3JbamStGWlDArwYDXaWex0kbhEy-jyb5txK2Ri4GtS6syghui8' }}
              />
              <View style={{
                paddingTop: 10,
                paddingBottom: 20,
                paddingLeft: 10,
                paddingRight: 10,
              }}>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10,
                    width: '100%',
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      color: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)',
                      flex: 1,
                      fontWeight: 'bold',
                    }}
                    numberOfLines={2}
                    ellipsizeMode="tail"
                  >Voucher Khusu anak Kampus!</Text>
                </View>

                <View
                  style={{ 
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10
                  }}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      color: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'
                    }}
                  >Diskon s.d 35RB pake GoRide & GoCar!</Text>
                  <Feather name="star" size={20} color="rgb(140, 140, 140)" />
                </View>

              </View>
            </View>
          </View>

          {/* Label */}
          <View>
            <Text
              style={{
                marginHorizontal: 16,
                fontWeight: 'bold',
                fontSize: 25,
                marginBottom: -10,
                color: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)',
              }}
            >Tebus murah !!</Text>
          </View>

          {/* Rating Resto */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
              marginVertical: 20
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: 16,
                gap: 10,
              }}
            >
              {restoData.map((item, index) => (
                <View
                    key={index}
                    style={{
                      width: 250,
                      height: 280,
                      borderRadius: 12,
                      backgroundColor: isDark ? 'rgb(28, 28, 28)' : 'rgb(255, 255, 255)',
                      marginBottom: 10,
                      shadowColor: '#000',
                      shadowOffset: { width: 0, height: 4 },
                      shadowOpacity: 0.2,
                      shadowRadius: 6,
                      elevation: 6,
                  }}>
                  <Image
                    style={{
                      width: '100%',
                      height: 150,
                      borderTopLeftRadius: 12,
                      borderTopRightRadius: 12,
                    }}
                    source={{ uri: item.image }}
                  />
                  <View style={{ padding: 10 }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 10
                      }}
                    >
                      <Text
                        style={{
                            fontSize: 15,
                            color: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'
                        }}
                      >{item.jarakTempuh} - {item.durasiWaktu}</Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 10,
                        width: '100%',
                        marginTop: 10,
                        marginBottom: 5,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 20,
                          color: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)',
                          flex: 1,
                          fontWeight: 'bold',
                        }}
                        numberOfLines={2}
                        ellipsizeMode="tail"
                      >{item.namaResto}</Text>
                    </View>
                    <View
                      style={{ 
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 10
                      }}
                    >
                      <Feather name="star" size={20} color="rgb(140, 140, 140)" />
                      <Text
                        style={{
                          fontSize: 14,
                          color: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'
                        }}
                      >{item.rating}</Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
          
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
});
