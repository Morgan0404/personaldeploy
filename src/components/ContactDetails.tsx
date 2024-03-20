function ContactDetails() {
  return (
    <div
      style={{
        padding: "10px",
        backgroundColor: "#f0f0f0",
        marginBottom: "20px",
      }}
    >
      <a
        href="https://github.com/Morgan0404"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          backgroundColor: "black",
          color: "white",
          padding: "10px 15px",
          textDecoration: "none",
          borderRadius: "5px",
          fontWeight: "bold",
          marginRight: "10px",
        }}
      >
        Visit My GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/morgan-james-09092b295/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          backgroundColor: "black",
          color: "white",
          padding: "10px 15px",
          textDecoration: "none",
          borderRadius: "5px",
          fontWeight: "bold",
          marginRight: "10px",
        }}
      >
        Visit My LinkedIn
      </a>
      <a
        href="mailto:morganjames202004@gmail.com?subject=Portfolio Enquiry"
        style={{
          display: "inline-block",
          backgroundColor: "black",
          color: "white",
          padding: "10px 15px",
          textDecoration: "none",
          borderRadius: "5px",
          fontWeight: "bold",
          margin: "10px 0",
        }}
      >
        Get In touch
      </a>
    </div>
  );
}

export default ContactDetails;
