
// ══════════════════════════════════════════════════════════════════
// APP.JS — Brevet Blanc Maths
// ══════════════════════════════════════════════════════════════════

// ── 4.1  Variables d'état globales ────────────────────────────────
let selMin=120;
let selChaps=['all'];
let timerIv=null,secsLeft=0;
let exerciseData=[],scores={},validated={},feedbacks={};

// ── 4.2  Appel API Anthropic ──────────────────────────────────────
const PROXY_URL='https://api.anthropic.com/v1/messages';

async function callAI(prompt,maxTokens=300){
  const resp=await fetch(PROXY_URL,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'claude-sonnet-4-20250514',max_tokens:maxTokens,messages:[{role:'user',content:prompt}]})});
  if(!resp.ok)throw new Error('API error '+resp.status);
  const data=await resp.json();
  return(data.content?.[0]?.text||'').trim();
}

// ── 4.3  Navigation SPA ───────────────────────────────────────────
function go(screenId,navId){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
  document.querySelectorAll('.gnav-link').forEach(n=>n.classList.remove('active'));
  if(navId)document.getElementById(navId)?.classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
}

// ── 4.4  Sélection des exercices ──────────────────────────────────
function pickExercises(){
  let pool=[];
  if(selChaps.includes('all')){
    Object.values(BANK).forEach(arr=>pool.push(...arr));
  } else {
    selChaps.forEach(ch=>{
      Object.keys(BANK).filter(k=>k===ch||k.startsWith(ch)).forEach(k=>pool.push(...BANK[k]));
    });
  }
  for(let i=pool.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]];}
  return pool.slice(0,5);
}

// ── 4.5  Sélecteurs UI setup ──────────────────────────────────────
function selTimer(el){
  document.querySelectorAll('.timer-chip').forEach(c=>c.classList.remove('sel'));
  el.classList.add('sel');selMin=parseInt(el.dataset.min);
  const h=Math.floor(selMin/60),m=selMin%60;
  document.getElementById('setupTimerVal').textContent=h>0?(m>0?`${h}h${m}`:h+'h'):m+' min';
}

function selChap(el){
  const id=el.dataset.id;
  if(id==='all'){
    document.querySelectorAll('.chap-chip').forEach(c=>{c.classList.remove('sel');c.querySelector('.chk').textContent='';});
    el.classList.add('sel');el.querySelector('.chk').textContent='✓';selChaps=['all'];
  } else {
    const allC=document.querySelector('.chap-chip[data-id="all"]');
    allC.classList.remove('sel');allC.querySelector('.chk').textContent='';
    el.classList.toggle('sel');
    el.querySelector('.chk').textContent=el.classList.contains('sel')?'✓':'';
    selChaps=[...document.querySelectorAll('.chap-chip.sel')].map(c=>c.dataset.id).filter(i=>i!=='all');
    if(!selChaps.length){allC.classList.add('sel');allC.querySelector('.chk').textContent='✓';selChaps=['all'];}
  }
}

// ── 4.6  Démarrage et rendu de l'examen ──────────────────────────
function startExam(){
  const picked=pickExercises();if(!picked.length)return;
  exerciseData=picked;scores={};validated={};feedbacks={};
  go('screen-exam',null);
  document.getElementById('exContainer').innerHTML='';
  document.getElementById('examFooter').style.display='none';
  document.getElementById('loadingBox').style.display='block';
  document.getElementById('examSub').textContent='Chargement…';
  startTimer(selMin*60);
  setTimeout(renderExam,300);
}

