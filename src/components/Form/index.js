import React, { useState } from "react"
import { navigate } from "gatsby"
import {
  ContactForm,
  FormContainer,
  FormEmailLink,
  FormHeading,
  FormInput,
  FormTextarea,
  FormTextareaWrapper,
  SubmitButton,
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
    <FormContainer>
      <FormHeading>Contact</FormHeading>
      <p>
        Feel free to contact me by email:{" "}
        <FormEmailLink href="mailto:mariogilezan10@gmail.com">
          mariogilezan10@gmail.com
        </FormEmailLink>{" "}
        or use the form below.
      </p>
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
        <p hidden>
          <FormInput name="bot-field" onChange={handleChange} />
        </p>
        <p>
          <FormInput
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            required
          />
        </p>
        <p>
          <FormInput
            type="email"
            name="email"
            placeholder="E-mail"
            onChange={handleChange}
            required
          />
        </p>
        <FormTextareaWrapper>
          <FormTextarea
            name="message"
            placeholder="Message"
            rows="7"
            onChange={handleChange}
            required
          ></FormTextarea>
        </FormTextareaWrapper>
        <p>
          <SubmitButton
            as="button"
            type="submit"
            lg="true"
            blue="true"
            bold="true"
          >
            Send
          </SubmitButton>
        </p>
      </ContactForm>
    </FormContainer>
  )
}
