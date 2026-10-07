(function(){
  function swap(value){
    return String(value)
      .replace(/\bWoodoo\b/g,'Vellomo')
      .replace(/\bwoodoo\b/g,'vellomo')
      .replace(/(^|[^$])\bWOODOO\b/g,'$1VELLOMO');
  }
  function applyBrand(root){
    if(root.nodeType===Node.TEXT_NODE){const next=swap(root.nodeValue);if(next!==root.nodeValue)root.nodeValue=next;return}
    if(root.nodeType!==Node.ELEMENT_NODE&&root.nodeType!==Node.DOCUMENT_NODE)return;
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);let node;
    while((node=walker.nextNode())){if(/^(SCRIPT|STYLE)$/i.test(node.parentElement?.tagName||''))continue;const next=swap(node.nodeValue);if(next!==node.nodeValue)node.nodeValue=next}
    if(root.querySelectorAll)root.querySelectorAll('[alt],[title]').forEach(element=>{for(const name of ['alt','title'])if(element.hasAttribute(name))element.setAttribute(name,swap(element.getAttribute(name)))})
    document.title='Vellomo';
  }
  function start(){applyBrand(document);new MutationObserver(records=>records.forEach(record=>record.addedNodes.forEach(applyBrand))).observe(document.body,{childList:true,subtree:true})}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
})();
