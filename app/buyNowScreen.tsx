import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import ScreenWithIconBar from '@/components/screenWithIconBar';

export default function PaymentMethodScreen() {
  const [selectedMethod, setSelectedMethod] = useState('Credit Card');
  const methods = ['Credit Card', 'Apple Pay', 'PayPal'];

  const [fullName, setFullName] = useState('');
  const [cityZip, setCityZip] = useState('');
  const [streetAddress, setStreetAddress] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScreenWithIconBar>
        <KeyboardAvoidingView
          style={styles.keyboardAvoiding}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <View style={styles.container}>
            <Text style={styles.title}>Payment method</Text>

            <Text style={styles.subtitle}>Pay with</Text>
            <View style={styles.optionsContainer}>
              {methods.map((method) => (
                <TouchableOpacity
                  key={method}
                  style={styles.option}
                  onPress={() => setSelectedMethod(method)}
                >
                  <View style={styles.radioCircle}>
                    {selectedMethod === method && <View style={styles.selectedRb} />}
                  </View>
                  <Text style={styles.optionText}>{method}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={styles.subtitle}>Billing address</Text>
            <View style={styles.billingContainer}>
              <TextInput
                style={styles.input}
                placeholder="Full name"
                value={fullName}
                onChangeText={setFullName}
              />
              <TextInput
                style={styles.input}
                placeholder="City, State, ZIP"
                value={cityZip}
                onChangeText={setCityZip}
              />
              <TextInput
                style={styles.input}
                placeholder="Street Address"
                value={streetAddress}
                onChangeText={setStreetAddress}
              />
            </View>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Pay Now</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScreenWithIconBar>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  keyboardAvoiding: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  optionsContainer: {
    marginVertical: 10,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#008000',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  selectedRb: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#008000',
  },
  optionText: {
    fontSize: 16,
  },
  billingContainer: {
    marginVertical: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    fontSize: 14,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#008000',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

