---
title: Copilot Credit Estimator
hide: [toc]
---

# Copilot Credit Estimator

Estimate monthly M365 Copilot message-credit consumption for your org or team. Adjust the inputs — the results update instantly.

!!! info "About message credits"
    M365 Copilot licenses include a base allotment of **message credits** consumed per interaction. Simple chat prompts typically use **1 credit**; agent invocations, complex multi-turn threads, and Copilot Studio interactions typically use **2–10 credits**. Your admin can view actual consumption in the Microsoft 365 admin center under **Copilot > Usage**.

<div id="calc-wrap" markdown="0">

<style>
#calc-wrap {
  font-family: inherit;
}
.calc-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem 2rem;
  margin: 1.5rem 0;
}
@media (max-width: 700px) {
  .calc-grid { grid-template-columns: 1fr; }
}
.calc-field label {
  display: block;
  font-size: 0.78rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--md-default-fg-color--light);
  margin-bottom: 0.35rem;
}
.calc-field .hint {
  font-size: 0.72rem;
  color: var(--md-default-fg-color--lighter);
  margin-top: 0.2rem;
}
.calc-field input[type=number],
.calc-field input[type=range] {
  width: 100%;
  box-sizing: border-box;
}
.calc-field input[type=number] {
  padding: 0.45rem 0.6rem;
  border: 1px solid var(--md-default-fg-color--lighter);
  border-radius: 4px;
  background: var(--md-code-bg-color);
  color: var(--md-default-fg-color);
  font-size: 1rem;
}
.calc-field input[type=range] {
  accent-color: var(--md-primary-fg-color);
  margin-top: 0.25rem;
}
.range-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.range-row input[type=range] { flex: 1; }
.range-val {
  min-width: 3.5rem;
  text-align: right;
  font-weight: 700;
  font-size: 1rem;
  color: var(--md-primary-fg-color);
}
.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}
.result-card {
  background: var(--md-code-bg-color);
  border: 1px solid var(--md-default-fg-color--lightest);
  border-radius: 6px;
  padding: 1rem 1.25rem;
  text-align: center;
}
.result-card .val {
  font-size: 1.9rem;
  font-weight: 700;
  color: var(--md-primary-fg-color);
  line-height: 1.15;
}
.result-card .lbl {
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--md-default-fg-color--light);
  margin-top: 0.3rem;
}
.budget-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin: 1rem 0 0.5rem;
}
.budget-row label {
  font-size: 0.78rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--md-default-fg-color--light);
  white-space: nowrap;
}
.budget-row input[type=number] {
  width: 130px;
  padding: 0.4rem 0.6rem;
  border: 1px solid var(--md-default-fg-color--lighter);
  border-radius: 4px;
  background: var(--md-code-bg-color);
  color: var(--md-default-fg-color);
  font-size: 1rem;
}
.budget-result {
  font-size: 0.9rem;
  color: var(--md-default-fg-color);
}
.budget-result strong {
  color: var(--md-primary-fg-color);
}
.scenario-bar {
  margin: 1.5rem 0 0.5rem;
}
.scenario-bar label {
  font-size: 0.78rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--md-default-fg-color--light);
  margin-bottom: 0.5rem;
  display: block;
}
.scenario-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.scenario-pill {
  cursor: pointer;
  padding: 0.3rem 0.75rem;
  border-radius: 20px;
  border: 1px solid var(--md-primary-fg-color);
  background: transparent;
  color: var(--md-primary-fg-color);
  font-size: 0.8rem;
  font-family: inherit;
  transition: background 0.15s, color 0.15s;
}
.scenario-pill:hover,
.scenario-pill.active {
  background: var(--md-primary-fg-color);
  color: var(--md-primary-bg-color);
}
hr.calc-divider {
  border: none;
  border-top: 1px solid var(--md-default-fg-color--lightest);
  margin: 1.5rem 0;
}
</style>

<!-- Scenario presets -->
<div class="scenario-bar">
  <label>Quick presets</label>
  <div class="scenario-pills">
    <button class="scenario-pill" onclick="applyScenario('pilot')">Pilot team (50 users)</button>
    <button class="scenario-pill" onclick="applyScenario('dept')">Department (500 users)</button>
    <button class="scenario-pill" onclick="applyScenario('org')">Full org (5,000 users)</button>
    <button class="scenario-pill" onclick="applyScenario('enterprise')">Enterprise (25,000 users)</button>
  </div>
