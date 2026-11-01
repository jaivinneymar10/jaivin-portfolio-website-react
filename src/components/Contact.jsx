import { contactMarkup } from '../content.js';

export default function Contact() {
  return <div dangerouslySetInnerHTML={{ __html: contactMarkup }} />;
}
