import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { CartProvider } from '@/app/context/cartContext';

export default function Layout() {
  return (
    <CartProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer>
          <Drawer.Screen
            name="index"
            options={{
              headerShown: false,
              drawerItemStyle: { display: 'none' },
            }}
          />
          <Drawer.Screen
            name="menu"
            options={{
              headerShown: false,
              drawerItemStyle: { display: 'none' },
            }}
          />
          <Drawer.Screen
            name="productDetailsScreen"
            options={{
              headerShown: false,
              drawerItemStyle: { display: 'none' },
            }}
          />
          <Drawer.Screen
            name="productViewScreen"
            options={{
              headerShown: false,
              drawerItemStyle: { display: 'none' },
            }}
          />
          <Drawer.Screen
            name="shoppingBagScreen"
            options={{
              headerShown: false,
              drawerItemStyle: { display: 'none' },
            }}
          />
        </Drawer>
      </GestureHandlerRootView>
    </CartProvider>
  );
}


