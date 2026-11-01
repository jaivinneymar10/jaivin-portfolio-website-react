import { workMarkup } from '../content.js';

export default function Projects() {
  return <div dangerouslySetInnerHTML={{ __html: workMarkup }} />;
}
