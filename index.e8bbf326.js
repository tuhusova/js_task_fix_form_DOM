document.querySelectorAll('form input[type="text"], form input[type="password"]').forEach(function(e){var t=document.createElement("label");t.className="field-label",t.setAttribute("for",e.id),t.textContent=e.name.charAt(0).toUpperCase()+e.name.slice(1),e.placeholder=e.name.charAt(0).toUpperCase()+e.name.slice(1),e.parentElement.insertBefore(t,e)});
//# sourceMappingURL=index.e8bbf326.js.map
