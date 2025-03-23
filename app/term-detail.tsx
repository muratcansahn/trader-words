import { useLocalSearchParams, useRouter, Stack } from 'expo-router';
import { View, StyleSheet, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { ThemedText } from '@/components/ThemedText';
import { financialTerms } from '@/constants/FinancialTerms';

// Arka plan resmine uygun renkler
const THEME_COLORS = {
  primary: '#3498db',       // Mavi
  secondary: '#2ecc71',     // Yeşil
  background: 'rgba(0, 0, 0, 0.7)',
  card: 'rgba(25, 25, 35, 0.85)',
  text: '#ffffff',
  textSecondary: '#e0e0e0',
  border: 'rgba(255, 255, 255, 0.15)',
};

export default function TermDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  
  // ID'ye göre terimi bul
  const term = financialTerms.find(term => term.id === id);
  
  return (
    <>
      {/* Başlığı gizlemek için Stack.Screen kullanıyoruz */}
      <Stack.Screen options={{ headerShown: false }} />
      
      <ImageBackground 
        source={require('@/assets/images/background.jpeg')} 
        style={styles.backgroundImage}
      >
        {!term ? (
          <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
            <View style={[styles.card, { backgroundColor: THEME_COLORS.card }]}>
              <ThemedText style={[styles.errorText, { color: THEME_COLORS.text }]}>
                Terim bulunamadı
              </ThemedText>
              <TouchableOpacity 
                style={[styles.backButton, { backgroundColor: THEME_COLORS.primary }]}
                onPress={() => router.back()}
              >
                <ThemedText style={{ color: '#fff' }}>Geri Dön</ThemedText>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <ScrollView style={styles.scrollContainer}>
            <View style={styles.container}>
              {/* Back Button */}
              <TouchableOpacity 
                style={[styles.backButtonSmall, { backgroundColor: THEME_COLORS.primary }]}
                onPress={() => router.back()}
              >
                <Ionicons name="arrow-back" size={24} color="#fff" />
              </TouchableOpacity>
              
              {/* Term Detail Card */}
              <View style={[styles.card, { backgroundColor: THEME_COLORS.card }]}>
                <View style={styles.termHeader}>
                  <ThemedText style={[styles.termTitle, { color: THEME_COLORS.primary }]}>
                    {term.title}
                  </ThemedText>
                  <View style={[styles.letterBadge, { backgroundColor: THEME_COLORS.primary }]}>
                    <ThemedText style={styles.letterText}>{term.letter}</ThemedText>
                  </View>
                </View>
                
                <View style={styles.divider} />
                
                <ThemedText 
                  style={[styles.termDescription, { color: THEME_COLORS.text, textAlign: 'justify' }]}
                  android_hyphenationFrequency="full"
                >
                  {term.description}
                </ThemedText>
                
            
                
                {/* Related Terms - Örnek olarak aynı harfle başlayan diğer terimler */}
                <View style={styles.relatedTerms}>
                  <ThemedText style={[styles.infoTitle, { color: THEME_COLORS.primary }]}>
                    İlgili Terimler
                  </ThemedText>
                  <View style={styles.relatedTermsList}>
                    {financialTerms
                      .filter(t => t.letter === term.letter && t.id !== term.id)
                      .slice(0, 3)
                      .map(relatedTerm => (
                        <TouchableOpacity 
                          key={relatedTerm.id}
                          style={[styles.relatedTermItem, { borderColor: THEME_COLORS.border }]}
                          onPress={() => router.push(`/term-detail?id=${relatedTerm.id}`)}
                        >
                          <ThemedText style={{ color: THEME_COLORS.text }}>{relatedTerm.title}</ThemedText>
                        </TouchableOpacity>
                      ))}
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        )}
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  scrollContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  backButtonSmall: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 48, // Daha fazla üst boşluk
  },
  card: {
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  termHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  termTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
  },
  letterBadge: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  letterText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginBottom: 16,
  },
  termDescription: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 24,
  },
  additionalInfo: {
    marginBottom: 24,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    lineHeight: 20,
  },
  relatedTerms: {
    marginTop: 8,
  },
  relatedTermsList: {
    marginTop: 8,
  },
  relatedTermItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 8,
  },
  backButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  errorText: {
    fontSize: 18,
    textAlign: 'center',
  },
});
