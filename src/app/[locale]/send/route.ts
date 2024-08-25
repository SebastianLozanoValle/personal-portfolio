import { PortFolioEmail } from '@/emails/welcome';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['cesarloco2003@hotmail.com'],
      subject: 'Sebastian Dev Portfolio',
      react: PortFolioEmail({authorEmail: 'prueba', reviewText: 'esto es una prueba', authorName: 'Sebastian Lozano'}),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
// import ProjectEmail from "@/emails/project";
// import { ClientSchemaType } from "@/validations/clientSchema";
// import { NextRequest } from "next/server";
// import { Resend } from 'resend';
// import { PortFolioEmail } from '@/emails/welcome';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req: NextRequest) {
//     try {
//         const body: ClientSchemaType = await req.json(); // Parsear el cuerpo de la solicitud como JSON
//         // console.log(body); // Imprimir el body en la consola del servidor

//         // Aquí puedes procesar el body, enviar una respuesta, etc.
//         const { data, error } = await resend.emails.send({
//             from: 'noreplay@sledevelopment.com',
//             to: ['sebastian.lozano@sledevelopment.com', 'juan.estupinan@sledevelopment.com', 'martin.sandoval@sledevelopment.com'],
//             // to: ['cesarloco2003@hotmail.com'],
//             subject: 'SLE Development ContactForm',
//             react: ProjectEmail({name: body.name, country: body.country, email: body.email, message: body.message, phone: body.phone }),
//           });
      
//           if (error) {
//             return Response.json({ error }, { status: 500 });
//           }
      
//           return Response.json(data);
//     } catch (error) {
//       return Response.json({ error }, { status: 500 });
//     }
// }
