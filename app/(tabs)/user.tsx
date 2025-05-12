import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import React, { useEffect, useState } from 'react';
import {
	Platform,
	Pressable,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	useColorScheme,
	View,
} from 'react-native';
import { Card, DataTable, Modal, Portal, Provider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { getToken } from '../../utils/tokenStorage';

export default function UserScreen() {
	const colorScheme = useColorScheme();
	const isDark = colorScheme === 'dark';

	const getBaseURL = () => {
		if (Platform.OS === 'android') {
			return 'http://10.0.2.2:1001';
		}
		return 'http://localhost:1001';
	};

	// Define the types for Users and Roles
	interface Users {
		id: number;
		roles: string;
		name: string;
		email: string;
		phone?: string;
		birthDate?: string;
	}

	interface Roles {
		id: number;
		name: string;
	}

	// Define the initial state for formData
	const [formData, setFormData] = useState({
		id: '',
		id_role: '',
		roles: '',
		name: '',
		email: '',
		phone: '',
		birthDate: '',
		password: '',
	});

	// Define the state for users, roles, selected ID, modal visibility, and modal type
	const [users, setUsers] = useState<Users[]>([]);
	const [roles, setRoles] = useState<Roles[]>([]);
	const [idSelected, setIdSelected] = useState<number | null>(null);
	const [visible, setVisible] = useState(false);
	const [modalType, setModalType] = useState('');

	// Fetch data from the API
	const fetchData = async () => {
		try {
			const token = await getToken();
	
			// Users
			const response = await fetch(`${getBaseURL()}/api/user`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			});
	
			const result = await response.json();
			if (result.status === 'success') {
				setUsers(result.data.data);
			} else {
				Toast.show({
					type: 'error',
					text1: 'Error',
					text2: result.message,
					text1Style: { fontSize: 17 },
					text2Style: { fontSize: 15 },
				});
			}
	
			// Roles
			const response2 = await fetch(`${getBaseURL()}/api/role`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			});
	
			const result2 = await response2.json();
			if (result2.status === 'success') {
				setRoles(result2.data.data);
			} else {
				Toast.show({
					type: 'error',
					text1: 'Error',
					text2: result2.message,
					text1Style: { fontSize: 17 },
					text2Style: { fontSize: 15 },
				});
			}
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};	

	// Fetch data when the component mounts
  useEffect(() => {
		fetchData();
	}, []);	

	// Modal functions For Create, Edit, View, and Delete
  const openModalCreateDelete = (type: string, id: number) => {
    setModalType(type);
    setVisible(true);	
		if (type === 'delete') {
			setIdSelected(id);
		}
  };

	const openModalViewAndEdit = async (type: string, id: number) => {
		if (type == 'view') {
			setModalType('view');
		} else {
			setModalType('edit');
		}

		const token = await getToken();
		const response = await fetch(`${getBaseURL()}/api/user/` + id, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		});

		const result = await response.json();
		if (result.status == 'success') {
			setFormData({
				...formData,
				id: result.data.id,
				id_role: result.data.id_role,
				name: result.data.name,
				email: result.data.email,
				phone: result.data.phone || '',
				birthDate: result.data.birthDate || '',
			});
			setVisible(true);
		} else {
			Toast.show({
				type: 'error',
				text1: 'Error',
				text2: result.message,
				text1Style: { fontSize: 17 },
				text2Style: { fontSize: 15 },
			});
		}
	};

	const closeModal = () => {
    setVisible(false);
		setFormData({
			id: '',
			id_role: '',
			roles: '',
			name: '',
			email: '',
			phone: '',
			birthDate: '',
			password: '',
		});
  };

	// Handle input changes
	const handleChange = (name: string, value: string) => {
		setFormData({
			...formData,
			[name]: value,
		});
	};

	// Handle create, update, and delete actions
	const handleCreate = async () => {
		const errorMessages: { [key: string]: string } = {
			id_role: 'Role cannot be empty.',
			name: 'Name cannot be empty.',
			email: 'Email cannot be empty.',
			password: 'Password cannot be empty.',
		};

		for (const [key, message] of Object.entries(errorMessages)) {
			if (!formData[key as keyof typeof formData]) {
				Toast.show({
					type: 'error',
					text1: 'Validation Error',
					text2: message,
					text1Style: { fontSize: 17 },
					text2Style: { fontSize: 15 },
				});
				return;
			}
		}

		const token = await getToken();
		const response = await fetch(`${getBaseURL()}/api/user`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(formData),
		});

		const result = await response.json();
		if (result.status == 'success') {
			Toast.show({
				type: 'success',
				text1: 'User Created',
				text2: result.message,
				text1Style: { fontSize: 17 },
				text2Style: { fontSize: 15 },
			});

			// Trigger fetchData to refresh the user list and roles list
			await fetchData();

			closeModal();
		} else {
			Toast.show({
				type: 'error',
				text1: 'Error',
				text2: result.message || 'An error occurred.',
				text1Style: { fontSize: 17 },
				text2Style: { fontSize: 15 },
			});
		}
	};

	const handleUpdate = async (id: number) => {
		const errorMessages: { [key: string]: string } = {
			id_role: 'Role cannot be empty.',
			name: 'Name cannot be empty.',
			email: 'Email cannot be empty.',
		};

		for (const [key, message] of Object.entries(errorMessages)) {
			if (!formData[key as keyof typeof formData]) {
				Toast.show({
					type: 'error',
					text1: 'Validation Error',
					text2: message,
					text1Style: { fontSize: 17 },
					text2Style: { fontSize: 15 },
				});
				return;
			}
		}

		const token = await getToken();
		const response = await fetch(`${getBaseURL()}/api/user/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(formData),
		});

		const result = await response.json();
		if (result.status === 'success') {
			Toast.show({
				type: 'success',
				text1: 'User Updated',
				text2: result.message,
				text1Style: { fontSize: 17 },
				text2Style: { fontSize: 15 },
			});

			// Trigger fetchData to refresh the user list and roles list
			await fetchData();

			closeModal();
		} else {
			Toast.show({
				type: 'error',
				text1: 'Error',
				text2: result.message || 'An error occurred.',
				text1Style: { fontSize: 17 },
				text2Style: { fontSize: 15 },
			});
		}
	};

  const handleDelete = async () => {
		const token = await getToken();
		const response = await fetch(`${getBaseURL()}/api/user/` + idSelected, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		});

		const result = await response.json();
		if (result.status === 'success') {
			Toast.show({
				type: 'success',
				text1: 'User Deleted',
				text2: result.message,
				text1Style: { fontSize: 17 },
				text2Style: { fontSize: 15 },
			});

			// Trigger fetchData to refresh the user list and roles list
			await fetchData();

			closeModal();
		} else {
			Toast.show({
				type: 'error',
				text1: 'Error',
				text2: result.message || 'An error occurred.',
				text1Style: { fontSize: 17 },
				text2Style: { fontSize: 15 },
			});
		}
    closeModal();
  };

  return (
    <Provider>
      <SafeAreaProvider>				
				
				{/* Scroll View */}
        <ScrollView style={[styles.container, { backgroundColor: isDark ? '#151718' : '#D0D0D0' }]}>

					{/* Card */}
          <Card style={[styles.card, { backgroundColor: isDark ? '#1c1c1c' : '#FFFFFF' }]}>
						
						{/* Card Header */}
						<Card.Title
							title="User Data"
							right={() => (
								<Pressable
									style={[styles.iconButton, { backgroundColor: 'green', marginRight: 16 }]}
									onPress={() => openModalCreateDelete('add', 0)}
								>
									<Ionicons name="add" size={18} color="white" />
								</Pressable>
							)}
						/>

						{/* Card Content */}
						<Card.Content>
							<ScrollView horizontal>

								<DataTable>
								<DataTable.Header>
									<DataTable.Title style={{ width: 80 }}>Role</DataTable.Title>
									<DataTable.Title style={{ width: 120 }}>Name</DataTable.Title>
									<DataTable.Title style={{ width: 180 }}>Email</DataTable.Title>
									<DataTable.Title style={{ width: 120 }}>Phone</DataTable.Title>
									<DataTable.Title style={{ width: 120 }}>BirthDate</DataTable.Title>
									<DataTable.Title style={{ width: 150 }}>Actions</DataTable.Title>
								</DataTable.Header>

								{users.map((user) => (
									<DataTable.Row key={user.id}>
										<DataTable.Cell style={{ width: 80 }}>{user.roles}</DataTable.Cell>
										<DataTable.Cell style={{ width: 120 }}>{user.name}</DataTable.Cell>
										<DataTable.Cell style={{ width: 180 }}>{user.email}</DataTable.Cell>
										<DataTable.Cell style={{ width: 120 }}>{user.phone || '-'}</DataTable.Cell>
										<DataTable.Cell style={{ width: 120 }}>{user.birthDate || '-'}</DataTable.Cell>
										<DataTable.Cell style={{ width: 150 }}>
											<View style={styles.actionRow}>
												<Pressable
													style={[styles.iconButton, { backgroundColor: 'yellow' }]}
													onPress={() => openModalViewAndEdit('view', user.id)}
												>
													<Ionicons name="eye" size={18} color="black" />
												</Pressable>
												<Pressable
													style={[styles.iconButton, { backgroundColor: 'blue' }]}
													onPress={() => openModalViewAndEdit('edit', user.id)}
												>
													<Ionicons name="pencil" size={18} color="white" />
												</Pressable>
												<Pressable
													style={[styles.iconButton, { backgroundColor: 'red' }]}
													onPress={() => openModalCreateDelete('delete', user.id)}
												>
													<Ionicons name="trash" size={18} color="white" />
												</Pressable>
											</View>
										</DataTable.Cell>
									</DataTable.Row>
								))}
							</DataTable>

							</ScrollView>
						</Card.Content>

          </Card>

        </ScrollView>

				{/* Portal */}
				{/* Toast Message and modal */}
        <Portal>

					{/* Toast Message */}
					<Toast />

					{/* Modal */}
          <Modal visible={visible} onDismiss={closeModal} contentContainerStyle={styles.modal}>

						{/* Form Add */}
						{modalType === 'add' && (
              <View>
                <Text style={styles.modalText}>Add User</Text>

								<Text>Role:</Text>
								<Picker
									selectedValue={formData.id_role}
									style={styles.picker}
									onValueChange={(itemValue, itemIndex) =>
										setFormData({ ...formData, id_role: itemValue })
									}>
									<Picker.Item label="-- Pilih Role --" value="" />
									{roles.map((role) => (
										<Picker.Item key={role.id} label={role.name} value={role.id} />
									))}
								</Picker>

								<Text>Name:</Text>
                <TextInput
									style={styles.input}
									placeholder="Name"
									value={formData.name}
									onChangeText={(text) => handleChange('name', text)}
								/>

								<Text>Email:</Text>
								<TextInput
									style={styles.input}
									placeholder="Email"
									keyboardType="email-address"
									value={formData.email}
									onChangeText={(text) => handleChange('email', text)}
								/>

								<Text>Password:</Text>
								<TextInput
									style={styles.input}
									placeholder="Password"
									value={formData.password}
									onChangeText={(text) => handleChange('password', text)}
								/>

                <View style={styles.modalActions}>
                  <Pressable style={[styles.button, styles.button]} onPress={handleCreate}>
                    <Text style={styles.textStyle}>Save</Text>
                  </Pressable>
                  <Pressable style={[styles.button, styles.buttonClose]} onPress={closeModal}>
                    <Text style={styles.textStyle}>Cancel</Text>
                  </Pressable>
                </View>

              </View>
            )}

						{/* Form View */}
            {modalType === 'view' && (
              <View>
								<Text>Role:</Text>
                <Picker
									enabled={false}
									selectedValue={formData.id_role}
									style={styles.picker}
									onValueChange={(itemValue, itemIndex) =>
										setFormData({ ...formData, id_role: itemValue })
									}>
									<Picker.Item label="-- Pilih Role --" value="" />
									{roles.map((role) => (
										<Picker.Item key={role.id} label={role.name} value={role.id} />
									))}
								</Picker>
								<Text>Name:</Text>
								<TextInput value={formData.name} editable={false} style={[styles.input, { opacity: 0.5 }]} />
								<Text>Email:</Text>
								<TextInput value={formData.email} editable={false} style={[styles.input, { opacity: 0.5 }]} />
                <View style={styles.modalActions}>
                  <Pressable style={[styles.button, styles.buttonClose]} onPress={closeModal}>
                    <Text style={styles.textStyle}>Cancel</Text>
                  </Pressable>
                </View>
              </View>
            )}

						{/* Form Edit */}
            {modalType === 'edit' && (
              <View>
                <Text style={styles.modalText}>Edit User</Text>

								<Text>Role:</Text>
								<Picker
									selectedValue={formData.id_role}
									style={styles.picker}
									onValueChange={(itemValue, itemIndex) =>
										setFormData({ ...formData, id_role: itemValue })
									}>
									<Picker.Item label="-- Pilih Role --" value="" />
									{roles.map((role) => (
										<Picker.Item key={role.id} label={role.name} value={role.id} />
									))}
								</Picker>

								<Text>Name:</Text>
                <TextInput
									style={styles.input}
									placeholder="Name"
									value={formData.name}
									onChangeText={(text) => handleChange('name', text)}
								/>

								<Text>Email:</Text>
								<TextInput
									style={styles.input}
									placeholder="Email"
									keyboardType="email-address"
									value={formData.email}
									onChangeText={(text) => handleChange('email', text)}
								/>

								<Text>Password:</Text>
								<TextInput
									style={styles.input}
									placeholder="Password"
									value={formData.password}
									onChangeText={(text) => handleChange('password', text)}
								/>

                <View style={styles.modalActions}>
									<Pressable style={[styles.button, styles.button]} onPress={() => handleUpdate(Number(formData.id))}>
										<Text style={styles.textStyle}>Update</Text>
									</Pressable>
                  <Pressable style={[styles.button, styles.buttonClose]} onPress={closeModal}>
                    <Text style={styles.textStyle}>Cancel</Text>
                  </Pressable>
                </View>

              </View>
            )}

						{/* Form Delete */}
            {modalType === 'delete' && (
							<View style={{ alignItems: 'center' }}>
								<Text style={{ textAlign: 'center', marginVertical: 20, fontSize: 16 }}>Are you sure you want to delete this user?</Text>
								<View style={[styles.modalActions, { marginTop: 10 }]}>
									<Pressable style={[styles.button, styles.button, { marginRight: 10 }]} onPress={handleDelete}>
									<Text style={styles.textStyle}>Delete</Text>
									</Pressable>
									<Pressable style={[styles.button, styles.buttonClose]} onPress={closeModal}>
									<Text style={styles.textStyle}>Cancel</Text>
									</Pressable>
								</View>
							</View>
            )}

          </Modal>
        </Portal>

      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  
	container: {
    flex: 1,
    paddingTop: 60,
		paddingLeft: 20,
		paddingRight: 20,
		paddingBottom: 20,
    borderRadius: 12,
  },

  card: {
    marginBottom: 16,
    elevation: 4,
    borderRadius: 12,
  },

  modal: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 20,
    borderRadius: 12,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 8,
    marginBottom: 16,
  },

	picker: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 8,
    marginBottom: 16,
  },

  actionRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconButton: {
    padding: 8,
    borderRadius: 12,
    marginHorizontal: 4,
  },

  button: {
		backgroundColor: 'rgb(5, 55, 255)',
    borderRadius: 12,
    padding: 10,
    elevation: 2,
  },

  buttonClose: {
    backgroundColor: 'rgb(94, 94, 94)',
    borderRadius: 12,
    marginLeft: 8,
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

  modalActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
  },
	
});