function renderExam(){
  document.getElementById('loadingBox').style.display='none';
  const container=document.getElementById('exContainer');
  const pills=document.getElementById('pillsBar');
  pills.innerHTML='';container.innerHTML='';
  document.getElementById('examSub').textContent=[...new Set(exerciseData.map(e=>e.notion))].join(' · ');
  exerciseData.forEach((ex,ei)=>{
    const exId=`ex${ei+1}`;
    const totalPts=ex.questions.reduce((s,q)=>s+q.pts,0);
    const pill=document.createElement('button');
    pill.className='pill';pill.id=`pill-${exId}`;
    pill.textContent=`Ex. ${ei+1} — ${ex.notion}`;
    pill.onclick=()=>document.getElementById(exId)?.scrollIntoView({behavior:'smooth',block:'start'});
    pills.appendChild(pill);
    let tableHTML='';
    if(ex.tableData){tableHTML=`<table><tr>${ex.tableData.headers.map(h=>`<th>${h}</th>`).join('')}</tr>${ex.tableData.rows.map(r=>`<tr>${r.map(cell=>`<td>${cell}</td>`).join('')}</tr>`).join('')}</table>`;}
    let figureHTML='';
    if(ex.figure){figureHTML=`<div class="ex-figure">${ex.figure}</div>`;}
    else if(ex.calcProgram){
      const steps=ex.calcProgram.map(s=>`<div class="calc-step"><div class="calc-step-label">${s.label}</div><div class="calc-step-val">${s.val}</div></div>`).join('<div class="calc-arrow">→</div>');
      figureHTML=`<div class="calc-program"><div class="calc-program-title">Programme de calcul</div><div class="calc-program-steps">${steps}</div></div>`;
    }
    let qHTML='';
    ex.questions.forEach((q,qi)=>{
      const qId=`${exId}q${qi+1}`;
      const ae=escQ(q.ans);
      if(q.qcm){
        const choicesHTML=q.choices.map(c=>{
          const ae2=escQ(q.ans);
          return `<button class="qcm-btn" data-qid="${qId}" data-letter="${c.letter}" onclick="doQCM('${qId}','${exId}','${c.letter}','${q.correct}',${q.pts},'${ae2}')" title="Proposition ${c.letter}">
            <span class="qcm-letter">${c.letter}</span>
            <span>${c.text}</span>
          </button>`;
        }).join('');
        qHTML+=`<div class="question" id="${qId}">
          <div class="q-head" style="position:relative"><span class="q-num">Question ${ei+1}.${qi+1}</span><span class="q-pts-badge">${q.pts} pts</span></div>
          <div class="q-text">${q.text}</div>
          <div class="answer-zone">
            <div class="answer-lbl">Choisir une réponse</div>
            <div class="qcm-grid">${choicesHTML}</div>
            <div class="qcm-feedback" id="fb-${qId}" style="display:none"></div>
          </div>
        </div>`;
      } else {
        qHTML+=`<div class="question" id="${qId}">
          <div class="q-head" style="position:relative"><span class="q-num">Question ${ei+1}.${qi+1}</span><span class="q-pts-badge">${q.pts} pts</span></div>
          <div class="q-text">${q.text}</div>
          <div class="answer-zone">
            <div class="answer-lbl">Ma réponse</div>
            <textarea class="answer-ta" id="a-${qId}" placeholder="Rédigez votre réponse ici…" oninput="onType(this)"></textarea>
            <div class="val-bar">
              <button class="btn-val" id="vbtn-${qId}" onclick="soundValidate();doVal('${qId}','${exId}',${q.pts},'${ae}')" disabled>✓ Valider</button>
              <button class="btn-edit" id="ebtn-${qId}" onclick="doEdit('${qId}','${exId}')">✎ Modifier</button>
              <span class="val-tag" id="vtag-${qId}">✅ Validée</span>
              <span class="val-hint" id="vhint-${qId}">Rédigez puis validez</span>
            </div>
            <div class="ai-result" id="ar-${qId}"></div>
            <div class="inline-corr-wrap" id="corrq-${qId}" style="display:none"></div>
          </div>
        </div>`;
      }
    });
    const corrBlocks=ex.questions.map((q,qi)=>`<div class="corr-block"><div class="corr-title">Q${ei+1}.${qi+1}</div><p>${q.ans}</p></div>`).join('');
    container.insertAdjacentHTML('beforeend',`<div class="exercise" id="${exId}">
      <div class="ex-head">
        <div>
          <div class="ex-eyebrow">Exercice ${ei+1}</div>
          <div class="ex-title">${ex.title}</div>
          <div class="ex-notion">${ex.notion}${ex.source?` <span style="font-size:10px;color:var(--ink4);font-weight:500;font-style:italic">· ${ex.source}</span>`:''}</div>
        </div>
        <div class="ex-pts"><div class="n">${totalPts}</div><div class="l">points</div></div>
      </div>
      <div class="ex-body">
        <p>${ex.intro}</p>${figureHTML}${tableHTML}${qHTML}
        <div class="corr-toggle">
          <button class="btn-see" id="cBtn-${exId}" onclick="toggleCorr('corr-${exId}','cBtn-${exId}')" disabled>▶ Voir la correction</button>
          <span class="corr-hint" id="chint-${exId}">La correction s'affiche après validation</span>
        </div>
        <div class="correction" id="corr-${exId}">
          <div class="corr-head"><div class="corr-badge">✓</div><span>Correction détaillée</span></div>
          ${corrBlocks}
        </div>
      </div>
    </div>`);
  });
  document.getElementById('examFooter').style.display='flex';
  updateLive();
}

function escQ(s){return(s||'').replace(/\\/g,'\\\\').replace(/'/g,"\\'").replace(/"/g,'&quot;');}

// ── 4.7  Chronomètre ─────────────────────────────────────────────
function startTimer(s){clearInterval(timerIv);secsLeft=s;renderTimer();timerIv=setInterval(()=>{secsLeft--;renderTimer();if(secsLeft<=0){clearInterval(timerIv);endExam();}},1000);}
function renderTimer(){const h=Math.floor(secsLeft/3600),m=Math.floor((secsLeft%3600)/60),s=secsLeft%60;const el=document.getElementById('timerFace');el.textContent=`${p2(h)}:${p2(m)}:${p2(s)}`;el.className='timer-face'+(secsLeft<300?' danger':secsLeft<600?' warn':'');}
function p2(n){return String(n).padStart(2,'0');}

// ── 4.8  Gestion des réponses texte ──────────────────────────────
function onType(el){
  const has=el.value.trim().length>0;el.classList.toggle('has-content',has);
  const qId=el.id.replace('a-','');
  const btn=document.getElementById('vbtn-'+qId);if(btn)btn.disabled=!has;
  const hint=document.getElementById('vhint-'+qId);if(hint)hint.textContent=has?'Cliquez pour valider':'Rédigez puis validez';
}

