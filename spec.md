Portfolio website — complete build specification

1. Overall objective

Build a personal portfolio website for Gabriel Monutti, a Backend Engineer / Full Stack Developer from Argentina.

The website should communicate:

Strong backend orientation
3+ years of professional development experience
Experience building business applications and integrations
Node.js + TypeScript as the primary stack
Experience connecting complex systems and external APIs
Ability to work across backend, frontend, databases and infrastructure
Engineering degree from UTN
Real projects rather than only academic/tutorial projects
Independent and pragmatic working style
Interest in building products and working in strong engineering teams
The feeling

The site should feel:

technical + minimal + personal + intelligent + slightly unconventional

Not:

Corporate
Over-designed
“AI developer portfolio template”
Neon cyberpunk
Excessive gradients
Excessive animations
Huge 3D objects
Generic developer illustrations
A collection of badges
A résumé pasted onto a webpage

The goal is that a recruiter sees it and thinks:

“This is clearly a developer who actually builds things.”

2. Core visual concept

I recommend using a “system / terminal / engineering notebook” visual language without making the site literally look like a terminal.

The concept is:

“A small interface that lets you explore how Gabriel builds things.”

Think of a combination of:

clean editorial website
engineering documentation
subtle developer interface
personal notebook

The unusual element should come from information presentation, not from crazy visual effects.

3. Color palette

Use a restrained palette.

Light mode — primary
Background: #F7F7F5
Primary text: #171717
Secondary text: #666666
Muted text: #8A8A8A
Border: #DEDED9
Card background: #FFFFFF
Accent: #065F55
Accent light: #E7F1EF

The deep teal is particularly appropriate because it has already been part of the visual identity used for HoyTurnos, but here it should be used very sparingly.

Dark mode
Background: #111312
Primary text: #F2F2EF
Secondary text: #A5A8A5
Muted text: #727672
Border: #2A2E2C
Card background: #171A18
Accent: #65B8AC

Do not make the whole site teal.

Accent should mostly appear in:

links
tiny labels
active states
hover states
small decorative elements 4. Typography

Use a modern sans-serif for the main interface.

Recommended:

Inter

or

Geist

If the implementation already uses a framework with Geist available, use Geist.

For small technical labels, metadata and code-like elements:

JetBrains Mono

Use monospace sparingly.

Typography hierarchy

Hero:

72px desktop
48px tablet
40px mobile

Main section titles:

36–44px

Project titles:

24–28px

Body:

17–18px
line-height: 1.65

Metadata:

13–14px

Avoid giant 120px typography.

5. Layout

Desktop:

max-width: 1180–1240px
margin: auto

Main horizontal padding:

32px desktop
24px tablet
20px mobile

Use a 12-column grid conceptually, even if implemented with CSS grid/flex.

Whitespace is important.

The site should never feel packed.

Section spacing

Desktop:

120–160px between major sections

Mobile:

80–100px

Cards:

24–32px internal padding

Borders should generally be:

1px solid

Avoid heavy shadows.

6. Navigation

Keep the navigation extremely simple.

Left:

GM

or:

Gabriel Monutti

I prefer GM as a tiny monogram on desktop, with the full name appearing in the hero.

Right:

Work
About
Stack
Contact

And a small:

GitHub ↗
LinkedIn ↗

Theme toggle can be a tiny icon on the far right.

Mobile

Use:

GM ☰

But don't build a complicated animated mobile navigation.

7. Hero section

This is the most important part.

Don't write:

Hi, I'm Gabriel and I'm a passionate software developer.

Instead:

Small label
BACKEND ENGINEER · ARGENTINA
Main headline

Something like:

I build the systems behind digital products.

Then:

Backend-focused engineer working mainly with Node.js, TypeScript and PostgreSQL. I build APIs, integrations and business systems that connect products, platforms and real-world operations.

Then a small metadata row:

3+ years experience
Córdoba, Argentina
Open to remote opportunities

And two buttons:

View my work →
Get in touch →

GitHub and LinkedIn should appear underneath rather than as giant social buttons.

8. The interesting visual element in the hero

This is where I'd make the site slightly different.

Instead of an illustration, create a small animated system diagram.

