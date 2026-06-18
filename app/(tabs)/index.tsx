import React, { useEffect, useState, useRef } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity,
  RefreshControl, FlatList, Animated, Linking, Platform,
  StatusBar, ActivityIndicator, Image, Modal
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Colors, Spacing, Radius, getShadow } from '../../constants/Colors';
import { fetchJSON } from '../../lib/api';
import { LinearGradient } from 'expo-linear-gradient';

// Banners for carousel
const BANNERS = [
  { id: 1, title: 'Tìm gia sư phù hợp', subtitle: 'Hơn 100+ gia sư chất lượng cao', color: ['#1565C0', '#42A5F5'] as [string, string], icon: 'school' },
  { id: 2, title: 'Học trực tuyến 1-1', subtitle: 'Học mọi lúc mọi nơi cùng giáo viên', color: ['#AD1457', '#EC407A'] as [string, string], icon: 'videocam' },
  { id: 3, title: 'Tài liệu học tập miễn phí', subtitle: 'Hàng ngàn đề thi thử THPT & ĐGNL', color: ['#2E7D32', '#66BB6A'] as [string, string], icon: 'document-text' },
];

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [activeSegment, setActiveSegment] = useState<'classes' | 'tutors'>('classes');

  // Dynamic filters from DB
  const [dbSubjects, setDbSubjects] = useState<string[]>([]);
  const [dbLocations, setDbLocations] = useState<string[]>([]);
  const [dbGrades, setDbGrades] = useState<string[]>([]);
  const [selectedSubject, setSelectedSubject] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [selectedGrade, setSelectedGrade] = useState<string>('');

  // Dropdown UI states
  const [subjectModalVisible, setSubjectModalVisible] = useState(false);
  const [locationModalVisible, setLocationModalVisible] = useState(false);

  // Data listings
  const [tutors, setTutors] = useState<any[]>([]);
  const [classes, setClasses] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [walletBalance, setWalletBalance] = useState({ available: 0, holding: 0 });

  // Banner carousel state
  const [bannerIndex, setBannerIndex] = useState(0);

  useEffect(() => {
    loadFilters();
    loadWallet();
    loadData();

    // Auto-slide banner
    const timer = setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % BANNERS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const loadFilters = async () => {
    const res = await fetchJSON('/filters');
    if (res.success && res.data) {
      setDbSubjects(res.data.subjects || []);
      setDbLocations(res.data.locations || []);
      setDbGrades(res.data.grades || []);
    }
  };

  const loadWallet = async () => {
    const res = await fetchJSON('/wallet/status');
    if (res.success && res.data) {
      setWalletBalance({
        available: parseFloat(res.data.balance.available_balance) || 0,
        holding: parseFloat(res.data.balance.holding_balance) || 0
      });
    }
  };

  const loadData = async () => {
    setLoading(true);
    // Fetch Tutors
    const tutorRes = await fetchJSON<any[]>('/tutors');
    if (tutorRes.success && tutorRes.data) {
      setTutors(tutorRes.data);
    }
    // Fetch Classes (Quick Match posts)
    const classRes = await fetchJSON<any[]>('/classes');
    if (classRes.success && classRes.data) {
      setClasses(classRes.data);
    }
    setLoading(false);
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await Promise.all([loadFilters(), loadWallet(), loadData()]);
    setRefreshing(false);
  };

  // Filter listings based on selections
  const filteredTutors = tutors.filter((t) => {
    const matchSub = selectedSubject ? t.subjects_to_teach.includes(selectedSubject) : true;
    const matchLoc = selectedLocation ? t.school?.toLowerCase().includes(selectedLocation.toLowerCase()) || t.bio?.toLowerCase().includes(selectedLocation.toLowerCase()) : true;
    const matchGrade = selectedGrade ? t.bio?.toLowerCase().includes(selectedGrade.toLowerCase()) || t.year_of_study?.toLowerCase().includes(selectedGrade.toLowerCase()) : true;
    return matchSub && matchLoc && matchGrade;
  });

  const filteredClasses = classes.filter((c) => {
    const matchSub = selectedSubject ? c.subject === selectedSubject : true;
    const matchLoc = selectedLocation ? c.time_window_text?.toLowerCase().includes(selectedLocation.toLowerCase()) : true;
    const matchGrade = selectedGrade ? c.grade === selectedGrade : true;
    return matchSub && matchLoc && matchGrade;
  });

  const topPad = Platform.OS === 'ios' ? insets.top : (StatusBar.currentHeight ?? 24);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

      {/* --- HEADER GRADIENT (Smalljobs.vn Style) --- */}
      <LinearGradient colors={[Colors.primary, Colors.secondary]} style={[styles.header, { paddingTop: topPad + 10 }]}>
        <View style={styles.headerRow}>
          <Text style={styles.logo}>KNTech</Text>
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.iconBtn}>
              <Ionicons name="search" size={20} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBtn}>
              <Ionicons name="notifications" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Dropdown Filters */}
        <View style={styles.dropdownRow}>
          <TouchableOpacity style={styles.dropdown} onPress={() => setSubjectModalVisible(true)}>
            <Text style={styles.dropdownText} numberOfLines={1}>
              {selectedSubject || 'Chọn môn học'}
            </Text>
            <Ionicons name="chevron-down" size={14} color="rgba(255,255,255,0.8)" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.dropdown} onPress={() => setLocationModalVisible(true)}>
            <Text style={styles.dropdownText} numberOfLines={1}>
              {selectedLocation || 'Chọn địa điểm'}
            </Text>
            <Ionicons name="chevron-down" size={14} color="rgba(255,255,255,0.8)" />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={Colors.primary} />}
      >
        {/* --- FLOATING WALLET CARD --- */}
        <TouchableOpacity style={styles.walletCard} onPress={() => router.push('/wallet')} activeOpacity={0.95}>
          <View style={styles.walletIconContainer}>
            <Ionicons name="wallet-sharp" size={24} color={Colors.primary} />
          </View>
          <View style={styles.walletInfo}>
            <Text style={styles.walletTitle}>Ví GiasuTop</Text>
            <Text style={styles.walletBalance}>{walletBalance.available.toLocaleString()} đ</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color={Colors.text.secondary} />
        </TouchableOpacity>

        {/* --- BANNER CAROUSEL --- */}
        <LinearGradient
          colors={BANNERS[bannerIndex].color}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.banner}
        >
          <View style={styles.bannerText}>
            <Text style={styles.bannerTitle}>{BANNERS[bannerIndex].title}</Text>
            <Text style={styles.bannerSubtitle}>{BANNERS[bannerIndex].subtitle}</Text>
          </View>
          <Ionicons name={BANNERS[bannerIndex].icon as any} size={48} color="rgba(255,255,255,0.3)" />
        </LinearGradient>

        <View style={styles.dotsRow}>
          {BANNERS.map((_, i) => (
            <View key={i} style={[styles.dot, i === bannerIndex && styles.activeDot]} />
          ))}
        </View>

        {/* --- SEGMENT TAB SWITCHER ("Tuyển dụng/Lớp học" vs "Thuê tôi/Gia sư") --- */}
        <View style={styles.segmentContainer}>
          <TouchableOpacity
            style={[styles.segmentBtn, activeSegment === 'classes' && styles.segmentActiveBtn]}
            onPress={() => setActiveSegment('classes')}
          >
            <Text style={[styles.segmentText, activeSegment === 'classes' && styles.segmentActiveText]}>
              Lớp tìm Gia sư
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.segmentBtn, activeSegment === 'tutors' && styles.segmentActiveBtn]}
            onPress={() => setActiveSegment('tutors')}
          >
            <Text style={[styles.segmentText, activeSegment === 'tutors' && styles.segmentActiveText]}>
              Gia sư nổi bật
            </Text>
          </TouchableOpacity>
        </View>

        {/* --- FILTER CHIPS (Grades) --- */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chipsRow}>
          <TouchableOpacity
            style={[styles.chip, !selectedGrade && styles.chipActive]}
            onPress={() => setSelectedGrade('')}
          >
            <Text style={[styles.chipText, !selectedGrade && styles.chipActiveText]}>Tất cả khối lớp</Text>
          </TouchableOpacity>
          {dbGrades.map((g) => (
            <TouchableOpacity
              key={g}
              style={[styles.chip, selectedGrade === g && styles.chipActive]}
              onPress={() => setSelectedGrade(g)}
            >
              <Text style={[styles.chipText, selectedGrade === g && styles.chipActiveText]}>{g}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* --- LISTING CONTENTS --- */}
        {loading ? (
          <ActivityIndicator size="large" color={Colors.primary} style={{ marginTop: 24 }} />
        ) : activeSegment === 'classes' ? (
          // Lớp Tìm Gia Sư List
          filteredClasses.length === 0 ? (
            <Text style={styles.emptyText}>Không có lớp học nào phù hợp bộ lọc.</Text>
          ) : (
            filteredClasses.map((item) => (
              <View key={item.id} style={styles.card}>
                <View style={styles.cardHeader}>
                  <View style={styles.avatarCircle}>
                    <Text style={styles.avatarText}>{item.student_name[0]}</Text>
                  </View>
                  <View style={styles.cardTitleInfo}>
                    <Text style={styles.cardMainTitle}>Cần tìm gia sư {item.subject}</Text>
                    <Text style={styles.cardAuthor}>{item.student_name} • Học sinh</Text>
                  </View>
                  <Ionicons name="bookmark-outline" size={20} color={Colors.text.secondary} />
                </View>

                <View style={styles.badgeRow}>
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>{item.grade}</Text>
                  </View>
                  <View style={[styles.badge, { backgroundColor: '#E8F5E9' }]}>
                    <Text style={[styles.badgeText, { color: '#2E7D32' }]}>Đang tuyển</Text>
                  </View>
                </View>

                <View style={styles.cardDetails}>
                  <Text style={styles.cardPrice}>{parseFloat(item.expected_rate).toLocaleString()} đ/giờ</Text>
                  <Text style={styles.cardLoc}>
                    <Ionicons name="time-outline" size={12} /> {item.time_window_text || 'Thỏa thuận'}
                  </Text>
                </View>

                <TouchableOpacity style={styles.actionBtn}>
                  <Text style={styles.actionBtnText}>Đăng ký nhận lớp</Text>
                </TouchableOpacity>
              </View>
            ))
          )
        ) : (
          // Gia Sư Nổi Bật List
          filteredTutors.length === 0 ? (
            <Text style={styles.emptyText}>Không tìm thấy gia sư nào phù hợp bộ lọc.</Text>
          ) : (
            filteredTutors.map((item) => (
              <View key={item.user_id} style={styles.card}>
                <View style={styles.cardHeader}>
                  <View style={[styles.avatarCircle, { backgroundColor: Colors.primary }]}>
                    <Text style={[styles.avatarText, { color: '#fff' }]}>{item.full_name[0]}</Text>
                  </View>
                  <View style={styles.cardTitleInfo}>
                    <View style={styles.verifiedRow}>
                      <Text style={styles.cardMainTitle}>{item.full_name}</Text>
                      <Ionicons name="checkmark-circle" size={16} color={Colors.primary} style={{ marginLeft: 4 }} />
                    </View>
                    <Text style={styles.cardAuthor}>{item.school} • {item.major}</Text>
                  </View>
                  <Ionicons name="bookmark-outline" size={20} color={Colors.text.secondary} />
                </View>

                <View style={styles.badgeRow}>
                  {item.subjects_to_teach.map((sub: string) => (
                    <View key={sub} style={styles.badge}>
                      <Text style={styles.badgeText}>{sub}</Text>
                    </View>
                  ))}
                </View>

                <Text style={styles.bioText} numberOfLines={2}>{item.bio || 'Chưa cập nhật giới thiệu.'}</Text>

                <View style={styles.cardDetails}>
                  <Text style={styles.cardPrice}>{parseFloat(item.hourly_rate).toLocaleString()} đ/giờ</Text>
                  <Text style={styles.cardLoc}>
                    <Ionicons name="school-outline" size={12} /> {item.year_of_study || 'Đã tốt nghiệp'}
                  </Text>
                </View>

                <TouchableOpacity style={[styles.actionBtn, { backgroundColor: '#FFF3E0', borderColor: Colors.accent }]} onPress={() => router.push('/classes')}>
                  <Text style={[styles.actionBtnText, { color: Colors.accent }]}>Đặt lịch học thử</Text>
                </TouchableOpacity>
              </View>
            ))
          )
        )}
      </ScrollView>

      {/* --- SUBJECT SELECTOR MODAL --- */}
      <Modal visible={subjectModalVisible} transparent animationType="slide">
        <View style={styles.modalBg}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeader}>Lọc Môn Học</Text>
            <TouchableOpacity style={styles.modalItem} onPress={() => { setSelectedSubject(''); setSubjectModalVisible(false); }}>
              <Text style={!selectedSubject ? styles.modalItemActive : styles.modalItemText}>Tất cả môn học</Text>
            </TouchableOpacity>
            {dbSubjects.map((sub) => (
              <TouchableOpacity key={sub} style={styles.modalItem} onPress={() => { setSelectedSubject(sub); setSubjectModalVisible(false); }}>
                <Text style={selectedSubject === sub ? styles.modalItemActive : styles.modalItemText}>{sub}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.closeBtn} onPress={() => setSubjectModalVisible(false)}>
              <Text style={styles.closeBtnText}>Đóng</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* --- LOCATION SELECTOR MODAL --- */}
      <Modal visible={locationModalVisible} transparent animationType="slide">
        <View style={styles.modalBg}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeader}>Lọc Địa Điểm</Text>
            <TouchableOpacity style={styles.modalItem} onPress={() => { setSelectedLocation(''); setLocationModalVisible(false); }}>
              <Text style={!selectedLocation ? styles.modalItemActive : styles.modalItemText}>Tất cả địa điểm</Text>
            </TouchableOpacity>
            {dbLocations.map((loc) => (
              <TouchableOpacity key={loc} style={styles.modalItem} onPress={() => { setSelectedLocation(loc); setLocationModalVisible(false); }}>
                <Text style={selectedLocation === loc ? styles.modalItemActive : styles.modalItemText}>{loc}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.closeBtn} onPress={() => setLocationModalVisible(false)}>
              <Text style={styles.closeBtnText}>Đóng</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  header: {
    paddingHorizontal: Spacing.md,
    paddingBottom: Spacing.md,
    borderBottomLeftRadius: Radius.lg,
    borderBottomRightRadius: Radius.lg,
    ...getShadow(0, 4, 0.1, 8),
  },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  logo: { fontSize: 24, fontWeight: '900', color: '#fff', letterSpacing: -0.5 },
  headerIcons: { flexDirection: 'row', gap: 10 },
  iconBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: 'rgba(255, 255, 255, 0.18)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownRow: { flexDirection: 'row', gap: 10 },
  dropdown: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: Spacing.md,
    paddingVertical: 10,
    borderRadius: Radius.md,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  dropdownText: { color: '#fff', fontSize: 13, fontWeight: '600' },
  scrollContent: { padding: Spacing.md, paddingBottom: 100 },

  // Wallet
  walletCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    padding: Spacing.md,
    borderRadius: Radius.md,
    marginBottom: Spacing.md,
    borderWidth: 1,
    borderColor: Colors.border,
    ...getShadow(0, 4, 0.05, 4),
  },
  walletIconContainer: {
    width: 44,
    height: 44,
    borderRadius: Radius.sm,
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  walletInfo: { flex: 1, marginLeft: Spacing.md },
  walletTitle: { fontSize: 13, color: Colors.text.secondary },
  walletBalance: { fontSize: 18, fontWeight: '800', color: Colors.text.primary, marginTop: 2 },

  // Banner
  banner: {
    borderRadius: Radius.md,
    padding: Spacing.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 100,
  },
  bannerText: { flex: 1 },
  bannerTitle: { color: '#fff', fontSize: 16, fontWeight: '800' },
  bannerSubtitle: { color: 'rgba(255,255,255,0.85)', fontSize: 12, marginTop: 4 },
  dotsRow: { flexDirection: 'row', justifyContent: 'center', gap: 6, marginVertical: 12 },
  dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: '#CBD5E1' },
  activeDot: { width: 18, backgroundColor: Colors.primary },

  // Segment Tab
  segmentContainer: {
    flexDirection: 'row',
    backgroundColor: '#E2E8F0',
    borderRadius: Radius.sm,
    padding: 2,
    marginBottom: Spacing.md,
  },
  segmentBtn: { flex: 1, paddingVertical: 10, alignItems: 'center', borderRadius: Radius.sm },
  segmentActiveBtn: { backgroundColor: '#fff', ...getShadow(0, 2, 0.05, 3) },
  segmentText: { fontSize: 14, fontWeight: '600', color: Colors.text.secondary },
  segmentActiveText: { color: Colors.primary },

  // Chips
  chipsRow: { gap: 8, paddingBottom: 6, marginBottom: 12 },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: Radius.xl,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  chipActive: { backgroundColor: Colors.primary, borderColor: Colors.primary },
  chipText: { fontSize: 13, color: Colors.text.secondary, fontWeight: '600' },
  chipActiveText: { color: '#fff' },

  // Listing Cards
  card: {
    backgroundColor: '#fff',
    borderRadius: Radius.md,
    padding: Spacing.md,
    marginBottom: Spacing.md,
    borderWidth: 1,
    borderColor: Colors.border,
    ...getShadow(0, 4, 0.06, 6),
  },
  cardHeader: { flexDirection: 'row', alignItems: 'center' },
  avatarCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#CBD5E1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: { fontSize: 18, fontWeight: 'bold', color: Colors.text.primary },
  cardTitleInfo: { flex: 1, marginLeft: 12 },
  cardMainTitle: { fontSize: 15, fontWeight: '800', color: Colors.text.primary },
  cardAuthor: { fontSize: 12, color: Colors.text.secondary, marginTop: 2 },
  verifiedRow: { flexDirection: 'row', alignItems: 'center' },
  badgeRow: { flexDirection: 'row', gap: 6, marginVertical: 10, flexWrap: 'wrap' },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: Radius.xs,
    backgroundColor: '#F1F5F9',
  },
  badgeText: { fontSize: 11, color: Colors.text.secondary, fontWeight: '600' },
  bioText: { fontSize: 13, color: Colors.text.secondary, lineHeight: 18, marginBottom: 10 },
  cardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    paddingTop: 10,
    marginBottom: 12,
  },
  cardPrice: { fontSize: 16, fontWeight: '800', color: Colors.primary },
  cardLoc: { fontSize: 12, color: Colors.text.secondary },
  actionBtn: {
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: Radius.sm,
    paddingVertical: 10,
    alignItems: 'center',
  },
  actionBtnText: { color: Colors.primary, fontWeight: '700', fontSize: 14 },
  emptyText: { textAlign: 'center', color: Colors.text.secondary, marginTop: 24, fontSize: 14 },

  // Modals
  modalBg: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' },
  modalContent: { backgroundColor: '#fff', borderTopLeftRadius: Radius.lg, borderTopRightRadius: Radius.lg, padding: Spacing.md, maxHeight: '80%' },
  modalHeader: { fontSize: 18, fontWeight: '800', color: Colors.text.primary, marginBottom: 16, textAlign: 'center' },
  modalItem: { paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: '#F1F5F9' },
  modalItemText: { fontSize: 15, color: Colors.text.primary },
  modalItemActive: { fontSize: 15, color: Colors.primary, fontWeight: '700' },
  closeBtn: { marginTop: 12, backgroundColor: '#F1F5F9', paddingVertical: 12, borderRadius: Radius.sm, alignItems: 'center' },
  closeBtnText: { color: Colors.text.primary, fontWeight: '700' },
});
