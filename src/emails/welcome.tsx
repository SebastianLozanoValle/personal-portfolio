import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Tailwind,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
  interface PortFolioEmailProps {
    email?: string;
    fullname?: string;
    phone?: string;
    option?: string;
    checkboxes?: Array<string>;
    message?: string;
    aditionalInfo?: string;
  }
  
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";
  
  export const 
  PortFolioEmail = ({
    email,
    fullname,
    phone,
    option,
    checkboxes,
    message,
    aditionalInfo = "No hay informacion adicional"
  }: PortFolioEmailProps) => {
    const previewText = `Read ${fullname}s review`;
  
    return (
      <Html>
        <Head />
        <Preview>{previewText}</Preview>
  
        <Tailwind>
            <Body style={main}>
            <Container style={container}>
                <Section>
                    <Text className="text-3xl font-extrabold">Sebastian Developer Portfolio</Text>
                </Section>
                <Section style={{ paddingBottom: "20px" }}>
                <Row>
                    <Text style={heading}>Here is what {fullname} wrote</Text>
                    <Text style={review}>{message}</Text>
                    <Text style={heading}>Here is the Phone Number</Text>
                    <Text style={review}>{phone}</Text>
                    <Text style={heading}>Interestend in</Text>
                    {
                        checkboxes?.map((checkbox, index) => {
                          return (
                            <Text key={index+'email'} style={review}>
                              {checkbox}
                            </Text>
                          )
                        })
                      }
                    <Text style={paragraph}>
                    This email was send from {email}.
                    </Text>
                    <Text style={{ ...paragraph, paddingBottom: "16px" }}>
                    This mail was sended by a {option} profile
                    </Text>

                    <Text style={heading}>Here is the Aditional Information</Text>
                    <Text style={review}>{aditionalInfo}</Text>
    
                    <Button className="bg-orange-400 no-underline text-white w-full text-center py-4 text-xl font-bold rounded" href="https://sebastian-dev-portfolio.vercel.app/">
                        Go To The Website
                    </Button>
                </Row>
                </Section>
    
                <Hr style={hr} />
    
                
            </Container>
            </Body>
        </Tailwind>
      </Html>
    );
  };
  
  PortFolioEmail.PreviewProps = {
    fullname: "Recruiter",
    reviewText: `“Correo De Prueba”`,
  } as PortFolioEmailProps;
  
  export default PortFolioEmail;
  
  const main = {
    backgroundColor: "#ffffff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
    width: "580px",
    maxWidth: "100%",
  };
  
  const userImage = {
    margin: "0 auto",
    marginBottom: "16px",
    borderRadius: "50%",
  };
  
  const heading = {
    fontSize: "32px",
    lineHeight: "1.3",
    fontWeight: "700",
    color: "#484848",
  };
  
  const paragraph = {
    fontSize: "18px",
    lineHeight: "1.4",
    color: "#484848",
  };
  
  const review = {
    ...paragraph,
    padding: "24px",
    backgroundColor: "#f2f3f3",
    borderRadius: "4px",
  };
  
  const button = {
    backgroundColor: "#ff5a5f",
    borderRadius: "3px",
    color: "#fff",
    fontSize: "18px",
    paddingTop: "19px",
    paddingBottom: "19px",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "block",
    width: "100%",
  };
  
  const link = {
    ...paragraph,
    color: "#ff5a5f",
    display: "block",
  };
  
  const reportLink = {
    fontSize: "14px",
    color: "#9ca299",
    textDecoration: "underline",
  };
  
  const hr = {
    borderColor: "#cccccc",
    margin: "20px 0",
  };
  
  const footer = {
    color: "#9ca299",
    fontSize: "14px",
    marginBottom: "10px",
  };
  