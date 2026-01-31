import React from 'react'

function MoodTrends({ insights, allEntries }) {
  const getSentimentColor = (sentiment) => {
    switch (sentiment) {
      case 'positive':
        return '#4ade80'
      case 'negative':
        return '#f87171'
      default:
        return '#94a3b8'
    }
  }

  const getSentimentLabel = (sentiment) => {
    switch (sentiment) {
      case 'positive':
        return 'Positive'
      case 'negative':
        return 'Needs Attention'
      default:
        return 'Neutral'
    }
  }

  // Prepare data for trend graph (last 7 entries)
  const recentEntries = allEntries.slice(-7)
  const maxEntries = Math.max(recentEntries.length, 1)

  // Calculate sentiment scores for graph (positive = 1, neutral = 0, negative = -1)
  const getSentimentScore = (sentiment) => {
    switch (sentiment) {
      case 'positive':
        return 1
      case 'negative':
        return -1
      default:
        return 0
    }
  }

  return (
    <div className="mood-trends-container fade-in">
      <h2 className="section-title">Mood Insights</h2>
      <div className="insights-card">
        {/* Sentiment Feedback with Emoji */}
        <div className="sentiment-feedback">
          <div className="sentiment-badge" style={{ backgroundColor: getSentimentColor(insights.sentiment) }}>
            {getSentimentLabel(insights.sentiment)}
          </div>
          <p className="feedback-text">{insights.feedback}</p>
        </div>

        {/* Trend Graph */}
        {recentEntries.length > 0 && (
          <div className="trend-section">
            <h3 className="trend-title">Mood Pattern Over Past Entries</h3>
            <div className="trend-graph">
              {recentEntries.map((entry, index) => {
                const score = getSentimentScore(entry.sentiment)
                // Positive = 70%, Neutral = 40%, Negative = 70% (but different color)
                const height = score === 1 ? '70%' : score === 0 ? '40%' : '70%'
                const color = getSentimentColor(entry.sentiment)
                
                return (
                  <div key={entry.id} className="trend-bar-container">
                    <div className="trend-bar-wrapper">
                      <div
                        className="trend-bar"
                        style={{
                          height: height,
                          backgroundColor: color,
                        }}
                        title={`${getSentimentLabel(entry.sentiment)} - ${new Date(entry.timestamp).toLocaleDateString()}`}
                      />
                    </div>
                    <span className="trend-label">
                      {new Date(entry.timestamp).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Detailed Insights */}
        <div className="insights-list">
          {insights.insights.map((insight, index) => (
            <div key={index} className="insight-item">
              <span className="insight-icon">💭</span>
              <p>{insight}</p>
            </div>
          ))}
        </div>

        {/* Motivational Quote */}
        <div className="motivational-quote">
          <p className="quote-text">Remember: Your feelings are valid.</p>
        </div>

        <div className="entry-meta">
          <span className="timestamp">
            Analyzed: {new Date(insights.timestamp).toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  )
}

export default MoodTrends

