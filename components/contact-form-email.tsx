import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
  Row,
  Column,
} from "@react-email/components"

interface ContactFormEmailProps {
  name: string
  email: string
  phone: string
  company?: string
  message: string
}

export const ContactFormEmail = ({ name, email, phone, company, message }: ContactFormEmailProps) => (
  <Html>
    <Head />
    <Preview>New message from your contact form</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={heading}>New Message from Contact Form</Heading>
        <Text style={paragraph}>You have received a new message from your website contact form.</Text>
        <Hr style={hr} />
        <Section style={section}>
          <Row style={row}>
            <Column style={label}>Full Name</Column>
            <Column style={value}>{name}</Column>
          </Row>
          <Row style={row}>
            <Column style={label}>Email Address</Column>
            <Column style={value}>{email}</Column>
          </Row>
          <Row style={row}>
            <Column style={label}>Contact Number</Column>
            <Column style={value}>{phone}</Column>
          </Row>
          {company && (
            <Row style={row}>
              <Column style={label}>Company</Column>
              <Column style={value}>{company}</Column>
            </Row>
          )}
        </Section>
        <Hr style={hr} />
        <Section>
          <Heading as="h2" style={subheading}>
            Message
          </Heading>
          <Text style={messageBox}>{message}</Text>
        </Section>
        <Hr style={hr} />
        <Text style={footer}>This email was sent from the contact form on apptriangle.com</Text>
      </Container>
    </Body>
  </Html>
)

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
  border: "1px solid #f0f0f0",
  borderRadius: "4px",
}

const heading = {
  fontSize: "24px",
  letterSpacing: "-0.5px",
  lineHeight: "1.3",
  fontWeight: "600",
  color: "#484848",
  padding: "0 40px",
}

const subheading = {
  fontSize: "18px",
  lineHeight: "1.3",
  fontWeight: "600",
  color: "#484848",
  padding: "0 40px",
}

const paragraph = {
  fontSize: "14px",
  lineHeight: "1.5",
  color: "#484848",
  padding: "0 40px",
}

const section = { padding: "0 40px" }
const row = { marginBottom: "8px" }
const label = { fontSize: "14px", color: "#555", width: "120px", fontWeight: "600" }
const value = { fontSize: "14px", color: "#333" }
const messageBox = { padding: "0 40px", border: "1px solid #eee", borderRadius: "5px", background: "#f9f9f9" }

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
}

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
  textAlign: "center" as const,
}