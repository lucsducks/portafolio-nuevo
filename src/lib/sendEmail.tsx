import brevo from "@getbrevo/brevo";

const apiInstance = new brevo.TransactionalEmailsApi();

const apiKey = process.env.BREVO_API_KEY;
if (!apiKey) {
  throw new Error("BREVO_API_KEY no está definida en las variables de entorno");
}

apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, apiKey);

interface Params {
  htmlContent: string;
  sender: { email: string; name: string };
}

export async function sendEmail({ htmlContent, sender }: Params) {
  try {
    const smtpEmail = new brevo.SendSmtpEmail();
    smtpEmail.subject = "Nuevo mensaje de contacto desde tu portafolio";
    smtpEmail.to = [{ email: "lucas1617y@gmail.com", name: "Lucas" }];

    const emailTemplate = `
      <html>
        <head>
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              background-color: #f9fafb;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 40px auto;
              background-color: #ffffff;
              border-radius: 8px;
              overflow: hidden;
              box-shadow: 0 4px 12px rgba(0,0,0,0.05);
              border: 1px solid #e5e7eb;
            }
            .header {
              background-color: #3b82f6;
              color: #ffffff;
              text-align: center;
              padding: 20px;
            }
            .header h1 {
              margin: 0;
              font-size: 20px;
            }
            .content {
              padding: 30px;
              font-size: 16px;
              color: #111827;
            }
            .info {
              margin-top: 20px;
              padding: 15px;
              background-color: #f3f4f6;
              border-left: 4px solid #3b82f6;
            }
            .info p {
              margin: 5px 0;
            }
            .footer {
              background-color: #f9fafb;
              text-align: center;
              font-size: 12px;
              color: #6b7280;
              padding: 20px;
              border-top: 1px solid #e5e7eb;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📩 Nuevo mensaje de contacto</h1>
            </div>
            <div class="content">
              <p>Hola Lucas, has recibido un nuevo mensaje desde tu portafolio.</p>
              <div class="info">
                <p><strong>Nombre:</strong> ${sender.name}</p>
                <p><strong>Email:</strong> ${sender.email}</p>
                <p><strong>Fecha:</strong> ${new Date().toLocaleString(
                  "es-PE",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  }
                )}</p>
              </div>
              <div class="info" style="margin-top: 30px;">
                <p><strong>Mensaje:</strong></p>
                <p>${htmlContent}</p>
              </div>
            </div>
            <div class="footer">
              Este mensaje fue generado automáticamente desde tu sitio web.<br />
              Si deseas responder, escribe directamente al correo del remitente: ${
                sender.email
              }
            </div>
          </div>
        </body>
      </html>
    `;

    smtpEmail.htmlContent = emailTemplate;
    smtpEmail.sender = sender;

    await apiInstance.sendTransacEmail(smtpEmail);
    return { message: "Mensaje enviado correctamente." };
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return {
      error: true,
      message: "No se pudo enviar el mensaje. Intenta más tarde.",
    };
  }
}