</div>

<hr class="calc-divider">

<!-- Inputs -->
<div class="calc-grid">

  <div class="calc-field">
    <label for="totalUsers">Total users in scope</label>
    <input type="number" id="totalUsers" min="1" value="500" oninput="recalc()">
    <div class="hint">Employees, contractors, or team members you're modeling</div>
  </div>

  <div class="calc-field">
    <label for="licensePct">% with M365 Copilot license</label>
    <div class="range-row">
      <input type="range" id="licensePctSlider" min="0" max="100" value="60" oninput="syncRange('licensePct','licensePctSlider'); recalc()">
      <input type="number" id="licensePct" min="0" max="100" value="60" style="width:70px" oninput="syncRange('licensePctSlider','licensePct'); recalc()">
      <span>%</span>
    </div>
    <div class="hint">Typical pilots start at 10–20%; full rollouts at 60–100%</div>
  </div>

  <div class="calc-field">
    <label for="promptsPerDay">Avg prompts per licensed user / day</label>
    <input type="number" id="promptsPerDay" min="0" value="8" oninput="recalc()">
    <div class="hint">Light user ≈ 3–5; moderate ≈ 8–15; power user ≈ 20+</div>
  </div>

  <div class="calc-field">
    <label for="workDays">Working days per month</label>
    <input type="number" id="workDays" min="1" max="31" value="22" oninput="recalc()">
    <div class="hint">Standard = 22; adjust for holiday-heavy months</div>
  </div>

  <div class="calc-field">
    <label for="creditsPerPrompt">Credits consumed per prompt (avg)</label>
    <input type="number" id="creditsPerPrompt" min="0.1" step="0.1" value="2" oninput="recalc()">
    <div class="hint">Chat prompt ≈ 1; agent/Studio interaction ≈ 2–10; set your blended average</div>
  </div>

  <div class="calc-field">
    <label for="adoptionRate">Expected adoption rate</label>
    <div class="range-row">
      <input type="range" id="adoptionRateSlider" min="0" max="100" value="70" oninput="syncRange('adoptionRate','adoptionRateSlider'); recalc()">
      <input type="number" id="adoptionRate" min="0" max="100" value="70" style="width:70px" oninput="syncRange('adoptionRateSlider','adoptionRate'); recalc()">
      <span>%</span>
    </div>
    <div class="hint">% of licensed users who actually use Copilot each month</div>
  </div>

</div>

<hr class="calc-divider">

<!-- Results -->
<div class="results-grid">
  <div class="result-card">
    <div class="val" id="res-licensed">—</div>
    <div class="lbl">Licensed users</div>
  </div>
  <div class="result-card">
    <div class="val" id="res-active">—</div>
    <div class="lbl">Active users / month</div>
  </div>
  <div class="result-card">
    <div class="val" id="res-daily">—</div>
    <div class="lbl">Prompts / day (org)</div>
  </div>
  <div class="result-card">
    <div class="val" id="res-monthly-prompts">—</div>
    <div class="lbl">Prompts / month (org)</div>
  </div>
  <div class="result-card">
    <div class="val" id="res-credits">—</div>
    <div class="lbl">Credits / month (org)</div>
  </div>
  <div class="result-card">
    <div class="val" id="res-per-user">—</div>
    <div class="lbl">Credits / active user / month</div>
  </div>
</div>

<hr class="calc-divider">

<!-- Budget check -->
<div class="budget-row">
  <label for="creditBudget">Monthly credit budget (optional)</label>
  <input type="number" id="creditBudget" min="0" placeholder="e.g. 500000" oninput="recalc()">
</div>
<div class="budget-result" id="budget-result"></div>

<script>
function fmt(n) {
  if (n >= 1e6) return (n / 1e6).toFixed(1).replace(/\.0$/, '') + 'M';
  if (n >= 1e3) return (n / 1e3).toFixed(1).replace(/\.0$/, '') + 'K';
  return Math.round(n).toLocaleString();
}

function syncRange(targetId, sourceId) {
  var v = document.getElementById(sourceId).value;
  var t = document.getElementById(targetId);
  if (t) t.value = v;
}

