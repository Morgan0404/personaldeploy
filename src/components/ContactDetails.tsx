import DownloadCVButton from "./DownloadCVButton";

function ContactDetails() {
  return (
    <div
      style={{
        marginTop: "0px",
        padding: "0px",
        marginBottom: "0px",
      }}
    >
      <a
        href="https://github.com/Morgan0404"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          backgroundColor: "White",
          color: "white",
          padding: "10px 15px",
          textDecoration: "none",
          borderRadius: "5px",
          fontWeight: "bold",
          marginRight: "10px",
        }}
      >
        {/* Image instead of text */}
        <img
          src="/githublogo.png" // Assuming the image is in the public folder
          alt="Visit My GitHub"
          style={{
            height: "25px", // Adjust based on your needs
            width: "auto",
          }}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/morgan-james-09092b295/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          backgroundColor: "White",
          color: "white",
          padding: "10px 15px",
          textDecoration: "none",
          borderRadius: "5px",
          fontWeight: "bold",
          marginRight: "10px",
        }}
      >
        {/* Image instead of text */}
        <img
          src="/linkedin.png" // Assuming the image is in the public folder
          alt="Visit My GitHub"
          style={{
            height: "25px", // Adjust based on your needs
            width: "auto",
          }}
        />
      </a>
      <a
        href="mailto:morganjames202004@gmail.com?subject=Portfolio Enquiry"
        style={{
          display: "inline-block",
          backgroundColor: "white",
          color: "white",
          padding: "10px 15px",
          textDecoration: "none",
          borderRadius: "5px",
          fontWeight: "bold",
          margin: "10px 0",
        }}
      >
        {/* Image instead of text */}
        <img
          src="/contact.png" // Assuming the image is in the public folder
          alt="Visit My GitHub"
          style={{
            height: "25px", // Adjust based on your needs
            width: "auto",
          }}
        />
      </a>

      <DownloadCVButton />
    </div>
  );
}

export default ContactDetails;
