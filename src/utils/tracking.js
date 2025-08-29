export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", eventName, parameters);
  }
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, parameters);
  }
  console.log(`Tracking event: ${eventName}`, parameters);
};
