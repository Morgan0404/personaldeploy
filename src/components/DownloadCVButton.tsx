import React from "react";

const DownloadCVButton = () => {
  // Define the button style
  // Adjust the style to match other buttons in ContactDetails
  const style = {
    display: "inline-block",
    backgroundColor: "White", // Match the background color
    color: "white", // Text color, might not be necessary if using an image
    padding: "10px 15px", // Match the padding
    textDecoration: "none", // Ensure no underlines
    borderRadius: "5px", // Match the border radius for rounded corners
    fontWeight: "bold", // Match the font weight
    marginLeft: "10px", // Match the right margin (adjust as necessary)
  };

  // Directly specify the path to the PDF file in the public directory
  const cvPath = "/MorganJamesCV.pdf"; // Assuming the CV is at the root of the public folder

  return (
    <a href={cvPath} download="Morgan_James_CV.pdf" style={style}>
      {/* Image instead of text */}
      <img
        src="/cv.png" // Assuming the image is in the public folder
        alt="Visit My GitHub"
        style={{
          height: "25px", // Adjust based on your needs
          width: "auto",
        }}
      />
    </a>
  );
};

export default DownloadCVButton;