function recalc() {
  var total        = parseFloat(document.getElementById('totalUsers').value) || 0;
  var licensePct   = parseFloat(document.getElementById('licensePct').value) || 0;
  var promptsDay   = parseFloat(document.getElementById('promptsPerDay').value) || 0;
  var workDays     = parseFloat(document.getElementById('workDays').value) || 22;
  var credits      = parseFloat(document.getElementById('creditsPerPrompt').value) || 1;
  var adoptionRate = parseFloat(document.getElementById('adoptionRate').value) || 100;

  var licensed     = Math.round(total * licensePct / 100);
  var active       = Math.round(licensed * adoptionRate / 100);
  var dailyPrompts = active * promptsDay;
  var monthlyPrompts = dailyPrompts * workDays;
  var monthlyCredits = monthlyPrompts * credits;
  var perUser      = active > 0 ? monthlyCredits / active : 0;

  document.getElementById('res-licensed').textContent         = fmt(licensed);
  document.getElementById('res-active').textContent           = fmt(active);
  document.getElementById('res-daily').textContent            = fmt(dailyPrompts);
  document.getElementById('res-monthly-prompts').textContent  = fmt(monthlyPrompts);
  document.getElementById('res-credits').textContent          = fmt(monthlyCredits);
  document.getElementById('res-per-user').textContent         = fmt(perUser);

  var budgetEl = document.getElementById('creditBudget');
  var resultEl = document.getElementById('budget-result');
  var budget   = parseFloat(budgetEl.value);
  if (budget > 0 && monthlyCredits > 0) {
    var ratio = monthlyCredits / budget;
    var months = budget / monthlyCredits;
    if (ratio <= 1) {
      resultEl.innerHTML = '✅ Your estimate of <strong>' + fmt(monthlyCredits) + ' credits/month</strong> fits within budget &mdash; you have <strong>' + fmt(budget - monthlyCredits) + ' credits headroom</strong> (' + Math.round((1 - ratio) * 100) + '% spare).';
    } else {
      resultEl.innerHTML = '⚠️ Your estimate of <strong>' + fmt(monthlyCredits) + ' credits/month</strong> exceeds budget by <strong>' + fmt(monthlyCredits - budget) + ' credits</strong> (' + Math.round((ratio - 1) * 100) + '% over). Consider reducing prompts/day, adoption rate, or licensed count.';
    }
  } else {
    resultEl.innerHTML = '';
  }
}

var scenarios = {
  pilot:      { totalUsers: 50,    licensePct: 100, promptsPerDay: 8,  adoptionRate: 80, creditsPerPrompt: 2, workDays: 22 },
  dept:       { totalUsers: 500,   licensePct: 80,  promptsPerDay: 8,  adoptionRate: 70, creditsPerPrompt: 2, workDays: 22 },
  org:        { totalUsers: 5000,  licensePct: 60,  promptsPerDay: 8,  adoptionRate: 65, creditsPerPrompt: 2, workDays: 22 },
  enterprise: { totalUsers: 25000, licensePct: 40,  promptsPerDay: 8,  adoptionRate: 60, creditsPerPrompt: 3, workDays: 22 }
};

function applyScenario(key) {
  var s = scenarios[key];
  document.getElementById('totalUsers').value       = s.totalUsers;
  document.getElementById('licensePct').value       = s.licensePct;
  document.getElementById('licensePctSlider').value = s.licensePct;
  document.getElementById('promptsPerDay').value    = s.promptsPerDay;
  document.getElementById('workDays').value         = s.workDays;
  document.getElementById('creditsPerPrompt').value = s.creditsPerPrompt;
  document.getElementById('adoptionRate').value     = s.adoptionRate;
  document.getElementById('adoptionRateSlider').value = s.adoptionRate;
  document.querySelectorAll('.scenario-pill').forEach(function(el) { el.classList.remove('active'); });
  event.target.classList.add('active');
  recalc();
}

// Run on load
recalc();
</script>

</div>

---

!!! tip "What to do with this number"
    - **Credit budget planning** — share the monthly credit estimate with your IT/finance team alongside the number of licensed users to validate your M365 Copilot SKU allocation.
    - **Adoption benchmarking** — as real usage data comes in from the admin center, compare actuals to this estimate to identify whether adoption is ahead or behind plan.
    - **Scenario planning** — run the estimator at 3 adoption-rate levels (conservative / target / optimistic) to bracket your credit spend.