function normalise(str){
  return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[,;]/g,'.').replace(/\s+/g,' ').replace(/[^a-z0-9\.\+\-\*/=<>°%πcm²³]/g,' ').trim();
}
function extractNumbers(str){return(str.match(/[0-9]+(?:[.,][0-9]+)?/g)||[]).map(n=>parseFloat(n.replace(',','.')));}
function localCorrect(eleve,officiel,maxPts){
  const e=normalise(eleve),o=normalise(officiel);
  if(e===o)return{pts:maxPts,feedback:'✓ Bonne réponse !'};
  const numsO=extractNumbers(officiel),numsE=extractNumbers(eleve);
  if(numsO.length>0){
    const allFound=numsO.every(n=>numsE.some(m=>Math.abs(m-n)/Math.max(1,Math.abs(n))<0.02));
    if(allFound)return{pts:maxPts,feedback:'✓ Bonne réponse !'};
    const found=numsO.filter(n=>numsE.some(m=>Math.abs(m-n)/Math.max(1,Math.abs(n))<0.02));
    if(found.length>=Math.ceil(numsO.length/2)&&maxPts>1)return{pts:Math.round(maxPts/2),feedback:'Réponse partiellement correcte.'};
  }
  const wordsO=o.split(' ').filter(w=>w.length>2),wordsE=e.split(' ').filter(w=>w.length>2);
  if(wordsO.length>0){
    const common=wordsO.filter(w=>wordsE.includes(w));
    if(common.length>=wordsO.length*0.7)return{pts:maxPts,feedback:'✓ Bonne réponse !'};
    if(common.length>=wordsO.length*0.4&&maxPts>1)return{pts:Math.round(maxPts/2),feedback:'Réponse partiellement correcte.'};
  }
  return{pts:0,feedback:'Réponse incorrecte. Réponse attendue : '+officiel};
}

async function doVal(qId,exId,maxPts,ae){
  const ta=document.getElementById('a-'+qId);
  const answer=ta.value.trim();if(!answer)return;
  validated[qId]=true;ta.classList.add('locked');ta.readOnly=true;
  document.getElementById('vbtn-'+qId).style.display='none';
  document.getElementById('ebtn-'+qId).style.display='inline-flex';
  document.getElementById('vtag-'+qId).classList.add('show');
  const hint=document.getElementById('vhint-'+qId);if(hint)hint.textContent='';
  const ar=document.getElementById('ar-'+qId);
  ar.classList.add('visible');ar.innerHTML='';
  const corrQEl2=document.getElementById('corrq-'+qId);
  if(corrQEl2){corrQEl2.style.display='block';corrQEl2.innerHTML='<div style="padding:12px 16px;background:var(--bg2);border:1.5px solid var(--rule);display:flex;align-items:center;gap:10px"><span class="mini-sp"></span><span style=\'font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--ink4)\'>Correction en cours…</span></div>';}
  const officialAns=ae.replace(/&quot;/g,'"');
  const prompt=`Tu es un correcteur du brevet des collèges en mathématiques. La question vaut ${maxPts} points.\nRéponse officielle : "${officialAns}"\nRéponse de l'élève : "${answer}"\nRéponds UNIQUEMENT en JSON valide : {"pts":<entier 0 à ${maxPts}>,"feedback":"<1-2 phrases courtes en français>"}`;
  let pts=0,feedback='';
  try{
    const raw=await callAI(prompt,200);
    const parsed=JSON.parse(raw.replace(/```json|```/g,'').trim());
    pts=Math.max(0,Math.min(maxPts,Math.round(parsed.pts)));feedback=parsed.feedback||'';
  }catch(e){
    const result=localCorrect(answer,officialAns,maxPts);
    pts=result.pts;feedback=result.feedback;
  }
  scores[qId]=pts;feedbacks[qId]=feedback;
  updateLive();updatePill(exId);checkAllValidated();
  const ratio=pts/maxPts;
  if(ratio>=.85)soundCorrect();else soundWrong();
  let cls,icon,label;
  if(ratio>=.85){cls='correct';icon='✓';label='Correct';}
  else if(ratio>=.4){cls='partial';icon='~';label='Partiellement correct';}
  else{cls='wrong';icon='✗';label='Incorrect';}
  const qEl=document.getElementById(qId);
  if(qEl){
    const flash=document.createElement('span');
    flash.className='q-score-flash '+cls;
    flash.textContent=(pts>0?'+':'')+pts+' pt'+(pts>1?'s':'');
    flash.style.position='relative';
    const qHead=qEl.querySelector('.q-head');
    if(qHead){qHead.appendChild(flash);}
    setTimeout(()=>flash.remove(),700);
    const badge=qEl.querySelector('.q-pts-badge');
    if(badge){badge.textContent=pts+'/'+maxPts+' pts';badge.className='q-pts-badge q-pts-earned '+(cls==='correct'?'earned-full':cls==='partial'?'earned-partial':'earned-none');}
  }
  const corrQEl=document.getElementById('corrq-'+qId);
  if(corrQEl){
    corrQEl.innerHTML=`<div class="inline-corr ${cls}-corr"><span class="inline-corr-icon">${icon}</span><div class="inline-corr-body"><div class="inline-corr-label">${label} · ${pts}/${maxPts} pts</div><div class="inline-corr-feedback">${feedback}</div><div class="inline-corr-official"><strong>Correction :</strong> ${officialAns}</div></div></div>`;
    corrQEl.style.display='block';
  }
  ar.innerHTML=`<div class="ai-rh ${cls}-bg"><span class="ai-rl" style="color:${cls==='correct'?'var(--green)':cls==='partial'?'var(--amber)':'var(--red)'}">${icon} ${label}</span><span class="ai-sc ${cls}-col">${pts}<span style="font-size:13px;opacity:.5;font-weight:400"> / ${maxPts} pts</span></span></div><div class="ai-fb">${feedback}</div>`;
}

