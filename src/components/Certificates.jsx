import { useEffect, useState } from 'react';

const certificates = [
  {
    title: 'Full Stack with Java',
    issuer: 'Infosys Springboard',
    date: '25 Nov 2025',
    image: '/certificates/full-stack-java-infosys.jpg',
    file: '/certificates/full-stack-java-infosys.pdf',
    category: 'DEVELOPMENT',
    detail: 'Completed through the Naan Mudhalvan Scheme, Tamil Nadu Skill Development Corporation.'
  },
  {
    title: 'Unity',
    issuer: 'E16 AI XR Technology Pvt. Ltd.',
    date: '12 Nov 2025',
    image: '/certificates/unity-e16-ai.jpg',
    file: '/certificates/unity-e16-ai.pdf',
    category: 'XR & 3D',
    detail: 'Completed through the Naan Mudhalvan Scheme, Tamil Nadu Skill Development Corporation.'
  },
  {
    title: 'AWS',
    issuer: 'Smartbridge',
    date: '04 Oct 2025',
    image: '/certificates/aws-smartinternz.jpg',
    file: '/certificates/aws-smartinternz.pdf',
    category: 'CLOUD',
    detail: 'Completed through the Naan Mudhalvan Scheme, Tamil Nadu Skill Development Corporation.'
  },
  {
    title: 'Microsoft Office Essentials',
    issuer: 'Microsoft',
    date: '30 May 2025',
    image: '/certificates/microsoft-office-essentials.jpg',
    file: '/certificates/microsoft-office-essentials.pdf',
    category: 'PRODUCTIVITY',
    detail: 'Completed through the Naan Mudhalvan Scheme, Tamil Nadu Skill Development Corporation.'
  }
];

export default function Certificates() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const nodes = document.querySelectorAll('.cert-reveal');
    if (!('IntersectionObserver' in window)) {
      nodes.forEach((node) => node.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!active) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setActive(null);
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.classList.add('cert-modal-open');
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.classList.remove('cert-modal-open');
    };
  }, [active]);

  return (
    <section className="certificates" id="certificates">
      <p className="lbl">06 / Learning & achievements</p>
      <div className="cert-heading">
        <div>
          <h2>Proof of <mark>progress.</mark></h2>
          <p className="cert-intro">A few things I’ve learned, built skills in, and earned along the way.</p>
        </div>
        <span className="cert-count">04 CERTIFICATES <i>✳</i></span>
      </div>

      <div className="cert-marquee" aria-label="Certificates, auto-scrolling. Hover to pause.">
        <div className="cert-track">
          {[0, 1].map((set) => (
            <div className="cert-set" key={set} aria-hidden={set === 1 ? 'true' : undefined}>
              {certificates.map((cert, index) => (
                <article className="cert-card cert-reveal" key={`${set}-${cert.title}`} style={{ '--cert-delay': `${index * 100}ms` }}>
                  <button className="cert-preview" type="button" onClick={() => setActive(cert)} aria-label={`Preview ${cert.title} certificate`} tabIndex={set === 1 ? -1 : 0}>
                    <img src={cert.image} alt={`${cert.title} certificate preview`} loading="lazy" />
                    <span className="cert-view">View certificate <b>↗</b></span>
                    <span className="cert-index">0{index + 1}</span>
                  </button>
                  <div className="cert-info">
                    <div className="cert-meta"><span>{cert.category}</span><time>{cert.date}</time></div>
                    <h3>{cert.title}</h3>
                    <p>{cert.issuer}</p>
                    <button className="cert-open" type="button" onClick={() => setActive(cert)} tabIndex={set === 1 ? -1 : 0}>Explore certificate <span>↗</span></button>
                  </div>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>

      {active && (
        <div className="cert-modal" role="dialog" aria-modal="true" aria-label={`${active.title} certificate`} onMouseDown={(event) => {
          if (event.target === event.currentTarget) setActive(null);
        }}>
          <div className="cert-modal-panel">
            <div className="cert-modal-top">
              <div><span className="cert-modal-kicker">CERTIFICATE PREVIEW</span><h3>{active.title}</h3><p>{active.issuer} · {active.date}</p></div>
              <button type="button" className="cert-close" onClick={() => setActive(null)} aria-label="Close certificate preview">×</button>
            </div>
            <iframe title={`${active.title} PDF`} src={`${active.file}#toolbar=1&navpanes=0`} />
            <div className="cert-modal-bottom">
              <span>Use the PDF controls to zoom or print.</span>
              <a href={active.file} target="_blank" rel="noreferrer">Open full PDF ↗</a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
