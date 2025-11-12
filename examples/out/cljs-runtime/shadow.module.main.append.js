
shadow.cljs.devtools.client.env.module_loaded('main');

try { examples.core.load_page(); } catch (e) { console.error("An error occurred when calling (examples.core/load-page)"); throw(e); }