// ── 4.9  Gestion des QCM ─────────────────────────────────────────
function doQCM(qId,exId,letter,correct,maxPts,ae){
  document.querySelectorAll(`.qcm-btn[data-qid="${qId}"]`).forEach(btn=>{
    btn.disabled=true;
    const l=btn.dataset.letter;
    if(l===correct){
      if(l===letter) btn.classList.add('qcm-correct');
      else btn.classList.add('qcm-reveal');
    } else if(l===letter){
      btn.classList.add('qcm-wrong');
    }
  });
  const isCorrect=(letter===correct);
  if(isCorrect)soundQCMCorrect();else soundQCMWrong();
  const pts=isCorrect?maxPts:0;
  scores[qId]=pts;
  validated[qId]=true;
  const officialAns=ae.replace(/&quot;/g,'"');
  feedbacks[qId]=isCorrect?`Bonne réponse ! Proposition ${correct} ✓`:`Mauvaise réponse. La bonne réponse était la proposition ${correct}. ${officialAns}`;
  const fb=document.getElementById('fb-'+qId);
  if(fb){
    fb.className='qcm-feedback '+(isCorrect?'fb-correct':'fb-wrong');
    fb.textContent=feedbacks[qId];
    fb.style.display='block';
  }
  const qEl=document.getElementById(qId);
  if(qEl){
    const flash=document.createElement('span');
    flash.className='q-score-flash '+(isCorrect?'correct':'wrong');
    flash.textContent=(pts>0?'+':'')+pts+' pt'+(pts>1?'s':'');
    flash.style.position='relative';
    const qHead=qEl.querySelector('.q-head');
    if(qHead){qHead.appendChild(flash);}
    setTimeout(()=>flash.remove(),700);
    const badge=qEl.querySelector('.q-pts-badge');
    if(badge){badge.textContent=pts+'/'+maxPts+' pts';badge.className='q-pts-badge q-pts-earned '+(isCorrect?'earned-full':'earned-none');}
  }
  updateLive();updatePill(exId);checkAllValidated();
}

// ── 4.10  Correction détaillée ────────────────────────────────────
function doEdit(qId,exId){
  validated[qId]=false;delete scores[qId];delete feedbacks[qId];
  const ta=document.getElementById('a-'+qId);ta.classList.remove('locked');ta.readOnly=false;ta.focus();
  document.getElementById('vbtn-'+qId).style.display='inline-flex';
  document.getElementById('vbtn-'+qId).disabled=false;
  document.getElementById('ebtn-'+qId).style.display='none';
  document.getElementById('vtag-'+qId).classList.remove('show');
  const hint=document.getElementById('vhint-'+qId);if(hint)hint.textContent='Modifiez puis revalidez';
  const ar=document.getElementById('ar-'+qId);ar.classList.remove('visible');ar.innerHTML='';
  const corrQElEdit=document.getElementById('corrq-'+qId);
  if(corrQElEdit){corrQElEdit.style.display='none';corrQElEdit.innerHTML='';}
  updateLive();updatePill(exId);
}

function toggleCorr(corrId,btnId){
  const p=document.getElementById(corrId),b=document.getElementById(btnId);
  const open=p.classList.contains('open');
  if(open){p.classList.remove('open');b.textContent='▶ Voir la correction';b.classList.remove('active');}
  else{p.classList.add('open');b.textContent='▼ Masquer';b.classList.add('active');setTimeout(()=>p.scrollIntoView({behavior:'smooth',block:'nearest'}),80);}
}

// ── 4.11  Score live & progression ───────────────────────────────
function totalScore(){return Object.values(scores).reduce((s,v)=>s+v,0);}

function checkAllValidated(){
  if(!exerciseData.length)return;
  const allQIds=exerciseData.flatMap((ex,i)=>ex.questions.map((_,j)=>`ex${i+1}q${j+1}`));
  const total=allQIds.length;
  const doneCount=allQIds.filter(q=>scores[q]!==undefined).length;
  const btn=document.getElementById('btnEnd');if(!btn)return;
  if(doneCount===total&&total>0){
    btn.disabled=false;btn.classList.add('btn-end-ready');btn.title='Toutes les réponses validées';
    showToast('Toutes les réponses validées — vous pouvez terminer !');
  } else {
    btn.disabled=true;btn.classList.remove('btn-end-ready');btn.title=`Encore ${total-doneCount} réponse(s) à valider`;
  }
}

function updateLive(){
  const t=totalScore();
  const maxTotal=exerciseData.reduce((s,ex)=>s+ex.questions.reduce((s2,q)=>s2+q.pts,0),0);
  const el=document.getElementById('liveSc');
  if(el){const prev=parseInt(el.textContent)||0;el.textContent=t;if(t>prev){el.classList.add('bump');setTimeout(()=>el.classList.remove('bump'),350);}}
  const maxEl=document.getElementById('liveScMax');if(maxEl)maxEl.textContent='/'+maxTotal;
  const fe=document.getElementById('footerSc');if(fe)fe.textContent=t;
  const pct=maxTotal>0?Math.round(t/maxTotal*100):0;
  const prog=document.getElementById('examProgressFill');
  if(prog){prog.style.width=pct+'%';prog.style.background=pct>=70?'#0a6b38':pct>=40?'#ff8c1a':'#4c97ff';}
  const fbar=document.getElementById('footerBarFill');
  if(fbar){fbar.style.width=pct+'%';fbar.style.background=pct>=70?'var(--green)':pct>=50?'var(--amber)':'var(--k)';}
}

