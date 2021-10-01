import React, { useState } from "react"
import { navigate } from "gatsby-link"
import {
  ContactForm,
  FormContainer,
  FormEmailLink,
  FormHeading,
  FormInput,
  FormInputWrapper,
  FormParagraph,
  FormTextarea,
  FormTextareaWrapper,
  SubmitButton,
  SubmitButtonWrapper,
} from "./FormElements"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function Form() {
  const [formState, setFormState] = useState({})

  const handleChange = e => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...formState,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  return (
    <>
      <FormContainer>
        <FormHeading>Contact</FormHeading>
        <FormParagraph>
          Feel free to contact me by email:{" "}
          <FormEmailLink href="mailto:mariogilezan10@gmail.com">
            mariogilezan10@gmail.com
          </FormEmailLink>{" "}
          or use the form below.
        </FormParagraph>
        <ContactForm
          name="contact"
          method="post"
          action="/thanks"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <FormInput type="hidden" name="form-name" value="contact" />
          <FormInputWrapper hidden>
            <FormInput name="bot-field" onChange={handleChange} />
          </FormInputWrapper>
          <FormInputWrapper>
            <FormInput
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              required
            />
          </FormInputWrapper>
          <FormInputWrapper>
            <FormInput
              type="email"
              name="email"
              placeholder="E-mail"
              onChange={handleChange}
              required
            />
          </FormInputWrapper>
          <FormTextareaWrapper>
            <FormTextarea
              name="message"
              placeholder="Message"
              rows="7"
              onChange={handleChange}
              required
            ></FormTextarea>
          </FormTextareaWrapper>
          <SubmitButtonWrapper>
            <SubmitButton
              as="button"
              type="submit"
              lg="true"
              blue="true"
              bold="true"
            >
              Send
            </SubmitButton>
          </SubmitButtonWrapper>
        </ContactForm>
      </FormContainer>
    </>
  )
}
