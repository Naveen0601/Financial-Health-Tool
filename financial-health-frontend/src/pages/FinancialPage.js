// src/pages/FinancialPage.js
import React, { useState } from 'react';
import UploadForm from '../components/UploadForm';
import AnalysisDashboard from '../components/AnalysisDashboard';

function FinancialPage() {
  const [userId] = useState(1);           // later get from login
  const [currentDataId, setCurrentDataId] = useState(null);

  const handleUploadSuccess = (newDataId) => {
    setCurrentDataId(newDataId);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
      <h1>Financial Management</h1>

      <section style={{ marginBottom: '40px' }}>
        <h2>Upload Financial File</h2>
        <UploadForm userId={userId} onUploadSuccess={handleUploadSuccess} />
      </section>

      {currentDataId && (
        <section>
          <h2>Latest Analysis (ID: {currentDataId})</h2>
          <AnalysisDashboard dataId={currentDataId} />
        </section>
      )}

      {!currentDataId && (
        <p style={{ color: '#666' }}>
          Upload a file to see analysis results.
        </p>
      )}
    </div>
  );
}

export default FinancialPage;