function updatePill(exId){
  const idx=parseInt(exId.replace('ex',''))-1;
  const ex=exerciseData[idx];if(!ex)return;
  const qIds=ex.questions.map((_,i)=>`${exId}q${i+1}`);
  const pill=document.getElementById(`pill-${exId}`);if(!pill)return;
  const anyVal=qIds.some(q=>validated[q]);
  const allGraded=qIds.every(q=>scores[q]!==undefined);
  pill.classList.toggle('answered',anyVal&&!allGraded);
  pill.classList.toggle('corrected',allGraded);
  const cBtn=document.getElementById(`cBtn-${exId}`);
  const chint=document.getElementById(`chint-${exId}`);
  if(cBtn&&anyVal){cBtn.disabled=false;if(chint)chint.textContent=allGraded?'Correction complète':'Correction partielle disponible';}
}

// ── 4.12  Toast de notification ───────────────────────────────────
let toastTimeout;
function showToast(msg){
  let t=document.getElementById('examToast');
  if(!t){t=document.createElement('div');t.id='examToast';t.className='exam-toast';document.body.appendChild(t);}
  t.textContent=msg;t.classList.add('show');
  clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>t.classList.remove('show'),3500);
}

// ── 4.13  Fin d'examen & résultats ────────────────────────────────
function getMention(s){
  if(s>=80)return'Mention Très Bien';if(s>=70)return'Mention Bien';
  if(s>=60)return'Mention Assez Bien';if(s>=50)return'Encourageant';return'À retravailler';
}

function endExam(){
  clearInterval(timerIv);
  const total=totalScore();
  const maxTotal=exerciseData.reduce((s,ex)=>s+ex.questions.reduce((s2,q)=>s2+q.pts,0),0);
  const scaled=Math.round(total/maxTotal*100);
  saveSession(scaled);
  go('screen-results',null);
  document.getElementById('resScore').innerHTML=`${scaled} <span>/ 100</span>`;
  document.getElementById('resMention').textContent=getMention(scaled);
  const barCol=scaled>=70?'#1d6b3a':scaled>=50?'#a06c00':'#c0392b';
  setTimeout(()=>{document.getElementById('resBar').style.width=scaled+'%';document.getElementById('resBar').style.background=barCol;},100);
  let correct=0,partial=0,wrong=0;
  exerciseData.forEach((ex,i)=>{ex.questions.forEach((q,j)=>{const r=(scores[`ex${i+1}q${j+1}`]||0)/q.pts;if(r>=.85)correct++;else if(r>=.4)partial++;else wrong++;});});
  document.getElementById('resCorrect').textContent=correct;
  document.getElementById('resPartial').textContent=partial;
  document.getElementById('resWrong').textContent=wrong;
  const ns={};
  exerciseData.forEach((ex,i)=>{const n=ex.notion;if(!ns[n])ns[n]={e:0,m:0};ex.questions.forEach((q,j)=>{const qId=`ex${i+1}q${j+1}`;ns[n].e+=scores[qId]||0;ns[n].m+=q.pts;});});
  let nH='';
  Object.entries(ns).forEach(([n,v])=>{const pct=Math.round(v.e/v.m*100);const col=pct>=70?'var(--green)':pct>=40?'var(--amber)':'var(--red)';nH+=`<div class="bdown-row"><div><div class="bdown-notion">${n}</div><div class="bdown-pct"><div class="bdown-pct-fill" style="width:${pct}%;background:${col}"></div></div></div><div class="bdown-pts" style="color:${col}">${v.e}/${v.m}</div></div>`;});
  document.getElementById('resByNotion').innerHTML=nH||'<p style="color:var(--ink4);font-style:italic">Aucune question validée.</p>';
  let eH='',ec=0;
  exerciseData.forEach((ex,i)=>{ex.questions.forEach((q,j)=>{const qId=`ex${i+1}q${j+1}`;const sc=scores[qId]||0;if(sc<q.pts*.85&&feedbacks[qId]){ec++;const col=sc===0?'var(--red)':'var(--amber)';eH+=`<div class="err-card"><div class="err-q">${q.text.substring(0,90)}…</div><div class="err-sc" style="color:${col}">${sc}/${q.pts} pts</div><div class="err-fb">${feedbacks[qId]}</div></div>`;}});});
  document.getElementById('resErrors').innerHTML=ec?eH:'<p style="color:var(--green);font-weight:600">🎉 Excellente performance !</p>';
  setTimeout(()=>document.querySelectorAll('.bdown-pct-fill').forEach(el=>{const w=el.style.width;el.style.width='0';setTimeout(()=>el.style.width=w,50);}),100);
  generateComment(scaled,correct,partial,wrong,ns);
  generateAdvice(scaled,ns,feedbacks,scores);
}

