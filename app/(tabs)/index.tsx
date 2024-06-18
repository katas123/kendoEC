import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';


const HomeScreen = () =>{
  const navigation = useNavigation();
  return <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.headerText}>KENDO SHOP</Text>
      <TouchableOpacity>
        <Text style={styles.searchButtonText}>🔍</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.loginButtonText}>ログイン</Text>
        </View>
      </TouchableOpacity>
    </View>
    <ScrollView style={styles.main}>
      <View style={styles.Box}>
        <TouchableOpacity onPress={() => navigation.navigate('Goodslist')}>
          <View style={styles.sub}>
            <Image source={require('@/assets/images/ShinaiLogo.png')} style={styles.logo} />
            <Text style={styles.subText}>竹刀 Shinai</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.info}>
          <TouchableOpacity>
            <View style={styles.goods}>
              <Text style={styles.goodsname}>商品名</Text>
              <Image source={require('@/assets/images/ShinaiLogo.png')} style={styles.goodsimag}>
              </Image>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.goods}>
              <Text style={styles.goodsname}>商品名</Text>
              <Image source={require('@/assets/images/ShinaiLogo.png')} style={styles.goodsimag}>
              </Image>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.goods}>
              <Text style={styles.goodsname}>商品名</Text>
              <Image source={require('@/assets/images/ShinaiLogo.png')} style={styles.goodsimag}>
              </Image>
            </View>
          </TouchableOpacity>
        </View>
      </View>


      <View style={styles.Box}>
        <TouchableOpacity>
          <View style={styles.sub}>
            <Image source={require('@/assets/images/ShinaiLogo.png')} style={styles.logo} />
            <Text style={styles.subText}>面 men</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.info}>
          <TouchableOpacity>
            <View style={styles.goods}>
              <Text style={styles.goodsname}>商品名</Text>
              <Image source={require('@/assets/images/ShinaiLogo.png')} style={styles.goodsimag}>
              </Image>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.goods}>
              <Text style={styles.goodsname}>商品名</Text>
              <Image source={require('@/assets/images/ShinaiLogo.png')} style={styles.goodsimag}>
              </Image>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.goods}>
              <Text style={styles.goodsname}>商品名</Text>
              <Image source={require('@/assets/images/ShinaiLogo.png')} style={styles.goodsimag}>
              </Image>
            </View>
          </TouchableOpacity>
        </View>
      </View>


      <View style={styles.Box}>
        <TouchableOpacity>
          <View style={styles.sub}>
            <Image source={require('@/assets/images/ShinaiLogo.png')} style={styles.logo} />
            <Text style={styles.subText}>小手 kote</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.info}>
          <TouchableOpacity>
            <View style={styles.goods}>
              <Text style={styles.goodsname}>商品名</Text>
              <Image source={require('@/assets/images/ShinaiLogo.png')} style={styles.goodsimag}>
              </Image>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.goods}>
              <Text style={styles.goodsname}>商品名</Text>
              <Image source={require('@/assets/images/ShinaiLogo.png')} style={styles.goodsimag}>
              </Image>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.goods}>
              <Text style={styles.goodsname}>商品名</Text>
              <Image source={require('@/assets/images/ShinaiLogo.png')} style={styles.goodsimag}>
              </Image>
            </View>
          </TouchableOpacity>
        </View>
      </View>


      <View style={styles.Box}>
        <TouchableOpacity>
          <View style={styles.sub}>
            <Image source={require('@/assets/images/ShinaiLogo.png')} style={styles.logo} />
            <Text style={styles.subText}>胴 dou</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.info}>
          <TouchableOpacity>
            <View style={styles.goods}>
              <Text style={styles.goodsname}>商品名</Text>
              <Image source={require('@/assets/images/ShinaiLogo.png')} style={styles.goodsimag}>
              </Image>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.goods}>
              <Text style={styles.goodsname}>商品名</Text>
              <Image source={require('@/assets/images/ShinaiLogo.png')} style={styles.goodsimag}>
              </Image>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.goods}>
              <Text style={styles.goodsname}>商品名</Text>
              <Image source={require('@/assets/images/ShinaiLogo.png')} style={styles.goodsimag}>
              </Image>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.Box}>
        <TouchableOpacity>
          <View style={styles.sub}>
            <Image source={require('@/assets/images/ShinaiLogo.png')} style={styles.logo} />
            <Text style={styles.subText}>垂 tare</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.info}>
          <TouchableOpacity>
            <View style={styles.goods}>
              <Text style={styles.goodsname}>商品名</Text>
              <Image source={require('@/assets/images/ShinaiLogo.png')} style={styles.goodsimag}>
              </Image>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.goods}>
              <Text style={styles.goodsname}>商品名</Text>
              <Image source={require('@/assets/images/ShinaiLogo.png')} style={styles.goodsimag}>
              </Image>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.goods}>
              <Text style={styles.goodsname}>商品名</Text>
              <Image source={require('@/assets/images/ShinaiLogo.png')} style={styles.goodsimag}>
              </Image>
            </View>
          </TouchableOpacity>
        </View>
      </View>


      <View style={styles.Box}>
        <TouchableOpacity>
          <View style={styles.sub}>
            <Image source={require('@/assets/images/ShinaiLogo.png')} style={styles.logo} />
            <Text style={styles.subText}>道着 dougi</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.info}>
          <TouchableOpacity>
            <View style={styles.goods}>
              <Text style={styles.goodsname}>商品名</Text>
              <Image source={require('@/assets/images/ShinaiLogo.png')} style={styles.goodsimag}>
              </Image>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.goods}>
              <Text style={styles.goodsname}>商品名</Text>
              <Image source={require('@/assets/images/ShinaiLogo.png')} style={styles.goodsimag}>
              </Image>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.goods}>
              <Text style={styles.goodsname}>商品名</Text>
              <Image source={require('@/assets/images/ShinaiLogo.png')} style={styles.goodsimag}>
              </Image>
            </View>
          </TouchableOpacity>
        </View>
      </View>


      <View style={styles.Box}>
        <TouchableOpacity>
          <View style={styles.sub}>
            <Image source={require('@/assets/images/ShinaiLogo.png')} style={styles.logo} />
            <Text style={styles.subText}>袴 hakama</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.info}>
          <TouchableOpacity>
            <View style={styles.goods}>
              <Text style={styles.goodsname}>商品名</Text>
              <Image source={require('@/assets/images/ShinaiLogo.png')} style={styles.goodsimag}>
              </Image>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.goods}>
              <Text style={styles.goodsname}>商品名</Text>
              <Image source={require('@/assets/images/ShinaiLogo.png')} style={styles.goodsimag}>
              </Image>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.goods}>
              <Text style={styles.goodsname}>商品名</Text>
              <Image source={require('@/assets/images/ShinaiLogo.png')} style={styles.goodsimag}>
              </Image>
            </View>
          </TouchableOpacity>
        </View>
      </View>


      <View style={styles.Box}>
        <TouchableOpacity>
          <View style={styles.sub}>
            <Image source={require('@/assets/images/ShinaiLogo.png')} style={styles.logo} />
            <Text style={styles.subText}>鍔・鍔止め tuba</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.info}>
          <TouchableOpacity>
            <View style={styles.goods}>
              <Text style={styles.goodsname}>商品名</Text>
              <Image source={require('@/assets/images/ShinaiLogo.png')} style={styles.goodsimag}>
              </Image>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.goods}>
              <Text style={styles.goodsname}>商品名</Text>
              <Image source={require('@/assets/images/ShinaiLogo.png')} style={styles.goodsimag}>
              </Image>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.goods}>
              <Text style={styles.goodsname}>商品名</Text>
              <Image source={require('@/assets/images/ShinaiLogo.png')} style={styles.goodsimag}>
              </Image>
            </View>
          </TouchableOpacity>
        </View>
      </View>


      <View style={styles.Box}>
        <TouchableOpacity>
          <View style={styles.sub}>
            <Image source={require('@/assets/images/ShinaiLogo.png')} style={styles.logo} />
            <Text style={styles.subText}>小物</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.info}>
          <TouchableOpacity>
            <View style={styles.goods}>
              <Text style={styles.goodsname}>商品名</Text>
              <Image source={require('@/assets/images/ShinaiLogo.png')} style={styles.goodsimag}>
              </Image>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.goods}>
              <Text style={styles.goodsname}>商品名</Text>
              <Image source={require('@/assets/images/ShinaiLogo.png')} style={styles.goodsimag}>
              </Image>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.goods}>
              <Text style={styles.goodsname}>商品名</Text>
              <Image source={require('@/assets/images/ShinaiLogo.png')} style={styles.goodsimag}>
              </Image>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
    
  </View>;
  
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: 30,
    marginLeft:5,
    marginRight:5,
  },
  main:{
    padding:20,
  },
  header:{
    flexDirection: 'row', // 横並びにするために追加
    justifyContent: 'space-between', // 左右に配置
    alignItems: 'center',
    padding: 30,
  },
  headerText:{
    fontSize:24,
    fontWeight:"bold",
    color:"white"
  },
  searchButtonText:{
    fontSize:24,
    marginLeft:30,
  },
  textContainer:{
    borderRadius: 50,
    backgroundColor:"#CC66FF",
  },
  loginButtonText:{
    fontSize:24,
    fontWeight:"bold",
    color:"white",
    padding: 5,
  },
  Box:{
    padding:30,
    backgroundColor:"#666666",
    marginBottom:30,
    borderRadius: 40,
  },
  sub:{
    padding:5,
    flexDirection: 'row', // 横並びにするために追加
    justifyContent: 'space-between', // 左右に配置

  },
  logo:{
    width:100,
    height:100,
  },
  subText:{
    fontSize:24,
    fontWeight:"bold",
    color:"white",
  },
  info:{
    padding:5,
    flexDirection: 'row', // 横並びにするために追加
    justifyContent: 'space-between', // 左右に配置
    borderColor: "white",
  },
  goods:{
    marginTop:5,
  },
  goodsname:{
    fontSize:24,
    fontWeight:"100",
    color:"white",

  },
  goodsimag:{
    width:100,
    height:100,
  },
  
});

export default HomeScreen;