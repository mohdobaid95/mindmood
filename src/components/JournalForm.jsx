import React from 'react'

function JournalForm({ currentEntry, setCurrentEntry, onAnalyze, isAnalyzing, onClearJournal, hasEntries }) {
  return (
    <div className="journal-form-container">
      <h2 className="section-title">Journal Entry</h2>
      <p className="section-description">
        Express your thoughts, feelings, and experiences. Our AI will analyze patterns to help you understand your emotional journey.
      </p>
      <textarea
        className="journal-input"
        placeholder="How are you feeling today? What's on your mind? Write freely..."
        value={currentEntry}
        onChange={(e) => setCurrentEntry(e.target.value)}
        rows="8"
      />
      <div className="button-group">
        <button
          className="analyze-button"
          onClick={onAnalyze}
          disabled={isAnalyzing || !currentEntry.trim()}
        >
          {isAnalyzing ? 'Analyzing...' : 'Analyze Mood'}
        </button>
        {hasEntries && (
          <button
            className="clear-button"
            onClick={onClearJournal}
            disabled={isAnalyzing}
          >
            Clear Journal
          </button>
        )}
      </div>
    </div>
  )
}

export default JournalForm

