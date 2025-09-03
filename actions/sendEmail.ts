"use server";

import ContactFormEmail from "@/email/contact-form-email";
import { validateString } from "@/lib/utils";
import React from "react";
import { Resend } from "resend";
import { PROJECT_TITLE } from "@/constants/project.constants";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderName = formData.get("senderName");
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // Check if PERSONAL_EMAIL environment variable is set
  if (!process.env.PERSONAL_EMAIL) {
    return {
      error: "Email configuration error: PERSONAL_EMAIL not set"
    };
  }

  // simple server-side validation
  if (!validateString(senderName, 70)) {
    return {
      error: "Invalid sender name"
    };
  }
  if (!validateString(senderEmail, 70)) {
    return {
      error: "Invalid sender email"
    };
  }
  if (!validateString(message, 2000)) {
    return {
      error: "Invalid message"
    };
  }

  const messageHTML = message.split("\n");

  const { data, error } = await resend.emails.send({
    // ask what this is and why we are using it
    from: `${PROJECT_TITLE} <onboarding@resend.dev>`,
    to: process.env.PERSONAL_EMAIL,
    subject: "New Message Received",
    replyTo: senderEmail,
    react: React.createElement(ContactFormEmail, {
      message: messageHTML,
      senderEmail: senderEmail,
      senderName: senderName
    })
  });

  if (error) {
    return {
      error: error.message
    };
  }

  return {
    data
  };
};
