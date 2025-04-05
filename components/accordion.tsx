import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface AccordionProps {
  data: { title: string; content: string }[];
  activeIndex?: number | null; 
  setActiveIndex?: (index: number | null) => void;
}

const Accordion: React.FC<AccordionProps> = ({ data, activeIndex, setActiveIndex }) => {
  const [internalActiveIndex, setInternalActiveIndex] = useState<number | null>(activeIndex ?? null);

  const toggleAccordion = (index: number) => {
    if (setActiveIndex) {
      setActiveIndex(activeIndex === index ? null : index);
    } else {
      setInternalActiveIndex(internalActiveIndex === index ? null : index);
    }
  };

  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <View key={index}>
          <TouchableOpacity onPress={() => toggleAccordion(index)} style={styles.header}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={{ fontSize: 24 }}>{internalActiveIndex === index ? '▾' : '▸'}</Text>
          </TouchableOpacity>
          {internalActiveIndex === index && <Text style={styles.content}>{item.content}</Text>}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { borderTopWidth: 1, borderColor: '#ddd', marginBottom: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 15, borderBottomWidth: 1, borderColor: '#eee' },
  title: { fontSize: 15, fontWeight: 'bold' },
  content: { color: '#B89E72', paddingVertical: 10 },
});

export default Accordion;

