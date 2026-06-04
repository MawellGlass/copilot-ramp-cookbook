---
title: Copilot Credit Estimator
hide: [toc]
---

# Copilot Credit Estimator

!!! warning "Work in progress — do not use yet"
    This page is still under development. Numbers, defaults, and logic are not finalised and should not be used for planning or budgeting.

Estimate monthly M365 Copilot message-credit consumption for your org or team. Adjust the inputs and the prompt table — results update instantly.

!!! info "Official billing rates — [learn.microsoft.com](https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-messages-management)"
    Rates below are sourced from the **Microsoft Copilot Studio Billing rates and management** docs. Each agent turn may combine multiple features (e.g. a generative answer with tenant graph grounding = 2 + 10 = 12 credits).

    **Key licensing rule:** When an agent is *embedded in Teams or the M365 Copilot app*, authenticated users with an **M365 Copilot license accrue zero credits** — only unlicensed users generate credit consumption. When deployed to *any other channel* (web widget, SharePoint, custom app, etc.), **all users are charged credits** regardless of M365 Copilot license status. Use the **Deployment type** toggle below to model the correct scenario.

<div id="calc-wrap" markdown="0">

<style>
#calc-wrap { font-family: inherit; overflow-x: hidden; }

.section-label {
  font-size: 0.78rem; font-weight: 600; text-transform: uppercase;
  letter-spacing: 0.05em; color: var(--md-default-fg-color--light);
  margin: 1.5rem 0 0.6rem;
}
.calc-grid {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 1.25rem 2rem; margin-bottom: 1.5rem;
}
@media (max-width: 700px) { .calc-grid { grid-template-columns: 1fr; } }
.calc-field label {
  display: block; font-size: 0.78rem; font-weight: 600;
  text-transform: uppercase; letter-spacing: 0.04em;
  color: var(--md-default-fg-color--light); margin-bottom: 0.35rem;
}
.calc-field .hint { font-size: 0.72rem; color: var(--md-default-fg-color--lighter); margin-top: 0.25rem; }
.calc-field input[type=number] {
  width: 100%; box-sizing: border-box; padding: 0.45rem 0.6rem;
  border: 1px solid var(--md-default-fg-color--lighter); border-radius: 4px;
  background: var(--md-code-bg-color); color: var(--md-default-fg-color); font-size: 1rem;
}
.range-row { display: flex; align-items: center; gap: 0.75rem; }
.range-row input[type=range] { flex: 1; accent-color: var(--md-primary-fg-color); }
.range-row input[type=number] { width: 70px !important; }

