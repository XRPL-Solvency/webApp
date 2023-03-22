import React from 'react';

function DownloadButtonV() {
  const handleDownload = () => {
    const fileUrl = 'https://github.com/XRPL-Solvency/localExecutables/raw/main/App/ring_proof_verifier.exe'; 
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', 'ring_proof_verifier.exe');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload} className="download-button">Download .exe</button>
  );
}

export default DownloadButtonV;