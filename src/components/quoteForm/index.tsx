"use client";

import { useState } from "react";
import { sendEmail } from "@/service/emailjs";
import { QuoteFormValues } from "@/types/globalTypes";
import { FormattedMessage } from "react-intl";
import { inputFields } from "@/constants";
import { CustomButton } from "../customButton";

export const QuoteForm = () => {
  // Initial form state
  const [form, setForm] = useState<QuoteFormValues>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    tintingService: "Automotive Tinting",
    detailingService: "---",
    message: "",
  });
  const [submitResult, setSubmitResult] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // State handlers
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit form through emailJs
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.dataLayer = window.dataLayer || [];
    setIsLoading(true);
    try {
      await sendEmail(form);
      // Push data to Google Tag Manager
      window.dataLayer.push({
        event: "lead_form_success",
        userEmail: form.email,
        userPhone: form.phone,
      });
      setSubmitResult(true);
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        tintingService: "Automotive Tinting",
        detailingService: "---",
        message: "",
      });
      setTimeout(() => {
        setSubmitResult(false);
      }, 20000);
    } catch (error) {
      console.error(error);
      window.dataLayer.push({
        event: "lead_form_error",
        errorMessage: error || "Unknown error",
      });
      setSubmitResult(false);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 md:w-fit">
      <h3 className="text-xl font-bold title-primary mb-1">
        <FormattedMessage id="quoteForm.title" />
      </h3>
      <p className="text-sm paragraph-primary mb-6">
        <FormattedMessage id="quoteForm.title.description" />
      </p>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {inputFields.map((field) => (
          <div key={field.id}>
            <label
              htmlFor={field.id}
              className="block font-medium title-primary mb-1">
              <FormattedMessage id={field.label} />
            </label>

            {field.options ? (
              <select
                id={field.id}
                name={field.id}
                value={form[field.id]}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, [field.id]: e.target.value }))
                }
                className="w-full p-2 border border-gray-300 rounded-md">
                {field.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    <FormattedMessage id={option.labelId} />
                  </option>
                ))}
              </select>
            ) : field.multiline ? (
              <textarea
                id={field.id}
                name={field.id}
                rows={4}
                value={form[field.id]}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            ) : (
              <input
                type={field.type || "text"}
                id={field.id}
                name={field.id}
                value={form[field.id]}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            )}
          </div>
        ))}
        <CustomButton
          classes={`w-full ${submitResult ? "bg-green-400" : ""}`}
          type="submit"
          id={
            submitResult
              ? "quoteForm.submit.button.success"
              : isLoading
              ? "quoteForm.submit.button.loading"
              : "quoteForm.submit.button"
          }
          disabled={submitResult}
        />
      </form>
    </div>
  );
};
