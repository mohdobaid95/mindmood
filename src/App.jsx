import { useState, useEffect } from 'react'
import Header from './components/Header'
import JournalForm from './components/JournalForm'
import MoodTrends from './components/MoodTrends'
import Footer from './components/Footer'

function App() {
  const [journalEntries, setJournalEntries] = useState([])
  const [currentEntry, setCurrentEntry] = useState('')
  const [moodInsights, setMoodInsights] = useState(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  // Load entries from localStorage on mount
  useEffect(() => {
    const savedEntries = localStorage.getItem('mindmood_entries')
    if (savedEntries) {
      try {
        const parsed = JSON.parse(savedEntries)
        setJournalEntries(parsed)
      } catch (error) {
        console.error('Error loading entries:', error)
      }
    }
  }, [])

  // Save entries to localStorage whenever they change
  useEffect(() => {
    if (journalEntries.length > 0) {
      localStorage.setItem('mindmood_entries', JSON.stringify(journalEntries))
    }
  }, [journalEntries])

  // Clear all journal entries
  const clearJournal = () => {
    if (window.confirm('Are you sure you want to clear all journal entries? This action cannot be undone.')) {
      setJournalEntries([])
      setMoodInsights(null)
      localStorage.removeItem('mindmood_entries')
    }
  }

  // Simulate NLP sentiment analysis
  const analyzeMood = () => {
    if (!currentEntry.trim()) {
      alert('Please enter some text before analyzing.')
      return
    }

    setIsAnalyzing(true)

    // Simulate API delay
    setTimeout(() => {
      const entry = currentEntry.toLowerCase()
      let sentiment = 'neutral'
      let intensity = 'moderate'
      let feedback = ''
      let insights = []
      let trend = 'stable'

      // Enhanced keyword-based sentiment analysis
      const positiveWords = ['happy', 'joy', 'excited', 'grateful', 'peaceful', 'calm', 'good', 'great', 'wonderful', 'amazing', 'love', 'content', 'relaxed', 'optimistic', 'hopeful', 'blessed', 'lucky', 'proud', 'confident', 'energetic', 'motivated', 'inspired']
      const negativeWords = ['sad', 'anxious', 'worried', 'stressed', 'angry', 'frustrated', 'tired', 'exhausted', 'overwhelmed', 'depressed', 'lonely', 'fear', 'panic', 'hopeless', 'helpless', 'dread', 'dreadful', 'terrible', 'awful', 'horrible', 'miserable', 'upset']
      const intenseWords = ['very', 'extremely', 'incredibly', 'terribly', 'absolutely', 'completely', 'totally', 'really']

      const positiveCount = positiveWords.filter(word => entry.includes(word)).length
      const negativeCount = negativeWords.filter(word => entry.includes(word)).length
      const intenseCount = intenseWords.filter(word => entry.includes(word)).length

      // Determine sentiment
      if (positiveCount > negativeCount && positiveCount > 0) {
        sentiment = 'positive'
        if (intenseCount > 0 || positiveCount >= 3) {
          intensity = 'high'
        }
        feedback = '😊 You seem optimistic today.'
      } else if (negativeCount > positiveCount && negativeCount > 0) {
        sentiment = 'negative'
        if (intenseCount > 0 || negativeCount >= 3) {
          intensity = 'high'
        }
        feedback = '😔 Noticing stress patterns over time.'
      } else {
        sentiment = 'neutral'
        feedback = '😐 Neutral mood detected.'
      }

      // Generate detailed insights based on sentiment
      if (sentiment === 'positive') {
        if (entry.includes('grateful') || entry.includes('thankful')) {
          insights.push('Gratitude is a powerful tool for mental wellness.')
        }
        if (entry.includes('excited') || entry.includes('motivated')) {
          insights.push('Your enthusiasm is wonderful! Channel this energy into positive actions.')
        }
        if (entry.includes('calm') || entry.includes('peaceful')) {
          insights.push('Maintaining inner peace is key to long-term wellbeing.')
        }
      } else if (sentiment === 'negative') {
        if (entry.includes('anxious') || entry.includes('worried')) {
          insights.push('Increased anxiety detected. Consider deep breathing exercises or mindfulness.')
        }
        if (entry.includes('stressed') || entry.includes('overwhelmed')) {
          insights.push('Stress levels appear elevated. Remember to take breaks and practice self-care.')
        }
        if (entry.includes('sad') || entry.includes('depressed')) {
          insights.push('You may be experiencing low mood. Consider reaching out to a support network.')
        }
        if (entry.includes('tired') || entry.includes('exhausted')) {
          insights.push('Fatigue can impact mood. Ensure you\'re getting adequate rest.')
        }
      } else {
        insights.push('Your mood appears balanced today. Continue monitoring your emotional patterns.')
      }

      // Analyze trends from previous entries
      if (journalEntries.length > 0) {
        const recentEntries = journalEntries.slice(-5)
        const recentNegative = recentEntries.filter(e => e.sentiment === 'negative').length
        const recentPositive = recentEntries.filter(e => e.sentiment === 'positive').length

        if (sentiment === 'negative' && recentNegative >= 2) {
          trend = 'declining'
          insights.push('⚠️ Mood trend: Multiple negative entries detected. Consider professional support.')
        } else if (sentiment === 'positive' && recentPositive >= 2) {
          trend = 'improving'
          insights.push('✨ Positive trend: Your mood has been improving recently.')
        }
      }

      // Create entry object
      const newEntry = {
        id: Date.now(),
        text: currentEntry,
        sentiment,
        intensity,
        feedback,
        insights,
        trend,
        timestamp: new Date().toISOString()
      }

      setJournalEntries(prev => [...prev, newEntry])
      setMoodInsights(newEntry)
      setCurrentEntry('')
      setIsAnalyzing(false)
    }, 1500)
  }

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <JournalForm
          currentEntry={currentEntry}
          setCurrentEntry={setCurrentEntry}
          onAnalyze={analyzeMood}
          isAnalyzing={isAnalyzing}
          onClearJournal={clearJournal}
          hasEntries={journalEntries.length > 0}
        />
        {moodInsights && (
          <MoodTrends insights={moodInsights} allEntries={journalEntries} />
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App

