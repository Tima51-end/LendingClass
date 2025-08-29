export const buildEtsyUrl = (portions = null) => {
  const baseUrl = "https://etsy.com/listing/placeholder"; // Replace with actual URL
  const utm = new URLSearchParams({
    utm_source: "landing_page",
    utm_medium: "website",
    utm_campaign: "claas_dispenser",
    utm_content: portions ? `${portions}_portions` : "hero_button",
  });
  return `${baseUrl}?${utm.toString()}`;
};