For example:

                 ┌──────────────┐
                 │   PRODUCTS   │
                 └──────┬───────┘
                        │
                        ▼

┌───────────┐ ┌─────────────┐ ┌──────────────┐
│ Shopify │───▶│ │───▶│ PostgreSQL │
│ Mercado │ │ BACKEND │ │ │
│ Libre │───▶│ │───▶│ APIs │
│ SAP │ │ │ │ │
└───────────┘ └─────────────┘ └──────────────┘
│
▼
┌───────────┐
│ USERS / │
│ BUSINESS │
└───────────┘

But don't make this an actual big diagram.

Make it a small abstract network, approximately 350–450px wide.

Nodes could subtly pulse or have tiny moving lines.

The labels can be:

APIs
DATABASES
INTEGRATIONS
PRODUCTS

This communicates your backend/integration identity immediately.

Important

Animation should be:

slow
subtle
1–2 seconds
never distracting

Respect:

prefers-reduced-motion 9. A small “currently” strip

Immediately below the hero, add a thin horizontal section.

Something like:

CURRENTLY

Backend Engineer @ Wuala
Building ERP ↔ e-commerce integrations

BASED IN
Argentina

FOCUS
Backend · APIs · Integrations · Systems

This gives the site a more editorial feeling.

10. About section

Don't create a huge biography.

Title:

A little about me

Use one strong paragraph:

Portfolio About

I'm a Backend Engineer with 3+ years of experience building business applications, REST APIs and system integrations. I mainly work with Node.js, TypeScript, Express and PostgreSQL, while also working across frontend, databases and cloud infrastructure when a product requires it. I enjoy understanding how a business works, turning those requirements into software, and building systems that are reliable, maintainable and practical.

Then underneath, use a small timeline.

11. Experience timeline

This should be one of the strongest sections.

Title:

Experience

Instead of conventional cards, use a vertical timeline.

Entry 1
2024 — Present

Wuala
Backend Developer

Description:

Building backend systems and integrations that synchronize ERP data with multiple e-commerce and sales channels.

Then a small technical row:

Node.js
TypeScript
Express
SQL
REST APIs
Concurrency
Integrations

Expandable detail:

Worked on synchronization between ERP systems and platforms including Mercado Libre, Shopify, WooCommerce, VTEX, Tienda Nube, PrestaShop, Frávega, Flexxus, SAP Business One and STEL Order.

The important part is not to make every technology huge.

The actual experience should be the focus.

Entry 2
2023 — 2024

Universidad Nacional de Córdoba
Full Stack Developer

Description:

Developed internal systems for accounting and academic administration, working across backend, frontend, database design and requirements analysis.

Highlight:

Accounting systems
Academic records
Blockchain integrity
Product ownership
Requirements analysis

Mention that you worked as developer and Product Owner on the academic project.

12. “What I actually work with”

Instead of a boring:

Skills: JavaScript, TypeScript, React, Node, MongoDB...

Create a section called:

My toolbox

And categorize it.

Backend
Node.js
TypeScript
JavaScript
Express
REST APIs
Spring Boot
Java
Data
PostgreSQL
MySQL
MongoDB
SQL Server
SQLite
Drizzle
Sequelize
Frontend
Next.js
React
Vue.js
Tailwind CSS
Infrastructure & tools
Docker
AWS
Git
Bitbucket Pipelines
RabbitMQ
Postman
Engineering
API Design
System Integration
Concurrency
Asynchronous Processing
SOLID
Agile / Scrum
Code Reviews
Testing
Documentation 13. Important: don't use technology logo walls

I would explicitly tell the agent:

Do not create a wall of 25 technology logos.

That's extremely common in developer portfolios and doesn't communicate much.

Instead, technology names should appear as small typographic chips.

Example:

[ Node.js ] [ TypeScript ] [ PostgreSQL ]

No colorful official logos everywhere.

You can optionally use tiny monochrome icons for a few technologies, but they're not necessary.

14. Featured work

This should be the visual centerpiece after experience.

Title:

Things I've built

Don't show 15 projects.

Show 4–5.

Order them based on professional/product relevance rather than chronology.

16. Project #2 — PixoAI

