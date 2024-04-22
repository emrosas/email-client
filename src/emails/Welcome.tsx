import {
  Html,
  Head,
  Font,
  Preview,
  Tailwind,
  Container,
  Section,
  Text,
  Button,
  Img,
} from "@react-email/components";
import * as React from "react";

export default function Welcome() {
  return (
    <Html className="bg-white p-0 m-0">
      <Preview>This is the preview text for the email.</Preview>
      <Head>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: "#0013A3",
                light: "#FAFCFF",
                dark: "#060623",
              },
            },
          },
        }}
      >
        <Container className="max-w-3xl">
          <Img className="mx-auto w-full h-52 object-cover" src="https://cdn.mos.cms.futurecdn.net/n5jtnR94r3mLynD2mEF6S4.jpg" alt="Placeholder" />
          <Section className="flex flex-col gap-4 px-6 pt-8 pb-16 bg-light">
            <Text className="text-2xl text-dark">
              Hola, <strong>Rene</strong>
            </Text>
            <Text className="text-xl text-dark opacity-60">
              Me contacto desde Fantom Studios, somos una agencia de diseño y
              desarrollo web que ayuda a las empresas a mejorar sus experiencias
              digitales.
            </Text>
            <Text className="text-xl text-dark opacity-60">
            Tenemos una propuesta para mejorar la experiencia de tus usuarios y aumentar tus ventas. <strong>¿Te gustaría saber más?</strong>
            </Text>
            <Button href="https://example.com" className="px-4 py-2 bg-brand text-light mt-4 rounded-xl">
              Quiero saber más
            </Button>
          </Section>
          <Section className="bg-brand flex items-center justify-center">
            <Text className="text-light text-center">
              © 2024 Fantom Studios. Todos los derechos reservados.
            </Text>
          </Section>
        </Container>
      </Tailwind>
    </Html>
  );
}
