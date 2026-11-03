export const GDPR_STORAGE_KEY = "gdpr_consent";
export const CONSENT_EVENT = "gdpr-consent-change";

// Returns "accepted", "rejected" or null (no choice yet)
export const getConsent = () => {
  try {
    return localStorage.getItem(GDPR_STORAGE_KEY);
  } catch (e) {
    return null;
  }
};

export const setConsent = (value) => {
  try {
    localStorage.setItem(GDPR_STORAGE_KEY, value);
  } catch (e) {
    // storage unavailable: choice applies to this page view only
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
};