This is valuable because it demonstrates product development beyond enterprise/backend work.

Title:

PixoAI

Subtitle:

AI IMAGE GENERATION · MOBILE

Description:

An iOS-focused AI image generation app built with React Native and Expo, integrating generative image models into a subscription-based consumer product.

Technologies:

React Native
Expo
TypeScript
Next.js
AI APIs
Superwall
App Store
Visual

This project should have screenshots.

Use 3 screenshots:

Home
Prompt/image generation
Result/gallery

Put them in a slightly asymmetric arrangement rather than three identical cards.

5

Important: use your actual PixoAI screenshots if available. The image group above is only a visual reference for the design direction, not something to put on the final website.

18. Project #4 — HoyTurnos

This one is important because it shows product thinking.

Title:

HoyTurnos

Subtitle:

APPOINTMENT BOOKING SAAS

Description:

A multi-tenant appointment booking platform designed for businesses that manage professionals, services, schedules and customer bookings.

Mention:

Multi-tenancy
PostgreSQL
Appointments
Working hours
Payments
Mercado Pago
Admin workflows

Visual:

Show:

booking screen
business dashboard
service configuration

And potentially a tiny architecture diagram:

Business
│
├── Professionals
├── Services
├── Schedules
└── Appointments
│
▼
Mercado Pago

Don't turn the project into an advertisement. The portfolio is about what you built and what engineering problems it solves.

20. Project cards should NOT look like SaaS pricing cards

Avoid:

┌─────────────────────┐
│ image │
│ │
│ Project │
│ description │
│ │
│ React Node Mongo │
│ │
│ View Project → │
└─────────────────────┘

That's extremely generic.

Instead, use a large editorial project row.

For example:

01 INTEGRATIONS

ERP ↔ E-COMMERCE
SYNCHRONIZATION

Backend infrastructure connecting
business systems with multiple
digital sales channels.

Node.js · TypeScript · SQL · APIs

                              [diagram]

Each project can occupy ~400–500px vertically.

21. Add an “engineering problems” section

This could make the portfolio significantly more distinctive.

Title:

Problems I like solving

Then four large statements:

01

Connecting systems that weren't designed to talk to each other.

ERP systems, marketplaces, e-commerce platforms and APIs.

02

Turning business rules into maintainable software.

Complex workflows, permissions, states, validations and data consistency.

03

Making backend processes reliable at scale.

Concurrency, asynchronous processing, integrations and error handling.

04

Building products from an idea to something usable.

From database design and APIs to interfaces, payments and deployment.

This is much more memorable than another skills section.

22. Education

Small section.

Title:

Education

Ingeniero en Sistemas de Información
Universidad Tecnológica Nacional
Argentina

2020 — 2024

Then:

Final average: 8.98 / 10

Don't make the GPA huge.

Your professional experience should carry more visual weight.

23. A subtle “outside the code” section

I would include something very small to make you feel like a real person rather than a résumé.

For example:

Beyond the stack

And three short statements:

I like understanding the business behind the software.

I prefer simple solutions that are easy to maintain.

I'm usually more interested in how a system works
than in how impressive its technology stack sounds.

This is a good place to communicate your personality without writing a long personal biography.

24. Contact section

Make this strong but simple.

Instead of:

Have a project? Let's build something amazing together!

Use:

Let's build something useful.

Then:

I'm open to backend, full-stack and product-oriented engineering opportunities.

Buttons:

Email me →
GitHub ↗
LinkedIn ↗

Use your actual profiles:

github.com/gabimonutti
linkedin.com/in/gabriel-monutti/

Don't create a contact form unless there is a real reason to.

A direct email link is simpler.

25. Footer

Very minimal.

Left:

Gabriel Monutti
Backend Engineer

Right:

GitHub
LinkedIn
Email

Bottom:

© 2026 Gabriel Monutti
Built with Next.js · TypeScript

Don't add:

giant footer
15 links
sitemap
fake “available 24/7”
visitor counter
inspirational quote 26. Micro-interactions

This is where the website can feel polished without becoming spectacular.

Cursor / hover

Project rows:

normal → subtle background change

Links:

arrow → moves 3–5px right

Technology chips:

very subtle border/background transition

Timeline:

The active experience marker can gently transition when entering the viewport.

Page entrance

Don't animate every element individually.

Use subtle:

opacity 0 → 1
translateY 8px → 0

around 300–500ms.

27. One unusual interaction

I'd add one playful interaction.

For example, near the hero:

SYSTEM STATUS

● building things

When clicked, it expands into:

SYSTEM STATUS

backend ██████████
integrations █████████
product ████████
frontend ██████

But don't represent these as meaningless “skill percentages.”

They are just visual categories, not ratings.

Even better:

CURRENT FOCUS

→ Backend architecture
→ API integrations
→ Product development

Clicking cycles through them.

This creates personality without gimmicks.

28. Don't use skill percentages

Explicit instruction:

Never use progress bars such as Node.js 95%, React 80%, Java 70%.

They're arbitrary and don't accurately represent engineering ability.

29. Don't include a giant résumé download button

A small:

Download résumé ↗

can exist in the navigation or About section.

But the website itself should contain the important information.

The portfolio shouldn't be:

“Here is my CV in HTML.”

It should tell the story differently.

30. Responsive behavior
    Desktop

Hero:

2 columns
60% text
40% visual

Projects:

large horizontal editorial rows
Tablet

Hero:

single column

Project layouts can remain horizontal where possible.

Mobile

Everything becomes single-column.

Hero visual goes underneath text.

Project diagrams should become simplified rather than causing horizontal scrolling.

Typography:

Hero: ~40px
H2: ~32px
Body: 16px

Padding:

20px 31. Technical implementation

I'd tell the agent to use:

Next.js
TypeScript
App Router
Tailwind CSS

Use a clean component architecture.

Something approximately like:

app/
page.tsx
layout.tsx

components/
navigation.tsx
hero.tsx
system-visual.tsx
experience.tsx
toolbox.tsx
projects.tsx
project-card.tsx
problems.tsx
education.tsx
contact.tsx
footer.tsx

data/
experience.ts
projects.ts
technologies.ts

Keep content separate from UI.

That way you can update your experience/projects without touching the components.

32. SEO

Include:

Title
Gabriel Monutti — Backend Engineer
Description

Something around:

Backend Engineer building APIs, integrations and business applications with Node.js, TypeScript and PostgreSQL.

Open Graph:

Gabriel Monutti — Backend Engineer

Create a good OG image.

Don't use a generic Next.js OG image.

33. Favicon

Use a very simple:

GM

monogram.

Black/white or teal/white depending on theme.

No < />.

No generic JavaScript logo.

No computer icon.

34. Images

The site should be mostly typography and UI, not stock photography.

Use actual screenshots for:

PixoAI
CabInn
HoyTurnos
GoPost, if available

For backend projects where screenshots don't make sense, use:

diagrams
API/data-flow visualizations
abstract system graphics

Do not use:

stock photos of programmers
photos of keyboards
servers
random AI-generated “developer” illustrations
generic Unsplash office pictures 35. The visual language for diagrams

This is an important differentiator.

Create very simple diagrams using CSS/SVG.

Example:

┌─────────────┐
│ EXTERNAL API│
└──────┬──────┘
│
▼
┌─────────────┐
│ SERVICE │
└──────┬──────┘
│
▼
┌─────────────┐
│ DATABASE │
└─────────────┘

Use thin borders, small labels and lots of whitespace.

This reinforces the idea that the person behind the website understands systems.

36. Content hierarchy

The visitor should understand this in approximately 15 seconds:

First 5 seconds

Gabriel is a Backend Engineer.

Next 5 seconds

He works mainly with Node.js / TypeScript and builds APIs, integrations and business systems.

Next 5 seconds

He has real professional experience and has built several products.

That's the entire purpose of the first screen.

37. What should NOT be included

Explicitly tell the agent not to include:

