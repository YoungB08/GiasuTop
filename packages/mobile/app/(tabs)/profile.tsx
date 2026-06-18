import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Spacing, Radius } from '../../constants/Colors';
import { fetchJSON } from '../../lib/api';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfileScreen() {
  const router = useRouter();
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const loadProfile = async () => {
    setLoading(true);
    const res = await fetchJSON('/users/me');
    if (res.success && res.data) {
      setProfile(res.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadProfile();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem('token');
    Alert.alert('Thông báo', 'Đã đăng xuất tài khoản thành công!');
    // Reload profile state
    setProfile(null);
  };



  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Trang cá nhân</Text>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color={Colors.primary} style={{ marginTop: 40 }} />
      ) : profile ? (
        <View style={styles.content}>
          <View style={styles.profileCard}>
            <View style={[styles.avatarCircle, { backgroundColor: Colors.primary }]}>
              <Text style={styles.avatarText}>{profile.full_name[0]}</Text>
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.fullName}>{profile.full_name}</Text>
              <Text style={styles.email}>{profile.email}</Text>
              <View style={styles.roleBadge}>
                <Text style={styles.roleText}>{profile.role === 'STUDENT' ? 'HỌC SINH' : profile.role === 'TUTOR' ? 'GIA SƯ' : 'ADMIN'}</Text>
              </View>
            </View>
          </View>

          <View style={styles.menuList}>
            <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/wallet')}>
              <Ionicons name="wallet-outline" size={22} color={Colors.primary} />
              <Text style={styles.menuText}>Ví tiền nội bộ</Text>
              <Ionicons name="chevron-forward" size={16} color={Colors.text.muted} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
              <Ionicons name="lock-closed-outline" size={22} color={Colors.primary} />
              <Text style={styles.menuText}>Đổi mật khẩu</Text>
              <Ionicons name="chevron-forward" size={16} color={Colors.text.muted} />
            </TouchableOpacity>

            <TouchableOpacity style={[styles.menuItem, { marginTop: 24 }]} onPress={handleLogout}>
              <Ionicons name="log-out-outline" size={22} color={Colors.error} />
              <Text style={[styles.menuText, { color: Colors.error }]}>Đăng xuất</Text>
              <Ionicons name="chevron-forward" size={16} color={Colors.text.muted} />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.loggedOutContainer}>
          <Ionicons name="person-circle-outline" size={80} color={Colors.text.muted} />
          <Text style={styles.loggedOutText}>Bạn chưa đăng nhập</Text>
          <TouchableOpacity style={styles.loginBtn} onPress={() => router.push('/login')}>
            <Text style={styles.loginBtnText}>Đăng nhập ngay</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  header: { backgroundColor: Colors.primary, paddingVertical: 20, alignItems: 'center' },
  headerTitle: { fontSize: 18, fontWeight: '800', color: '#fff' },
  content: { padding: Spacing.md },
  profileCard: { flexDirection: 'row', backgroundColor: '#fff', padding: Spacing.md, borderRadius: Radius.md, borderWidth: 1, borderColor: Colors.border, alignItems: 'center', marginBottom: Spacing.lg },
  avatarCircle: { width: 64, height: 64, borderRadius: 32, justifyContent: 'center', alignItems: 'center' },
  avatarText: { fontSize: 24, fontWeight: 'bold', color: '#fff' },
  profileInfo: { marginLeft: 16, flex: 1 },
  fullName: { fontSize: 18, fontWeight: '800', color: Colors.text.primary },
  email: { fontSize: 13, color: Colors.text.secondary, marginTop: 2 },
  roleBadge: { backgroundColor: '#E3F2FD', borderRadius: Radius.xs, paddingHorizontal: 8, paddingVertical: 4, alignSelf: 'flex-start', marginTop: 6 },
  roleText: { fontSize: 10, fontWeight: '800', color: Colors.primary },
  menuList: { backgroundColor: '#fff', borderRadius: Radius.md, borderWidth: 1, borderColor: Colors.border, overflow: 'hidden' },
  menuItem: { flexDirection: 'row', alignItems: 'center', padding: Spacing.md, borderBottomWidth: 1, borderBottomColor: '#F1F5F9' },
  menuText: { flex: 1, marginLeft: 12, fontSize: 14, fontWeight: '600', color: Colors.text.primary },
  loggedOutContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: Spacing.lg },
  loggedOutText: { fontSize: 16, color: Colors.text.secondary, marginVertical: 12 },
  loginBtn: { backgroundColor: Colors.primary, borderRadius: Radius.sm, paddingVertical: 12, paddingHorizontal: 24 },
  loginBtnText: { color: '#fff', fontWeight: '700', fontSize: 14 },
});
