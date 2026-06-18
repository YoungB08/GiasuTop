import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, RefreshControl, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Spacing, Radius } from '../../constants/Colors';
import { fetchJSON } from '../../lib/api';

export default function ClassesScreen() {
  const [appointments, setAppointments] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const loadAppointments = async () => {
    setLoading(true);
    const res = await fetchJSON<any[]>('/users/me/appointments');
    if (res.success && res.data) {
      setAppointments(res.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadAppointments();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await loadAppointments();
    setRefreshing(false);
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'CONFIRMED': return { bg: '#E8F5E9', text: '#2E7D32', label: 'Đã xác nhận' };
      case 'CANCELLED': return { bg: '#FFEBEE', text: '#C62828', label: 'Đã hủy' };
      case 'DONE': return { bg: '#E3F2FD', text: '#1565C0', label: 'Đã hoàn thành' };
      default: return { bg: '#FFF3E0', text: '#EF6C00', label: 'Chờ duyệt' };
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Lớp học của tôi</Text>
      </View>

      {loading && !refreshing ? (
        <ActivityIndicator size="large" color={Colors.primary} style={{ marginTop: 40 }} />
      ) : (
        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={Colors.primary} />}
          ListEmptyComponent={
            <View style={styles.empty}>
              <Ionicons name="calendar-outline" size={48} color={Colors.text.muted} />
              <Text style={styles.emptyText}>Bạn chưa có lịch học nào.</Text>
            </View>
          }
          renderItem={({ item }) => {
            const status = getStatusStyle(item.status);
            return (
              <View style={styles.card}>
                <View style={styles.cardHeader}>
                  <Text style={styles.tutorName}>{item.tutor_name || item.student_name || 'GiasuTop'}</Text>
                  <View style={[styles.statusBadge, { backgroundColor: status.bg }]}>
                    <Text style={[styles.statusText, { color: status.text }]}>{status.label}</Text>
                  </View>
                </View>

                <View style={styles.detailRow}>
                  <Ionicons name="time-outline" size={16} color={Colors.text.secondary} />
                  <Text style={styles.detailText}>
                    {new Date(item.start_time).toLocaleString('vi-VN')} - {new Date(item.end_time).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}
                  </Text>
                </View>

                <View style={styles.detailRow}>
                  <Ionicons name="cash-outline" size={16} color={Colors.text.secondary} />
                  <Text style={styles.detailText}>
                    Học phí: <Text style={styles.price}>{parseFloat(item.price_paid).toLocaleString()} đ</Text>
                  </Text>
                </View>

                {item.live_room_url && (
                  <TouchableOpacity style={styles.roomBtn}>
                    <Ionicons name="videocam-outline" size={16} color="#fff" />
                    <Text style={styles.roomBtnText}>Vào lớp học online</Text>
                  </TouchableOpacity>
                )}
              </View>
            );
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  header: { backgroundColor: Colors.primary, paddingVertical: 20, alignItems: 'center' },
  headerTitle: { fontSize: 18, fontWeight: '800', color: '#fff' },
  list: { padding: Spacing.md },
  card: { backgroundColor: '#fff', borderRadius: Radius.md, padding: Spacing.md, marginBottom: Spacing.md, borderWidth: 1, borderColor: Colors.border },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  tutorName: { fontSize: 16, fontWeight: '700', color: Colors.text.primary },
  statusBadge: { paddingHorizontal: 8, paddingVertical: 4, borderRadius: Radius.xs },
  statusText: { fontSize: 11, fontWeight: '700' },
  detailRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 8 },
  detailText: { fontSize: 13, color: Colors.text.secondary },
  price: { fontWeight: '700', color: Colors.primary },
  roomBtn: { flexDirection: 'row', gap: 6, backgroundColor: Colors.success, borderRadius: Radius.sm, paddingVertical: 10, justifyContent: 'center', alignItems: 'center', marginTop: 10 },
  roomBtnText: { color: '#fff', fontWeight: '700', fontSize: 13 },
  empty: { alignItems: 'center', marginTop: 80, gap: 12 },
  emptyText: { color: Colors.text.secondary, fontSize: 14 },
});