❌ “Passionate developer” clichés
❌ “I turn coffee into code”
❌ Huge < > symbols
❌ Matrix/rain animations
❌ 3D laptops
❌ Floating React/Node logos everywhere
❌ Skill percentages
❌ Fake testimonials
❌ Fake client logos
❌ Fake statistics
❌ “10+ projects” counters
❌ “100% code quality” type claims
❌ Generic stock photography
❌ Excessive gradients
❌ Excessive glassmorphism
❌ Giant animated text
❌ Cursor-following effects
❌ Background particles everywhere
❌ Excessive scroll animations
❌ A huge résumé paragraph
❌ Every university assignment/project
❌ Confidential information from Wuala/UNC
❌ Code snippets that don't actually demonstrate anything
❌ Buzzword-heavy descriptions

38. The personality of the copy

The copy should sound like you, not like ChatGPT.

Short sentences.

Concrete language.

No:

“I am passionate about leveraging cutting-edge technologies to architect scalable, innovative solutions that empower businesses to achieve transformative digital outcomes.”

Instead:

“I build APIs, integrations and business systems. I like understanding the problem first and keeping the implementation as simple as possible.”

That's much more credible.

39. Suggested complete page structure

The final page should approximately be:

────────────────────────────────────────

GM Work About Stack Contact

────────────────────────────────────────

BACKEND ENGINEER · ARGENTINA

I build the systems
behind digital products.

Backend-focused engineer working mainly
with Node.js, TypeScript and PostgreSQL.
I build APIs, integrations and business
systems that connect products, platforms
and real-world operations.

[ View my work → ] [ Get in touch → ]

                         [system diagram]

────────────────────────────────────────

CURRENTLY

Backend Engineer @ Wuala
ERP ↔ E-commerce integrations

BASED IN
Argentina

FOCUS
Backend · APIs · Integrations · Systems

────────────────────────────────────────

A LITTLE ABOUT ME

[short paragraph]

────────────────────────────────────────

EXPERIENCE

2024 — Present
Wuala
Backend Developer
...

2023 — 2024
Universidad Nacional de Córdoba
Full Stack Developer
...

────────────────────────────────────────

THINGS I'VE BUILT

01
ERP ↔ E-COMMERCE
SYNCHRONIZATION
[diagram]

02
PIXOAI
AI IMAGE GENERATION
[screenshots]

03
CABINN
HOTEL MANAGEMENT PLATFORM
[screenshots/diagram]

04
HOYTURNOS
APPOINTMENT BOOKING SAAS
[screenshot]

05
GOPOST
SOCIAL CONTENT SCHEDULER
[screenshot]

────────────────────────────────────────

PROBLEMS I LIKE SOLVING

Connecting systems...
Turning business rules...
Making backend processes...
Building products...

────────────────────────────────────────

MY TOOLBOX

Backend
...

Data
...

Frontend
...

Infrastructure
...

────────────────────────────────────────

EDUCATION

Ingeniero en Sistemas de Información
UTN
8.98 / 10

────────────────────────────────────────

BEYOND THE STACK

[3 short personal statements]

────────────────────────────────────────

LET'S BUILD SOMETHING USEFUL.

Open to backend, full-stack and
product-oriented engineering opportunities.

[Email me] [GitHub] [LinkedIn]

────────────────────────────────────────

Gabriel Monutti
Backend Engineer

© 2026
──────────────────────────────────────── 40. One additional idea I'd strongly recommend

Give the website a subtle “engineering notebook” identity.

For example, every section can have a tiny label:

01 / INTRO
02 / EXPERIENCE
03 / WORK
04 / TOOLBOX
05 / CONTACT

So instead of:

Experience

you have:

02 / EXPERIENCE

Experience

And instead of:

Projects

you have:

03 / SELECTED WORK

Things I've built

This is a very small design decision, but it makes the site feel intentionally designed rather than generated from a portfolio template.

41. The final design principle

If I were giving the agent only one sentence to guide the entire implementation, it would be:

Build a portfolio that feels like a beautifully designed engineering notebook: minimal, highly readable, technically interesting, slightly unconventional, and centered around Gabriel's ability to build real backend systems—not around flashy visual effects.

And I would prioritize the sections in this order:

Hero → Professional experience → Real projects → Engineering problems → Toolbox → Education → Contact

rather than the usual:

Hero → Skills → 20 project cards → About me → Contact.

That distinction is important for your profile. Your professional backend/integration experience is considerably more valuable than simply showing that you know React, Node, PostgreSQL, etc. The portfolio should make that obvious within the first minute.
