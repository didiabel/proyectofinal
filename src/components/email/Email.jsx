import emailjs from "emailjs-com";

const serviceId = "";
const templateId = "template_sgn81h5";
const userId = "user_h8jvPXks8He4eKqaSJNEE";

const sendEmail = async (name, email, message) => {
  try {
    const response = await emailjs.send(
      serviceId,
      templateId,
      { name, email, message },
      userId
    );

    if (response.status === 200) {
      console.log("Successfully sent message.");
    }
  } catch (error) {
    console.error("Failed to send email. Error: ", error);
  }
};

export default sendEmail;