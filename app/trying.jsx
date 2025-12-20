import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const trying = () => {
  return (
    <View>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.avatar} />
        <View>
          <Text style={styles.title}>DR Detection</Text>
          <Text style={styles.subtitle}>Diabetic Retinopathy Screening</Text>
        </View>
        <Text style={styles.username}>Ze Gui</Text>
      </View>

      <Text style={styles.pageTitle}>‹ Notifications</Text>





      {/* Notification List */}
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Notification 1 */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Classification Result is Ready!</Text>
          <Text style={styles.cardText}>
            Your image upload from [Date] has been classified and verified.
            Tap to view the official report and recommended next steps.
          </Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>View Full Report</Text>
          </TouchableOpacity>

          <Text style={styles.time}>2 hours ago</Text>
        </View>

        {/* Notification 2 */}
        <View style={[styles.card, styles.grayCard]}>
          <Text style={styles.cardTitle}>Time to Re-Screen</Text>
          <Text style={styles.cardText}>
            Based on your last [Mild/Moderate] result, it's time for your follow-up screening.
            We recommend another check within 3 months.
          </Text>
          <Text style={styles.time}>2 days ago</Text>
        </View>

      </ScrollView>

      {/* Bottom Button */}
      <TouchableOpacity style={styles.markReadBtn}>
        <Text style={styles.markReadText}>Mark All As Read</Text>
      </TouchableOpacity>
    </View>
  )
}

export default trying

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12
  },

  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#bcdcff',
    marginRight: 10
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },

  subtitle: {
    fontSize: 12,
    color: '#555'
  },

  username: {
    marginLeft: 'auto',
    fontWeight: '600'
  },

  pageTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10
  },

  card: {
    backgroundColor: '#f5f9ff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 14
  },

  grayCard: {
    backgroundColor: '#f1f1f1'
  },

  cardTitle: {
    fontWeight: 'bold',
    marginBottom: 6
  },

  cardText: {
    fontSize: 13,
    color: '#444',
    lineHeight: 18
  },

  button: {
    marginTop: 10,
    backgroundColor: '#4da3ff',
    alignSelf: 'flex-start',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20
  },

  buttonText: {
    color: '#fff',
    fontSize: 12
  },

  time: {
    fontSize: 11,
    color: '#777',
    marginTop: 6
  },

  markReadBtn: {
    borderWidth: 1,
    borderColor: '#4da3ff',
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
    marginVertical: 12
  },

  markReadText: {
    color: '#4da3ff',
    fontWeight: '600'
  }
})