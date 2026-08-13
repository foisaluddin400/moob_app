import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    Image,
} from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const CLIENTS_DATA = [
    { id: '1', name: 'Elena Rodriguez', location: 'Singapore', email: 'marcus@gmail.com' },
    { id: '2', name: 'Elena Rodriguez', location: 'Singapore', email: 'marcus@gmail.com' },
    { id: '3', name: 'Elena Rodriguez', location: 'Singapore', email: 'marcus@gmail.com' },
    { id: '4', name: 'Elena Rodriguez', location: 'Singapore', email: 'marcus@gmail.com' },
    { id: '5', name: 'Elena Rodriguez', location: 'Singapore', email: 'marcus@gmail.com' },
    { id: '6', name: 'Elena Rodriguez', location: 'Singapore', email: 'marcus@gmail.com' },
];

export default function ClientsScreen() {
    const router = useRouter();
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity style={styles.backBtn} onPress={() => router.back()} activeOpacity={0.7}>
                        <Feather name="arrow-left" size={18} color="#00B2B7" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Clients</Text>
                    <View style={{ width: 36 }} />
                </View>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.scrollContent}
                >
                    {/* Info Card */}
                    <View style={styles.infoBox}>
                        <View style={styles.infoTitleRow}>
                            <Ionicons name="person-outline" size={18} color="#008080" />
                            <Text style={styles.infoTitle}>Client profiles are self-managed</Text>
                        </View>
                        <Text style={styles.infoText}>
                            Clients register and submit requests themselves. Your role begins with review and case guidance.
                        </Text>
                    </View>

                    {/* Client List */}
                    <View style={styles.listContainer}>
                        {CLIENTS_DATA.map((client, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.clientCard}
                                activeOpacity={0.7}
                                onPress={() => router.push('/consultant/client-details')}
                            >
                                <Image
                                    source={{ uri: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop' }}
                                    style={styles.avatar}
                                />
                                <View style={styles.clientInfo}>
                                    <Text style={styles.clientName}>{client.name}</Text>
                                    <Text style={styles.clientSubtext}>
                                        {client.location} · {client.email}
                                    </Text>
                                </View>
                                <Ionicons name="chevron-forward" size={18} color="#cbd5e1" />
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: '#f8fafc' },
    container: { flex: 1 },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 14,
        backgroundColor: '#f8fafc',
    },
    backBtn: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#e6f7f7',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#1e293b',
    },
    scrollContent: {
        paddingHorizontal: 16,
        paddingBottom: 24,
    },
    infoBox: {
        backgroundColor: '#e6f7f7',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#ccf0f0',
    },
    infoTitleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 6,
    },
    infoTitle: {
        fontSize: 15,
        fontWeight: '600',
        color: '#006666',
    },
    infoText: {
        fontSize: 13,
        color: '#008080',
        lineHeight: 18,
    },
    listContainer: {
        gap: 10,
    },
    clientCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 14,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.04,
        shadowRadius: 3,
        elevation: 1,
    },
    avatar: {
        width: 44,
        height: 44,
        borderRadius: 22,
        marginRight: 12,
    },
    clientInfo: {
        flex: 1,
    },
    clientName: {
        fontSize: 15,
        fontWeight: '600',
        color: '#1e293b',
        marginBottom: 2,
    },
    clientSubtext: {
        fontSize: 12,
        color: '#64748b',
    },
});