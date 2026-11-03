import React, { useState, useEffect } from "react";
import { getConsent, setConsent } from "../../utils/consent";

const GdprBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!getConsent()) {
      setVisible(true);
    }
  }, []);

  const handleChoice = (value) => {
    setConsent(value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.banner}>
        <p style={styles.text}>
          Utilizziamo cookie di analisi (Google Analytics) e di marketing (Meta
          Pixel) per migliorare la tua esperienza. Puoi accettarli o rifiutarli;
          maggiori informazioni nella nostra{" "}
          <a
            href="https://www.iubenda.com/privacy-policy/22159542"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            Privacy Policy
          </a>{" "}
          e la nostra{" "}
          <a
            href="https://www.iubenda.com/privacy-policy/22159542"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            Cookie Policy
          </a>
          .
        </p>
        <div style={styles.actions}>
          <button onClick={() => handleChoice("rejected")} style={styles.buttonSecondary}>
            Rifiuta
          </button>
          <button onClick={() => handleChoice("accepted")} style={styles.button}>
            Accetta
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    zIndex: 9999,
    display: "flex",
    justifyContent: "center",
    padding: "0 16px 16px",
    boxSizing: "border-box",
  },
  banner: {
    backgroundColor: "#1a1a1a",
    color: "#ffffff",
    borderRadius: "8px",
    padding: "20px 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "24px",
    maxWidth: "900px",
    width: "100%",
    flexWrap: "wrap",
    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
  },
  text: {
    margin: 0,
    fontSize: "14px",
    lineHeight: "1.6",
    flex: "1 1 300px",
  },
  link: {
    color: "#4fc3f7",
    textDecoration: "underline",
  },
  actions: {
    display: "flex",
    gap: "12px",
    flexShrink: 0,
  },
  buttonSecondary: {
    backgroundColor: "transparent",
    color: "#ffffff",
    border: "1px solid #ffffff",
    borderRadius: "4px",
    padding: "10px 24px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    whiteSpace: "nowrap",
  },
  button: {
    backgroundColor: "#4fc3f7",
    color: "#000000",
    border: "none",
    borderRadius: "4px",
    padding: "10px 24px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    whiteSpace: "nowrap",
    flexShrink: 0,
  },
};

export default GdprBanner;
