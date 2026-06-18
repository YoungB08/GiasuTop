import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, RefreshControl, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Spacing, Radius } from '../../constants/Colors';
import { fetchJSON } from '../../lib/api';

export default function DocumentsScreen() {
  const [docs, setDocs] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const loadDocs = async () => {
    setLoading(true);
    const res = await fetchJSON<any[]>('/documents');
    if (res.success && res.data) {
      setDocs(res.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadDocs();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await loadDocs();
    setRefreshing(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Kho Tài Liệu</Text>
      </View>

      {loading && !refreshing ? (
        <ActivityIndicator size="large" color={Colors.primary} style={{ marginTop: 40 }} />
      ) : (
        <FlatList
          data={docs}
          keyExtractor={(item) => String(item.id)}
          contentContainerStyle={styles.list}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={Colors.primary} />}
          ListEmptyComponent={
            <View style={styles.empty}>
              <Ionicons name="document-outline" size={48} color={Colors.text.muted} />
              <Text style={styles.emptyText}>Chưa có tài liệu nào được tải lên.</Text>
            </View>
          }
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View style={styles.docInfo}>
                <Ionicons name="document-text" size={36} color={Colors.primary} />
                <View style={styles.textContainer}>
                  <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
                  <Text style={styles.meta}>
                    {item.subject_tag} • {item.grade_tag} • {item.type_tag}
                  </Text>
                  <Text style={styles.uploader}>Đăng bởi: {item.uploader_name}</Text>
                </View>
              </View>

              <View style={styles.cardFooter}>
                <Text style={styles.downloads}>
                  <Ionicons name="download-outline" size={12} /> {item.download_count || 0} lượt tải
                </Text>
                <TouchableOpacity style={styles.downloadBtn}>
                  <Text style={styles.downloadBtnText}>Tải tài liệu</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
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
  docInfo: { flexDirection: 'row', gap: 12 },
  textContainer: { flex: 1 },
  title: { fontSize: 15, fontWeight: '700', color: Colors.text.primary, lineHeight: 20 },
  meta: { fontSize: 12, color: Colors.text.secondary, marginTop: 4 },
  uploader: { fontSize: 11, color: Colors.text.muted, marginTop: 2 },
  cardFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderTopWidth: 1, borderTopColor: Colors.border, paddingTop: 10, marginTop: 12 },
  downloads: { fontSize: 12, color: Colors.text.secondary },
  downloadBtn: { backgroundColor: Colors.primary, borderRadius: Radius.xs, paddingHorizontal: 12, paddingVertical: 6 },
  downloadBtnText: { color: '#fff', fontWeight: '700', fontSize: 12 },
  empty: { alignItems: 'center', marginTop: 80, gap: 12 },
  emptyText: { color: Colors.text.secondary, fontSize: 14 },
});
