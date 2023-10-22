import * as S from './styles'

const Contact = () => {
  return (
    <S.ContactSection id="contact">
      <S.ContactContainer>
        <S.ContactTitle>Contact</S.ContactTitle>
        <S.Form>
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Example@domain.com"
            required
          />
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Reason for contact (e.g. job opportunity)"
            required
          />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message"
            required
          />
          <S.Button type="submit">
            Send
            <S.SubmitArrow />
          </S.Button>
        </S.Form>
      </S.ContactContainer>
    </S.ContactSection>
  )
}

export default Contact
