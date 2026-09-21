const STORAGE_KEY="cedarline-catastrophe-checklist-v1";
let scenarios=[];
let activeScenario="general";
const reducedMotion=window.matchMedia("(prefers-reduced-motion: reduce)");

const fallbackScenarios=[
  {id:"wind",title:"Wind, hail or fallen trees",icon:"↯",summary:"Roof, siding, windows, trees or vehicle damage",now:["Stay clear of downed power lines and damaged trees.","Do not enter visibly unstable structures.","If weather is still active, remain in a sturdy safe location."],next:["When safe, photograph damage from stable ground.","Use temporary protection only if you can do so without climbing into danger.","Note damaged areas and any immediate mitigation you arrange."],later:["Start a claim when you are ready.","Keep receipts for reasonable emergency mitigation.","Add additional photos or estimates as recovery continues."]},
  {id:"flood",title:"Flood or rising water",icon:"≈",summary:"Floodwater, standing water or water entering the property",now:["Do not walk, swim or drive through floodwater.","If you evacuated, return only when officials say it is safe.","Avoid electrical equipment, downed lines and flooded appliances."],next:["Photograph damage only from safe, dry locations.","Use protective equipment during cleanup when appropriate.","Do not use flooded electrical or gas appliances until they have been checked for safety."],later:["Document damaged rooms and belongings as conditions allow.","Keep cleanup and temporary-lodging receipts.","Review whether flood-specific insurance or another policy may apply."]},
  {id:"fire",title:"Fire or smoke damage",icon:"△",summary:"Fire, smoke, soot or heat damage",now:["Stay out of the structure until fire or local officials say it is safe.","Seek medical care for injuries or smoke exposure.","Do not re-enter to retrieve belongings or documents."],next:["When cleared to enter, document visible damage without disturbing unsafe areas.","Secure temporary shelter if the home cannot be occupied.","Write down emergency-response information you already have."],later:["Begin the claim report with the information available.","Keep receipts for necessary temporary living costs.","Add inventories, estimates and supporting documents over time."]},
  {id:"outage",title:"Power outage after a storm",icon:"●",summary:"Extended outage, electrical damage or generator use",now:["Avoid downed power lines and damaged electrical equipment.","Use generators, grills and fuel-burning devices only outdoors and away from openings.","Use flashlights instead of candles when possible."],next:["Check food safety and follow local utility instructions.","Document visible electrical or appliance damage only when safe.","Record outage-related damage without opening energized equipment."],later:["Report covered property damage if applicable.","Keep receipts for necessary emergency expenses.","Have damaged systems inspected by qualified professionals."]}
];

const checklistItems=[
  "Photograph damage only from a safe location.",
  "Write down the approximate time and what happened.",
  "Record emergency or incident report numbers you already have.",
  "Keep receipts for reasonable emergency mitigation or temporary lodging.",
  "Make a short list of the most obvious damaged areas or items.",
  "Save contractor or mitigation contact information as work begins."
];

function renderScenarios(){
  const container=document.querySelector("#scenarioCards");
  container.replaceChildren(...scenarios.map(s=>{
    const button=document.createElement("button");
    button.type="button";
    button.className="scenario-card";
    button.dataset.scenario=s.id;
    button.setAttribute("aria-pressed",String(s.id===activeScenario));
    button.innerHTML="<span class=\"scenario-icon\" aria-hidden=\"true\">"+s.icon+"</span><strong>"+s.title+"</strong><span>"+s.summary+"</span>";
    button.addEventListener("click",()=>selectScenario(s.id,true));
    return button;
  }));
}

function scenarioById(id){return scenarios.find(s=>s.id===id)||{id:"general",title:"General severe weather",now:["Put immediate safety first.","Follow local emergency instructions.","Avoid visible electrical, structural, fire and water hazards."],next:["Document only what you can safely observe.","Prevent further damage only when it can be done safely.","Keep simple notes about what happened."],later:["Start the claim when you are ready.","Keep receipts and add supporting information over time.","Review policy-specific coverage with the appropriate representative."]}}

