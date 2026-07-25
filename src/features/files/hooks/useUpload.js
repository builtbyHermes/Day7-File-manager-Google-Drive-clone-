import { useState } from "react";

function useUpload() {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  function uploadFiles(files, onComplete) {
    if (!files.length) return;

    setUploading(true);
    setProgress(0);

    let currentProgress = 0;

    const interval = setInterval(() => {
      currentProgress += 10;

      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(interval);

        setUploading(false);

        setProgress(100);

        if (onComplete) {
          onComplete(files);
        }
      }
    }, 200);
  }

  function resetUpload() {
    setUploading(false);
    setProgress(0);
  }

  return {
    uploading,
    progress,
    uploadFiles,
    resetUpload,
  };
}

export default useUpload;