import styled from "styled-components"
import { Button, PageHeading } from "../../styles/globalStyles"

export const FormContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const FormHeading = styled(PageHeading)`
  margin-bottom: 1rem;
`

export const FormParagraph = styled.p``

export const FormEmailLink = styled.a`
  color: ${({ theme }) => theme.color.accent};
  transition: color 0.25s;
  &:hover {
    color: ${({ theme }) => theme.color.accent + "90"};
  }
`

export const ContactForm = styled.form`
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  @media screen and (max-width: ${({ theme }) => theme.screen.md}) {
    width: 100%;
  }
  @media screen and (max-width: ${({ theme }) => theme.screen.sm}) {
    grid-template-columns: 1fr;
  }
`

export const FormInputWrapper = styled.p``

export const FormInput = styled.input`
  outline: none;
  border: 3px solid transparent;
  padding: 0.8rem 0.4rem;
  width: 100%;
  transition: border 0.25s, color 0.3s, background-color 0.25s;
  &:focus {
    border-color: ${({ theme }) => theme.color.accent};
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.light};
  }
`

export const FormTextareaWrapper = styled.p`
  grid-column: 1 / -1;
`

export const FormTextarea = styled.textarea`
  outline: none;
  width: 100%;
  display: block;
  border: 3px solid transparent;
  padding: 0.8rem 0.4rem;
  transition: border 0.25s, color 0.3s, background-color 0.25s;
  &:focus {
    border-color: ${({ theme }) => theme.color.accent};
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.light};
  }
`

export const SubmitButtonWrapper = styled.p``

export const SubmitButton = styled(Button)`
  background-color: transparent;
  cursor: pointer;
  width: 50%;
  @media screen and (max-width: ${({ theme }) => theme.screen.s}) {
    width: 100%;
  }
`
