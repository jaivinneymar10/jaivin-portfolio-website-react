import { sidebarMarkup } from '../content.js';

export default function Sidebar() {
  return <div dangerouslySetInnerHTML={{ __html: sidebarMarkup }} />;
}
