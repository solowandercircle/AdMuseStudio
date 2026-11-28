const allowed = new Set(['https://www.admusestudio.in','https://admusestudio.in']);
export default { async fetch(request, env) {
 const origin=request.headers.get('Origin')||'';
 const headers={'Content-Type':'application/json','Cache-Control':'no-store','Vary':'Origin'};
 if(!allowed.has(origin))return new Response(JSON.stringify({error:'Origin not allowed'}),{status:403,headers});
 Object.assign(headers,{'Access-Control-Allow-Origin':origin,'Access-Control-Allow-Methods':'GET, POST, OPTIONS','Access-Control-Allow-Headers':'Content-Type'});
 const reply=(body,status=200)=>new Response(JSON.stringify(body),{status,headers});
 if(request.method==='OPTIONS')return new Response(null,{status:204,headers});
 if(new URL(request.url).pathname!=='/visits')return reply({error:'Not found'},404);
 if(!['GET','POST'].includes(request.method))return reply({error:'Method not allowed'},405);
 try {
  if(request.method==='POST'){
   const text=await request.text();if(text.length>200)return reply({error:'Invalid request'},400);
   let body;try{body=JSON.parse(text)}catch{return reply({error:'Invalid JSON'},400)}
   if(typeof body?.token!=='string'||!/^[a-f0-9]{32}$/.test(body.token))return reply({error:'Invalid token'},400);
   const day=new Date().toISOString().slice(0,10);
   await env.DB.prepare('INSERT OR IGNORE INTO visit_days(day, token) VALUES (?, ?)').bind(day,body.token).run();
  }
  const result=await env.DB.prepare('SELECT visits FROM totals WHERE id=1').first();
  if(!result)return reply({error:'Database not initialised'},503);
  return reply({visits:result.visits});
 }catch{return reply({error:'Counter temporarily unavailable'},503)}
}};
