import { useState, useMemo, useRef } from 'react';
import { Image, StyleSheet, TouchableOpacity, View, TextInput, ScrollView, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useThemeColor } from '@/hooks/useThemeColor';
import { financialTerms, FinancialTerm } from '@/constants/FinancialTerms';

// Alphabet organized in rows as shown in the image
const ALPHABET_ROWS = [
  ['#', 'A', 'B', 'C', 'Ç', 'D', 'E'],
  ['F', 'G', 'H', 'I-İ', 'J', 'K', 'L'],
  ['M', 'N', 'O', 'Ö', 'P', 'R', 'S-Ş'],
  ['T', 'U-Ü', 'V', 'Y', 'Z']
];

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

export default function HomeScreen() {
  const [selectedLetter, setSelectedLetter] = useState<string>('A');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const scrollViewRef = useRef<ScrollView>(null);
  const router = useRouter();
  
  const backgroundColor = useThemeColor({}, 'background');
  const textColor = useThemeColor({}, 'text');
  const tintColor = THEME_COLORS.primary;

  const filteredTerms = useMemo(() => {
    if (searchQuery.trim()) {
      return financialTerms.filter(term => 
        term.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        term.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else if (selectedLetter === '#') {
      // Show all terms for # symbol
      return financialTerms;
    } else if (selectedLetter === 'I-İ') {
      return financialTerms.filter(term => term.letter === 'I' || term.letter === 'İ');
    } else if (selectedLetter === 'S-Ş') {
      return financialTerms.filter(term => term.letter === 'S' || term.letter === 'Ş');
    } else if (selectedLetter === 'U-Ü') {
      return financialTerms.filter(term => term.letter === 'U' || term.letter === 'Ü');
    } else {
      return financialTerms.filter(term => term.letter === selectedLetter);
    }
  }, [selectedLetter, searchQuery]);

  return (
    <ImageBackground 
      source={require('@/assets/images/background.jpeg')} 
      style={styles.backgroundImage}
    >
      <ScrollView 
        ref={scrollViewRef}
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.container]}>
          {/* Header with Logo and Title */}
          <View style={[styles.headerContainer, { backgroundColor: THEME_COLORS.card }]}>
            <View style={styles.headerContent}>
              <View style={styles.headerImageContainer}>
                <Image 
                  source={require('@/assets/images/yatirimx-logo.png')} 
                  style={styles.headerImage}
                  resizeMode="contain"
                />
              </View>
              
              <View style={styles.headerTextContainer}>
                <ThemedText style={[styles.headerTitle, { color: THEME_COLORS.primary }]}>FinansSözlük</ThemedText>
                <ThemedText style={[styles.headerDescription, { color: THEME_COLORS.textSecondary }]}>
                  Finansal terimlerin dünyasına hoş geldin!
                  Borsa, kripto ve ekonomiyle ilgili merak ettiğin tüm kavramları sade ve anlaşılır şekilde keşfet.
                </ThemedText>
              </View>
            </View>
          </View>
          
          {/* Search Bar */}
          <View style={[styles.searchContainer, { backgroundColor: THEME_COLORS.card, borderColor: THEME_COLORS.border }]}>
            <Ionicons name="search" size={20} color={THEME_COLORS.textSecondary} />
            <TextInput
              style={[styles.searchInput, { color: THEME_COLORS.text }]}
              placeholder="Bir terim ara"
              placeholderTextColor={THEME_COLORS.textSecondary}
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            {searchQuery ? (
              <TouchableOpacity onPress={() => setSearchQuery('')}>
                <Ionicons name="close-circle" size={20} color={THEME_COLORS.textSecondary} />
              </TouchableOpacity>
            ) : null}
          </View>
          
          {/* Alphabet Grid */}
          <View style={[styles.alphabetContainer, { backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: 12, padding: 10 }]}>
            {ALPHABET_ROWS.map((row, rowIndex) => (
              <View key={`row-${rowIndex}`} style={styles.alphabetRow}>
                {row.map((letter) => (
                  <TouchableOpacity
                    key={letter}
                    style={[
                      styles.letterButton,
                      selectedLetter === letter && { borderBottomWidth: 2, borderBottomColor: THEME_COLORS.primary }
                    ]}
                    onPress={() => {
                      setSelectedLetter(letter);
                      setSearchQuery('');
                    }}
                  >
                    <ThemedText
                      style={[
                        styles.letterText,
                        { color: THEME_COLORS.text },
                        selectedLetter === letter && { color: THEME_COLORS.primary }
                      ]}
                    >
                      {letter}
                    </ThemedText>
                  </TouchableOpacity>
                ))}
              </View>
            ))}
          </View>
          
          {/* Terms List */}
          <View style={styles.termsListContainer}>
            {/* Selected Letter Header */}
            {!searchQuery && (
              <View style={[styles.selectedLetterContainer, { borderRadius: 12, paddingHorizontal: 16 }]}>
                <ThemedText style={[styles.selectedLetter, { color: THEME_COLORS.primary }]}>{selectedLetter}</ThemedText>
              </View>
            )}
            
            {/* Terms Cards */}
            {filteredTerms.length > 0 ? (
              filteredTerms.map(term => (
                <TouchableOpacity 
                  key={term.id} 
                  style={[styles.termCard, { backgroundColor: THEME_COLORS.card, borderColor: THEME_COLORS.border }]}
                  onPress={() => router.push(`/term-detail?id=${term.id}`)}
                >
                  <ThemedText style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8, color: THEME_COLORS.primary }}>{term.title}</ThemedText>
                  <ThemedText style={{ color: THEME_COLORS.text }} numberOfLines={2}>{term.description}</ThemedText>
               
                </TouchableOpacity>
              ))
            ) : (
              <View style={[styles.emptyContainer, { backgroundColor: THEME_COLORS.card, borderRadius: 12 }]}>
                <ThemedText style={[styles.emptyText, { color: THEME_COLORS.textSecondary }]}>
                  {searchQuery ? 'Arama sonucu bulunamadı' : `${selectedLetter} harfi ile başlayan terim bulunamadı`}
                </ThemedText>
              </View>
            )}
          </View>
          
          {/* Floating Action Button */}
          <View style={styles.fabContainer}>
            <TouchableOpacity 
              style={[styles.fab, { backgroundColor: THEME_COLORS.primary }]}
              onPress={() => {
                scrollViewRef.current?.scrollTo({ y: 0, animated: true });
              }}
            >
              <Ionicons name="arrow-up" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
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
  headerContainer: {
    marginBottom: 24,
    marginTop: 48,
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: THEME_COLORS.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  headerContent: {
    padding: 16,
    backgroundColor: 'rgba(20, 20, 30, 0.9)',
  },
  headerImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 5,
  },
  headerImage: {
    width: 120,
    height: 70,
  },
  headerTextContainer: {
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
    letterSpacing: 1,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    height: 60,
    lineHeight: 60,
  },

  headerDescription: {
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
    paddingHorizontal: 10,
    marginBottom: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 24,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },
  alphabetContainer: {
    marginBottom: 24,
  },
  alphabetRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  letterButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  letterText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  termsListContainer: {
    marginBottom: 24,
  },
  selectedLetterContainer: {
    marginBottom: 16,
    alignSelf: 'flex-start',
    height: 70,
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  selectedLetter: {
    fontSize: 28,
    fontWeight: 'bold',
    height: 70,
    textAlignVertical: 'center',
    lineHeight: 70,
  },
  termCard: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  emptyContainer: {
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 16,
    textAlign: 'center',
  },
  fabContainer: {
    position: 'absolute',
    bottom: 24,
    right: 24,
  },
  fab: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  readMoreContainer: {
    marginTop: 8,
    alignItems: 'flex-end',
  }
});