// ── 4.14  Commentaire IA ─────────────────────────────────────────
async function generateComment(scaled,correct,partial,wrong,ns){
  const el=document.getElementById('resComment');if(!el)return;
  const mention=getMention(scaled);const total=correct+partial+wrong;
  const weakNotions=Object.entries(ns).filter(([,v])=>Math.round(v.e/v.m*100)<50).map(([n])=>n).slice(0,2).join(', ')||null;
  const prompt=`Tu es un professeur de maths bienveillant. Un élève de 3ème vient d'obtenir ${scaled}/100 (${mention}) à son brevet blanc. ${correct} réponses correctes, ${partial} partielles, ${wrong} incorrectes sur ${total} questions.${weakNotions?' Notions faibles : '+weakNotions+'.':''}
Écris UNE SEULE phrase de commentaire personnalisée, chaleureuse et directe. Maximum 25 mots. En français. Réponds uniquement avec la phrase, sans guillemets.`;
  try{
    const comment=await callAI(prompt,80);
    if(comment)el.innerHTML=`<div class="res-comment-text"><strong>${mention}</strong>${comment}</div>`;
  }catch(e){
    el.innerHTML=`<div class="res-comment-text"><strong>${mention}</strong>Score de ${scaled}/100.</div>`;
  }
}

// ── 4.15  Conseils de révision IA ─────────────────────────────────
async function generateAdvice(scaled,notionScores,feedbacksObj,scoresObj){
  const adviceEl=document.getElementById('resAdvice');if(!adviceEl)return;
  const weak=[],mid=[],strong=[];
  Object.entries(notionScores).forEach(([n,v])=>{const pct=Math.round(v.e/v.m*100);if(pct<40)weak.push({n,pct});else if(pct<70)mid.push({n,pct});else strong.push({n,pct});});
  const errorDetails=exerciseData.flatMap((ex,i)=>ex.questions.map((q,j)=>{const qId=`ex${i+1}q${j+1}`;const sc=scoresObj[qId]||0;return sc<q.pts*.85?{notion:ex.notion,q:q.text.substring(0,80),sc,max:q.pts,fb:feedbacksObj[qId]||''}:null;})).filter(Boolean).slice(0,8);
  const mention=scaled>=90?'Excellent':scaled>=80?'Très Bien':scaled>=70?'Bien':scaled>=60?'Assez Bien':scaled>=50?'Admis':'À retravailler';
  const prompt=`Tu es un professeur de mathématiques bienveillant. Score : ${scaled}/100 (${mention}).
Notions maîtrisées : ${strong.map(x=>x.n).join(', ')||'aucune'}
Notions à consolider : ${mid.map(x=>x.n).join(', ')||'aucune'}
Notions faibles : ${weak.map(x=>x.n).join(', ')||'aucune'}
Erreurs : ${errorDetails.map(e=>'['+e.notion+'] '+e.q).join(' | ')||'aucune'}
Réponds UNIQUEMENT en JSON valide sans markdown :
{"encouragement":"<1 phrase>","priorites":[{"notion":"<nom>","priorite":"haute|moyenne|faible","conseil":"<conseil>","tag":"<mot-clé>"}],"methodologie":"<conseil méthode>","objectif":"<objectif concret>"}
Maximum 3 priorités. En français.`;
  try{
    const raw=await callAI(prompt,600);
    const advice=JSON.parse(raw.replace(/```json|```/g,'').trim());
    const prioColors={haute:'red',moyenne:'amber',faible:'green'};
    const prioLabels={haute:'Priorité haute',moyenne:'À consolider',faible:'Presque acquis'};
    let html='';
    if(advice.priorites?.length){
      html+='<div class="advice-section"><div class="advice-section-title">Priorités de révision</div>';
      advice.priorites.forEach(p=>{const col=prioColors[p.priorite]||'blue';const cls=p.priorite==='haute'?'high':p.priorite==='moyenne'?'mid':'low';html+=`<div class="advice-item priority-${cls}"><span class="advice-tag ${col}">${prioLabels[p.priorite]||p.priorite}${p.tag?' · '+p.tag:''}</span><div><strong style="font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.3px">${p.notion}</strong></div><div style="margin-top:4px;font-size:13px">${p.conseil}</div></div>`;});
      html+='</div>';
    }
    if(advice.methodologie)html+=`<div class="advice-section"><div class="advice-section-title">Méthode de travail</div><div class="advice-item">${advice.methodologie}</div></div>`;
    if(advice.objectif)html+=`<div class="advice-section"><div class="advice-section-title">Prochain objectif</div><div class="advice-item priority-low" style="border-left-color:var(--k)">${advice.objectif}</div></div>`;
    if(advice.encouragement)html+=`<div class="advice-encouragement">${advice.encouragement}</div>`;
    adviceEl.innerHTML=html||'<p style="color:var(--ink4);font-style:italic;font-size:13px">Conseils non disponibles.</p>';
  }catch(e){
    adviceEl.innerHTML='<p style="color:var(--ink4);font-style:italic;font-size:13px">Analyse temporairement indisponible.</p>';
  }
}

// ── 4.16  Persistance des sessions ───────────────────────────────
async function saveSession(scaled){
  const s={date:new Date().toLocaleDateString('fr-FR'),ts:Date.now(),score:scaled,notions:[...new Set(exerciseData.map(e=>e.notion))],duration:selMin,comment:'',errors:[]};
  exerciseData.forEach((ex,i)=>{ex.questions.forEach((q,j)=>{const qId=`ex${i+1}q${j+1}`;const sc=scores[qId]||0;if(sc<q.pts*.85)s.errors.push({notion:ex.notion,pts:sc,maxPts:q.pts,fb:feedbacks[qId]||'',qText:q.text.substring(0,80)});});});
  try{
    let sessions=[];
    try{const d=await window.storage.get('sessions');if(d)sessions=JSON.parse(d.value);}catch(e){}
    sessions.push(s);if(sessions.length>100)sessions.splice(0,sessions.length-100);
    await window.storage.set('sessions',JSON.stringify(sessions));
  }catch(e){}
}

