import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
  TouchableNativeFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Picker} from '@react-native-community/picker';

class Transaksi extends React.Component {
  state = {
    modalVisible: false,
    monthPicker: 'Januari',
    yearPicker: '2020',
    month: [
      'Januari',
      'Februari',
      'Maret',
      'April',
      'Mei',
      'Juni',
      'Juli',
      'Agustus',
      'September',
      'Oktober',
      'November',
      'Desember',
    ],
    year: [
      '2020',
      '2021',
      '2022',
      '2023',
      '2024',
      '2025',
      '2026',
      '2027',
      '2028',
      '2029',
      '2030',
    ],
    thisMonth: '',
  };
  componentDidMount() {
    this.setState({thisMonth: this.state.month[new Date().getMonth()]});
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setState({modalVisible: false});
          }}>
          <View
            onPress={() => this.setState({modalVisible: false})}
            delayPressIn={10}
            activeOpacity={1}
            style={{
              flex: 1,
              alignItems: 'center',
              paddingTop: 150,
            }}>
            <View
              style={{
                height: 30,
                width: '80%',
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}>
              <TouchableOpacity
                activeOpacity={0.7}
                delayPressIn={10}
                onPress={() => this.setState({modalVisible: false})}
                style={{
                  height: 25,
                  width: 25,
                  borderRadius: 100,
                  backgroundColor: 'red',
                  justifyContent: 'center',
                  alignItems: 'center',
                  elevation: 5,
                }}>
                <Icon name="close" size={15} color="white" />
              </TouchableOpacity>
            </View>
            <View
              style={{
                height: 60,
                width: '80%',
                backgroundColor: 'white',
                elevation: 3,
                borderRadius: 5,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 5,
              }}>
              <Picker
                mode="dropdown"
                selectedValue={this.state.monthPicker}
                style={{
                  height: 50,
                  width: '50%',
                }}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({monthPicker: itemValue, thisMonth: itemValue})
                }>
                {this.state.month.map((value, key) => {
                  return <Picker.Item label={value} value={value} key={key} />;
                })}
              </Picker>
              <Picker
                mode="dropdown"
                selectedValue={this.state.yearPicker}
                style={{
                  height: 50,
                  width: '50%',
                }}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({yearPicker: itemValue})
                }>
                {this.state.year.map((value, key) => {
                  return <Picker.Item label={value} value={value} key={key} />;
                })}
              </Picker>
            </View>
          </View>
        </Modal>
        <ScrollView style={{flex: 1}}>
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'dodgerblue',
              paddingVertical: 10,
            }}>
            <View
              style={{
                height: 50,
                width: '90%',
                borderRadius: 5,
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Text style={{color: 'white'}}>
                Transaksi {this.state.thisMonth}
              </Text>
              <TouchableOpacity
                onPress={() => this.setState({modalVisible: true})}>
                <Icon
                  name="chevron-down"
                  size={15}
                  color="white"
                  style={{marginLeft: 10}}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: '90%',
              }}>
              <View style={{width: '100%', flexDirection: 'row'}}>
                <View
                  style={{
                    height: 50,
                    width: '50%',
                    flexDirection: 'row',
                    backgroundColor: 'white',
                    borderWidth: 1,
                    borderColor: 'dodgerblue',
                    borderRadius: 5,
                  }}>
                  <View
                    style={{
                      height: '100%',
                      width: '20%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      rotation: 45,
                    }}>
                    <Icon name="arrow-down" color="limegreen" size={20} />
                  </View>
                  <View
                    style={{
                      height: '100%',
                      width: '80%',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        color: 'limegreen',
                      }}>
                      RP 1.000.000.000
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    height: 50,
                    width: '50%',
                    flexDirection: 'row',
                    backgroundColor: 'white',
                    borderWidth: 1,
                    borderColor: 'dodgerblue',
                    borderRadius: 5,
                  }}>
                  <View
                    style={{
                      height: '100%',
                      width: '20%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      rotation: 45,
                    }}>
                    <Icon name="arrow-up" color="red" size={20} />
                  </View>
                  <View
                    style={{
                      height: '100%',
                      width: '80%',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        color: 'red',
                      }}>
                      RP.1.000.000.000
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                height: 50,
                width: '90%',
                backgroundColor: 'white',
                marginTop: 1,
                borderRadius: 5,
                padding: 5,
                justifyContent: 'center',
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 16, color: 'grey'}}>
                Saldo RP 0
              </Text>
            </View>
          </View>
          <View
            style={{
              height: 50,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableNativeFeedback
              onPress={() => this.props.navigation.navigate('TambahTransaksi')}>
              <View
                style={{
                  height: 40,
                  width: '70%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'dodgerblue',
                  borderRadius: 5,
                }}>
                <Text
                  style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
                  Tambah Transaksi
                </Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Transaksi;
