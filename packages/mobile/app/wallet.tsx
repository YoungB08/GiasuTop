import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Spacing, Radius } from '../constants/Colors';
import { fetchJSON } from '../lib/api';
import { useRouter } from 'expo-router';

export default function WalletScreen() {
  const router = useRouter();
  const [balance, setBalance] = useState({ available: 0, holding: 0 });
  const [ledger, setLedger] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // Forms
  const [topupAmount, setTopupAmount] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [bankNo, setBankNo] = useState('');
  const [bankName, setBankName] = useState('');

  const loadWallet = async () => {
    setLoading(true);
    const res = await fetchJSON('/wallet/status');
    if (res.success && res.data) {
      setBalance({
        available: parseFloat(res.data.balance.available_balance) || 0,
        holding: parseFloat(res.data.balance.holding_balance) || 0
      });
      setLedger(res.data.ledger || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadWallet();
  }, []);

  const handleTopup = async () => {
    if (!topupAmount || isNaN(parseFloat(topupAmount))) {
      return Alert.alert('Lỗi', 'Vui lòng nhập số tiền nạp hợp lệ');
    }
    
    setLoading(true);
    const res = await fetchJSON('/wallet/topup', {
      method: 'POST',
      body: JSON.stringify({ amount: topupAmount })
    });
    if (res.success) {
      Alert.alert('Thành công', res.message);
      setTopupAmount('');
      loadWallet();
    } else {
      Alert.alert('Lỗi', res.message);
    }
    setLoading(false);
  };

  const handleWithdraw = async () => {
    if (!withdrawAmount || isNaN(parseFloat(withdrawAmount))) {
      return Alert.alert('Lỗi', 'Vui lòng nhập số tiền rút hợp lệ');
    }
    if (!bankNo || !bankName) {
      return Alert.alert('Lỗi', 'Vui lòng nhập đầy đủ thông tin ngân hàng');
    }

    setLoading(true);
    const res = await fetchJSON('/wallet/withdraw', {
      method: 'POST',
      body: JSON.stringify({ amount: withdrawAmount, bankAccountNo: bankNo, bankAccountName: bankName })
    });
    if (res.success) {
      Alert.alert('Thành công', res.message);
      setWithdrawAmount('');
      setBankNo('');
      setBankName('');
      loadWallet();
    } else {
      Alert.alert('Lỗi', res.message);
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Ví tiền nội bộ</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Balance Cards */}
        <View style={styles.balanceContainer}>
          <View style={styles.balanceCard}>
            <Text style={styles.balanceLabel}>Số dư khả dụng</Text>
            <Text style={styles.balanceValue}>{balance.available.toLocaleString()} đ</Text>
          </View>
          <View style={[styles.balanceCard, { backgroundColor: '#ECEFF1' }]}>
            <Text style={[styles.balanceLabel, { color: Colors.text.secondary }]}>Số dư đóng băng</Text>
            <Text style={[styles.balanceValue, { color: Colors.text.secondary }]}>{balance.holding.toLocaleString()} đ</Text>
          </View>
        </View>

        {/* Nạp tiền form */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Nạp tiền vào ví (Giả lập)</Text>
          <TextInput
            placeholder="Nhập số tiền muốn nạp..."
            keyboardType="numeric"
            value={topupAmount}
            onChangeText={setTopupAmount}
            style={styles.input}
          />
          <TouchableOpacity style={styles.btn} onPress={handleTopup}>
            <Text style={styles.btnText}>Nạp tiền ngay</Text>
          </TouchableOpacity>
        </View>

        {/* Rút tiền form */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Yêu cầu rút tiền</Text>
          <TextInput
            placeholder="Nhập số tiền muốn rút..."
            keyboardType="numeric"
            value={withdrawAmount}
            onChangeText={setWithdrawAmount}
            style={styles.input}
          />
          <TextInput
            placeholder="Số tài khoản ngân hàng..."
            value={bankNo}
            onChangeText={setBankNo}
            style={styles.input}
          />
          <TextInput
            placeholder="Tên chủ tài khoản..."
            value={bankName}
            onChangeText={setBankName}
            style={styles.input}
          />
          <TouchableOpacity style={[styles.btn, { backgroundColor: Colors.accent }]} onPress={handleWithdraw}>
            <Text style={styles.btnText}>Gửi yêu cầu rút tiền</Text>
          </TouchableOpacity>
        </View>

        {/* Lịch sử giao dịch */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Lịch sử giao dịch</Text>
          {loading ? (
            <ActivityIndicator size="small" color={Colors.primary} />
          ) : ledger.length === 0 ? (
            <Text style={styles.emptyText}>Chưa có giao dịch nào.</Text>
          ) : (
            ledger.map((item) => {
              const isPlus = item.amount > 0;
              return (
                <View key={item.id} style={styles.ledgerItem}>
                  <View>
                    <Text style={styles.ledgerType}>{item.entry_type}</Text>
                    <Text style={styles.ledgerDate}>{new Date(item.created_at).toLocaleString('vi-VN')}</Text>
                  </View>
                  <Text style={[styles.ledgerAmount, { color: isPlus ? Colors.success : Colors.error }]}>
                    {isPlus ? '+' : ''}{parseFloat(item.amount).toLocaleString()} đ
                  </Text>
                </View>
              );
            })
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  header: { backgroundColor: Colors.primary, paddingVertical: 20, paddingHorizontal: Spacing.md, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  headerTitle: { fontSize: 18, fontWeight: '800', color: '#fff' },
  scroll: { padding: Spacing.md, paddingBottom: 60 },
  balanceContainer: { flexDirection: 'row', gap: 12, marginBottom: Spacing.lg },
  balanceCard: { flex: 1, backgroundColor: '#E3F2FD', borderRadius: Radius.md, padding: Spacing.md, borderLeftWidth: 4, borderLeftColor: Colors.primary },
  balanceLabel: { fontSize: 12, color: Colors.primary, fontWeight: '600' },
  balanceValue: { fontSize: 18, fontWeight: '800', marginTop: 4, color: Colors.primary },
  section: { backgroundColor: '#fff', borderRadius: Radius.md, padding: Spacing.md, marginBottom: Spacing.lg, borderWidth: 1, borderColor: Colors.border },
  sectionTitle: { fontSize: 15, fontWeight: '700', color: Colors.text.primary, marginBottom: 12 },
  input: { borderWidth: 1, borderColor: Colors.border, borderRadius: Radius.sm, paddingHorizontal: 12, paddingVertical: 10, fontSize: 14, marginBottom: 12, backgroundColor: '#FAFAFA' },
  btn: { backgroundColor: Colors.primary, borderRadius: Radius.sm, paddingVertical: 12, alignItems: 'center' },
  btnText: { color: '#fff', fontWeight: '700', fontSize: 14 },
  ledgerItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#F1F5F9' },
  ledgerType: { fontSize: 14, fontWeight: '600', color: Colors.text.primary },
  ledgerDate: { fontSize: 11, color: Colors.text.muted, marginTop: 2 },
  ledgerAmount: { fontSize: 15, fontWeight: '700' },
  emptyText: { textAlign: 'center', color: Colors.text.secondary, marginVertical: 12 },
});