/* prompt table */
.prompt-table-wrap { margin-bottom: 0.75rem; }
#prompt-table { width: 100%; border-collapse: collapse; font-size: 0.9rem; table-layout: fixed; }
#prompt-table thead th {
  text-align: left; font-size: 0.72rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.05em;
  color: var(--md-default-fg-color--light); padding: 0.5rem 0.75rem;
  border-bottom: 2px solid var(--md-default-fg-color--lightest);
}
#prompt-table thead th.col-num { text-align: right; width: 108px; }
#prompt-table thead th:last-child { width: 36px; }
#prompt-table tbody tr:hover td { background: var(--md-code-bg-color); }
#prompt-table tbody td {
  padding: 0.6rem 0.75rem;
  border-bottom: 1px solid var(--md-default-fg-color--lightest);
  vertical-align: top;
}
#prompt-table tfoot td {
  padding: 0.5rem 0.6rem; border-top: 2px solid var(--md-default-fg-color--lightest);
  font-weight: 700; font-size: 0.85rem;
}
#prompt-table tfoot .foot-label {
  color: var(--md-default-fg-color--light); font-size: 0.72rem;
  text-transform: uppercase; letter-spacing: 0.05em;
}
#prompt-table tfoot .foot-val { color: var(--md-primary-fg-color); }
.pt-name {
  display: block; width: 100%; box-sizing: border-box;
  padding: 0.25rem 0.4rem; border: 1px solid transparent; border-radius: 4px;
  background: transparent; color: var(--md-default-fg-color);
  font-size: 0.9rem; font-family: inherit; line-height: 1.45;
  white-space: normal; word-break: break-word; min-height: 1.5em; cursor: text;
}
.pt-name:focus { border-color: var(--md-primary-fg-color); background: var(--md-code-bg-color); outline: none; }
.pt-name:empty::before { content: attr(data-placeholder); color: var(--md-default-fg-color--lighter); pointer-events: none; }
.pt-num {
  width: 100%; box-sizing: border-box; padding: 0.3rem 0.4rem;
  border: 1px solid var(--md-default-fg-color--lightest); border-radius: 4px;
  background: var(--md-code-bg-color); color: var(--md-default-fg-color);
  font-size: 0.9rem; text-align: right; font-family: inherit;
}
.pt-num:focus { border-color: var(--md-primary-fg-color); outline: none; }
.pt-calc {
  text-align: right; font-weight: 600; color: var(--md-primary-fg-color);
  min-width: 80px; white-space: nowrap;
}
.pt-del {
  cursor: pointer; background: none; border: none;
  color: var(--md-default-fg-color--lighter); font-size: 1.1rem;
  padding: 0 0.3rem; line-height: 1; font-family: inherit; transition: color 0.15s;
}
.pt-del:hover { color: #e53935; }
.btn-add-row {
  display: inline-flex; align-items: center; gap: 0.4rem;
  cursor: pointer; padding: 0.35rem 0.9rem;
  border: 1px dashed var(--md-primary-fg-color); border-radius: 4px;
  background: transparent; color: var(--md-primary-fg-color);
  font-size: 0.83rem; font-family: inherit; margin-bottom: 1.5rem;
  transition: background 0.15s, color 0.15s;
}
.btn-add-row:hover { background: var(--md-primary-fg-color); color: var(--md-primary-bg-color); }

/* deploy toggle */
.deploy-toggle { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 0.5rem; }
.deploy-btn {
  cursor: pointer; padding: 0.4rem 1.1rem; border-radius: 4px;
  border: 1.5px solid var(--md-primary-fg-color); background: transparent;
  color: var(--md-primary-fg-color); font-size: 0.85rem; font-family: inherit;
  transition: background 0.15s, color 0.15s;
}
.deploy-btn.active { background: var(--md-primary-fg-color); color: var(--md-primary-bg-color); }
.deploy-hint { font-size: 0.8rem; color: var(--md-default-fg-color--light); margin: 0.4rem 0 1rem; line-height: 1.5; }

/* results */
.results-grid {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem; margin: 1.5rem 0;
}
.result-card {
  background: var(--md-code-bg-color); border: 1px solid var(--md-default-fg-color--lightest);
  border-radius: 6px; padding: 1rem 1.25rem; text-align: center;
}
.result-card .val { font-size: 1.8rem; font-weight: 700; color: var(--md-primary-fg-color); line-height: 1.15; }
.result-card .lbl { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--md-default-fg-color--light); margin-top: 0.3rem; }

/* budget */
.budget-row { display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; margin: 1rem 0 0.5rem; }
.budget-row label {
  font-size: 0.78rem; font-weight: 600; text-transform: uppercase;
  letter-spacing: 0.04em; color: var(--md-default-fg-color--light); white-space: nowrap;
}
.budget-row input[type=number] {
  width: 150px; padding: 0.4rem 0.6rem;
  border: 1px solid var(--md-default-fg-color--lighter); border-radius: 4px;
  background: var(--md-code-bg-color); color: var(--md-default-fg-color); font-size: 1rem;
}
.budget-result { font-size: 0.9rem; color: var(--md-default-fg-color); margin-top: 0.25rem; }
.budget-result strong { color: var(--md-primary-fg-color); }

