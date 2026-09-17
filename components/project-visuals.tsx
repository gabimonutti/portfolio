import Image from "next/image";

export function ProjectVisual({ project }: { project: string }) {
  if (project === "hoyturnos") {
    return (
      <div className="project-visual project-visual-hoyturnos" aria-label="HoyTurnos booking workflow">
        <Image
          src="/projects/hoyturnos.webp"
          alt="HoyTurnos being used to manage an appointment-based business"
          fill
          sizes="(max-width: 800px) 100vw, 50vw"
          className="project-cover"
        />
        <div className="booking-panel">
          <div className="booking-head">
            <span>ILLUSTRATIVE BOOKING FLOW</span>
            <span className="live-dot">Today · 08</span>
          </div>
          <div className="booking-slot">
            <time>09:30</time>
            <div>
              <strong>Initial consultation</strong>
              <span>45 min · Confirmed</span>
            </div>
          </div>
          <div className="booking-slot">
            <time>11:00</time>
            <div>
              <strong>Follow-up</strong>
              <span>30 min · Paid</span>
            </div>
          </div>
          <div className="booking-slot booking-slot-muted">
            <time>12:00</time>
            <div>
              <strong>Available</strong>
              <span>Open booking slot</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (project === "pixoai") {
    return (
      <div className="project-visual project-visual-pixoai">
        <div className="pixo-orbit pixo-orbit-one" aria-hidden="true" />
        <div className="pixo-orbit pixo-orbit-two" aria-hidden="true" />
        <div className="phone-frame phone-frame-left">
          <Image
            src="/projects/pixoai-create.webp"
            alt="PixoAI App Store artwork highlighting image-generation use cases"
            fill
            sizes="180px"
            className="phone-image"
          />
        </div>
        <div className="phone-frame phone-frame-center">
          <Image
            src="/projects/pixoai-home.webp"
            alt="PixoAI App Store artwork introducing the mobile product"
            fill
            sizes="220px"
            className="phone-image"
          />
        </div>
        <div className="phone-frame phone-frame-right">
          <Image
            src="/projects/pixoai-result.webp"
            alt="PixoAI App Store artwork showing a fashion visualization example"
            fill
            sizes="180px"
            className="phone-image"
          />
        </div>
      </div>
    );
  }

  if (project === "paytor") {
    return (
      <div className="project-visual project-visual-paytor">
        <div className="paytor-window paytor-window-main">
          <div className="window-bar">
            <span />
            <span />
            <span />
            <small>TRANSACTIONS</small>
          </div>
          <Image
            src="/projects/paytor-transactions.png"
            alt="Paytor transaction management interface"
            fill
            sizes="(max-width: 800px) 90vw, 600px"
            className="dashboard-image"
          />
        </div>
        <div className="paytor-window paytor-window-secondary">
          <Image
            src="/projects/paytor-products.png"
            alt="Paytor product configuration interface"
            fill
            sizes="260px"
            className="dashboard-image"
          />
        </div>
        <code className="install-line">INTEGRATION / MERCADO PAGO</code>
      </div>
    );
  }

  return (
    <div className="project-visual project-visual-ceei">
      <Image
        src="/projects/ceei.jpg"
        alt="Connected-globe artwork from the CEEI institutional website"
        fill
        sizes="(max-width: 800px) 100vw, 50vw"
        className="ceei-image"
      />
      <div className="ceei-overlay">
        <span>CEEI</span>
        <p>Thinking about the world strategically.</p>
      </div>
      <div className="delivery-trace" aria-label="Project delivery path">
        <span>ASTRO PROTOTYPE</span>
        <i aria-hidden="true" />
        <span>CLIENT VALIDATION</span>
        <i aria-hidden="true" />
        <span>PRODUCTION</span>
      </div>
    </div>
  );
}
