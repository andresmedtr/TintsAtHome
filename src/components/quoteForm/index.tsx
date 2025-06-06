"use client";

import { useState } from "react";
import { sendEmail } from "@/service/emailjs";
import { QuoteFormValues } from "@/types/globalTypes";
import { FormattedMessage } from "react-intl";
import { inputFields, serviceOptions } from "@/constants";
import { CustomButton } from "../customButton";

export const QuoteForm = () => {
  // Initial form state
  const [form, setForm] = useState<QuoteFormValues>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "Automotive Tinting",
    message: "",
  });

  // State handlers
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form.firstName);
  };

  // Submit form through emailJs
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    sendEmail(form);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 md:w-fit">
      <h3 className="text-xl font-bold title-primary mb-1">
        {" "}
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

            {field.id === "service" ? (
              <select
                id={field.id}
                name={field.id}
                value={form.service}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, [field.id]: e.target.value }))
                }
                className="w-full p-2 border border-gray-300 rounded-md">
                {serviceOptions.map((option) => (
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
          width="w-full"
          type="submit"
          id="quoteForm.submit.button"
        />
      </form>
    </div>
  );
};
