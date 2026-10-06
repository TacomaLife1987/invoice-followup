(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`invoiceFollowupPro`,t=`invoiceFollowupHistory`,n=`invoiceFollowupTemplates`,r=10;function i(){return localStorage.getItem(e)===`1`}function a(){localStorage.setItem(e,`1`)}function o(e){let t=Number(e);return Number.isNaN(t)?`$0.00`:new Intl.NumberFormat(`en-US`,{style:`currency`,currency:`USD`}).format(t)}function s(e){return e?new Date(e+`T12:00:00`).toLocaleDateString(`en-US`,{year:`numeric`,month:`long`,day:`numeric`}):``}function c(e){if(!e)return 0;let t=new Date(e+`T12:00:00`),n=new Date;n.setHours(12,0,0,0);let r=Math.floor((n-t)/864e5);return Math.max(0,r)}function l(e){return String(e).replace(/&/g,`&`).replace(/</g,`<`).replace(/>/g,`>`).replace(/"/g,`"`)}function u(e){let{clientName:t,yourName:n,invoiceNumber:r,amountDue:i,dueDate:a,daysOverdue:l}=e,u=o(i),d=s(a),f=l!==``&&l!=null?Number(l):c(a),p=f===0?`recently due`:f===1?`1 day overdue`:`${f} days overdue`,m=t.trim().split(/\s+/)[0]||t;return[{id:`soft`,badge:`Soft`,badgeClass:`soft`,name:`Soft reminder`,subject:`Quick note on invoice ${r}`,body:`Hi ${m},

I hope you're doing well. I wanted to gently follow up on invoice ${r} for ${u}, which was due on ${d} (${p}).

I know things can slip through the cracks — if you've already sent payment, feel free to ignore this and thank you! If not, I'd really appreciate it if you could take care of it when you have a moment.

Happy to resend the invoice or answer any questions. Just reply to this email.

Thanks so much,
${n}`},{id:`firm`,badge:`Firm`,badgeClass:`firm`,name:`Firm follow-up`,subject:`Follow-up: Invoice ${r} — ${u} outstanding`,body:`Hi ${m},

I'm following up again regarding invoice ${r} for ${u}, originally due on ${d}. It is now ${p}.

I'd appreciate it if you could arrange payment at your earliest convenience. If there's a reason for the delay — a missing PO, a billing contact change, or something else — please let me know so we can sort it out quickly.

You can reply here if you need the invoice resent or have any questions about the balance.

Looking forward to resolving this soon.

Best regards,
${n}`},{id:`final`,badge:`Final`,badgeClass:`final`,name:`Final notice`,subject:`Final notice: Invoice ${r} — payment required`,body:`Hi ${m},

This is a final notice regarding outstanding invoice ${r} for ${u}, due on ${d} and currently ${p}.

I've reached out previously and have not yet received payment or a response. Please remit the full balance of ${u} within 7 days of this message.

If payment has already been sent, please share the confirmation details so I can update my records. If there is a dispute or issue preventing payment, contact me immediately so we can address it.

I value our working relationship and would prefer to resolve this directly. If I don't hear back, I may need to explore additional collection options.

Regards,
${n}`}]}function d(e,t=`success`){let n=document.getElementById(`toast`);n.textContent=e,n.classList.remove(`toast-success`,`toast-info`),n.classList.add(t=