import { skillsMarkup } from '../content.js';

export default function Skills() {
  return <div dangerouslySetInnerHTML={{ __html: skillsMarkup }} />;
}
