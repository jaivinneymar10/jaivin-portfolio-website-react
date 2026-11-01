import { experienceMarkup } from '../content.js';

export default function Experience() {
  return <div dangerouslySetInnerHTML={{ __html: experienceMarkup }} />;
}