// ── 4.17  Tableau de bord ─────────────────────────────────────────
async function renderDash(){
  let sessions=[];
  try{const d=await window.storage.get('sessions');if(d?.value)sessions=JSON.parse(d.value);}catch(e){}
  if(!sessions.length){
    document.getElementById('dashStats').innerHTML='';
    document.getElementById('chartSection').style.display='none';
    document.getElementById('dashGrid').innerHTML=`<div class="empty-state" style="grid-column:1/-1;padding:60px 20px;text-align:center"><div style="font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:var(--ink5);margin-bottom:16px">Aucune session</div><p style="color:var(--ink4);font-size:14px;margin-bottom:24px">Effectuez votre premier brevet blanc pour voir vos statistiques.</p><button class="btn btn-primary" onclick="go('screen-setup','navSetup')">Commencer un brevet</button></div>`;
    return;
  }
  const avg=Math.round(sessions.reduce((s,x)=>s+x.score,0)/sessions.length);
  const best=Math.max(...sessions.map(x=>x.score));
  const last=sessions[sessions.length-1].score;
  const trend=sessions.length>1?last-sessions[sessions.length-2].score:0;
  const trendStr=trend>0?`+${trend} pts`:trend<0?`${trend} pts`:'stable';
  const trendCol=trend>0?'var(--green)':trend<0?'var(--red)':'var(--ink4)';
  const lastMention=getMention(last);
  const mentionCol=last>=80?'var(--green)':last>=60?'var(--amber)':'var(--red)';
  document.getElementById('dashStats').innerHTML=`
    <div class="stat-card"><div class="sc-val blue">${sessions.length}</div><div class="sc-lbl">Brevets effectués</div></div>
    <div class="stat-card"><div class="sc-val green">${avg}<span style="font-size:16px;font-weight:600;color:var(--ink4)">/100</span></div><div class="sc-lbl">Moyenne générale</div></div>
    <div class="stat-card"><div class="sc-val gold">${best}<span style="font-size:16px;font-weight:600;color:var(--ink4)">/100</span></div><div class="sc-lbl">Meilleur score</div></div>
    <div class="stat-card"><div class="sc-val" style="font-size:22px;color:${trendCol}">${trendStr}</div><div class="sc-lbl">Évolution</div></div>
    <div class="stat-card"><div class="sc-val" style="font-size:18px;color:${mentionCol}">${lastMention}</div><div class="sc-lbl">Dernier résultat</div></div>`;
  if(sessions.length>=2){
    document.getElementById('chartSection').style.display='block';
    const recent=sessions.slice(-12);
    document.getElementById('chartWrap').innerHTML=recent.map(s=>{const h=Math.max(4,Math.round(s.score));const col=s.score>=80?'var(--green)':s.score>=60?'var(--amber)':'var(--red)';return `<div class="chart-col"><div class="chart-val">${s.score}</div><div class="chart-bar" style="height:${h}px;background:${col};opacity:.8"></div><div class="chart-lbl">${s.date.split('/').slice(0,2).join('/')}</div></div>`;}).join('');
  } else {document.getElementById('chartSection').style.display='none';}
  let hH=`<table class="hist-table"><thead><tr><th>Date</th><th>Score</th><th>Mention</th><th>Commentaire</th></tr></thead><tbody>`;
  [...sessions].reverse().slice(0,15).forEach(s=>{
    const mention=getMention(s.score);const col=s.score>=80?'var(--green)':s.score>=60?'var(--amber)':'var(--red)';
    hH+=`<tr><td style="font-size:12px;white-space:nowrap">${s.date}</td><td style="white-space:nowrap"><strong style="font-size:15px;font-weight:900;color:${col}">${s.score}/100</strong></td><td style="white-space:nowrap"><span style="font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:${col}">${mention}</span></td><td style="font-size:12px;color:var(--ink3);font-style:italic;line-height:1.4;max-width:220px">${s.comment||'<span style="color:var(--ink5)">—</span>'}</td></tr>`;
  });
  hH+='</tbody></table>';
  const nErrs={};
  sessions.forEach(s=>{(s.errors||[]).forEach(e=>{if(!nErrs[e.notion])nErrs[e.notion]=0;nErrs[e.notion]++;});});
  const sorted=Object.entries(nErrs).sort((a,b)=>b[1]-a[1]);
  let wH='';
  if(!sorted.length){wH='<p style="color:var(--green);font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase">Aucun point faible identifié</p>';}
  else{const mx=Math.max(...sorted.map(([,v])=>v),1);sorted.slice(0,8).forEach(([n,v])=>{const pct=Math.round(v/mx*100);const col=pct>60?'var(--red)':pct>30?'var(--amber)':'var(--green)';wH+=`<div class="nb-row"><div class="nb-label">${n}</div><div class="nb-track"><div class="nb-fill" style="width:0%;background:${col}" data-w="${pct}%"></div></div><div class="nb-count">${v}</div></div>`;});}
  document.getElementById('dashGrid').innerHTML=`
    <div><div class="res-col-title" style="font-size:11px;font-weight:800;letter-spacing:3px;text-transform:uppercase;color:var(--k);padding-bottom:10px;margin-bottom:16px;border-bottom:2px solid var(--ink)">Historique des sessions</div>${hH}</div>
    <div><div class="res-col-title" style="font-size:11px;font-weight:800;letter-spacing:3px;text-transform:uppercase;color:var(--k);padding-bottom:10px;margin-bottom:16px;border-bottom:2px solid var(--ink)">Points faibles par notion</div><div id="weakNotions">${wH}</div></div>
    <div class="dash-advice-col"><div class="res-col-title" style="font-size:11px;font-weight:800;letter-spacing:3px;text-transform:uppercase;color:var(--k);padding-bottom:10px;margin-bottom:16px;border-bottom:2px solid var(--ink)">Conseils pour progresser</div><div id="dashAdvice"><div class="advice-loading"><span class="mini-sp" style="width:14px;height:14px;border-width:2px"></span><span>Analyse en cours…</span></div></div></div>`;
  setTimeout(()=>{document.querySelectorAll('.nb-fill[data-w]').forEach(el=>{const w=el.getAttribute('data-w');setTimeout(()=>el.style.width=w,50);});},100);
  generateDashAdvice(sessions,avg,best,sorted);
}

