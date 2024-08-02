// import React, {useEffect, useState} from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   FlatList,
//   StyleSheet,
//   Alert,
// } from 'react-native';
// import SQLite from 'react-native-sqlite-storage';

// const db = SQLite.openDatabase(
//   {name: 'pos.db', location: 'default'},
//   () => {
//     console.log('Database opened');
//   },
//   error => {
//     console.error(error);
//   },
// );

// const Home = () => {
//   const [products, setProducts] = useState([]);
//   const [name, setName] = useState('');
//   const [price, setPrice] = useState('');
//   const [type, setType] = useState('');
//   const [editingProduct, setEditingProduct] = useState(null);

//   useEffect(() => {
//     db.transaction(tx => {
//       tx.executeSql(
//         'CREATE TABLE IF NOT EXISTS Products (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, price REAL, type TEXT)',
//         [],
//         () => console.log('Table created successfully'),
//         error => console.error(error),
//       );
//     });
//     fetchProducts();
//   }, []);

//   const fetchProducts = () => {
//     db.transaction(tx => {
//       tx.executeSql(
//         'SELECT * FROM Products',
//         [],
//         (tx, results) => {
//           const rows = results.rows;
//           let items = [];
//           for (let i = 0; i < rows.length; i++) {
//             items.push(rows.item(i));
//           }
//           setProducts(items);
//         },
//         error => console.error(error),
//       );
//     });
//   };

//   const addProduct = () => {
//     if (!name || !price || !type) {
//       Alert.alert('Error', 'Please fill in all fields');
//       return;
//     }

//     db.transaction(tx => {
//       tx.executeSql(
//         'INSERT INTO Products (name, price, type) VALUES (?, ?, ?)',
//         [name, parseFloat(price), type],
//         (tx, results) => {
//           if (results.rowsAffected > 0) {
//             Alert.alert('Success', 'Product added successfully');
//             fetchProducts();
//             setName('');
//             setPrice('');
//             setType('');
//           }
//         },
//         error => console.error(error),
//       );
//     });
//   };

//   const updateProduct = () => {
//     if (!name || !price || !type) {
//       Alert.alert('Error', 'Please fill in all fields');
//       return;
//     }

//     db.transaction(tx => {
//       tx.executeSql(
//         'UPDATE Products SET name = ?, price = ?, type = ? WHERE id = ?',
//         [name, parseFloat(price), type, editingProduct.id],
//         (tx, results) => {
//           if (results.rowsAffected > 0) {
//             Alert.alert('Success', 'Product updated successfully');
//             fetchProducts();
//             setName('');
//             setPrice('');
//             setType('');
//             setEditingProduct(null);
//           }
//         },
//         error => console.error(error),
//       );
//     });
//   };

//   const deleteProduct = id => {
//     db.transaction(tx => {
//       tx.executeSql(
//         'DELETE FROM Products WHERE id = ?',
//         [id],
//         (tx, results) => {
//           if (results.rowsAffected > 0) {
//             Alert.alert('Success', 'Product deleted successfully');
//             fetchProducts();
//           }
//         },
//         error => console.error(error),
//       );
//     });
//   };

//   const handleEdit = product => {
//     setName(product.name);
//     setPrice(product.price.toString());
//     setType(product.type);
//     setEditingProduct(product);
//   };

//   const handleSave = () => {
//     if (editingProduct) {
//       updateProduct();
//     } else {
//       addProduct();
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Product Name"
//         value={name}
//         onChangeText={setName}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Price"
//         value={price}
//         onChangeText={setPrice}
//         keyboardType="numeric"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Type (makanan, minuman, snack)"
//         value={type}
//         onChangeText={setType}
//       />
//       <Button
//         title={editingProduct ? 'Update Product' : 'Add Product'}
//         onPress={handleSave}
//       />
//       <FlatList
//         data={products}
//         keyExtractor={item => item.id.toString()}
//         renderItem={({item}) => (
//           <View style={styles.item}>
//             <Text>{item.name}</Text>
//             <Text>{item.price}</Text>
//             <Text>{item.type}</Text>
//             <Button title="Edit" onPress={() => handleEdit(item)} />
//             <Button title="Delete" onPress={() => deleteProduct(item.id)} />
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 20,
//     paddingHorizontal: 10,
//   },
//   item: {
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
// });

// export default Home;

import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CardMenu, Tabbar} from '../../components/moleculs';
import {colors, fonts} from '../../utils';
import {Gap, Search} from '../../components';
import {ILFood1} from '../../assets/ilustrations';

const products = [
  {
    id: 1,
    name: 'Nasi Goreng Udang',
    price: '13.000',
    type: 'Food',
    quantity: 0,
  },
  {id: 2, name: 'Nasi Goreng Sapi', price: '19.000', type: 'Food', quantity: 1},
  {id: 3, name: 'Capcay', price: '12.000', type: 'Food', quantity: 2},
  {id: 4, name: 'Kwetiau Goreng', price: '14.000', type: 'Food', quantity: 0},
  {id: 5, name: 'Kwetiau Basah', price: '14.000', type: 'Food', quantity: 1},
  {id: 6, name: 'Es Teh', price: '3.000', type: 'Drink', quantity: 0},
  {id: 7, name: 'Es Jeruk', price: '4.000', type: 'Drink', quantity: 0},
  {id: 8, name: 'Teh Panas', price: '3.000', type: 'Drink', quantity: 1},
  {id: 9, name: 'Jeruk Panas', price: '3.000', type: 'Drink', quantity: 0},
  {id: 10, name: 'Air Mineral', price: '3.500', type: 'Drink', quantity: 0},
  {id: 11, name: 'Kerupuk Udang', price: '2.000', type: 'Snack', quantity: 0},
  {id: 12, name: 'Kerupuk Rambak', price: '2.000', type: 'Snack', quantity: 0},
  {id: 13, name: 'Tahu Baks', price: '2.500', type: 'Snack', quantity: 0},
];

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <Gap height={24} />
      <Search />
      <Gap height={24} />
      <Tabbar />
      <Gap height={24} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={products}
        keyExtractor={item => item.id.toString()}
        columnWrapperStyle={styles.wrappetColumnFlatlist}
        style={styles.wrapperFlatlist}
        numColumns={2}
        renderItem={({item}) => (
          <CardMenu
            name={item.name}
            type={item.type}
            price={item.price}
            image={ILFood1}
            quantity={item.quantity}
          />
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingBottom: 0,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 18,
    fontFamily: fonts.primary[700],
    color: colors.main,
    textAlign: 'center',
  },
  wrappetColumnFlatlist: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
