import { heroMarkup } from '../content.js';

export default function Hero() {
  return <div dangerouslySetInnerHTML={{ __html: heroMarkup }} />;
}
