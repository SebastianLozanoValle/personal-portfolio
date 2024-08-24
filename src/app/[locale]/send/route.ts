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