/* presets */
.scenario-bar { margin: 0 0 1rem; }
.scenario-pills { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.scenario-pill {
  cursor: pointer; padding: 0.3rem 0.75rem; border-radius: 20px;
  border: 1px solid var(--md-primary-fg-color); background: transparent;
  color: var(--md-primary-fg-color); font-size: 0.8rem; font-family: inherit;
  transition: background 0.15s, color 0.15s;
}
.scenario-pill:hover, .scenario-pill.active { background: var(--md-primary-fg-color); color: var(--md-primary-bg-color); }
hr.calc-divider { border: none; border-top: 1px solid var(--md-default-fg-color--lightest); margin: 1.5rem 0; }
</style>

<!-- ── Presets ── -->
<div class="scenario-bar">
  <div class="section-label">Quick presets</div>
  <div class="scenario-pills">
    <button class="scenario-pill" onclick="applyScenario('pilot',event)">Pilot team (50 users)</button>
    <button class="scenario-pill" onclick="applyScenario('dept',event)">Department (500 users)</button>
    <button class="scenario-pill" onclick="applyScenario('org',event)">Full org (5,000 users)</button>
    <button class="scenario-pill" onclick="applyScenario('enterprise',event)">Enterprise (25,000 users)</button>
  </div>
</div>

<hr class="calc-divider">

<!-- ── Deployment type toggle ── -->
<div class="section-label">Deployment type</div>
<div class="deploy-toggle">
  <button id="toggle-embedded" class="deploy-btn active" onclick="setDeployMode('embedded')">Embedded in Teams / M365 Copilot</button>
  <button id="toggle-standalone" class="deploy-btn" onclick="setDeployMode('standalone')">Standalone / other channel</button>
</div>
<p id="deploy-hint" class="deploy-hint">M365 Copilot licensed users incur <strong>zero credits</strong>. Only unlicensed users generate credit consumption. Use the <em>% with M365 Copilot license</em> slider to set the licensed proportion.</p>

<hr class="calc-divider">

<!-- ── Org inputs ── -->
<div class="section-label">Organization</div>
<div class="calc-grid">
  <div class="calc-field">
    <label for="totalUsers">Total users in scope</label>
    <input type="number" id="totalUsers" min="1" value="500" oninput="recalc()">
    <div class="hint">Employees, contractors, or team members you're modelling</div>
  </div>
  <div class="calc-field" id="license-field">
    <label>% with M365 Copilot license</label>
    <div class="range-row">
      <input type="range" id="licensePctSlider" min="0" max="100" value="60" oninput="syncRange('licensePct','licensePctSlider');recalc()">
      <input type="number" id="licensePct" min="0" max="100" value="60" oninput="syncRange('licensePctSlider','licensePct');recalc()">
      <span>%</span>
    </div>
    <div class="hint" id="license-hint">Embedded mode: licensed users accrue zero credits — only unlicensed users are billed. Pilots typically 10–20 %; full rollouts 60–100 %</div>
  </div>
  <div class="calc-field">
    <label>Expected adoption rate</label>
    <div class="range-row">
      <input type="range" id="adoptionRateSlider" min="0" max="100" value="70" oninput="syncRange('adoptionRate','adoptionRateSlider');recalc()">
      <input type="number" id="adoptionRate" min="0" max="100" value="70" oninput="syncRange('adoptionRateSlider','adoptionRate');recalc()">
      <span>%</span>
    </div>
    <div class="hint" id="adopt-hint">% of unlicensed users who actively use the agent each month (embedded mode)</div>
  </div>
  <div class="calc-field">
    <label for="avgInteractions">Avg interactions / user / month</label>
    <input type="number" id="avgInteractions" min="1" value="10" oninput="recalc()">
    <div class="hint">How many times does a typical active user interact with this agent each month</div>
  </div>
</div>

<hr class="calc-divider">

<!-- ── Prompt table ── -->
<div class="section-label">Prompt mix — edit rows or add your own process steps</div>

<div class="prompt-table-wrap">
  <table id="prompt-table">
    <thead>
      <tr>
        <th>Agent feature / interaction type</th>
        <th class="col-num">Uses / interaction</th>
        <th class="col-num">Credits / use</th>
        <th class="col-num">Credits / user / month</th>
        <th></th>
      </tr>
    </thead>
    <tbody id="prompt-tbody"></tbody>
    <tfoot>
      <tr>
        <td class="foot-label">Total</td>
        <td></td>
        <td></td>
        <td class="foot-val" id="foot-credits" style="text-align:right">—</td>
        <td></td>
      </tr>
    </tfoot>
  </table>
</div>

<button class="btn-add-row" onclick="addRow()">+ Add prompt type</button>

<hr class="calc-divider">

<!-- ── Results ── -->
<div class="section-label">Estimated monthly consumption</div>
<div class="results-grid">
  <div class="result-card"><div class="val" id="res-licensed">—</div><div class="lbl"><span id="lbl-billed">Unlicensed users (billed)</span></div></div>
  <div class="result-card"><div class="val" id="res-active">—</div><div class="lbl"><span id="lbl-active">Active unlicensed / month</span></div></div>
  <div class="result-card"><div class="val" id="res-monthly-prompts">—</div><div class="lbl">Total interactions / month</div></div>
  <div class="result-card"><div class="val" id="res-credits">—</div><div class="lbl">Credits / month (org)</div></div>
  <div class="result-card"><div class="val" id="res-per-user">—</div><div class="lbl">Credits / active user / month</div></div>
</div>

<hr class="calc-divider">

<!-- ── Budget check ── -->
<div class="section-label">Budget check (optional)</div>
<div class="budget-row">
  <label for="creditBudget">Monthly credit budget</label>
  <input type="number" id="creditBudget" min="0" placeholder="e.g. 500 000" oninput="recalc()">
</div>
<div class="budget-result" id="budget-result"></div>

<script>
function fmt(n) {
  if (n >= 1e6) return (n/1e6).toFixed(1).replace(/\.0$/,'')+'M';
  if (n >= 1e3) return (n/1e3).toFixed(1).replace(/\.0$/,'')+'K';
  return Math.round(n).toLocaleString();
}
function fmtDec(n) { return n % 1 === 0 ? n.toLocaleString() : n.toFixed(2); }
function syncRange(toId, fromId) {
  var el = document.getElementById(toId);
  if (el) el.value = document.getElementById(fromId).value;
}

var defaultRows = [
  // ── Core agent interactions ──
  { name: 'Classic answer',                                    count: 1, credits: 1    },
  { name: 'Generative answer',                                 count: 1, credits: 2    },
  { name: 'Agent action',                                      count: 1, credits: 5    },
  { name: 'Tenant graph grounding for messages',               count: 1, credits: 10   },
  { name: 'Agent flow actions (per 100 actions = 13 credits)', count: 1, credits: 13   },
  // ── AI tools ──
  { name: 'AI tool — Text/generative basic  (per 10 responses = 1 credit)',    count: 1, credits: 0.1  },
  { name: 'AI tool — Text/generative standard (per 10 responses = 15 credits)', count: 1, credits: 1.5  },
  { name: 'AI tool — Text/generative premium (per 10 responses = 100 credits)', count: 1, credits: 10   },
  { name: 'AI tool — Content processing (per page = 8 credits)',                count: 1, credits: 8    },
  // ── Voice (if applicable) ──
  { name: 'Voice — Basic (classic orchestration)',             count: 1, credits: 10   },
  { name: 'Voice — Standard (generative orchestration)',       count: 1, credits: 35   },
  { name: 'Voice — Premium (real-time)',                       count: 1, credits: 75   },
];

var rowId = 0;

function escHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function addRow(name, count, credits) {
  var id = ++rowId;
  var tr = document.createElement('tr');
  tr.dataset.rowId = id;
  tr.innerHTML =
    '<td><div class="pt-name" contenteditable="true" spellcheck="false" oninput="recalc()" data-placeholder="e.g. Generative answer">'+escHtml(name||'')+'</div></td>'+
    '<td style="text-align:right"><input class="pt-num" type="number" min="0" step="0.1" value="'+(count||1)+'" oninput="recalc()"></td>'+
    '<td style="text-align:right"><input class="pt-num" type="number" min="0" step="0.1" value="'+(credits||1)+'" oninput="recalc()"></td>'+
    '<td class="pt-calc" id="row-sub-'+id+'">—</td>'+
    '<td><button class="pt-del" title="Remove row" onclick="removeRow('+id+')">✕</button></td>';
  document.getElementById('prompt-tbody').appendChild(tr);
  recalc();
}

function removeRow(id) {
  var tbody = document.getElementById('prompt-tbody');
  if (tbody.rows.length <= 1) return;
  var tr = document.querySelector('[data-row-id="'+id+'"]');
  if (tr) { tr.remove(); recalc(); }
}

function recalc() {
  var total    = parseFloat(document.getElementById('totalUsers').value)   || 0;
  var licPct   = parseFloat(document.getElementById('licensePct').value)   || 0;
  var adoptPct = parseFloat(document.getElementById('adoptionRate').value) || 0;
  var avgInt   = parseFloat(document.getElementById('avgInteractions').value) || 0;

  var embedded   = document.getElementById('toggle-embedded').classList.contains('active');
  var licensed   = Math.round(total * licPct / 100);
  var unlicensed = total - licensed;
  var billedBase = embedded ? unlicensed : total;
  var active     = Math.round(billedBase * adoptPct / 100);

  var totalCpud = 0;
  document.querySelectorAll('#prompt-tbody tr').forEach(function(tr) {
    var ins = tr.querySelectorAll('.pt-num');
    var n = parseFloat(ins[0].value) || 0;
    var c = parseFloat(ins[1].value) || 0;
    var sub = avgInt * n * c;
    totalCpud += sub;
    var cell = document.getElementById('row-sub-'+tr.dataset.rowId);
    if (cell) cell.textContent = fmtDec(sub);
  });

  document.getElementById('foot-credits').textContent = fmtDec(totalCpud);

  var monthlyP = active * avgInt;
  var monthlyC = active * totalCpud;
  var perUser  = totalCpud;

  var lblBilled = document.getElementById('lbl-billed');
  var lblActive = document.getElementById('lbl-active');
  if (lblBilled) lblBilled.textContent = embedded ? 'Unlicensed users (billed)' : 'Total users (all billed)';
  if (lblActive) lblActive.textContent = embedded ? 'Active unlicensed / month' : 'Active users / month';

  var adoptHint = document.getElementById('adopt-hint');
  if (adoptHint) adoptHint.textContent = embedded
    ? '% of unlicensed users who actively use the agent each month (embedded mode)'
    : '% of all users in scope who actively use the agent each month (standalone mode)';

  document.getElementById('res-licensed').textContent        = fmt(billedBase);
  document.getElementById('res-active').textContent          = fmt(active);
  document.getElementById('res-monthly-prompts').textContent = fmt(monthlyP);
  document.getElementById('res-credits').textContent         = fmt(monthlyC);
  document.getElementById('res-per-user').textContent        = fmt(perUser);

  var budget   = parseFloat(document.getElementById('creditBudget').value);
  var resultEl = document.getElementById('budget-result');
  if (budget > 0 && monthlyC > 0) {
    var ratio = monthlyC / budget;
    if (ratio <= 1) {
      resultEl.innerHTML = '✅ Estimate of <strong>'+fmt(monthlyC)+' credits/month</strong> fits within budget — <strong>'+fmt(budget-monthlyC)+' credits headroom</strong> ('+Math.round((1-ratio)*100)+'% spare).';
    } else {
      resultEl.innerHTML = '⚠️ Estimate of <strong>'+fmt(monthlyC)+' credits/month</strong> exceeds budget by <strong>'+fmt(monthlyC-budget)+' credits</strong> ('+Math.round((ratio-1)*100)+'% over). Reduce prompt volume, adoption rate, or credit mix.';
    }
  } else { resultEl.innerHTML = ''; }
}

function setDeployMode(mode) {
  var isEmbedded = mode === 'embedded';
  document.getElementById('toggle-embedded').classList.toggle('active', isEmbedded);
  document.getElementById('toggle-standalone').classList.toggle('active', !isEmbedded);
  document.getElementById('deploy-hint').innerHTML = isEmbedded
    ? 'M365 Copilot licensed users incur <strong>zero credits</strong>. Only unlicensed users generate credit consumption. Use the <em>% with M365 Copilot license</em> slider to set the licensed proportion.'
    : 'All users generate credits regardless of M365 Copilot license status. The <em>% with M365 Copilot license</em> slider has no effect on credit calculation.';
  var licField = document.getElementById('license-field');
  if (licField) licField.style.opacity = isEmbedded ? '1' : '0.45';
  recalc();
}

var scenarios = {
  pilot:      { totalUsers:   50, licensePct: 100, adoptionRate: 80 },
  dept:       { totalUsers:  500, licensePct:  80, adoptionRate: 70 },
  org:        { totalUsers: 5000, licensePct:  60, adoptionRate: 65 },
  enterprise: { totalUsers:25000, licensePct:  40, adoptionRate: 60 },
};

function applyScenario(key, evt) {
  var s = scenarios[key];
  document.getElementById('totalUsers').value         = s.totalUsers;
  document.getElementById('licensePct').value         = s.licensePct;
  document.getElementById('licensePctSlider').value   = s.licensePct;
  document.getElementById('adoptionRate').value       = s.adoptionRate;
  document.getElementById('adoptionRateSlider').value = s.adoptionRate;
  document.querySelectorAll('.scenario-pill').forEach(function(el){ el.classList.remove('active'); });
  if (evt && evt.target) evt.target.classList.add('active');
  recalc();
}

defaultRows.forEach(function(r){ addRow(r.name, r.count, r.credits); });
recalc();
</script>

</div>

---

!!! tip "What to do with this number"
    - **Credit budget planning** — share the monthly credit estimate with your IT/finance team alongside the licensed user count to validate your M365 Copilot SKU allocation.
    - **Adoption benchmarking** — as real usage data comes in from the admin center, compare actuals to this estimate to see whether adoption is ahead or behind plan.
    - **Scenario planning** — run the estimator at 3 adoption-rate levels (conservative / target / optimistic) to bracket your credit spend.

