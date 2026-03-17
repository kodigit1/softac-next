import React, { useState, useEffect } from "react";

const GDPR_STORAGE_KEY = "gdpr_consent";

const GdprBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(GDPR_STORAGE_KEY);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(GDPR_STORAGE_KEY, "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.banner}>
        <p style={styles.text}>
          Utilizziamo i cookie per migliorare la tua esperienza. Continuando a
          navigare accetti la nostra{" "}
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
        <button onClick={handleAccept} style={styles.button}>
          Accetta
        </button>
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
    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
  },
  text: {
    margin: 0,
    fontSize: "14px",
    lineHeight: "1.6",
    flex: 1,
  },
  link: {
    color: "#4fc3f7",
    textDecoration: "underline",
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
