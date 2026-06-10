---
title: "Business processes in SaaS, skills in AI"
description: "Workday calls them business processes. Salesforce calls them permissions. Build an AI operation and the same unit becomes a skill — and the rename marks the shift from software that documents work to software that does it."
titleEs: "Procesos de negocio en el SaaS, habilidades en la IA"
descriptionEs: "Workday los llama procesos de negocio. Salesforce los llama permisos. Cuando construyes una operación de IA, la misma unidad se convierte en una habilidad — y el cambio de nombre marca el paso de un software que documenta el trabajo a uno que lo ejecuta."
titleEmphasis: "skills in AI"
titleEmphasisEs: "habilidades en la IA"
pubDate: 2026-06-09
draft: false
order: 8
---

I've spent the last few weeks modeling my own company inside Notion — functional areas like Marketing and Sales, the roles that sit inside each one, the processes each role owns, broken down step by step. If you've ever configured Workday or Salesforce, the shape is familiar. Software made us write the org down this way long before AI showed up: a business process here, a permission there, an approval routed to a role. SaaS forced a generation of companies to formalize two things — *what* work happens, and *who* is allowed to do it.

The model is good. I'm not throwing it out. But the moment I started building agents on top of it, I hit the wall it always quietly left standing.

A form and a routing rule assume something they never say out loud: that whoever receives the task already knows how to do it. "Approve the invoice" works as a process step because a human approver carries years of unwritten judgment about what a good invoice looks like. The org chart captures the *what* and the *who*, and lets the *how* stay in people's heads. That was fine — efficient, even — as long as people were the ones doing the work.

Now the agent does the work. And it carries none of that. Hand it "approve the invoice" and it effectively asks, *approve it how?* No tacit knowledge, no muscle memory, no manager leaning over to say "no, we don't do it like that here." Everything that used to live between the lines of a process has to be on the line. The SOP — the actual method — stops being optional.

That's the part I didn't see coming. SaaS forced the *what* and the *who*. AI forces the *how*. Same pressure, one layer down, and just as relentless: you don't get to hand work to an agent and skip the documentation any more than you got to run payroll in Workday without configuring the process. The tool won't let you stay vague.

Here's where it gets uncomfortable. That *how* — the best practice, the right way to do the step — was a huge part of what middle management actually was. Not the org-chart cartoon of approvals and status meetings, but the real job: holding the accumulated "this is how we do it" in your head, distributing it downward, correcting the work, transmitting judgment. A widely shared argument about the future of work makes the point sharply: middle management was largely an information-routing layer, and once a system can hold the whole picture, that layer thins.

<figure class="essay-figure">
<svg viewBox="0 0 680 420" role="img" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;border-radius:14px;border:0.5px solid var(--line)">
<title>The Copilot Trap versus Company as Memory</title>
<desc>Left: AI bolted onto each box of the hierarchy. Right: a shared memory of SOPs distributed to agents.</desc>
<rect x="0" y="0" width="680" height="420" fill="var(--card)"/>
<path d="M340 96 V340" stroke="var(--line)" stroke-width="1"/>
<text x="190" y="86" text-anchor="middle" font-family="var(--sans)" font-size="18" font-weight="700" fill="var(--ink)">The Copilot Trap</text>
<path d="M190 167 L132 207 M190 167 L248 207 M132 223 L100 263 M132 223 L164 263 M248 223 L216 263 M248 223 L280 263" fill="none" stroke="var(--line)" stroke-width="1.4"/>
<g fill="var(--paper-2)" stroke="var(--line)" stroke-width="1.2"><rect x="168" y="137" width="44" height="30" rx="7"/><rect x="110" y="193" width="44" height="30" rx="7"/><rect x="226" y="193" width="44" height="30" rx="7"/><rect x="78" y="249" width="44" height="30" rx="7"/><rect x="142" y="249" width="44" height="30" rx="7"/><rect x="194" y="249" width="44" height="30" rx="7"/><rect x="258" y="249" width="44" height="30" rx="7"/></g>
<g fill="var(--ink-faint)" opacity="0.5"><circle cx="190" cy="152" r="4.5"/><circle cx="132" cy="208" r="4.5"/><circle cx="248" cy="208" r="4.5"/><circle cx="100" cy="264" r="4.5"/><circle cx="164" cy="264" r="4.5"/><circle cx="216" cy="264" r="4.5"/><circle cx="280" cy="264" r="4.5"/></g>
<text x="510" y="86" text-anchor="middle" font-family="var(--sans)" font-size="18" font-weight="700" fill="var(--accent)">Company as Memory</text>
<g stroke="var(--accent-soft)" stroke-width="2.4" fill="none"><path d="M500 240 L604 240"/><path d="M500 240 L552 326"/><path d="M500 240 L448 326"/><path d="M500 240 L396 240"/><path d="M500 240 L448 154"/><path d="M500 240 L552 154"/></g>
<circle cx="500" cy="240" r="50" fill="var(--accent)"/>
<text x="500" y="247" text-anchor="middle" font-family="var(--sans)" font-size="20" font-weight="700" fill="var(--paper)">SOPs</text>
<g fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="1.6"><circle cx="604" cy="240" r="14"/><circle cx="552" cy="326" r="14"/><circle cx="448" cy="326" r="14"/><circle cx="396" cy="240" r="14"/><circle cx="448" cy="154" r="14"/><circle cx="552" cy="154" r="14"/></g>
</svg>
<figcaption>The copilot trap bolts a model onto every box of the existing hierarchy — the <em>what</em> and the <em>who</em> — and gets a faster version of the same structure. The alternative writes the <em>how</em> into a shared memory of SOPs and distributes it out to agents.</figcaption>
</figure>

Write the SOPs down and something shifts. The best practices stop living in individual heads and start living in a shared memory. Then they're distributed *out* — not down a hierarchy, but across a fleet of agents, each performing the step the exact way you specified. The coordination that used to require a manager becomes a property of the memory itself. It's the "company as intelligence" idea: a continuously updated model of how the business actually works, doing the alignment and routing that people used to do by hand.

Which raises the obvious question: where do the people go? Not away — up a layer. When the agent does the doing, the most valuable human work becomes authoring and orchestrating the *how*: writing the SOPs, curating the memory, deciding what "good" means and keeping it current as the business changes. The growth role in this workforce isn't the doer; it's the person who teaches the hive — the SOP writer, the process owner, the one who turns tacit judgment into something an agent can run. The human workforce moves from performing the steps to defining and maintaining how the steps get performed.

So my own model gains a layer. It used to be Functional Area → Role → Process: the *what* and the *who*. Now there's a third thing underneath, and it's the one with the leverage — the SOP, the *how*, the operating memory the agents draw from. The org chart told you the structure. The SOP is what actually runs.

I want to be careful not to oversell this. The hierarchy doesn't evaporate, and not everything can be written down — some judgment is genuinely tacit, and pretending otherwise is how you ship confident nonsense at scale. The honest version is narrower: AI moves the bottleneck. With SaaS, the forcing work was formalizing the *what* and the *who*. With agents, it's the *how* — and the people who can write it down.

Which is why most AI adoption I see is aimed at the wrong layer. Bolt a model onto each box of the existing org chart and you get a faster version of the same structure — a copilot for the hierarchy. The leverage isn't there. It's in the part the org chart always skipped. If you're serious about handing work to agents, the work is writing down how the work is actually done, and staffing people to keep writing it. That's the SOP layer. That's what AI is finally forcing — and, for once, the documentation pays for itself the moment something else can read it.