function renderPanel(id,items){
  const panel=document.querySelector("#"+id);
  panel.innerHTML="<div class=\"timeline-list\">"+items.map((item,index)=>"<article class=\"timeline-step\"><span class=\"step-number\">"+(index+1)+"</span><h3>"+(index===0?"First":index===1?"Then":"Also")+"</h3><p>"+item+"</p></article>").join("")+"</div>";
}

function selectScenario(id,scroll){
  activeScenario=id;
  const s=scenarioById(id);
  document.querySelector("#selectedScenario").textContent=s.title;
  document.querySelectorAll(".scenario-card").forEach(card=>card.setAttribute("aria-pressed",String(card.dataset.scenario===id)));
  renderPanel("nowPanel",s.now); renderPanel("nextPanel",s.next); renderPanel("laterPanel",s.later);
  if(scroll){document.querySelector("#plan").scrollIntoView({behavior:reducedMotion.matches?"auto":"smooth",block:"start"});}
}

function setTab(tabName){
  const map={now:["nowTab","nowPanel"],next:["nextTab","nextPanel"],later:["laterTab","laterPanel"]};
  Object.values(map).forEach(pair=>{document.querySelector("#"+pair[0]).setAttribute("aria-selected","false");document.querySelector("#"+pair[1]).hidden=true;});
  document.querySelector("#"+map[tabName][0]).setAttribute("aria-selected","true");
  document.querySelector("#"+map[tabName][1]).hidden=false;
}

function renderTriage(status){
  document.querySelectorAll("[data-safety]").forEach(b=>b.setAttribute("aria-pressed",String(b.dataset.safety===status)));
  const box=document.querySelector("#triageResult"); box.hidden=false; box.className="triage-result";
  if(status==="no"){box.classList.add("danger");box.innerHTML="<h3>Leave danger and get emergency help first.</h3><p>If there is immediate danger, injury, fire, a gas leak, unstable structure, rising water, or downed electrical lines, move to safety and follow local emergency instructions before doing anything insurance-related.</p>";}
  if(status==="unsure"){box.classList.add("caution");box.innerHTML="<h3>Treat uncertainty as a safety issue.</h3><p>Do not enter or remain in a place that may be structurally, electrically, chemically, fire, or flood hazardous. Wait for qualified officials or professionals when needed.</p>";}
  if(status==="yes"){box.classList.add("safe");box.innerHTML="<h3>Good. Keep watching for changing hazards.</h3><p>Severe weather and disaster conditions can change. Continue following local instructions and avoid hazards while you move into documentation and recovery tasks.</p>";}
}

function renderChecklist(){
  let saved={}; try{saved=JSON.parse(localStorage.getItem(STORAGE_KEY)||"{}")}catch{}
  const container=document.querySelector("#documentationChecklist");
  container.replaceChildren(...checklistItems.map((item,index)=>{
    const label=document.createElement("label"); label.className="check-item";
    const input=document.createElement("input"); input.type="checkbox"; input.checked=Boolean(saved[index]);
    const span=document.createElement("span"); span.textContent=item;
    input.addEventListener("change",()=>{saved[index]=input.checked;localStorage.setItem(STORAGE_KEY,JSON.stringify(saved));document.querySelector("#saveStatus").textContent="Checklist saved on this device.";});
    label.append(input,span); return label;
  }));
}

document.querySelectorAll("[data-safety]").forEach(button=>button.addEventListener("click",()=>renderTriage(button.dataset.safety)));
document.querySelector("#nowTab").addEventListener("click",()=>setTab("now"));
document.querySelector("#nextTab").addEventListener("click",()=>setTab("next"));
document.querySelector("#laterTab").addEventListener("click",()=>setTab("later"));
document.querySelector("#resetChecklist").addEventListener("click",()=>{localStorage.removeItem(STORAGE_KEY);renderChecklist();document.querySelector("#saveStatus").textContent="Checklist reset.";});

fetch("data/scenarios.json").then(r=>{if(!r.ok)throw new Error("data");return r.json()}).then(data=>{scenarios=data;renderScenarios();selectScenario("wind",false)}).catch(()=>{scenarios=fallbackScenarios;renderScenarios();selectScenario("wind",false)});
renderChecklist();
