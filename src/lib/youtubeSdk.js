let youtubeSdkPromise = null;

export function loadYouTubeSDK() {
  if (typeof window === "undefined") {
    return Promise.reject("Cannot load YouTube SDK during SSR.");
  }

  // Already fully loaded
  if (window.YT && window.YT.Player) {
    return Promise.resolve(window.YT);
  }

  // If already loading, return same promise
  if (youtubeSdkPromise) {
    return youtubeSdkPromise;
  }

  youtubeSdkPromise = new Promise((resolve, reject) => {
    const existingScript = document.querySelector(
      'script[src="https://www.youtube.com/iframe_api"]',
    );

    // If script doesn't exist, create it
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      script.async = true;
      script.onerror = () => reject("YouTube SDK failed to load.");
      document.body.appendChild(script);
    }

    // If YT is already on window but Player not ready
    if (window.YT && window.YT.Player) {
      resolve(window.YT);
      return;
    }

    // Attach ready callback
    window.onYouTubeIframeAPIReady = () => {
      if (window.YT) {
        resolve(window.YT);
      } else {
        reject("YT not available after SDK load.");
      }
    };
  });

  return youtubeSdkPromise;
}
