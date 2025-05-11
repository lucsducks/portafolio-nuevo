"use client";

import React, { useTransition, useState } from "react";
import { sendEmailAction } from "./actions/send-mail.action";
import { NotificationTypes } from "@/enums/notification-type.enum";

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isPending, startTransition] = useTransition();
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<Partial<typeof form>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("message", form.message);

    startTransition(async () => {
      const result = await sendEmailAction(
        {
          message: null,
          errors: null,
          resultType: NotificationTypes.INFO,
          fieldsData: form,
        },
        formData
      );

      if (result.errors) {
        setFormErrors({
          name: result.errors.name?.join(", "),
          email: result.errors.email?.join(", "),
          message: result.errors.message?.join(", "),
        });
        setServerMessage(null);
      } else {
        setForm({ name: "", email: "", message: "" });
        setFormErrors({});
        setServerMessage(result.message);
      }
    });
  };

  return (
    <section id="contact" className="py-16 px-4 bg-background">
      <div className="max-w-2xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl text-foreground/70">
          ¿Tienes un proyecto?
        </h2>
        <h2 className="text-3xl md:text-4xl text-primary">Contáctame</h2>
        <p className="mt-4 text-sm text-muted-foreground">
          Estoy disponible para colaborar, desarrollar ideas o ayudarte a dar
          vida a tu solución.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto space-y-6 bg-card p-8 rounded-xl border border-border shadow-sm"
      >
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">
            Nombre completo
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Tu nombre"
            className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground outline-none focus:ring focus:ring-primary/50"
          />
          {formErrors.name && (
            <p className="text-sm text-red-500 mt-1">{formErrors.name}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1">
            Correo electrónico
          </label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="tunombre@correo.com"
            className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground outline-none focus:ring focus:ring-primary/50"
          />
          {formErrors.email && (
            <p className="text-sm text-red-500 mt-1">{formErrors.email}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1">
            Mensaje
          </label>
          <textarea
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="Cuéntame tu idea..."
            className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground outline-none focus:ring focus:ring-primary/50 resize-none"
          />
          {formErrors.message && (
            <p className="text-sm text-red-500 mt-1">{formErrors.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full py-2 px-4 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
        >
          {isPending ? "Enviando..." : "Enviar mensaje"}
        </button>

        {serverMessage && (
          <p className="text-sm text-green-600 text-center mt-2">
            {serverMessage}
          </p>
        )}
      </form>
    </section>
  );
};

export default ContactForm;