async function generateDashAdvice(sessions,avg,best,weakNotions){
  const adviceEl=document.getElementById('dashAdvice');if(!adviceEl)return;
  const last=sessions[sessions.length-1];
  const trend=sessions.length>1?last.score-sessions[sessions.length-2].score:0;
  const scores_list=sessions.slice(-5).map(s=>s.score).join(', ');
  const top3weak=weakNotions.slice(0,3).map(([n,v])=>n+'('+v+' erreurs)').join(', ')||'aucune';
  const prompt=`Tu es un professeur de maths bienveillant. Profil élève de 3ème :
- Brevets effectués : ${sessions.length}
- Scores récents : ${scores_list}
- Moyenne : ${avg}/100
- Meilleur score : ${best}/100
- Tendance : ${trend>0?'+'+trend+' pts':trend<0?trend+' pts':'stable'}
- Notions faibles : ${top3weak}
Génère des conseils. Réponds UNIQUEMENT en JSON valide :
{"bilan":"<1 phrase>","conseils":[{"titre":"<court>","texte":"<2-3 phrases>","priorite":"haute|normale"}],"plan":"<plan 2-3 phrases>"}
Maximum 3 conseils. En français.`;
  try{
    const raw=await callAI(prompt,500);
    const advice=JSON.parse(raw.replace(/```json|```/g,'').trim());
    let html='';
    if(advice.bilan)html+=`<div style="font-size:13px;color:var(--ink2);padding:10px 14px;background:var(--k-bg);border-left:3px solid var(--k);margin-bottom:16px;line-height:1.6">${advice.bilan}</div>`;
    (advice.conseils||[]).forEach(c=>{const border=c.priorite==='haute'?'var(--red)':'var(--k)';html+=`<div class="advice-item" style="border-left-color:${border};margin-bottom:10px"><div style="font-size:11px;font-weight:800;letter-spacing:.5px;text-transform:uppercase;margin-bottom:4px;color:var(--ink3)">${c.titre}</div><div style="font-size:13px;line-height:1.6;color:var(--ink2)">${c.texte}</div></div>`;});
    if(advice.plan)html+=`<div style="margin-top:14px;padding:12px 14px;background:var(--ink);font-size:13px;font-weight:600;color:#fff;line-height:1.55;letter-spacing:.2px">${advice.plan}</div>`;
    adviceEl.innerHTML=html||'<p style="color:var(--ink4);font-size:13px;font-style:italic">Conseils non disponibles.</p>';
  }catch(e){
    adviceEl.innerHTML='<p style="color:var(--ink4);font-size:13px;font-style:italic">Analyse temporairement indisponible.</p>';
  }
}

// ── 4.18  Système audio ───────────────────────────────────────────
let _ac = null;
function getAC(){if(!_ac)_ac=new(window.AudioContext||window.webkitAudioContext)();return _ac;}

function note(freq, dur, gain, delay, curve){
  try{
    const ac=getAC(), t=ac.currentTime+(delay||0);
    const osc=ac.createOscillator(), vol=ac.createGain();
    osc.type='sine'; osc.connect(vol); vol.connect(ac.destination);
    osc.frequency.setValueAtTime(freq, t);
    vol.gain.setValueAtTime(0, t);
    vol.gain.linearRampToValueAtTime(gain||0.12, t+0.006);
    if(curve==='hold'){
      vol.gain.setValueAtTime(gain||0.12, t+dur*0.6);
      vol.gain.linearRampToValueAtTime(0, t+dur);
    } else {
      vol.gain.exponentialRampToValueAtTime(0.0001, t+dur);
    }
    osc.start(t); osc.stop(t+dur+0.04);
  }catch(e){}
}

function soundValidate(){ note(880, 0.07, 0.08); }
function soundCorrect(){ note(587, 0.35, 0.12, 0.00, 'hold'); note(740, 0.40, 0.11, 0.07, 'hold'); }
function soundWrong(){ note(392, 0.20, 0.10, 0.00); note(370, 0.25, 0.08, 0.10); }
function soundQCMCorrect(){ note(659, 0.28, 0.12, 0, 'hold'); }
function soundQCMWrong(){ note(370, 0.18, 0.09); }
