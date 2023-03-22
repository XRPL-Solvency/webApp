import React from 'react';

function DownloadButton() {
  const handleDownload = () => {
    const fileUrl = 'https://github.com/XRPL-Solvency/localExecutables/raw/main/App/ring_proof.exe';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', 'ring_proof.exe');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload} className="download-button">Download .exe</button>
  );
}

export default DownloadButton;